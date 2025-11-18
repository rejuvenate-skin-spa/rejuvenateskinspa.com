import type { Metadata } from "next";
import BioRePeel50TCAPeelPageClient from "./50TCAPeelPageClient";

export const metadata: Metadata = {
  title: "BioRePeel 50 TCA Body Peel | Body Skin Rejuvenation | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "BioRePeel 50 TCA body treatment in Queen Creek, Arizona. Intensive body skin rejuvenation for back, chest, arms, and legs. Treats body acne, scarring, and hyperpigmentation. Professional strength formula.",
  keywords:
    "BioRePeel 50 TCA, body chemical peel, body acne treatment, back acne treatment, body skin resurfacing, TCA body peel, Queen Creek Arizona, body skin rejuvenation",
};

export default function BioRePeel50TCABodyPage() {
  return <BioRePeel50TCAPeelPageClient />;
}
