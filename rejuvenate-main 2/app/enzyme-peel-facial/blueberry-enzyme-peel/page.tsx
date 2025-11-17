import type { Metadata } from "next"
import BlueberryEnzymePeelClientPage from "./BlueberryEnzymePeelClientPage"

export const metadata: Metadata = {
  title: "Blueberry Enzyme Peel | Antioxidant Facial Treatment | Rejuvenate Skin Spa",
  description:
    "Discover our gentle Blueberry Enzyme Peel rich in antioxidants. Perfect for sensitive skin renewal in Queen Creek, AZ.",
  keywords: "blueberry enzyme peel, antioxidant facial, gentle treatment, sensitive skin, Queen Creek spa",
}

export default function BlueberryEnzymePeelPage() {
  return <BlueberryEnzymePeelClientPage />
}
