import type { Metadata } from "next"
import EyebrowLaminationClientPage from "./EyebrowLaminationClientPage"

export const metadata: Metadata = {
  title: "Eyebrow Lamination Treatment | Rejuvenate Skin Spa Queen Creek",
  description:
    "Transform your brows with professional eyebrow lamination at Rejuvenate Skin Spa. Get fuller, perfectly shaped eyebrows that last 6-8 weeks. Book your appointment today!",
  keywords:
    "eyebrow lamination, brow lamination, eyebrow treatment, brow shaping, Queen Creek spa, Rejuvenate Skin Spa",
}

export default function EyebrowLaminationPage() {
  return <EyebrowLaminationClientPage />
}
