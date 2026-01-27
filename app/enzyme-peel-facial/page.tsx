import type { Metadata } from "next";
import EnzymePeelFacialPageClient from "./EnzymePeelFacialPageClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com";

export const metadata: Metadata = {
  title: "Enzyme Peel Facials | Natural Fruit Enzyme Peels | Queen Creek, AZ",
  description:
    "Natural fruit enzyme peels in Queen Creek, AZ. Gentle exfoliation with pumpkin, pomegranate, blueberry, and more. No downtime. Book at Rejuvenate Skin Spa!",
  keywords:
    "enzyme peel facial, fruit enzyme peel, natural facial peel, enzyme facial treatment, gentle chemical peel alternative, sensitive skin treatment, Queen Creek facial, natural exfoliation, enzyme peel Arizona",
  openGraph: {
    title: "Enzyme Peel Facials | Natural Fruit Peels | Queen Creek, AZ",
    description:
      "Natural fruit enzyme peels in Queen Creek, AZ. Gentle exfoliation with no downtime at Rejuvenate Skin Spa.",
    url: `${siteUrl}/enzyme-peel-facial`,
    images: [
      {
        url: `${siteUrl}/og/og-enzyme-peel-facial.jpg`,
        width: 1200,
        height: 630,
        alt: "Enzyme Peel Facials at Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enzyme Peel Facials | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Natural fruit enzyme peels in Queen Creek, AZ. No downtime.",
    images: [`${siteUrl}/og/og-enzyme-peel-facial.jpg`],
  },
};

export default function EnzymeFacialPeelsPage() {
  return <EnzymePeelFacialPageClient />;
}
