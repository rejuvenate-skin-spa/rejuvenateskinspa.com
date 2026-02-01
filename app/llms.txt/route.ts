import { NextResponse } from "next/server";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rejuvenateskinspa.com";

/**
 * All public routes organized by section.
 * This list is manually maintained to match app/sitemap.ts.
 * When adding new pages, update both files.
 */
const routes = {
  primary: [
    "/",
    "/about-us",
    "/contact",
  ],
  serviceHubs: [
    "/spa-services",
    "/microneedling",
    "/chemical-peels",
    "/enzyme-peel-facial",
    "/plexr-plasma-skin-tightening",
  ],
  spaServices: [
    "/spa-services/dermaplaning-treatment",
    "/spa-services/eyebrow-lamination-treatment",
    "/spa-services/microblading-treatment",
    "/spa-services/red-light-therapy-treatment",
  ],
  microneedling: [
    "/microneedling/traditional-microneedling",
    "/microneedling/sqt-bio-microneedling",
    "/microneedling/plasma-microneedling",
  ],
  chemicalPeels: [
    "/chemical-peels/biorepeel-body-peels",
    "/chemical-peels/biorepeel-chemical-peels",
    "/chemical-peels/biorepeel-facial-peels",
    "/chemical-peels/glycolic-acid-peels",
    "/chemical-peels/tca-peels",
  ],
  enzymePeels: [
    "/enzyme-peel-facial/blueberry-enzyme-peel",
    "/enzyme-peel-facial/cherry-enzyme-peel",
    "/enzyme-peel-facial/coconut-papaya-enzyme-peel",
    "/enzyme-peel-facial/lemon-enzyme-peel",
    "/enzyme-peel-facial/passion-fruit-enzyme-peel",
    "/enzyme-peel-facial/pomegranate-enzyme-peel",
    "/enzyme-peel-facial/pumpkin-orange-enzyme-peel",
    "/enzyme-peel-facial/raspberry-peach-enzyme-peel",
  ],
  plexrPlasma: [
    "/plexr-plasma-skin-tightening/ablative-skin-resurfacing",
    "/plexr-plasma-skin-tightening/mole-removal-treatment",
    "/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing",
    "/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing",
    "/plexr-plasma-skin-tightening/skin-tag-removal-treatment",
    "/plexr-plasma-skin-tightening/sun-spot-removal-treatment",
    "/plexr-plasma-skin-tightening/wart-removal-treatment",
  ],
  other: [
    "/about-us/portfolio",
    "/portfolio",
    "/plexr-sales",
    "/privacy-policy",
    "/terms-and-conditions",
  ],
};

/**
 * Generate comprehensive llms.txt content.
 * Exported for reuse by /.well-known/llms.txt route.
 */
export function generateLlmsTxt(): string {
  const lines: string[] = [
    "# Rejuvenate Skin Spa",
    "",
    "> Official website for Rejuvenate Skin Spa, a boutique skincare studio",
    "> located in Queen Creek, Arizona, specializing in non-surgical aesthetic treatments.",
    "",
    "## Base URL",
    SITE_URL,
    "",
    "## Policy",
    "- This site represents a single physical business location",
    "- Content is human-authored and medically reviewed",
    "- Canonical domain: rejuvenateskinspa.com",
    "- Contact: (480) 204-9366",
    "",
    "## Primary Pages",
    ...routes.primary.map((p) => `${SITE_URL}${p}`),
    "",
    "## Service Hubs",
    ...routes.serviceHubs.map((p) => `${SITE_URL}${p}`),
    "",
    "## Spa Services",
    ...routes.spaServices.map((p) => `${SITE_URL}${p}`),
    "",
    "## Microneedling Services",
    ...routes.microneedling.map((p) => `${SITE_URL}${p}`),
    "",
    "## Chemical Peels",
    ...routes.chemicalPeels.map((p) => `${SITE_URL}${p}`),
    "",
    "## Enzyme Peel Facials",
    ...routes.enzymePeels.map((p) => `${SITE_URL}${p}`),
    "",
    "## Plexr Plasma Skin Tightening",
    ...routes.plexrPlasma.map((p) => `${SITE_URL}${p}`),
    "",
    "## Other Pages",
    ...routes.other.map((p) => `${SITE_URL}${p}`),
    "",
    "## Location",
    "Queen Creek, Arizona (East Valley Phoenix metro)",
    "Serving: Queen Creek, San Tan Valley, Chandler, Gilbert, Mesa, Apache Junction",
    "",
  ];

  return lines.join("\n");
}

export async function GET() {
  return new NextResponse(generateLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
