import type { Metadata } from "next";
import BioMicroneedlingClientPage from "./BioMicroneedlingClientPage";

export const metadata: Metadata = {
  title: "SQT Bio Microneedling Treatment | Rejuvenate Skin Spa Queen Creek",
  description:
    "Experience advanced bio microneedling at Rejuvenate Skin Spa. Stimulate natural collagen production with organic serums for radiant, youthful skin. Book today!",
  keywords:
    "bio microneedling, organic microneedling, collagen induction, skin rejuvenation, Queen Creek spa, Rejuvenate Skin Spa",
};

export default function BioMicroneedlingPage() {
  return <BioMicroneedlingClientPage />;
}
