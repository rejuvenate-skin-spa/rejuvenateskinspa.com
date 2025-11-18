import type { Metadata } from "next";
import EnzymePeelFacialPageClient from "./EnzymePeelFacialPageClient";

export const metadata: Metadata = {
  title: "Enzyme Peel Facials | Natural Fruit Enzyme Peels | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "100% natural fruit enzyme facial peels in Queen Creek, Arizona. Gentle exfoliation with pumpkin, pomegranate, blueberry, cherry, and more. No downtime, immediate glow. Perfect for sensitive skin. Book your enzyme peel treatment today.",
  keywords:
    "enzyme peel facial, fruit enzyme peel, natural facial peel, enzyme facial treatment, gentle chemical peel alternative, sensitive skin treatment, Queen Creek facial, natural exfoliation, enzyme peel Arizona",
};

export default function EnzymeFacialPeelsPage() {
  return <EnzymePeelFacialPageClient />;
}
