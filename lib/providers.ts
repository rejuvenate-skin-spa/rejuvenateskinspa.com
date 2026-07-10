/**
 * Provider registry for Rejuvenate Skin Spa.
 *
 * Single source of truth for provider/practitioner data.
 * Used by Person schema, provider pages, and internal linking.
 *
 * TODO — Optional enrichment when data is available:
 *  • yearsOfExperience: if you want this in page copy
 *  • sameAs: personal LinkedIn, Instagram, or other profile URLs
 */

export interface ProviderCredential {
  /** Display name of the credential or license. */
  name: string;
  /** Schema.org credentialCategory, e.g. "Professional License" or "Certification". */
  credentialCategory: string;
  /** Issuing organization name, when known. */
  recognizedBy?: string;
  /** License or certificate ID from the issuing body. */
  credentialId?: string;
  /** ISO date the credential was issued (YYYY-MM-DD). */
  dateIssued?: string;
  /** ISO expiration date when applicable (YYYY-MM-DD). */
  expires?: string;
}

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
  /** Professional licenses and certifications for Person.hasCredential. */
  credentials?: readonly ProviderCredential[];
}

export const bridgetteBall: ProviderEntry = {
  slug: "bridgette-ball",
  name: "Bridgette Ball",
  jobTitle: "Founder & Licensed Cosmetologist",
  path: "/about-us/bridgette-ball",
  description:
    "Bridgette Ball is the founder and lead practitioner at Rejuvenate Skin Spa in Queen Creek, Arizona. A licensed cosmetologist with advanced certifications in Plexr plasma technology and chemical peel applications, Bridgette specializes in non-surgical aesthetic skin treatments.",

  image: "/images/bridgette-ball-rejuventate-skin-spa.jpeg",

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

  // Sourced from Bridgette's physical/digital certificates — do not invent issuers.
  credentials: [
    {
      name: "Cosmetology License",
      credentialCategory: "Professional License",
      recognizedBy: "Arizona Barbering & Cosmetology Board",
      credentialId: "11502134",
      dateIssued: "2025-12-01",
      expires: "2027-11-11",
    },
    {
      name: "Plexr Plasma Beauty Training",
      credentialCategory: "Certificate of Training",
      recognizedBy: "Plexr",
      dateIssued: "2020",
    },
    {
      name: "BioRePeelCl3 Level 1 Certification - Topical Application Protocol (BioRePeelCl3 Rose)",
      credentialCategory: "Certification",
      recognizedBy: "Bioskin Aesthetics",
      credentialId: "1ll5t4eb6a",
      dateIssued: "2026-07-10",
    },
    {
      name: "BioRePeelCl3 Level 1 Certification - Topical Application Protocol (BioRePeelCl3 Gold)",
      credentialCategory: "Certification",
      recognizedBy: "Bioskin Aesthetics",
      credentialId: "ua4bamexdo",
      dateIssued: "2026-07-10",
    },
    {
      name: "BioRePeelCl3 Level 1 Certification - Topical Application Protocol (BioRePeelCl3 Blue)",
      credentialCategory: "Certification",
      recognizedBy: "Bioskin Aesthetics",
      credentialId: "vyydrh4a9t",
      dateIssued: "2026-07-10",
    },
    {
      name: "Microblading Training",
      credentialCategory: "Certificate of Training",
      recognizedBy: "Eyebrow Ink Academy / PureSalon LLC",
      dateIssued: "2018-09-16",
    },
  ],
};

export const providers = [bridgetteBall] as const;

export function getProvider(slug: string): ProviderEntry | undefined {
  return providers.find((p) => p.slug === slug);
}
