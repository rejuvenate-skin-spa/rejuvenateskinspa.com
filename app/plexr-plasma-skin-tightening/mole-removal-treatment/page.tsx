import type { Metadata } from "next";
import MoleRemovalTreatmentClientPage from "./MoleRemovalTreatmentClientPage";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title: "Mole Removal | Plexr Plasma Treatment | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Professional mole removal using Plexr plasma technology in Queen Creek, Arizona. Safe, precise mole removal with minimal scarring. Non-surgical treatment option.",
  keywords:
    "mole removal, Plexr plasma, mole treatment, non-surgical mole removal, skin mole removal, Queen Creek Arizona, plasma mole removal",
};

export default function MoleRemovalTreatmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/plexr-plasma-skin-tightening/mole-removal-treatment")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/plexr-plasma-skin-tightening/mole-removal-treatment")!)) }}
      />
      <MoleRemovalTreatmentClientPage />
    </>
  );
}
