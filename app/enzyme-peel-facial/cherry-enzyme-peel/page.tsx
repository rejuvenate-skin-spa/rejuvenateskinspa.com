import type { Metadata } from "next"
import CherryEnzymePeelClientPage from "./CherryEnzymePeelClientPage"

export const metadata: Metadata = {
  title: "Cherry Enzyme Peel | Natural Facial Treatment | Rejuvenate Skin Spa",
  description:
    "Brighten and revitalize your skin with our antioxidant-rich Cherry Enzyme Peel. Professional facial treatment in Queen Creek, AZ. Book your appointment today.",
  keywords:
    "cherry enzyme peel, facial treatment, antioxidant facial, skin brightening, Queen Creek spa, natural skincare",
}

export default function CherryEnzymePeelPage() {
  return <CherryEnzymePeelClientPage />
}
