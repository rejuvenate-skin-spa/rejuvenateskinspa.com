import type { Metadata } from "next"
import NanoAblativeClientPage from "./NanoAblativeClientPage"
import { breadcrumbJsonLd } from "@/lib/breadcrumbs"
import { buildService } from "@/lib/schema"
import { getService } from "@/lib/services"

export const metadata: Metadata = {
  title: "Nano-Ablative Resurfacing | Plexr Plasma | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Gentle nano-ablative skin resurfacing with Plexr plasma. Improve skin texture with zero downtime at Rejuvenate Skin Spa in Queen Creek, AZ.",
  keywords:
    "nano-ablative skin resurfacing, plexr plasma, skin texture, Queen Creek, Arizona, gentle resurfacing, no downtime",
}

export default function NanoAblativeSkinResurfacingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing")!)) }}
      />
      <NanoAblativeClientPage />
    </>
  )
}
