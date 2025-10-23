import type { Metadata } from "next";
import LemonEnzymePeelClientPage from "./LemonEnzymePeelClientPage";

export const metadata: Metadata = {
  title:
    "Lemon Zest Enzyme Peel | Brightening Treatment for Sun Damage | Rejuvenate Skin Spa",
  description:
    "Powerful brightening peel with 8% arbutin, 6% lactic acid, 3% glycolic acid, and 2% kojic acid. Ideal for dry, mature, or sun-damaged skin in Queen Creek, AZ.",
  keywords:
    "lemon enzyme peel, brightening facial, arbutin treatment, kojic acid, sun damage treatment, hyperpigmentation, Queen Creek spa",
};

export default function LemonEnzymePeelPage() {
  return <LemonEnzymePeelClientPage />;
}
