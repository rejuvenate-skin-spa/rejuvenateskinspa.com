import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService } from "@/lib/services";
import BioMicroneedlingClientPage from "../_components/BioMicroneedlingClientPage";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com";

export const metadata: Metadata = {
  title:
    "SQT Bio-Microneedling | Needle-Free Microneedling | Queen Creek, AZ",
  description:
    "SQT Bio-Microneedling in Queen Creek, AZ. Needle-free microneedling using marine sponge spicules to support collagen renewal, smoother texture, and brighter tone with minimal downtime.",
  keywords:
    "SQT bio-microneedling, bio microneedling, needle-free microneedling, sponge spicules, collagen renewal, Queen Creek Arizona",
  alternates: { canonical: "/microneedling/sqt-bio-microneedling" },
  openGraph: {
    title: "SQT Bio-Microneedling | Needle-Free | Queen Creek, AZ",
    description:
      "Needle-free microneedling using marine sponge spicules at Rejuvenate Skin Spa in Queen Creek, AZ.",
    url: `${siteUrl}/microneedling/sqt-bio-microneedling`,
    images: [
      {
        url: `${siteUrl}/og/og-sqt-bio-microneedling.jpg`,
        width: 1200,
        height: 630,
        alt: "SQT Bio-Microneedling at Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SQT Bio-Microneedling | Queen Creek, AZ",
    description:
      "Needle-free microneedling at Rejuvenate Skin Spa in Queen Creek, AZ.",
    images: [`${siteUrl}/og/og-sqt-bio-microneedling.jpg`],
  },
};

export default function SqtBioMicroneedlingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/microneedling/sqt-bio-microneedling")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/microneedling/sqt-bio-microneedling")!)) }}
      />
      <BioMicroneedlingClientPage />
    </>
  );
}

