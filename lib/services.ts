/**
 * Centralized registry of treatment detail pages.
 *
 * Single source of truth for service names, categories, descriptions,
 * and paths. Used by Service schema generation and available for reuse
 * by breadcrumbs, sitemaps, or any feature that needs service metadata.
 *
 * Only fields that can be sourced truthfully from the current codebase
 * are included. Price, duration, and offer data are intentionally omitted.
 */

export interface ServiceEntry {
  /** URL path, e.g. "/microneedling/traditional-microneedling" */
  path: string;
  /** Human-readable treatment name */
  name: string;
  /** Parent category label */
  category: string;
  /** Meta description sourced from the page's metadata export */
  description: string;
  /** OG image path (relative), only if the page defines one */
  image?: string;
}

export const serviceRegistry: readonly ServiceEntry[] = [
  // ── Spa Services ────────────────────────────────────────────────
  {
    path: "/spa-services/dermaplaning-treatment",
    name: "Dermaplaning",
    category: "Spa Services",
    description:
      "Professional dermaplaning facial treatment in Queen Creek, Arizona. Safe exfoliation that removes dead skin cells and fine facial hair. Instant results, no downtime. Perfect for all skin types.",
    image: "/og/og-dermaplaning.jpg",
  },
  {
    path: "/spa-services/eyebrow-lamination-treatment",
    name: "Eyebrow Lamination",
    category: "Spa Services",
    description:
      "Transform your brows with professional eyebrow lamination at Rejuvenate Skin Spa in Queen Creek, AZ. Get fuller, perfectly shaped eyebrows that last 6-8 weeks.",
    image: "/og/og-eyebrow-lamination.jpg",
  },
  {
    path: "/spa-services/microblading-treatment",
    name: "Microblading",
    category: "Spa Services",
    description:
      "Transform your eyebrows with professional microblading at Rejuvenate Skin Spa in Queen Creek, AZ. Semi-permanent, natural-looking results that last 1-3 years.",
    image: "/og/og-microblading.jpg",
  },
  {
    path: "/spa-services/red-light-therapy-treatment",
    name: "Red Light Therapy",
    category: "Spa Services",
    description:
      "Experience healing red light therapy at Rejuvenate Skin Spa in Queen Creek, AZ. FDA-approved LED treatment for anti-aging, acne, pain relief, and skin rejuvenation.",
    image: "/og/og-red-light-therapy.jpg",
  },

  // ── Microneedling ───────────────────────────────────────────────
  {
    path: "/microneedling/traditional-microneedling",
    name: "Traditional Microneedling",
    category: "Microneedling",
    description:
      "Traditional microneedling (CIT) at Rejuvenate Skin Spa in Queen Creek, AZ. Improve fine lines, acne scars, pores, and skin texture.",
    image: "/og/og-traditional-microneedling.jpg",
  },
  {
    path: "/microneedling/sqt-bio-microneedling",
    name: "SQT Bio-Microneedling",
    category: "Microneedling",
    description:
      "SQT Bio-Microneedling in Queen Creek, AZ. Needle-free microneedling using marine sponge spicules to support collagen renewal, smoother texture, and brighter tone with minimal downtime.",
    image: "/og/og-sqt-bio-microneedling.jpg",
  },
  {
    path: "/microneedling/plasma-microneedling",
    name: "Plasma Microneedling",
    category: "Microneedling",
    description:
      "Plasma Microneedling in Queen Creek, AZ. Advanced resurfacing and tightening using Plexr Plasma technology combined with targeted skin renewal for smoother texture and refined tone.",
    image: "/og/og-plasma-microneedling.jpg",
  },

  // ── Chemical Peels ──────────────────────────────────────────────
  {
    path: "/chemical-peels/biorepeel-body-peels",
    name: "BioRePeel Body Peel",
    category: "Chemical Peels",
    description:
      "BioRePeel 50 TCA body treatment in Queen Creek, Arizona. Intensive body skin rejuvenation for back, chest, arms, and legs. Treats body acne, scarring, and hyperpigmentation.",
  },
  {
    path: "/chemical-peels/biorepeel-chemical-peels",
    name: "BioRePeel Chemical Peel",
    category: "Chemical Peels",
    description:
      "BioRePeelCl3 biphasic chemical peel treatment in Queen Creek, Arizona. Advanced TCA peel with amino acids, vitamins, and GABA. Minimal peeling, maximum results.",
  },
  {
    path: "/chemical-peels/biorepeel-facial-peels",
    name: "BioRePeel Facial Peel",
    category: "Chemical Peels",
    description:
      "BioRePeel 35 TCA facial treatment in Queen Creek, Arizona. Gentle yet powerful facial rejuvenation with 35% TCA, amino acids, and vitamins. Minimal downtime, visible results.",
  },
  {
    path: "/chemical-peels/glycolic-acid-peels",
    name: "Glycolic Acid Peel",
    category: "Chemical Peels",
    description:
      "Professional glycolic acid peel treatments in Queen Creek, Arizona. Gentle AHA exfoliation for brighter skin, fine lines, clogged pores, and uneven tone. Minimal downtime.",
  },
  {
    path: "/chemical-peels/tca-peels",
    name: "TCA Peel",
    category: "Chemical Peels",
    description:
      "Professional TCA 25% chemical peel treatment in Queen Creek, Arizona. Medium to deep depth peel for wrinkles, acne scars, sun damage, and skin texture improvement.",
  },

  // ── Enzyme Peel Facials ─────────────────────────────────────────
  {
    path: "/enzyme-peel-facial/blueberry-enzyme-peel",
    name: "Blueberry Enzyme Peel",
    category: "Enzyme Peel Facials",
    description:
      "Gentle Blueberry Enzyme Peel rich in antioxidants. Perfect for sensitive skin renewal at Rejuvenate Skin Spa in Queen Creek, AZ.",
  },
  {
    path: "/enzyme-peel-facial/cherry-enzyme-peel",
    name: "Cherry Enzyme Peel",
    category: "Enzyme Peel Facials",
    description:
      "Luminous cherry enzyme peel with 5% lactic acid, arbutin, and kojic acid. Restorative exfoliation with antioxidant protection in Queen Creek, AZ.",
  },
  {
    path: "/enzyme-peel-facial/coconut-papaya-enzyme-peel",
    name: "Coconut Papaya Enzyme Peel",
    category: "Enzyme Peel Facials",
    description:
      "Tropical Coconut-Papaya Enzyme Peel for deep hydration and gentle exfoliation. Perfect for dry skin at Rejuvenate Skin Spa in Queen Creek, AZ.",
  },
  {
    path: "/enzyme-peel-facial/lemon-enzyme-peel",
    name: "Lemon Enzyme Peel",
    category: "Enzyme Peel Facials",
    description:
      "Powerful brightening peel with arbutin, lactic acid, glycolic acid, and kojic acid. Ideal for sun-damaged skin at Rejuvenate Skin Spa in Queen Creek, AZ.",
  },
  {
    path: "/enzyme-peel-facial/passion-fruit-enzyme-peel",
    name: "Passion Fruit Enzyme Peel",
    category: "Enzyme Peel Facials",
    description:
      "Tropical radiance renewal with 30% glycolic acid and collagen peptides. Deep exfoliation and anti-aging benefits at Rejuvenate Skin Spa in Queen Creek, AZ.",
  },
  {
    path: "/enzyme-peel-facial/pomegranate-enzyme-peel",
    name: "Pomegranate Enzyme Peel",
    category: "Enzyme Peel Facials",
    description:
      "Premium antioxidant renewal for aging, oily, and acne-prone skin. Targets pigmentation and acne scars at Rejuvenate Skin Spa in Queen Creek, AZ.",
  },
  {
    path: "/enzyme-peel-facial/pumpkin-orange-enzyme-peel",
    name: "Pumpkin Orange Enzyme Peel",
    category: "Enzyme Peel Facials",
    description:
      "Pumpkin-Orange Enzyme Peel for skin renewal and rejuvenation at Rejuvenate Skin Spa in Queen Creek, AZ.",
  },
  {
    path: "/enzyme-peel-facial/raspberry-peach-enzyme-peel",
    name: "Raspberry Peach Enzyme Peel",
    category: "Enzyme Peel Facials",
    description:
      "Gentle exfoliation and deep hydration with raspberry and peach extract. Ideal for sensitive or dry skin at Rejuvenate Skin Spa in Queen Creek, AZ.",
  },

  // ── Plexr Plasma Skin Tightening ────────────────────────────────
  {
    path: "/plexr-plasma-skin-tightening/ablative-skin-resurfacing",
    name: "Ablative Skin Resurfacing",
    category: "Plexr Plasma Skin Tightening",
    description:
      "Deep ablative skin resurfacing using Plexr plasma technology in Queen Creek, Arizona. Maximum depth treatment for severe wrinkles, deep scars, and significant skin damage.",
  },
  {
    path: "/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing",
    name: "Nano-Ablative Skin Resurfacing",
    category: "Plexr Plasma Skin Tightening",
    description:
      "Gentle nano-ablative skin resurfacing with Plexr plasma. Improve skin texture with zero downtime at Rejuvenate Skin Spa in Queen Creek, AZ.",
  },
  {
    path: "/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing",
    name: "Semi-Ablative Skin Resurfacing",
    category: "Plexr Plasma Skin Tightening",
    description:
      "Semi-ablative skin resurfacing treatment using Plexr plasma technology in Queen Creek, Arizona. Moderate depth treatment for wrinkles, scars, and skin texture improvement.",
  },
  {
    path: "/plexr-plasma-skin-tightening/mole-removal-treatment",
    name: "Mole Removal",
    category: "Plexr Plasma Skin Tightening",
    description:
      "Professional mole removal using Plexr plasma technology in Queen Creek, Arizona. Safe, precise mole removal with minimal scarring. Non-surgical treatment option.",
  },
  {
    path: "/plexr-plasma-skin-tightening/skin-tag-removal-treatment",
    name: "Skin Tag Removal",
    category: "Plexr Plasma Skin Tightening",
    description:
      "Professional skin tag removal using Plexr plasma technology in Queen Creek, Arizona. Quick, painless treatment with minimal downtime.",
  },
  {
    path: "/plexr-plasma-skin-tightening/sun-spot-removal-treatment",
    name: "Sun Spot Removal",
    category: "Plexr Plasma Skin Tightening",
    description:
      "Professional sun spot and age spot removal using Plexr plasma technology at Rejuvenate Skin Spa in Queen Creek, AZ. Precise pigmentation removal.",
  },
  {
    path: "/plexr-plasma-skin-tightening/wart-removal-treatment",
    name: "Wart Removal",
    category: "Plexr Plasma Skin Tightening",
    description:
      "Professional wart removal using Plexr plasma technology in Queen Creek, Arizona. Effective, non-surgical wart treatment with minimal downtime. Safe and precise removal.",
  },
] as const;

/**
 * Look up a service entry by its URL path.
 * Returns undefined if the path is not in the registry.
 */
export function getService(path: string): ServiceEntry | undefined {
  return serviceRegistry.find((s) => s.path === path);
}
