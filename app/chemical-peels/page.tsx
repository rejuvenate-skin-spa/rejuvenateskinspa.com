import type { Metadata } from "next"
import ChemicalPeelsPageClient from "./ChemicalPeelsPageClient"
import { breadcrumbJsonLd } from "@/lib/breadcrumbs"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com"

export const metadata: Metadata = {
  title: "Chemical Peels | TCA & Glycolic Peels | Queen Creek, AZ",
  description:
    "Professional chemical peel treatments in Queen Creek, Arizona. TCA 25% peels and Glycolic 20-40% peels for skin rejuvenation, wrinkle reduction, and acne scar treatment. Expert skincare at Rejuvenate Skin Spa.",
  keywords:
    "chemical peels Queen Creek, TCA peel, glycolic peel, skin resurfacing, chemical peel treatment Arizona, acne scar treatment, wrinkle reduction, skin rejuvenation",
  openGraph: {
    title: "Chemical Peels | TCA & Glycolic | Queen Creek, AZ",
    description:
      "Professional chemical peel treatments in Queen Creek, Arizona. TCA and Glycolic peels for skin rejuvenation at Rejuvenate Skin Spa.",
    url: `${siteUrl}/chemical-peels`,
    images: [
      {
        url: `${siteUrl}/og/og-chemical-peels.jpg`,
        width: 1200,
        height: 630,
        alt: "Chemical Peels at Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chemical Peels | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Professional TCA and Glycolic chemical peels in Queen Creek, Arizona.",
    images: [`${siteUrl}/og/og-chemical-peels.jpg`],
  },
}

export default function ChemicalPeelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/chemical-peels")) }}
      />
      <ChemicalPeelsPageClient />
    </>
  )
}
