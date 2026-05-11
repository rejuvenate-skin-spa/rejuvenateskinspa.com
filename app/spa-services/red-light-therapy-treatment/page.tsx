import type { Metadata } from "next"
import { breadcrumbJsonLd } from "@/lib/breadcrumbs"
import { buildService } from "@/lib/schema"
import { getService } from "@/lib/services"
import RedLightTherapyClientPage from "./RedLightTherapyClientPage"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com"

export const metadata: Metadata = {
  title: "Red Light Therapy Treatment | Queen Creek, AZ",
  description:
    "Experience healing red light therapy at Rejuvenate Skin Spa in Queen Creek, AZ. FDA-approved LED treatment for anti-aging, acne, pain relief, and skin rejuvenation. Book today!",
  keywords:
    "red light therapy, LED therapy, photobiomodulation, anti-aging, acne treatment, Queen Creek spa, Rejuvenate Skin Spa",
  alternates: { canonical: "/spa-services/red-light-therapy-treatment" },
  openGraph: {
    title: "Red Light Therapy | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "FDA-approved red light therapy for anti-aging and skin rejuvenation at Rejuvenate Skin Spa in Queen Creek, AZ.",
    url: `${siteUrl}/spa-services/red-light-therapy-treatment`,
    images: [
      {
        url: `${siteUrl}/og/og-red-light-therapy.jpg`,
        width: 1200,
        height: 630,
        alt: "Red Light Therapy at Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Light Therapy | Queen Creek, AZ",
    description:
      "FDA-approved red light therapy at Rejuvenate Skin Spa in Queen Creek, AZ.",
    images: [`${siteUrl}/og/og-red-light-therapy.jpg`],
  },
}

export default function RedLightTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/spa-services/red-light-therapy-treatment")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/spa-services/red-light-therapy-treatment")!)) }}
      />
      <RedLightTherapyClientPage />
    </>
  )
}
