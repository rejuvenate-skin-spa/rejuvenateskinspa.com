import type { Metadata } from "next";
import MoleRemovalTreatmentClientPage from "./MoleRemovalTreatmentClientPage";

export const metadata: Metadata = {
  title: "Mole Removal | Plexr Plasma Treatment | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Professional mole removal using Plexr plasma technology in Queen Creek, Arizona. Safe, precise mole removal with minimal scarring. Non-surgical treatment option.",
  keywords:
    "mole removal, Plexr plasma, mole treatment, non-surgical mole removal, skin mole removal, Queen Creek Arizona, plasma mole removal",
};

export default function MoleRemovalTreatmentPage() {
  return <MoleRemovalTreatmentClientPage />;
}
