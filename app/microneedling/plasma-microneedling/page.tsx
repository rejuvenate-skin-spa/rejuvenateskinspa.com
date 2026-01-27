import type { Metadata } from "next";
import PlasmaMicroneedlingClientPage from "../_components/PlasmaMicroneedlingClientPage";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com";

export const metadata: Metadata = {
  title:
    "Plasma Microneedling | Plexr Plasma Pen | Queen Creek, AZ",
  description:
    "Plasma Microneedling in Queen Creek, AZ. Advanced resurfacing and tightening using Plexr Plasma technology combined with targeted skin renewal for smoother texture and refined tone.",
  keywords:
    "plasma microneedling, plexr plasma pen, plasma skin resurfacing, skin tightening, microneedling Queen Creek Arizona",
  openGraph: {
    title: "Plasma Microneedling | Plexr Plasma | Queen Creek, AZ",
    description:
      "Advanced plasma microneedling using Plexr technology at Rejuvenate Skin Spa in Queen Creek, AZ.",
    url: `${siteUrl}/microneedling/plasma-microneedling`,
    images: [
      {
        url: `${siteUrl}/og/og-plasma-microneedling.jpg`,
        width: 1200,
        height: 630,
        alt: "Plasma Microneedling at Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plasma Microneedling | Queen Creek, AZ",
    description:
      "Advanced plasma microneedling at Rejuvenate Skin Spa in Queen Creek, AZ.",
    images: [`${siteUrl}/og/og-plasma-microneedling.jpg`],
  },
};

export default function PlasmaMicroneedlingPage() {
  return <PlasmaMicroneedlingClientPage />;
}


