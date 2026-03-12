import type { Metadata } from "next";
import AblativeSkinResurfacingClientPage from "./AblativeSkinResurfacingClientPage";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title: "Ablative Skin Resurfacing | Deep Plexr Plasma Treatment | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Deep ablative skin resurfacing using Plexr plasma technology in Queen Creek, Arizona. Maximum depth treatment for severe wrinkles, deep scars, and significant skin damage. Dramatic results.",
  keywords:
    "ablative skin resurfacing, deep skin resurfacing, Plexr plasma, deep treatment, severe wrinkle treatment, deep scar treatment, Queen Creek Arizona",
};

export default function AblativeSkinResurfacingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/plexr-plasma-skin-tightening/ablative-skin-resurfacing")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/plexr-plasma-skin-tightening/ablative-skin-resurfacing")!)) }}
      />
      <AblativeSkinResurfacingClientPage />
    </>
  );
}
