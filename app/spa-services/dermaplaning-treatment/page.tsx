import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService } from "@/lib/services";
import DermaplaningTreatmentClientPage from "./DermaplaningTreatmentClientPage";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com";

export const metadata: Metadata = {
  title: "Dermaplaning Facial | Exfoliation Treatment | Queen Creek, AZ",
  description:
    "Professional dermaplaning facial treatment in Queen Creek, Arizona. Safe exfoliation that removes dead skin cells and fine facial hair. Instant results, no downtime. Perfect for all skin types.",
  keywords:
    "dermaplaning, dermaplaning facial, exfoliation treatment, peach fuzz removal, facial hair removal, skin smoothing, Queen Creek Arizona, instant results",
  openGraph: {
    title: "Dermaplaning Facial | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Professional dermaplaning facial treatment in Queen Creek, Arizona. Instant results, no downtime.",
    url: `${siteUrl}/spa-services/dermaplaning-treatment`,
    images: [
      {
        url: `${siteUrl}/og/og-dermaplaning.jpg`,
        width: 1200,
        height: 630,
        alt: "Dermaplaning Facial at Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dermaplaning Facial | Queen Creek, AZ",
    description:
      "Professional dermaplaning treatment at Rejuvenate Skin Spa in Queen Creek, AZ.",
    images: [`${siteUrl}/og/og-dermaplaning.jpg`],
  },
};

export default function DermaplaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/spa-services/dermaplaning-treatment")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/spa-services/dermaplaning-treatment")!)) }}
      />
      <DermaplaningTreatmentClientPage />
    </>
  );
}
