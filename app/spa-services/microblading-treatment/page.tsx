import type { Metadata } from "next"
import { breadcrumbJsonLd } from "@/lib/breadcrumbs"
import { buildService } from "@/lib/schema"
import { getService } from "@/lib/services"
import MicrobladingClientPage from "./MicrobladingClientPage"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com"

export const metadata: Metadata = {
  title: "Microblading Treatment | Natural Eyebrow Enhancement | Queen Creek, AZ",
  description:
    "Transform your eyebrows with professional microblading at Rejuvenate Skin Spa in Queen Creek, AZ. Semi-permanent, natural-looking results that last 1-3 years.",
  keywords: "microblading, eyebrow enhancement, semi-permanent makeup, Queen Creek, Arizona, natural brows",
  openGraph: {
    title: "Microblading Treatment | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Professional microblading for natural-looking eyebrows at Rejuvenate Skin Spa in Queen Creek, AZ.",
    url: `${siteUrl}/spa-services/microblading-treatment`,
    images: [
      {
        url: `${siteUrl}/og/og-microblading.jpg`,
        width: 1200,
        height: 630,
        alt: "Microblading Treatment at Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microblading Treatment | Queen Creek, AZ",
    description:
      "Professional microblading at Rejuvenate Skin Spa in Queen Creek, AZ.",
    images: [`${siteUrl}/og/og-microblading.jpg`],
  },
}

export default function MicrobladingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/spa-services/microblading-treatment")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/spa-services/microblading-treatment")!)) }}
      />
      <MicrobladingClientPage />
    </>
  )
}
