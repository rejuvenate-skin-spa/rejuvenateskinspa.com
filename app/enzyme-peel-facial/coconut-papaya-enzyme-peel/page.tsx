import type { Metadata } from "next"
import CoconutPapayaEnzymePeelClientPage from "./CoconutPapayaEnzymePeelClientPage"
import { breadcrumbJsonLd } from "@/lib/breadcrumbs"
import { buildService } from "@/lib/schema"
import { getService } from "@/lib/services"

export const metadata: Metadata = {
  title: "Coconut-Papaya Enzyme Peel | Tropical Hydrating Facial | Rejuvenate Skin Spa",
  description:
    "Experience our tropical Coconut-Papaya Enzyme Peel for deep hydration and gentle exfoliation. Perfect for dry skin. Book in Queen Creek, AZ.",
  keywords: "coconut papaya enzyme peel, tropical facial, hydrating treatment, natural enzyme peel, Queen Creek spa",
}

export default function CoconutPapayaEnzymePeelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/enzyme-peel-facial/coconut-papaya-enzyme-peel")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/enzyme-peel-facial/coconut-papaya-enzyme-peel")!)) }}
      />
      <CoconutPapayaEnzymePeelClientPage />
    </>
  )
}
