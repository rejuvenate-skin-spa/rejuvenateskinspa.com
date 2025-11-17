import type { Metadata } from "next";
import RaspberryPeachEnzymePeelClientPage from "./RaspberryPeachEnzymePeelClientPage";

export const metadata: Metadata = {
  title:
    "Raspberry-Peach Enzyme Peel | Gentle Silky Hydrating Treatment | Rejuvenate Skin Spa",
  description:
    "Perfect balance of gentle exfoliation and deep hydration with antioxidant-rich raspberry and soothing peach extract. Ideal for sensitive, dry, or mature skin in Queen Creek, AZ.",
  keywords:
    "raspberry peach enzyme peel, gentle facial, hydrating treatment, anti-inflammatory, sensitive skin, dry skin, Queen Creek spa",
};

export default function RaspberryPeachEnzymePeelPage() {
  return <RaspberryPeachEnzymePeelClientPage />;
}
