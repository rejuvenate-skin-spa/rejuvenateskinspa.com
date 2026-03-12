import type { Metadata } from "next";
import GlycolicAcidPeelPageClient from "./GlycolicAcidPeelPageClient";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title: "Glycolic Acid Peel | AHA Chemical Peel | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Professional glycolic acid peel treatments in Queen Creek, Arizona. Gentle AHA exfoliation for brighter skin, fine lines, clogged pores, and uneven tone. Minimal downtime. Book your consultation.",
  keywords:
    "glycolic acid peel, AHA peel, alpha hydroxy acid peel, gentle chemical peel, skin brightening, pore treatment, Queen Creek Arizona, glycolic peel treatment",
};

export default function GlycolicAcidPeelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/chemical-peels/glycolic-acid-peels")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/chemical-peels/glycolic-acid-peels")!)) }}
      />
      <GlycolicAcidPeelPageClient />
    </>
  );
}

