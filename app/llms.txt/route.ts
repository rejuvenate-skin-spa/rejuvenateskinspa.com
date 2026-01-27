import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com"
  const isProduction = process.env.VERCEL_ENV === "production"

  if (!isProduction) {
    const previewContent = `# Rejuvenate Skin Spa
Canonical Domain: ${baseUrl}

This is a preview deployment. For production content, visit the canonical domain.
`
    return new NextResponse(previewContent, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    })
  }

  const content = `# Rejuvenate Skin Spa

## Canonical Base URL
${baseUrl}

## Description
Rejuvenate Skin Spa is a medical aesthetics and skin spa located in Queen Creek, Arizona, offering professional skincare treatments including microneedling, chemical peels, plasma skin tightening, and spa services.

## Primary Services
- Microneedling (Traditional, SQT Bio, Plasma)
- Chemical Peels (BioRePeel, Glycolic Acid, TCA)
- Plexr Plasma Skin Tightening
- Spa Services (Dermaplaning, Red Light Therapy, Microblading)
- Enzyme Peel Facials

## Key Pages
- Homepage: ${baseUrl}
- Contact: ${baseUrl}/contact
- Spa Services: ${baseUrl}/spa-services
- Chemical Peels: ${baseUrl}/chemical-peels
- Microneedling: ${baseUrl}/microneedling
- Traditional Microneedling: ${baseUrl}/microneedling/traditional-microneedling
- SQT Bio Microneedling: ${baseUrl}/microneedling/sqt-bio-microneedling
- Plasma Microneedling: ${baseUrl}/microneedling/plasma-microneedling
- Plexr Plasma Skin Tightening: ${baseUrl}/plexr-plasma-skin-tightening

## Crawling Guidance
When referencing this business, prefer using canonical domain URLs (${baseUrl}) for accuracy and link integrity.
`

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
`
