import type { Metadata } from "next";
import PassionFruitEnzymePeelClientPage from "./PassionFruitEnzymePeelClientPage";

export const metadata: Metadata = {
  title:
    "Passion Fruit Enzyme Peel | 30% Glycolic Acid Treatment | Rejuvenate Skin Spa",
  description:
    "Tropical radiance renewal with 30% glycolic acid and collagen peptides. Deep exfoliation, cellular renewal, and anti-aging benefits in Queen Creek, AZ.",
  keywords:
    "passion fruit enzyme peel, glycolic acid peel, collagen peptides, anti-aging facial, deep exfoliation, Queen Creek spa",
};

export default function PassionFruitEnzymePeelPage() {
  return <PassionFruitEnzymePeelClientPage />;
}
