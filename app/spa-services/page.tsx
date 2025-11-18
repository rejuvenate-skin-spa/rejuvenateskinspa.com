import type { Metadata } from "next"
import SpaServicesPageClient from "./SpaServicesPageClient"

export const metadata: Metadata = {
  title: "Spa Services | Dermaplaning, Microblading, Eyebrow Lamination | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Premium spa services in Queen Creek, Arizona. Professional dermaplaning facials, microblading, eyebrow lamination, and red light therapy. Expert practitioners, medical-grade products. Book your appointment today.",
  keywords:
    "spa services Queen Creek, dermaplaning facial, microblading eyebrows, eyebrow lamination, red light therapy, facial treatments Arizona, med spa services, Queen Creek spa",
}

export default function SpaServicesPage() {
  return <SpaServicesPageClient />
}
