import type { Metadata } from "next";
import BioRePeel35TCAPeelPageClient from "./35TCAPeelPageClient";

export const metadata: Metadata = {
  title: "BioRePeel 35 TCA Facial Peel | Facial Rejuvenation | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "BioRePeel 35 TCA facial treatment in Queen Creek, Arizona. Gentle yet powerful facial rejuvenation with 35% TCA, amino acids, and vitamins. Minimal downtime, visible results. Book your consultation today.",
  keywords:
    "BioRePeel 35 TCA, TCA facial peel, facial rejuvenation, skin resurfacing, chemical peel facial, Queen Creek Arizona, minimal downtime peel, amino acid peel",
};

export default function BioRePeel35TCAFacialPage() {
  return <BioRePeel35TCAPeelPageClient />;
}
