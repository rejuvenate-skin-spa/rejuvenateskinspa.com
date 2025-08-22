import type { Metadata } from "next"
import LemonEnzymePeelClientPage from "./LemonEnzymePeelClientPage"

export const metadata: Metadata = {
  title: "Lemon Zest Enzyme Peel | Energizing Citrus Facial | Rejuvenate Skin Spa",
  description:
    "Energize your skin with our Lemon Zest Enzyme Peel treatment. Natural citrus acids for bright, refreshed skin. Book in Queen Creek, AZ.",
  keywords: "lemon enzyme peel, citrus facial, energizing treatment, natural enzyme peel, Queen Creek spa",
}

export default function LemonEnzymePeelPage() {
  return <LemonEnzymePeelClientPage />
}
