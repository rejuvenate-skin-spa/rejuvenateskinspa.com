import type { Metadata } from "next";
import PassionFruitEnzymePeelClientPage from "./PassionFruitEnzymePeelClientPage";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title:
    "Passion Fruit Enzyme Peel | Glycolic Acid | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Tropical radiance renewal with 30% glycolic acid and collagen peptides. Deep exfoliation and anti-aging benefits at Rejuvenate Skin Spa in Queen Creek, AZ.",
  keywords:
    "passion fruit enzyme peel, glycolic acid peel, collagen peptides, anti-aging facial, deep exfoliation, Queen Creek spa",
  alternates: { canonical: "/enzyme-peel-facial/passion-fruit-enzyme-peel" },
};

export default function PassionFruitEnzymePeelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/enzyme-peel-facial/passion-fruit-enzyme-peel")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/enzyme-peel-facial/passion-fruit-enzyme-peel")!)) }}
      />
      <PassionFruitEnzymePeelClientPage />
    </>
  );
}
