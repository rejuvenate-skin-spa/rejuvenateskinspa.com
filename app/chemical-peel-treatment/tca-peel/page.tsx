import type { Metadata } from "next";
import TcaPeelPageClient from "./TcaPeelPageClient";

export const metadata: Metadata = {
  title: "TCA 25% Chemical Peel | Deep Skin Rejuvenation | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Professional TCA 25% chemical peel treatment in Queen Creek, Arizona. Medium to deep depth peel for wrinkles, acne scars, sun damage, and skin texture improvement. Dramatic skin transformation.",
  keywords:
    "TCA 25% peel, TCA chemical peel, trichloroacetic acid peel, deep chemical peel, skin resurfacing, wrinkle reduction, acne scar treatment, Queen Creek Arizona",
};

export default function TcaPeelPage() {
  return <TcaPeelPageClient />;
}
