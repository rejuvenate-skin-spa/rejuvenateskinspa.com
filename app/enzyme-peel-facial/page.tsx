import type { Metadata } from "next";
import EnzymePeelFacialPageClient from "./EnzymePeelFacialPageClient";

export const metadata: Metadata = {
  title: "Enzyme Peel Facials | Natural Fruit Enzyme Peels | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Natural fruit enzyme peels in Queen Creek, AZ. Gentle exfoliation with pumpkin, pomegranate, blueberry, and more. No downtime. Book at Rejuvenate Skin Spa!",
  keywords:
    "enzyme peel facial, fruit enzyme peel, natural facial peel, enzyme facial treatment, gentle chemical peel alternative, sensitive skin treatment, Queen Creek facial, natural exfoliation, enzyme peel Arizona",
};

export default function EnzymeFacialPeelsPage() {
  return <EnzymePeelFacialPageClient />;
}
