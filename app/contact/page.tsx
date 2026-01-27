import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com"

export const metadata: Metadata = {
  title: "Contact Us | Rejuvenate Skin Spa | Queen Creek, AZ | (480) 204-9366",
  description:
    "Contact Rejuvenate Skin Spa in Queen Creek, AZ. Call (480) 204-9366 or visit 20162 E. Sonoqui Blvd. Schedule your skincare consultation today!",
  keywords:
    "contact Rejuvenate Skin Spa, Queen Creek skin spa, schedule consultation, skincare appointment, med spa Queen Creek, (480) 204-9366, Sonoqui Blvd Queen Creek",
  openGraph: {
    title: "Contact Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Contact Rejuvenate Skin Spa in Queen Creek, AZ. Call (480) 204-9366 or visit us at 20162 E. Sonoqui Blvd.",
    url: `${siteUrl}/contact`,
    images: [
      {
        url: `${siteUrl}/og/og-contact.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Call (480) 204-9366 or visit us at 20162 E. Sonoqui Blvd, Queen Creek, AZ 85142.",
    images: [`${siteUrl}/og/og-contact.jpg`],
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}

