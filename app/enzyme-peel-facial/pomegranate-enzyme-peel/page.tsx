import type { Metadata } from "next";
import PomegranateEnzymePeelClientPage from "./PomegranateEnzymePeelClientPage";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title:
    "Pomegranate Enzyme Peel | Antioxidant Renewal | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Premium antioxidant renewal for aging, oily, and acne-prone skin. Targets pigmentation and acne scars at Rejuvenate Skin Spa in Queen Creek, AZ.",
  keywords:
    "pomegranate enzyme peel, antioxidant facial, acne treatment, aging skin, oily skin, pigmentation, acne scars, sun damage, Queen Creek spa",
  alternates: { canonical: "/enzyme-peel-facial/pomegranate-enzyme-peel" },
};

export default function PomegranateEnzymePeelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/enzyme-peel-facial/pomegranate-enzyme-peel")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/enzyme-peel-facial/pomegranate-enzyme-peel")!)) }}
      />
      <PomegranateEnzymePeelClientPage />
    </>
  );
}
