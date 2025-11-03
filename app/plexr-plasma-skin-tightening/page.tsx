import type { Metadata } from "next"
import PlexrPlasmaPageClient from "./PlexrPlasmaPageClient"

export const metadata: Metadata = {
  title: "Plexr Plasma Skin Tightening | Non-Surgical Skin Rejuvenation | Queen Creek, AZ",
  description:
    "Transform your skin with Plexr Plasma technology at Rejuvenate Skin Spa. Non-surgical skin tightening, wrinkle reduction, and rejuvenation treatments in Queen Creek, Arizona.",
  keywords:
    "plexr plasma, skin tightening, non-surgical facelift, wrinkle reduction, plasma technology, Queen Creek, Arizona",
}

export default function PlexrPlasmaPage() {
  return <PlexrPlasmaPageClient />
}
