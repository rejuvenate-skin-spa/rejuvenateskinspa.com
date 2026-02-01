import { MetadataRoute } from "next"

/**
 * Comprehensive sitemap including all public service pages.
 * URLs are organized by priority:
 * - 1.0: Homepage
 * - 0.8: Service hubs and top-level pages
 * - 0.7: Service detail pages
 * - 0.5: Legal/utility pages
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com"
  const lastModified = new Date()

  // All public routes organized by section
  const routes: Array<{
    path: string
    priority: number
    changeFrequency: "monthly" | "weekly" | "yearly"
  }> = [
    // Homepage
    { path: "", priority: 1.0, changeFrequency: "monthly" },

    // Top-level pages
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about-us/portfolio", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.6, changeFrequency: "monthly" },

    // Spa Services hub + detail pages
    { path: "/spa-services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/spa-services/dermaplaning-treatment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/spa-services/eyebrow-lamination-treatment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/spa-services/microblading-treatment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/spa-services/red-light-therapy-treatment", priority: 0.7, changeFrequency: "monthly" },

    // Microneedling hub + detail pages
    { path: "/microneedling", priority: 0.8, changeFrequency: "monthly" },
    { path: "/microneedling/traditional-microneedling", priority: 0.7, changeFrequency: "monthly" },
    { path: "/microneedling/sqt-bio-microneedling", priority: 0.7, changeFrequency: "monthly" },
    { path: "/microneedling/plasma-microneedling", priority: 0.7, changeFrequency: "monthly" },

    // Chemical Peels hub + detail pages
    { path: "/chemical-peels", priority: 0.8, changeFrequency: "monthly" },
    { path: "/chemical-peels/biorepeel-body-peels", priority: 0.7, changeFrequency: "monthly" },
    { path: "/chemical-peels/biorepeel-chemical-peels", priority: 0.7, changeFrequency: "monthly" },
    { path: "/chemical-peels/biorepeel-facial-peels", priority: 0.7, changeFrequency: "monthly" },
    { path: "/chemical-peels/glycolic-acid-peels", priority: 0.7, changeFrequency: "monthly" },
    { path: "/chemical-peels/tca-peels", priority: 0.7, changeFrequency: "monthly" },

    // Enzyme Peel Facial hub + detail pages
    { path: "/enzyme-peel-facial", priority: 0.8, changeFrequency: "monthly" },
    { path: "/enzyme-peel-facial/blueberry-enzyme-peel", priority: 0.7, changeFrequency: "monthly" },
    { path: "/enzyme-peel-facial/cherry-enzyme-peel", priority: 0.7, changeFrequency: "monthly" },
    { path: "/enzyme-peel-facial/coconut-papaya-enzyme-peel", priority: 0.7, changeFrequency: "monthly" },
    { path: "/enzyme-peel-facial/lemon-enzyme-peel", priority: 0.7, changeFrequency: "monthly" },
    { path: "/enzyme-peel-facial/passion-fruit-enzyme-peel", priority: 0.7, changeFrequency: "monthly" },
    { path: "/enzyme-peel-facial/pomegranate-enzyme-peel", priority: 0.7, changeFrequency: "monthly" },
    { path: "/enzyme-peel-facial/pumpkin-orange-enzyme-peel", priority: 0.7, changeFrequency: "monthly" },
    { path: "/enzyme-peel-facial/raspberry-peach-enzyme-peel", priority: 0.7, changeFrequency: "monthly" },

    // Plexr Plasma Skin Tightening hub + detail pages
    { path: "/plexr-plasma-skin-tightening", priority: 0.8, changeFrequency: "monthly" },
    { path: "/plexr-plasma-skin-tightening/ablative-skin-resurfacing", priority: 0.7, changeFrequency: "monthly" },
    { path: "/plexr-plasma-skin-tightening/mole-removal-treatment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing", priority: 0.7, changeFrequency: "monthly" },
    { path: "/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing", priority: 0.7, changeFrequency: "monthly" },
    { path: "/plexr-plasma-skin-tightening/skin-tag-removal-treatment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/plexr-plasma-skin-tightening/sun-spot-removal-treatment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/plexr-plasma-skin-tightening/wart-removal-treatment", priority: 0.7, changeFrequency: "monthly" },

    // Plexr Sales landing page
    { path: "/plexr-sales", priority: 0.6, changeFrequency: "monthly" },

    // Legal/utility pages (lower priority)
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.5, changeFrequency: "yearly" },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
