import type { Metadata } from "next";
import SemiAblativeSkinResurfacingClientPage from "./SemiAblativeSkinResurfacingClientPage";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title: "Semi-Ablative Skin Resurfacing | Plexr Plasma | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Semi-ablative skin resurfacing treatment using Plexr plasma technology in Queen Creek, Arizona. Moderate depth treatment for wrinkles, scars, and skin texture improvement. Balanced results with manageable recovery.",
  keywords:
    "semi-ablative skin resurfacing, Plexr plasma, moderate depth treatment, skin resurfacing, wrinkle reduction, scar treatment, Queen Creek Arizona",
  alternates: { canonical: "/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing" },
};

export default function SemiAblativeSkinResurfacingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing")!)) }}
      />
      <SemiAblativeSkinResurfacingClientPage />
    </>
  );
}
