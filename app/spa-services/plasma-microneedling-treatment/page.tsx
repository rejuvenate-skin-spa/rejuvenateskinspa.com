import type { Metadata } from "next"
import PlasmaMicroneedlingClientPage from "./PlasmaMicroneedlingClientPage"

export const metadata: Metadata = {
  title: "Plasma Microneedling Treatment | Rejuvenate Skin Spa Queen Creek",
  description:
    "Advanced plasma microneedling at Rejuvenate Skin Spa. Combine microneedling with plasma energy for maximum collagen stimulation and skin rejuvenation. Book today!",
  keywords:
    "plasma microneedling, radiofrequency microneedling, collagen induction, skin tightening, Queen Creek spa, Rejuvenate Skin Spa",
}

export default function PlasmaMicroneedlingPage() {
  return <PlasmaMicroneedlingClientPage />
}
