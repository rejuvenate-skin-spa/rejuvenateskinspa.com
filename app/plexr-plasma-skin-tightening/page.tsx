import type { Metadata } from "next"
import PlexrPlasmaPageClient from "./PlexrPlasmaPageClient"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com"

export const metadata: Metadata = {
  title: "Plexr Plasma Skin Tightening | Non-Surgical | Queen Creek, AZ",
  description:
    "Non-surgical skin tightening with Plexr Plasma technology at Rejuvenate Skin Spa in Queen Creek, AZ. Wrinkle reduction and rejuvenation. Book today!",
  keywords:
    "plexr plasma, skin tightening, non-surgical facelift, wrinkle reduction, plasma technology, Queen Creek, Arizona",
  openGraph: {
    title: "Plexr Plasma Skin Tightening | Queen Creek, AZ",
    description:
      "Non-surgical skin tightening with Plexr Plasma technology at Rejuvenate Skin Spa in Queen Creek, Arizona.",
    url: `${siteUrl}/plexr-plasma-skin-tightening`,
    images: [
      {
        url: `${siteUrl}/og/og-plexr-plasma.jpg`,
        width: 1200,
        height: 630,
        alt: "Plexr Plasma Skin Tightening at Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plexr Plasma Skin Tightening | Queen Creek, AZ",
    description:
      "Non-surgical skin tightening with Plexr Plasma at Rejuvenate Skin Spa in Queen Creek, AZ.",
    images: [`${siteUrl}/og/og-plexr-plasma.jpg`],
  },
}

export default function PlexrPlasmaPage() {
  return <PlexrPlasmaPageClient />
}
