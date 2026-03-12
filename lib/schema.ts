import { siteConfig } from "./site-config";

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

const SITE_URL = siteConfig.url;

function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Stable @id anchors used across schema blocks for entity linking. */
export const schemaIds = {
  localBusiness: `${SITE_URL}/#localbusiness`,
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  founderPerson: `${SITE_URL}/#founder`,
} as const;

function buildPostalAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: siteConfig.address.country,
  };
}

function buildContactPoint() {
  return {
    "@type": "ContactPoint" as const,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  };
}

// ---------------------------------------------------------------------------
// Organization
// ---------------------------------------------------------------------------

export function buildOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": schemaIds.organization,
    name: siteConfig.name,
    url: `${SITE_URL}/`,
    logo: absoluteUrl(siteConfig.logo),
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    address: buildPostalAddress(),
    contactPoint: buildContactPoint(),
    sameAs: [...siteConfig.sameAs],
  };
}

// ---------------------------------------------------------------------------
// HealthAndBeautyBusiness (LocalBusiness subtype)
// ---------------------------------------------------------------------------

export function buildLocalBusiness() {
  const openSpecs = siteConfig.openingHours.map((slot) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: slot.dayOfWeek,
    opens: slot.opens,
    closes: slot.closes,
  }));

  const closedSpecs = siteConfig.closedDays.map((day) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: day,
    opens: "00:00",
    closes: "00:00",
  }));

  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": schemaIds.localBusiness,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    description: siteConfig.description,
    url: `${SITE_URL}/`,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    image: absoluteUrl(siteConfig.image),
    logo: absoluteUrl(siteConfig.logo),
    priceRange: siteConfig.priceRange,
    currenciesAccepted: siteConfig.currenciesAccepted,
    paymentAccepted: siteConfig.paymentAccepted,
    address: buildPostalAddress(),
    geo: {
      "@type": "GeoCoordinates" as const,
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    contactPoint: buildContactPoint(),
    areaServed: siteConfig.areaServed.map((city) => {
      const entry: Record<string, string> = {
        "@type": "City",
        name: city.name,
      };
      if (city.sameAs) entry.sameAs = city.sameAs;
      return entry;
    }),
    openingHoursSpecification: [...openSpecs, ...closedSpecs],
    sameAs: [...siteConfig.sameAs],
    parentOrganization: { "@id": schemaIds.organization },
    founder: { "@id": schemaIds.founderPerson },
  };
}

// ---------------------------------------------------------------------------
// Person (provider / practitioner)
// ---------------------------------------------------------------------------

export interface PersonInput {
  name: string;
  jobTitle: string;
  description: string;
  path: string;
  image?: string;
  sameAs?: string[];
  knowsAbout?: string[];
}

export function buildPerson(input: PersonInput) {
  const person: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": schemaIds.founderPerson,
    name: input.name,
    jobTitle: input.jobTitle,
    description: input.description,
    url: absoluteUrl(input.path),
    worksFor: { "@id": schemaIds.localBusiness },
  };
  if (input.image) {
    person.image = absoluteUrl(input.image);
  }
  if (input.sameAs && input.sameAs.length > 0) {
    person.sameAs = input.sameAs;
  }
  if (input.knowsAbout && input.knowsAbout.length > 0) {
    person.knowsAbout = input.knowsAbout;
  }
  return person;
}

// ---------------------------------------------------------------------------
// WebSite
// ---------------------------------------------------------------------------

export function buildWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": schemaIds.website,
    url: `${SITE_URL}/`,
    name: siteConfig.name,
    publisher: { "@id": schemaIds.organization },
  };
}

// ---------------------------------------------------------------------------
// BreadcrumbList
// ---------------------------------------------------------------------------

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : absoluteUrl(item.url),
    })),
  };
}

// ---------------------------------------------------------------------------
// FAQPage
// ---------------------------------------------------------------------------

export interface FAQEntry {
  question: string;
  answer: string;
}

/**
 * Build FAQPage schema from a flat array of question/answer pairs.
 * Normalises newlines in answers to spaces for cleaner schema output.
 */
export function buildFAQPage(entries: FAQEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer.replace(/\n/g, " "),
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// Service (stub builder — ready for page-level adoption)
// ---------------------------------------------------------------------------

export interface ServiceInput {
  name: string;
  description: string;
  /** URL path (e.g. "/microneedling/traditional-microneedling") or absolute URL. */
  path: string;
  /** Optional image path (relative or absolute). */
  image?: string;
  /** Optional category label, e.g. "Microneedling". */
  category?: string;
}

/**
 * Build a Service schema block. Provider is automatically linked
 * to the LocalBusiness entity via @id.
 *
 * Price / duration / offer fields are intentionally omitted here;
 * add them per-page once structured pricing data is available.
 */
export function buildService(input: ServiceInput) {
  const service: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.path.startsWith("http") ? input.path : absoluteUrl(input.path),
    provider: { "@id": schemaIds.localBusiness },
    areaServed: {
      "@type": "City",
      name: siteConfig.address.city,
    },
  };
  if (input.image) {
    service.image = input.image.startsWith("http")
      ? input.image
      : absoluteUrl(input.image);
  }
  if (input.category) {
    service.category = input.category;
  }
  return service;
}
