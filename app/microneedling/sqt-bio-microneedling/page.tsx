import type { Metadata } from "next";
import BioMicroneedlingClientPage from "../_components/BioMicroneedlingClientPage";
export const metadata: Metadata = {
  title:
    "SQT Bio-Microneedling | Needle-Free Microneedling | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "SQT Bio-Microneedling in Queen Creek, AZ. Needle-free microneedling using marine sponge spicules to support collagen renewal, smoother texture, and brighter tone with minimal downtime.",
  keywords:
    "SQT bio-microneedling, bio microneedling, needle-free microneedling, sponge spicules, collagen renewal, Queen Creek Arizona",
};

export default function SqtBioMicroneedlingPage() {
  return <BioMicroneedlingClientPage />;
}

