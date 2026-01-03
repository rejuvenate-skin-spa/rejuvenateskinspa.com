import type { Metadata } from "next";
import SunSpotRemovalTreatmentClientPage from "./SunSpotRemovalTreatmentClientPage";

export const metadata: Metadata = {
  title: "Sun Spot Removal | Plexr Plasma Treatment | Queen Creek, AZ",
  description:
    "Professional sun spot and age spot removal using Plexr plasma technology at Rejuvenate Skin Spa in Queen Creek, AZ. Precise pigmentation removal.",
  keywords:
    "sun spot removal, age spot treatment, pigmentation removal, Plexr plasma, sun damage treatment, hyperpigmentation, Queen Creek Arizona, age spots",
};

export default function SunSpotRemovalTreatmentPage() {
  return <SunSpotRemovalTreatmentClientPage />;
}
