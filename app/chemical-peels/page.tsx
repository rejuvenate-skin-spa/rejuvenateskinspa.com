import type { Metadata } from "next"
import ChemicalPeelsPageClient from "./ChemicalPeelsPageClient"

export const metadata: Metadata = {
  title: "Chemical Peels | TCA & Glycolic Peels | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Professional chemical peel treatments in Queen Creek, Arizona. TCA 25% peels and Glycolic 20-40% peels for skin rejuvenation, wrinkle reduction, and acne scar treatment. Expert skincare at Rejuvenate Skin Spa.",
  keywords:
    "chemical peels Queen Creek, TCA peel, glycolic peel, skin resurfacing, chemical peel treatment Arizona, acne scar treatment, wrinkle reduction, skin rejuvenation",
}

export default function ChemicalPeelsPage() {
  return <ChemicalPeelsPageClient />
}
