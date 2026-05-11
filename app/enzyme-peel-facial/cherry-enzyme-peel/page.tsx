import type { Metadata } from "next";
import CherryEnzymePeelClientPage from "./CherryEnzymePeelClientPage";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title:
    "Brightening Cherry Enzyme Peel | Level 3 Treatment | Rejuvenate Skin Spa",
  description:
    "Luminous cherry enzyme peel with 5% lactic acid, arbutin, and kojic acid. Restorative exfoliation with antioxidant protection in Queen Creek, AZ. Book today!",
  keywords:
    "cherry enzyme peel, brightening facial, lactic acid peel, arbutin treatment, kojic acid, skin brightening, Queen Creek spa, level 3 peel",
  alternates: { canonical: "/enzyme-peel-facial/cherry-enzyme-peel" },
};

export default function CherryEnzymePeelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/enzyme-peel-facial/cherry-enzyme-peel")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/enzyme-peel-facial/cherry-enzyme-peel")!)) }}
      />
      <CherryEnzymePeelClientPage />
    </>
  );
}
