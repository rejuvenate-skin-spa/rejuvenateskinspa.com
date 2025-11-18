import type { Metadata } from "next";
import WartRemovalTreatmentClientPage from "./WartRemovalTreatmentClientPage";

export const metadata: Metadata = {
  title: "Wart Removal | Plexr Plasma Treatment | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Professional wart removal using Plexr plasma technology in Queen Creek, Arizona. Effective, non-surgical wart treatment with minimal downtime. Safe and precise removal.",
  keywords:
    "wart removal, Plexr plasma, wart treatment, non-surgical wart removal, skin wart removal, Queen Creek Arizona, plasma wart removal",
};

export default function WartRemovalTreatmentPage() {
  return <WartRemovalTreatmentClientPage />;
}
