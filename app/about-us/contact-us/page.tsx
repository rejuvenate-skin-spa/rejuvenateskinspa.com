import type { Metadata } from "next"
import ContactUsPageClient from "./ContactUsPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Rejuvenate Skin Spa | Queen Creek, AZ | (480) 225-9549",
  description:
    "Contact Rejuvenate Skin Spa in Queen Creek, Arizona. Schedule your consultation for advanced skincare treatments including Plexr plasma, chemical peels, and microneedling. Call (480) 225-9549 or visit us at 20162 E. Sonoqui Blvd.",
  keywords:
    "contact Rejuvenate Skin Spa, Queen Creek skin spa, schedule consultation, skincare appointment, med spa Queen Creek, (480) 225-9549, Sonoqui Blvd Queen Creek",
}

export default function ContactUsPage() {
  return <ContactUsPageClient />
}
