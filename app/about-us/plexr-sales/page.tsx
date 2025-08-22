import type { Metadata } from "next"
import PlexrSalesClientPage from "./PlexrSalesClientPage"

export const metadata: Metadata = {
  title: "Plexr Sales | Rejuvenate Skin Spa - Queen Creek, AZ",
  description:
    "Professional Plexr plasma device sales and training at Rejuvenate Skin Spa in Queen Creek, Arizona. Get the latest plasma technology for your practice.",
  keywords: "Plexr sales, plasma device, professional equipment, Queen Creek, Arizona, medical spa equipment",
}

export default function PlexrSalesPage() {
  return <PlexrSalesClientPage />
}
