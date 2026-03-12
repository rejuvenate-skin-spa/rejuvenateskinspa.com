import type { Metadata } from "next"
import SpaServicesPageClient from "./SpaServicesPageClient"
import { breadcrumbJsonLd } from "@/lib/breadcrumbs"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com"

export const metadata: Metadata = {
  title: "Spa Services | Dermaplaning, Microblading & More | Queen Creek, AZ",
  description:
    "Premium spa services in Queen Creek, Arizona. Professional dermaplaning facials, microblading, eyebrow lamination, and red light therapy. Expert practitioners, medical-grade products. Book your appointment today.",
  keywords:
    "spa services Queen Creek, dermaplaning facial, microblading eyebrows, eyebrow lamination, red light therapy, facial treatments Arizona, med spa services, Queen Creek spa",
  openGraph: {
    title: "Spa Services | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Premium spa services in Queen Creek, Arizona. Professional dermaplaning facials, microblading, eyebrow lamination, and red light therapy.",
    url: `${siteUrl}/spa-services`,
    images: [
      {
        url: `${siteUrl}/og/og-spa-services.jpg`,
        width: 1200,
        height: 630,
        alt: "Spa Services at Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Services | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Premium spa services in Queen Creek, Arizona. Dermaplaning, microblading, eyebrow lamination, and red light therapy.",
    images: [`${siteUrl}/og/og-spa-services.jpg`],
  },
}

export default function SpaServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/spa-services")) }}
      />
      <SpaServicesPageClient />
    </>
  )
}
