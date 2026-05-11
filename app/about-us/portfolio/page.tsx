import type { Metadata } from "next"
import PortfolioPageClient from "./PortfolioPageClient"

export const metadata: Metadata = {
  title: "Portfolio | Rejuvenate Skin Spa | Queen Creek, Arizona",
  description:
    "View real client results and transformations at Rejuvenate Skin Spa in Queen Creek, Arizona. See before and after photos showcasing our advanced skincare treatments including plasma skin tightening, chemical peels, and microneedling.",
  alternates: { canonical: "/about-us/portfolio" },
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}

