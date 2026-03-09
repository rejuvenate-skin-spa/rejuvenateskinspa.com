import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { getSquareClient } from "@/lib/square";

function requestId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

const ContactSchema = z.object({
  name: z.string().min(1).max(80),
  email: z.string().trim().email("Please enter a valid email address.").max(120),
  phone: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(5).max(2000),
  service_of_interest: z.string().max(120).optional(),
  additional_information: z.string().max(2000).optional(),

  contact_hp: z.string().optional().or(z.literal("")),
  startedAt: z.number().int().optional(),
  turnstileToken: z.string(),
});

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (!xff) return "unknown";
  return xff.split(",")[0]?.trim() || "unknown";
}

function countUrls(text: string) {
  const matches = text.match(/https?:\/\/\S+|www\.\S+/gi);
  return matches ? matches.length : 0;
}

const isProduction = process.env.NODE_ENV === "production";
const GENERIC_ERROR = "Unable to submit. Please try again.";

function jsonError(message: string, status: number, code?: string) {
  const body: { ok: false; error: string; code?: string } = { ok: false, error: message };
  if (code) body.code = code;
  return NextResponse.json(body, { status });
}

function spamReject(reason: string, reqId: string) {
  console.error(`[contact] reqId=${reqId} spam/block: ${reason}`);
  if (isProduction) {
    return NextResponse.json({ ok: false, error: GENERIC_ERROR, code: "SPAM" }, { status: 400 });
  }
  return NextResponse.json({ ok: false, error: reason, code: "SPAM" }, { status: 400 });
}

const PROD_HOST = "www.rejuvenateskinspa.com";

function hostFromReferer(referer: string): string | null {
  try {
    const u = new URL(referer);
    return u.hostname || null;
  } catch {
    return null;
  }
}

function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get("origin")?.trim() ?? "";
  const hasValidOrigin = origin && origin !== "null";
  if (hasValidOrigin) {
    return (
      origin.includes("https://www.rejuvenateskinspa.com") ||
      origin.includes("http://localhost") ||
      origin.includes("http://127.0.0.1")
    );
  }
  const hostHeader = req.headers.get("host")?.trim() ?? "";
  const hostname = hostHeader ? hostHeader.split(":")[0] : "";
  const referer = req.headers.get("referer")?.trim() ?? "";
  const refererHost = referer ? hostFromReferer(referer) : null;
  const isProd = process.env.NODE_ENV === "production";
  if (isProd) {
    return hostname === PROD_HOST || refererHost === PROD_HOST;
  }
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    refererHost === "localhost" ||
    refererHost === "127.0.0.1"
  );
}

export async function POST(req: Request) {
  const reqId = requestId();
  try {
    if (!isAllowedOrigin(req)) {
      console.error(`[contact] reqId=${reqId} origin rejected`);
      return jsonError("Invalid origin.", 403, "ORIGIN");
    }

    const ip = getClientIp(req);
    const body = await req.json();

    if (body && typeof body === "object" && "website" in body) {
      console.error(`[contact] reqId=${reqId} forbidden key in payload: website`);
      delete (body as Record<string, unknown>).website;
    }

    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors;
      const detail = Object.keys(first).length ? Object.keys(first)[0] : "validation";
      console.error(`[contact] reqId=${reqId} validation failed: ${detail}`);
      return jsonError("Invalid form data.", 400, "VALIDATION");
    }

    const data = parsed.data;
    const hasToken = (data.turnstileToken ?? "").trim().length > 0;

    if (data.contact_hp && data.contact_hp.trim().length > 0) {
      console.error(`[contact] reqId=${reqId} honeypot field tripped: contact_hp`);
      return spamReject("Honeypot filled", reqId);
    }

    const MIN_SUBMIT_MS = 3000;
    if (!data.startedAt || Date.now() - data.startedAt < MIN_SUBMIT_MS) {
      return spamReject("Timing gate failed", reqId);
    }

    if (isProduction) {
      if (!process.env.TURNSTILE_SECRET_KEY) {
        console.error(`[contact] reqId=${reqId} TURNSTILE_SECRET_KEY missing`);
        return jsonError(GENERIC_ERROR, 500, "CONFIG");
      }
      if (!hasToken) {
        return spamReject("Missing security token", reqId);
      }
    }

    if (countUrls(data.message) > 0) {
      return spamReject("URLs in message", reqId);
    }

    const digits = (data.phone ?? "").replace(/\D/g, "");
    let normalizedPhone: string;
    if (digits.length === 10) {
      normalizedPhone = "+1" + digits;
    } else if (digits.length === 11 && digits.startsWith("1")) {
      normalizedPhone = "+1" + digits.slice(1);
    } else {
      return jsonError("Please enter a valid phone number.", 400);
    }

    if (isProduction || hasToken) {
      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY || "",
          response: data.turnstileToken,
          remoteip: ip !== "unknown" ? ip : "",
        }),
      });

      const verify = (await verifyRes.json()) as { success?: boolean; "error-codes"?: string[] };
      if (!verify.success) {
        const codes = verify["error-codes"] ?? [];
        console.error(`[contact] reqId=${reqId} Turnstile failed error-codes=${codes.join(",")}`);
        const msg =
          isProduction
            ? "Security check failed or expired. Please refresh the page and try again."
            : `Bot check failed. (${codes.join(", ") || "unknown"})`;
        return jsonError(msg, 400, "TURNSTILE_FAILED");
      }
    }

    // --- Square Customers API ---

    const nameParts = data.name.trim().split(/\s+/);
    const givenName = nameParts[0] || data.name.trim();
    const familyName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : undefined;
    const emailNormalized = data.email.trim().toLowerCase();

    const rawMessage = data.additional_information?.trim() || "";
    const noteLines: string[] = [];
    if (data.service_of_interest) noteLines.push(`Service: ${data.service_of_interest}`);
    if (rawMessage) noteLines.push(`Message: ${rawMessage}`);
    noteLines.push(`Date: ${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`);
    const note = noteLines.join("\n");

    const square = getSquareClient();

    // Search for existing customer by email
    let existingCustomerId: string | undefined;
    try {
      const searchResult = await square.customers.search({
        query: {
          filter: {
            emailAddress: { exact: emailNormalized },
          },
        },
      });
      if (searchResult.customers && searchResult.customers.length > 0) {
        existingCustomerId = searchResult.customers[0].id;
      }
    } catch (searchErr) {
      console.error(`[contact] reqId=${reqId} Square customer search failed:`, searchErr);
    }

    if (existingCustomerId) {
      try {
        const existing = await square.customers.get({ customerId: existingCustomerId });
        const prevNote = existing.customer?.note ?? "";
        const separator = prevNote ? "\n---\n" : "";
        const updatedNote = prevNote + separator + note;
        try {
          await square.customers.update({ customerId: existingCustomerId, phoneNumber: normalizedPhone, note: updatedNote });
        } catch {
          await square.customers.update({ customerId: existingCustomerId, note: updatedNote });
        }
        console.log(`[contact] reqId=${reqId} updated Square customer=${existingCustomerId}`);
      } catch (updateErr) {
        console.error(`[contact] reqId=${reqId} Square customer update failed:`, updateErr);
        return jsonError(
          "Message could not be sent. Please call us at (480) 204-9366.",
          502,
          "SQUARE_FAILED"
        );
      }
    } else {
      try {
        const idempotencyKey = `contact-${emailNormalized}-${Date.now()}`;
        const payload: Record<string, string | undefined> = {
          idempotencyKey,
          givenName,
          familyName,
          emailAddress: emailNormalized,
          phoneNumber: normalizedPhone,
          note,
          referenceId: "rejuvenateskinspa.com",
        };
        let createResult;
        try {
          createResult = await square.customers.create(payload);
        } catch {
          delete payload.phoneNumber;
          payload.idempotencyKey = `contact-${emailNormalized}-${Date.now()}`;
          createResult = await square.customers.create(payload);
        }
        console.log(`[contact] reqId=${reqId} created Square customer=${createResult.customer?.id}`);
      } catch (createErr) {
        console.error(`[contact] reqId=${reqId} Square customer create failed:`, createErr);
        return jsonError(
          "Message could not be sent. Please call us at (480) 204-9366.",
          502,
          "SQUARE_FAILED"
        );
      }
    }

    // --- Email notifications (fire-and-forget — don't block the response) ---
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const fromAddress = process.env.RESEND_FROM_EMAIL || "Rejuvenate Skin Spa <onboarding@resend.dev>";
      const notifyEmail = process.env.NOTIFY_EMAIL || "info@rejuvenateskinspa.com";
      const serviceName = data.service_of_interest || "Not specified";

      resend.emails.send({
        from: fromAddress,
        to: notifyEmail,
        subject: `New inquiry from ${data.name.trim()}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
            <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${data.name.trim()}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;"><a href="mailto:${emailNormalized}">${emailNormalized}</a></td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">Phone</td><td style="padding:6px 12px;"><a href="tel:${normalizedPhone}">${normalizedPhone}</a></td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">Service</td><td style="padding:6px 12px;">${serviceName}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">Message</td><td style="padding:6px 12px;">${rawMessage || "(No message)"}</td></tr>
          </table>
        `.trim(),
      }).catch((err) => {
        console.error(`[contact] reqId=${reqId} notification email failed:`, err);
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    console.error(`[contact] reqId=${reqId} exception: ${message}`);
    return jsonError("Unexpected error.", 500, "ERROR");
  }
}
