import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Rejuvenate Skin Spa | Advanced Skincare Treatments | Queen Creek, AZ",
  description:
    "Transform your skin with advanced skincare treatments at Rejuvenate Skin Spa in Queen Creek, Arizona. Specializing in Plexr plasma skin tightening, chemical peels, microneedling, and luxury facial services.",
  keywords:
    "skin spa Queen Creek, plasma skin tightening, chemical peels, microneedling, facial treatments, skincare Arizona, Plexr plasma, BioRePeel, skin rejuvenation",
};

export default function HomePage() {
  return <HomePageClient />;
}
