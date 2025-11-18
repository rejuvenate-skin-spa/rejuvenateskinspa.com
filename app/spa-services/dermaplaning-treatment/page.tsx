import type { Metadata } from "next";
import DermaplaningTreatmentClientPage from "./DermaplaningTreatmentClientPage";

export const metadata: Metadata = {
  title: "Dermaplaning Facial Treatment | Exfoliation & Peach Fuzz Removal | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Professional dermaplaning facial treatment in Queen Creek, Arizona. Safe exfoliation that removes dead skin cells and fine facial hair. Instant results, no downtime. Perfect for all skin types.",
  keywords:
    "dermaplaning, dermaplaning facial, exfoliation treatment, peach fuzz removal, facial hair removal, skin smoothing, Queen Creek Arizona, instant results",
};

export default function DermaplaningPage() {
  return <DermaplaningTreatmentClientPage />;
}
