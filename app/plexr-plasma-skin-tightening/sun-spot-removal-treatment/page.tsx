import type { Metadata } from "next";
import SunSpotRemovalTreatmentClientPage from "./SunSpotRemovalTreatmentClientPage";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title: "Sun Spot Removal | Plexr Plasma Treatment | Queen Creek, AZ",
  description:
    "Professional sun spot and age spot removal using Plexr plasma technology at Rejuvenate Skin Spa in Queen Creek, AZ. Precise pigmentation removal.",
  keywords:
    "sun spot removal, age spot treatment, pigmentation removal, Plexr plasma, sun damage treatment, hyperpigmentation, Queen Creek Arizona, age spots",
  alternates: { canonical: "/plexr-plasma-skin-tightening/sun-spot-removal-treatment" },
};

export default function SunSpotRemovalTreatmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/plexr-plasma-skin-tightening/sun-spot-removal-treatment")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/plexr-plasma-skin-tightening/sun-spot-removal-treatment")!)) }}
      />
      <SunSpotRemovalTreatmentClientPage />
    </>
  );
}
