import type { Metadata } from "next"
import NanoAblativeClientPage from "./NanoAblativeClientPage"

export const metadata: Metadata = {
  title: "Nano-Ablative Resurfacing | Plexr Plasma | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Gentle nano-ablative skin resurfacing with Plexr plasma. Improve skin texture with zero downtime at Rejuvenate Skin Spa in Queen Creek, AZ.",
  keywords:
    "nano-ablative skin resurfacing, plexr plasma, skin texture, Queen Creek, Arizona, gentle resurfacing, no downtime",
}

export default function NanoAblativeSkinResurfacingPage() {
  return <NanoAblativeClientPage />
}
