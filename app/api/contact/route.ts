// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1).max(80),
  email: z.string().email().max(120).optional().or(z.literal("")),
  phone: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(5).max(2000),
  service_of_interest: z.string().max(120).optional(),
  additional_information: z.string().max(2000).optional(),

  // Anti-spam fields
  website: z.string().optional().or(z.literal("")),       // honeypot
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

function allowTurnstileBypass(origin: string) {
  return (
    process.env.NODE_ENV !== "production" ||
    origin.startsWith("http://localhost") ||
    origin.startsWith("http://127.0.0.1")
  );
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
  try {
    if (!isAllowedOrigin(req)) {
      return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
    }
    const origin = getEffectiveOrigin(req);

    const ip = getClientIp(req);
    const body = await req.json();

    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    const data = parsed.data;
    const bypass = allowTurnstileBypass(origin);
    const hasToken = (data.turnstileToken ?? "").trim().length > 0;

    // Production: require Turnstile config and token
    if (process.env.NODE_ENV === "production") {
      if (!process.env.TURNSTILE_SECRET_KEY) {
        return NextResponse.json({ error: "Turnstile not configured" }, { status: 500 });
      }
      if (!bypass && !hasToken) {
        return NextResponse.json({ error: "Missing security token" }, { status: 400 });
      }
    }

    // Honeypot: if filled, reject
    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    // Time trap: too fast = likely bot
    if (!data.startedAt || Date.now() - data.startedAt < 3000) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    // Simple URL rule: most legit spa inquiries have 0 URLs
    if (countUrls(data.message) > 0) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    // Turnstile verification (skip only when bypass allowed and no token)
    if (!bypass || hasToken) {
      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY || "",
          response: data.turnstileToken,
          remoteip: ip !== "unknown" ? ip : "",
        }),
      });

      const verify = await verifyRes.json();
      if (!verify.success) {
        return NextResponse.json({ error: "Bot check failed." }, { status: 400 });
      }
    }

    // Forward to GoHighLevel webhook (now private, server-side)
    const ghlUrl = process.env.GOHIGHLEVEL_WEBHOOK_URL;
    if (!ghlUrl) {
      return NextResponse.json({ error: "Server misconfigured." }, { status: 500 });
    }

    const ghlPayload: Record<string, string> = {
      name: data.name,
      email: data.email || "",
      phone: data.phone || "",
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
      return NextResponse.json({ error: "Failed to submit." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
