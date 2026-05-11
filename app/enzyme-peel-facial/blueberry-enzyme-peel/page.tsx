import type { Metadata } from "next"
import BlueberryEnzymePeelClientPage from "./BlueberryEnzymePeelClientPage"
import { breadcrumbJsonLd } from "@/lib/breadcrumbs"
import { buildService } from "@/lib/schema"
import { getService } from "@/lib/services"

export const metadata: Metadata = {
  title: "Blueberry Enzyme Peel | Antioxidant Facial | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Gentle Blueberry Enzyme Peel rich in antioxidants. Perfect for sensitive skin renewal at Rejuvenate Skin Spa in Queen Creek, AZ. Book today!",
  keywords: "blueberry enzyme peel, antioxidant facial, gentle treatment, sensitive skin, Queen Creek spa",
  alternates: { canonical: "/enzyme-peel-facial/blueberry-enzyme-peel" },
}

export default function BlueberryEnzymePeelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/enzyme-peel-facial/blueberry-enzyme-peel")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/enzyme-peel-facial/blueberry-enzyme-peel")!)) }}
      />
      <BlueberryEnzymePeelClientPage />
    </>
  )
}
