import type { Metadata } from "next"
import AboutUsPageClient from "./AboutUsPageClient"

export const metadata: Metadata = {
  title: "About Us | Rejuvenate Skin Spa | Queen Creek, Arizona",
  description:
    "Rejuvenate Skin Spa in Queen Creek, AZ specializes in Plexr plasma, chemical peels, and microneedling. Founded by Bridgette Ball. Book a consultation today!",
  keywords:
    "about Rejuvenate Skin Spa, skincare spa Queen Creek, aesthetic medicine Arizona, certified skincare specialists, skin spa history, Queen Creek med spa",
}

export default function AboutUsPage() {
  return <AboutUsPageClient />
}
