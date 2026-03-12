import type { Metadata } from "next";
import RaspberryPeachEnzymePeelClientPage from "./RaspberryPeachEnzymePeelClientPage";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title:
    "Raspberry-Peach Enzyme Peel | Hydrating Facial | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Gentle exfoliation and deep hydration with raspberry and peach extract. Ideal for sensitive or dry skin at Rejuvenate Skin Spa in Queen Creek, AZ.",
  keywords:
    "raspberry peach enzyme peel, gentle facial, hydrating treatment, anti-inflammatory, sensitive skin, dry skin, Queen Creek spa",
};

export default function RaspberryPeachEnzymePeelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/enzyme-peel-facial/raspberry-peach-enzyme-peel")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/enzyme-peel-facial/raspberry-peach-enzyme-peel")!)) }}
      />
      <RaspberryPeachEnzymePeelClientPage />
    </>
  );
}
