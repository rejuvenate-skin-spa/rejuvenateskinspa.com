import { NextResponse } from "next/server";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rejuvenateskinspa.com";

export async function GET() {
  const body = [
    "# Rejuvenate Skin Spa",
    "",
    "Official website for Rejuvenate Skin Spa in Queen Creek, Arizona.",
    "",
    "Primary services:",
    "- Microneedling",
    "- Chemical Peels",
    "- Red Light Therapy",
    "- Dermaplaning",
    "- Plasma Skin Tightening",
    "",
    "Key pages:",
    `${SITE_URL}/`,
    `${SITE_URL}/microneedling`,
    `${SITE_URL}/chemical-peels`,
    `${SITE_URL}/spa-services`,
    "",
    "Location:",
    "Queen Creek, Arizona",
    "",
    "Crawling guidance:",
    "- This site represents a single physical location",
    "- Content is human-authored and medically reviewed",
    "- Canonical domain is rejuvenateskinspa.com",
  ].join("\n");

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
