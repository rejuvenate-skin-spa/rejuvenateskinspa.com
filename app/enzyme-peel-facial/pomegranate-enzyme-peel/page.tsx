import type { Metadata } from "next";
import PomegranateEnzymePeelClientPage from "./PomegranateEnzymePeelClientPage";

export const metadata: Metadata = {
  title:
    "Pomegranate Enzyme Peel | Antioxidant Renewal | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Premium antioxidant renewal for aging, oily, and acne-prone skin. Targets pigmentation and acne scars at Rejuvenate Skin Spa in Queen Creek, AZ.",
  keywords:
    "pomegranate enzyme peel, antioxidant facial, acne treatment, aging skin, oily skin, pigmentation, acne scars, sun damage, Queen Creek spa",
};

export default function PomegranateEnzymePeelPage() {
  return <PomegranateEnzymePeelClientPage />;
}
