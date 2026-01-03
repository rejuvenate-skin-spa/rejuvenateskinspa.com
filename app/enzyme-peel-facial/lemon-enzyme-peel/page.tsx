import type { Metadata } from "next";
import LemonEnzymePeelClientPage from "./LemonEnzymePeelClientPage";

export const metadata: Metadata = {
  title:
    "Lemon Enzyme Peel | Brightening Treatment | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Powerful brightening peel with arbutin, lactic acid, glycolic acid, and kojic acid. Ideal for sun-damaged skin at Rejuvenate Skin Spa in Queen Creek, AZ.",
  keywords:
    "lemon enzyme peel, brightening facial, arbutin treatment, kojic acid, sun damage treatment, hyperpigmentation, Queen Creek spa",
};

export default function LemonEnzymePeelPage() {
  return <LemonEnzymePeelClientPage />;
}
