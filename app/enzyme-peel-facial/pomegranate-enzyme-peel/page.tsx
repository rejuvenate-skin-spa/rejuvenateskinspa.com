import type { Metadata } from "next";
import PomegranateEnzymePeelClientPage from "./PomegranateEnzymePeelClientPage";

export const metadata: Metadata = {
  title:
    "Pomegranate Enzyme Peel | Level 4-5 Antioxidant Renewal | Rejuvenate Skin Spa",
  description:
    "Premium antioxidant renewal treatment for aging, oily, and acne-prone skin. Targets pigmentation, acne scars, and sun damage with pomegranate's powerful antioxidants in Queen Creek, AZ.",
  keywords:
    "pomegranate enzyme peel, antioxidant facial, acne treatment, aging skin, oily skin, pigmentation, acne scars, sun damage, Queen Creek spa",
};

export default function PomegranateEnzymePeelPage() {
  return <PomegranateEnzymePeelClientPage />;
}
