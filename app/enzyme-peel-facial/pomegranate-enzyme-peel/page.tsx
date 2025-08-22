import type { Metadata } from "next"
import PomegranateEnzymePeelClientPage from "./PomegranateEnzymePeelClientPage"

export const metadata: Metadata = {
  title: "Pomegranate Enzyme Peel | Premium Antioxidant Facial | Rejuvenate Skin Spa",
  description:
    "Experience our premium Pomegranate Enzyme Peel with powerful antioxidants for ultimate skin protection and renewal. Book in Queen Creek, AZ.",
  keywords: "pomegranate enzyme peel, antioxidant facial, premium treatment, natural enzyme peel, Queen Creek spa",
}

export default function PomegranateEnzymePeelPage() {
  return <PomegranateEnzymePeelClientPage />
}
