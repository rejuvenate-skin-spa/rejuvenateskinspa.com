import type { Metadata } from "next";
import CherryEnzymePeelClientPage from "./CherryEnzymePeelClientPage";

export const metadata: Metadata = {
  title:
    "Brightening Cherry Enzyme Peel | Level 3 Treatment | Rejuvenate Skin Spa",
  description:
    "Luminous cherry enzyme peel with 5% lactic acid, arbutin, and kojic acid. Restorative exfoliation with antioxidant protection in Queen Creek, AZ. Book today!",
  keywords:
    "cherry enzyme peel, brightening facial, lactic acid peel, arbutin treatment, kojic acid, skin brightening, Queen Creek spa, level 3 peel",
};

export default function CherryEnzymePeelPage() {
  return <CherryEnzymePeelClientPage />;
}
