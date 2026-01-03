import type { Metadata } from "next";
import PassionFruitEnzymePeelClientPage from "./PassionFruitEnzymePeelClientPage";

export const metadata: Metadata = {
  title:
    "Passion Fruit Enzyme Peel | Glycolic Acid | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Tropical radiance renewal with 30% glycolic acid and collagen peptides. Deep exfoliation and anti-aging benefits at Rejuvenate Skin Spa in Queen Creek, AZ.",
  keywords:
    "passion fruit enzyme peel, glycolic acid peel, collagen peptides, anti-aging facial, deep exfoliation, Queen Creek spa",
};

export default function PassionFruitEnzymePeelPage() {
  return <PassionFruitEnzymePeelClientPage />;
}
