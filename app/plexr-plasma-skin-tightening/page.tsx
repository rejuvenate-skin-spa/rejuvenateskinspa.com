import type { Metadata } from "next"
import PlexrPlasmaPageClient from "./PlexrPlasmaPageClient"

export const metadata: Metadata = {
  title: "Plexr Plasma Skin Tightening | Non-Surgical | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Non-surgical skin tightening with Plexr Plasma technology at Rejuvenate Skin Spa in Queen Creek, AZ. Wrinkle reduction and rejuvenation. Book today!",
  keywords:
    "plexr plasma, skin tightening, non-surgical facelift, wrinkle reduction, plasma technology, Queen Creek, Arizona",
}

export default function PlexrPlasmaPage() {
  return <PlexrPlasmaPageClient />
}
