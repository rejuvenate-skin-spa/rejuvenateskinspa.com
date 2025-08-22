import type { Metadata } from "next"
import RedLightTherapyClientPage from "./RedLightTherapyClientPage"

export const metadata: Metadata = {
  title: "Red Light Therapy Treatment | Rejuvenate Skin Spa Queen Creek",
  description:
    "Experience healing red light therapy at Rejuvenate Skin Spa. FDA-approved LED treatment for anti-aging, acne, pain relief, and skin rejuvenation. Book today!",
  keywords:
    "red light therapy, LED therapy, photobiomodulation, anti-aging, acne treatment, Queen Creek spa, Rejuvenate Skin Spa",
}

export default function RedLightTherapyPage() {
  return <RedLightTherapyClientPage />
}
