import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Rejuvenate Skin Spa | Queen Creek, AZ | (480) 204-9366",
  description:
    "Contact Rejuvenate Skin Spa in Queen Creek, AZ. Call (480) 204-9366 or visit 20162 E. Sonoqui Blvd. Schedule your skincare consultation today!",
  keywords:
    "contact Rejuvenate Skin Spa, Queen Creek skin spa, schedule consultation, skincare appointment, med spa Queen Creek, (480) 204-9366, Sonoqui Blvd Queen Creek",
}

export default function ContactPage() {
  return <ContactPageClient />
}

