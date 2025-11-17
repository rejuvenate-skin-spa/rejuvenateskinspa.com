import type { Metadata } from "next"
import MicrobladingClientPage from "./MicrobladingClientPage"

export const metadata: Metadata = {
  title: "Microblading Treatment | Natural Eyebrow Enhancement | Rejuvenate Skin Spa",
  description:
    "Transform your eyebrows with professional microblading at Rejuvenate Skin Spa in Queen Creek, AZ. Semi-permanent, natural-looking results that last 1-3 years.",
  keywords: "microblading, eyebrow enhancement, semi-permanent makeup, Queen Creek, Arizona, natural brows",
}

export default function MicrobladingPage() {
  return <MicrobladingClientPage />
}
