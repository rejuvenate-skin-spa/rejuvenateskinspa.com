// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";

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

  // Anti-spam fields
  contact_hp: z.string().optional().or(z.literal("")),     // honeypot (name avoids autofill)
  startedAt: z.number().int().optional(),                 // time trap (ms)
  turnstileToken: z.string(),                             // required in prod; empty allowed for local bypass
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

function jsonError(
  message: string,
  status: number,
  code?: string
) {
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
    // Current allowlist when Origin is present
    return (
      origin.includes("https://www.rejuvenateskinspa.com") ||
      origin.includes("http://localhost") ||
      origin.includes("http://127.0.0.1")
    );
  }
  // Fallback when Origin missing/empty/"null": check Host and Referer
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

function getEffectiveOrigin(req: Request): string {
  const origin = req.headers.get("origin")?.trim() ?? "";
  if (origin && origin !== "null") return origin;
  const host = req.headers.get("host")?.trim() ?? "";
  const referer = req.headers.get("referer")?.trim() ?? "";
  if (referer) {
    try {
      const u = new URL(referer);
      return u.origin;
    } catch {
      // fall through
    }
  }
  const hostname = host ? host.split(":")[0] : "";
  if (!hostname) return "";
  const scheme =
    hostname === "localhost" || hostname === "127.0.0.1" ? "http" : "https";
  return `${scheme}://${host}`;
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

    // Forbidden: "website" must never be in payload – browser autofill fills it and triggers honeypot false positives. Strip and log if present.
    if (body && typeof body === "object" && "website" in body) {
      console.error(`[contact] reqId=${reqId} forbidden key in payload: website (autofill triggers honeypot)`);
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

    // Always enforce honeypot: contact_hp must be empty (field name avoids browser/password-manager autofill)
    if (data.contact_hp && data.contact_hp.trim().length > 0) {
      console.error(`[contact] reqId=${reqId} honeypot field tripped: contact_hp`);
      return spamReject("Honeypot filled", reqId);
    }

    // Always enforce timing gate: form must be open long enough
    const MIN_SUBMIT_MS = 3000;
    if (!data.startedAt || Date.now() - data.startedAt < MIN_SUBMIT_MS) {
      return spamReject("Timing gate failed", reqId);
    }

    // Production: require non-empty turnstile token
    if (isProduction) {
      if (!process.env.TURNSTILE_SECRET_KEY) {
        console.error(`[contact] reqId=${reqId} TURNSTILE_SECRET_KEY missing`);
        return jsonError(GENERIC_ERROR, 500, "CONFIG");
      }
      if (!hasToken) {
        return spamReject("Missing security token", reqId);
      }
    }

    // Simple URL rule: most legit spa inquiries have 0 URLs
    if (countUrls(data.message) > 0) {
      return spamReject("URLs in message", reqId);
    }

    // Normalize US phone to E.164: 10 digits -> +1XXXXXXXXXX; 11 digits starting with 1 -> same
    const digits = (data.phone ?? "").replace(/\D/g, "");
    let normalizedPhone: string;
    if (digits.length === 10) {
      normalizedPhone = "+1" + digits;
    } else if (digits.length === 11 && digits.startsWith("1")) {
      normalizedPhone = "+1" + digits.slice(1);
    } else {
      return jsonError("Please enter a valid phone number.", 400);
    }

    // Turnstile: production always verify; development verify only when token present (allow empty for curl)
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

    // Forward to GoHighLevel webhook (now private, server-side)
    const ghlUrl = process.env.GOHIGHLEVEL_WEBHOOK_URL;
    if (!ghlUrl) {
      console.error(`[contact] reqId=${reqId} GOHIGHLEVEL_WEBHOOK_URL missing`);
      return jsonError(GENERIC_ERROR, 500, "CONFIG");
    }

    // Do not forward honeypot (contact_hp) or any "website" field to GoHighLevel.
    const ghlPayload: Record<string, string> = {
      name: data.name,
      email: data.email.trim().toLowerCase(),
      phone: normalizedPhone,
      message: data.message,
      source: "rejuvenateskinspa.com",
    };
    if (data.service_of_interest) ghlPayload.service_of_interest = data.service_of_interest;
    if (data.additional_information) ghlPayload.additional_information = data.additional_information;

    const ghlRes = await fetch(ghlUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ghlPayload),
    });

    if (!ghlRes.ok) {
      const snippet = (await ghlRes.text()).slice(0, 200).replace(/\s+/g, " ");
      console.error(`[contact] reqId=${reqId} webhook failed status=${ghlRes.status} body=${snippet}`);
      return jsonError(
        "Message could not be sent. Please call us at (480) 204-9366.",
        502,
        "WEBHOOK_FAILED"
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    console.error(`[contact] reqId=${reqId} exception: ${message}`);
    return jsonError("Unexpected error.", 500, "ERROR");
  }
}
