import type { Metadata } from "next"
import { breadcrumbJsonLd } from "@/lib/breadcrumbs"
import { buildService } from "@/lib/schema"
import { getService } from "@/lib/services"
import EyebrowLaminationClientPage from "./EyebrowLaminationClientPage"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com"

export const metadata: Metadata = {
  title: "Eyebrow Lamination Treatment | Queen Creek, AZ",
  description:
    "Transform your brows with professional eyebrow lamination at Rejuvenate Skin Spa in Queen Creek, AZ. Get fuller, perfectly shaped eyebrows that last 6-8 weeks. Book your appointment today!",
  keywords:
    "eyebrow lamination, brow lamination, eyebrow treatment, brow shaping, Queen Creek spa, Rejuvenate Skin Spa",
  openGraph: {
    title: "Eyebrow Lamination | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Professional eyebrow lamination for fuller, perfectly shaped brows at Rejuvenate Skin Spa in Queen Creek, AZ.",
    url: `${siteUrl}/spa-services/eyebrow-lamination-treatment`,
    images: [
      {
        url: `${siteUrl}/og/og-eyebrow-lamination.jpg`,
        width: 1200,
        height: 630,
        alt: "Eyebrow Lamination at Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyebrow Lamination | Queen Creek, AZ",
    description:
      "Professional eyebrow lamination at Rejuvenate Skin Spa in Queen Creek, AZ.",
    images: [`${siteUrl}/og/og-eyebrow-lamination.jpg`],
  },
}

export default function EyebrowLaminationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/spa-services/eyebrow-lamination-treatment")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/spa-services/eyebrow-lamination-treatment")!)) }}
      />
      <EyebrowLaminationClientPage />
    </>
  )
}
