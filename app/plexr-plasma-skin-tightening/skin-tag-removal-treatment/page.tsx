import type { Metadata } from "next";
import SkinTagRemovalTreatmentClientPage from "./SkinTagRemovalTreatmentClientPage";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title: "Skin Tag Removal | Plexr Plasma Treatment | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Professional skin tag removal using Plexr plasma technology in Queen Creek, Arizona. Quick, painless treatment with minimal downtime. Remove skin tags safely and effectively.",
  keywords:
    "skin tag removal, Plexr plasma, skin tag treatment, mole removal, skin growth removal, Queen Creek Arizona, non-surgical removal",
  alternates: { canonical: "/plexr-plasma-skin-tightening/skin-tag-removal-treatment" },
};

export default function SkinTagRemovalTreatmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/plexr-plasma-skin-tightening/skin-tag-removal-treatment")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/plexr-plasma-skin-tightening/skin-tag-removal-treatment")!)) }}
      />
      <SkinTagRemovalTreatmentClientPage />
    </>
  );
}
