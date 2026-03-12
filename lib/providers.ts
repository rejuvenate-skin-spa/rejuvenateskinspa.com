/**
 * Provider registry for Rejuvenate Skin Spa.
 *
 * Single source of truth for provider/practitioner data.
 * Used by Person schema, provider pages, and internal linking.
 *
 * ┌─────────────────────────────────────────────────────────┐
 * │  TODO — Fill in the following before publishing:        │
 * │                                                         │
 * │  • image: Add a professional headshot path              │
 * │    (e.g. "/images/bridgette-ball-headshot.jpg")         │
 * │                                                         │
 * │  • credentials: Add specific license numbers,           │
 * │    certification names, or training programs if you     │
 * │    want them displayed and included in schema.          │
 * │                                                         │
 * │  • yearsOfExperience: Add if you want this in copy.     │
 * │                                                         │
 * │  • sameAs: Add personal LinkedIn, Instagram, or other   │
 * │    profile URLs if they exist and should be linked.     │
 * └─────────────────────────────────────────────────────────┘
 */

export interface ProviderEntry {
  slug: string;
  name: string;
  jobTitle: string;
  path: string;
  description: string;
  /** Relative image path for headshot — set to undefined until a real photo is added. */
  image?: string;
  /** External profile URLs for schema sameAs — only real, verified URLs. */
  sameAs?: string[];
  /** Treatment categories this provider specializes in. */
  knowsAbout: string[];
}

export const bridgetteBall: ProviderEntry = {
  slug: "bridgette-ball",
  name: "Bridgette Ball",
  jobTitle: "Founder & Licensed Cosmetologist",
  path: "/about-us/bridgette-ball",
  description:
    "Bridgette Ball is the founder and lead practitioner at Rejuvenate Skin Spa in Queen Creek, Arizona. A licensed cosmetologist with advanced certifications in Plexr plasma technology and chemical peel applications, Bridgette specializes in non-surgical aesthetic skin treatments.",

  image: "/images/Bridge.jpg",

  // TODO: Add verified personal profile URLs if they exist
  sameAs: undefined,

  knowsAbout: [
    "Plexr Plasma Skin Tightening",
    "Microneedling",
    "Chemical Peels",
    "Enzyme Peel Facials",
    "Dermaplaning",
    "Microblading",
    "Red Light Therapy",
  ],
};

export const providers = [bridgetteBall] as const;

export function getProvider(slug: string): ProviderEntry | undefined {
  return providers.find((p) => p.slug === slug);
}
