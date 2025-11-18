import type { Metadata } from "next";
import MicroneedlingTreatmentClientPage from "./MicroneedlingTreatmentClientPage";

export const metadata: Metadata = {
  title: "Microneedling Treatment | Collagen Induction Therapy | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Professional microneedling treatment in Queen Creek, Arizona. Collagen induction therapy for fine lines, wrinkles, acne scars, and skin texture improvement. Minimal downtime, visible results.",
  keywords:
    "microneedling, collagen induction therapy, skin needling, dermaroller, acne scar treatment, fine lines, skin rejuvenation, Queen Creek Arizona",
};

export default function MicroneedlingTreatmentPage() {
  return <MicroneedlingTreatmentClientPage />;
}
