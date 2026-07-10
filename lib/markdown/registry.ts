import { serviceRegistry } from "@/lib/services";
import { bridgetteBall } from "@/lib/providers";
import type { MarkdownPageDefinition } from "./types";

/**
 * Permanent HTML redirects from next.config.mjs.
 * Markdown requests for these paths redirect to the destination `.md` URL.
 */
export const htmlRedirects: ReadonlyArray<{
  from: string;
  to: string;
}> = [
  { from: "/about-us/contact-us", to: "/contact" },
  { from: "/plasma-skin-tightening", to: "/plexr-plasma-skin-tightening" },
  { from: "/biorepeel-treatment", to: "/chemical-peels/biorepeel-chemical-peels" },
  {
    from: "/biorepeel-facial-chemical-peel",
    to: "/chemical-peels/biorepeel-chemical-peels",
  },
  {
    from: "/biorepeel-facial-chemical-peel/35-tca-peel",
    to: "/chemical-peels/biorepeel-facial-peels",
  },
  {
    from: "/biorepeel-facial-chemical-peel/50-tca-peel",
    to: "/chemical-peels/biorepeel-body-peels",
  },
  { from: "/chemical-peel-treatment/tca-peel", to: "/chemical-peels/tca-peels" },
  {
    from: "/chemical-peel-treatment/glycolic-acid-peel",
    to: "/chemical-peels/glycolic-acid-peels",
  },
  { from: "/about-us/portfolio", to: "/portfolio" },
];

const staticPages: readonly MarkdownPageDefinition[] = [
  {
    path: "",
    title: "Rejuvenate Skin Spa | Advanced Skincare Treatments | Queen Creek, AZ",
    description:
      "Transform your skin with advanced skincare treatments at Rejuvenate Skin Spa in Queen Creek, Arizona. Specializing in Plexr plasma skin tightening, chemical peels, microneedling, and luxury facial services.",
    type: "homepage",
    heading: "Rejuvenate Skin Spa",
  },
  {
    path: "/about-us",
    title: "About Us | Rejuvenate Skin Spa | Queen Creek, Arizona",
    description:
      "Rejuvenate Skin Spa in Queen Creek, AZ specializes in Plexr plasma, chemical peels, and microneedling. Founded by Bridgette Ball. Book a consultation today!",
    type: "page",
    heading: "About Rejuvenate Skin Spa",
  },
  {
    path: "/about-us/bridgette-ball",
    title:
      "Bridgette Ball — Founder & Licensed Cosmetologist | Rejuvenate Skin Spa",
    description: bridgetteBall.description,
    type: "author",
    heading: "Bridgette Ball",
  },
  {
    path: "/book",
    title: "Book an Appointment | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Book your skincare appointment online at Rejuvenate Skin Spa in Queen Creek, AZ. Schedule facials, chemical peels, microneedling, plasma treatments, and more.",
    type: "page",
    heading: "Book an Appointment",
  },
  {
    path: "/contact",
    title: "Contact Us | Rejuvenate Skin Spa | Queen Creek, AZ | (480) 204-9366",
    description:
      "Contact Rejuvenate Skin Spa in Queen Creek, AZ. Call (480) 204-9366 or visit 20162 E. Sonoqui Blvd. Schedule your skincare consultation today!",
    type: "page",
    heading: "Contact Rejuvenate Skin Spa",
  },
  {
    path: "/portfolio",
    title: "Results Gallery | Rejuvenate Skin Spa | Queen Creek, Arizona",
    description:
      "View real client results and transformations at Rejuvenate Skin Spa in Queen Creek, Arizona. See before and after photos showcasing our advanced skincare treatments.",
    type: "page",
    heading: "Results Gallery",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Privacy Policy for Rejuvenate Skin Spa in Queen Creek, Arizona. Learn how we collect, use, and protect your personal information.",
    type: "legal",
    heading: "Privacy Policy",
  },
  {
    path: "/terms-and-conditions",
    title: "Terms & Conditions | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Terms and Conditions for Rejuvenate Skin Spa in Queen Creek, Arizona. Please review our policies regarding services, appointments, and use of our website.",
    type: "legal",
    heading: "Terms and Conditions",
  },
  {
    path: "/plexr-sales",
    title: "Plexr Sales | Rejuvenate Skin Spa - Queen Creek, AZ",
    description:
      "Professional Plexr plasma device sales and training at Rejuvenate Skin Spa in Queen Creek, Arizona. Get the latest plasma technology for your practice.",
    type: "page",
    heading: "Plexr Equipment Sales",
  },
  {
    path: "/spa-services",
    title: "Spa Services | Dermaplaning, Microblading & More | Queen Creek, AZ",
    description:
      "Premium spa services in Queen Creek, Arizona. Professional dermaplaning facials, microblading, eyebrow lamination, and red light therapy. Expert practitioners, medical-grade products. Book your appointment today.",
    type: "category",
    heading: "Spa Services",
  },
  {
    path: "/microneedling",
    title:
      "Microneedling Services | Traditional, SQT Bio & Plasma | Queen Creek, AZ",
    description:
      "Explore microneedling options at Rejuvenate Skin Spa in Queen Creek, AZ: Traditional Microneedling (CIT), SQT Bio-Microneedling, and Plasma Microneedling.",
    type: "category",
    heading: "Microneedling",
  },
  {
    path: "/chemical-peels",
    title: "Chemical Peels | TCA & Glycolic Peels | Queen Creek, AZ",
    description:
      "Professional chemical peel treatments in Queen Creek, Arizona. TCA 25% peels and Glycolic 20-40% peels for skin rejuvenation, wrinkle reduction, and acne scar treatment. Expert skincare at Rejuvenate Skin Spa.",
    type: "category",
    heading: "Chemical Peels",
  },
  {
    path: "/enzyme-peel-facial",
    title: "Enzyme Peel Facials | Natural Fruit Enzyme Peels | Queen Creek, AZ",
    description:
      "Natural fruit enzyme peels in Queen Creek, AZ. Gentle exfoliation with pumpkin, pomegranate, blueberry, and more. No downtime. Book at Rejuvenate Skin Spa!",
    type: "category",
    heading: "Enzyme Peel Facials",
  },
  {
    path: "/plexr-plasma-skin-tightening",
    title: "Plexr Plasma Skin Tightening | Non-Surgical | Queen Creek, AZ",
    description:
      "Non-surgical skin tightening with Plexr Plasma technology at Rejuvenate Skin Spa in Queen Creek, AZ. Wrinkle reduction and rejuvenation. Book today!",
    type: "category",
    heading: "Plexr Plasma Skin Tightening",
  },
];

/** SEO titles for service detail pages (aligned with page metadata exports). */
const serviceTitles: Record<string, string> = {
  "/spa-services/dermaplaning-treatment":
    "Dermaplaning Facial | Exfoliation Treatment | Queen Creek, AZ",
  "/spa-services/eyebrow-lamination-treatment":
    "Eyebrow Lamination Treatment | Queen Creek, AZ",
  "/spa-services/microblading-treatment":
    "Microblading Treatment | Natural Eyebrow Enhancement | Queen Creek, AZ",
  "/spa-services/red-light-therapy-treatment":
    "Red Light Therapy Treatment | Queen Creek, AZ",
  "/microneedling/traditional-microneedling":
    "Traditional Microneedling | Collagen Induction Therapy | Queen Creek, AZ",
  "/microneedling/sqt-bio-microneedling":
    "SQT Bio-Microneedling | Needle-Free Microneedling | Queen Creek, AZ",
  "/microneedling/plasma-microneedling":
    "Plasma Microneedling | Plexr Plasma Pen | Queen Creek, AZ",
  "/chemical-peels/biorepeel-body-peels":
    "BioRePeel 50 TCA Body Peel | Body Skin Rejuvenation | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/chemical-peels/biorepeel-chemical-peels":
    "BioRePeel Chemical Peel | Next Generation TCA Peel | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/chemical-peels/biorepeel-facial-peels":
    "BioRePeel 35 TCA Facial Peel | Facial Rejuvenation | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/chemical-peels/glycolic-acid-peels":
    "Glycolic Acid Peel | AHA Chemical Peel | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/chemical-peels/tca-peels":
    "TCA 25% Chemical Peel | Deep Skin Rejuvenation | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/enzyme-peel-facial/blueberry-enzyme-peel":
    "Blueberry Enzyme Peel | Antioxidant Facial | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/enzyme-peel-facial/cherry-enzyme-peel":
    "Brightening Cherry Enzyme Peel | Level 3 Treatment | Rejuvenate Skin Spa",
  "/enzyme-peel-facial/coconut-papaya-enzyme-peel":
    "Coconut-Papaya Enzyme Peel | Tropical Hydrating Facial | Rejuvenate Skin Spa",
  "/enzyme-peel-facial/lemon-enzyme-peel":
    "Lemon Enzyme Peel | Brightening Treatment | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/enzyme-peel-facial/passion-fruit-enzyme-peel":
    "Passion Fruit Enzyme Peel | Glycolic Acid | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/enzyme-peel-facial/pomegranate-enzyme-peel":
    "Pomegranate Enzyme Peel | Antioxidant Renewal | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/enzyme-peel-facial/pumpkin-orange-enzyme-peel":
    "Pumpkin-Orange Enzyme Peel | Renewal Facial | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/enzyme-peel-facial/raspberry-peach-enzyme-peel":
    "Raspberry-Peach Enzyme Peel | Hydrating Facial | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/plexr-plasma-skin-tightening/ablative-skin-resurfacing":
    "Ablative Skin Resurfacing | Deep Plexr Plasma Treatment | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing":
    "Nano-Ablative Resurfacing | Plexr Plasma | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing":
    "Semi-Ablative Skin Resurfacing | Plexr Plasma | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/plexr-plasma-skin-tightening/mole-removal-treatment":
    "Mole Removal | Plexr Plasma Treatment | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/plexr-plasma-skin-tightening/skin-tag-removal-treatment":
    "Skin Tag Removal | Plexr Plasma Treatment | Rejuvenate Skin Spa | Queen Creek, AZ",
  "/plexr-plasma-skin-tightening/sun-spot-removal-treatment":
    "Sun Spot Removal | Plexr Plasma Treatment | Queen Creek, AZ",
  "/plexr-plasma-skin-tightening/wart-removal-treatment":
    "Wart Removal | Plexr Plasma Treatment | Rejuvenate Skin Spa | Queen Creek, AZ",
};

function buildServicePages(): MarkdownPageDefinition[] {
  return serviceRegistry.map((service) => ({
    path: service.path,
    title: serviceTitles[service.path] ?? `${service.name} | Rejuvenate Skin Spa | Queen Creek, AZ`,
    description: service.description,
    type: "service" as const,
    heading: service.name,
  }));
}

/** All public indexable pages that expose a Markdown alternate. */
export const markdownPageRegistry: readonly MarkdownPageDefinition[] = [
  ...staticPages,
  ...buildServicePages(),
];

const pageByPath = new Map(
  markdownPageRegistry.map((page) => [page.path, page] as const),
);

export function getMarkdownPage(
  path: string,
): MarkdownPageDefinition | undefined {
  return pageByPath.get(path);
}

export function listMarkdownPaths(): string[] {
  return markdownPageRegistry.map((page) => page.path);
}

export function isPublicMarkdownPath(path: string): boolean {
  return pageByPath.has(path);
}
