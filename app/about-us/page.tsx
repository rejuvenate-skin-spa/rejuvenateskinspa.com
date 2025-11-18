import type { Metadata } from "next"
import AboutUsPageClient from "./AboutUsPageClient"

export const metadata: Metadata = {
  title: "About Us | Rejuvenate Skin Spa | Queen Creek, Arizona",
  description:
    "Learn about Rejuvenate Skin Spa, a premier skincare destination in Queen Creek, Arizona. Founded in 2018, we specialize in advanced treatments including Plexr plasma, chemical peels, and microneedling. Discover our values, certifications, and commitment to excellence.",
  keywords:
    "about Rejuvenate Skin Spa, skincare spa Queen Creek, aesthetic medicine Arizona, certified skincare specialists, skin spa history, Queen Creek med spa",
}

export default function AboutUsPage() {
  return <AboutUsPageClient />
}
