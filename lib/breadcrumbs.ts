import { siteConfig } from "./site-config";
import { buildBreadcrumbList, type BreadcrumbItem } from "./schema";

/**
 * Human-readable breadcrumb labels keyed by URL path.
 * Used to generate BreadcrumbList structured data.
 */
const breadcrumbLabels: Record<string, string> = {
  // About
  "/about-us": "About Us",
  "/about-us/bridgette-ball": "Bridgette Ball",

  // Category hubs
  "/spa-services": "Spa Services",
  "/microneedling": "Microneedling",
  "/chemical-peels": "Chemical Peels",
  "/enzyme-peel-facial": "Enzyme Peel Facials",
  "/plexr-plasma-skin-tightening": "Plexr Plasma Skin Tightening",

  // Spa services
  "/spa-services/dermaplaning-treatment": "Dermaplaning",
  "/spa-services/eyebrow-lamination-treatment": "Eyebrow Lamination",
  "/spa-services/microblading-treatment": "Microblading",
  "/spa-services/red-light-therapy-treatment": "Red Light Therapy",

  // Microneedling
  "/microneedling/traditional-microneedling": "Traditional Microneedling",
  "/microneedling/sqt-bio-microneedling": "SQT Bio-Microneedling",
  "/microneedling/plasma-microneedling": "Plasma Microneedling",

  // Chemical peels
  "/chemical-peels/biorepeel-body-peels": "BioRePeel Body Peel",
  "/chemical-peels/biorepeel-chemical-peels": "BioRePeel Chemical Peel",
  "/chemical-peels/biorepeel-facial-peels": "BioRePeel Facial Peel",
  "/chemical-peels/glycolic-acid-peels": "Glycolic Acid Peel",
  "/chemical-peels/tca-peels": "TCA Peel",

  // Enzyme peel facials
  "/enzyme-peel-facial/blueberry-enzyme-peel": "Blueberry Enzyme Peel",
  "/enzyme-peel-facial/cherry-enzyme-peel": "Cherry Enzyme Peel",
  "/enzyme-peel-facial/coconut-papaya-enzyme-peel": "Coconut Papaya Enzyme Peel",
  "/enzyme-peel-facial/lemon-enzyme-peel": "Lemon Enzyme Peel",
  "/enzyme-peel-facial/passion-fruit-enzyme-peel": "Passion Fruit Enzyme Peel",
  "/enzyme-peel-facial/pomegranate-enzyme-peel": "Pomegranate Enzyme Peel",
  "/enzyme-peel-facial/pumpkin-orange-enzyme-peel": "Pumpkin Orange Enzyme Peel",
  "/enzyme-peel-facial/raspberry-peach-enzyme-peel": "Raspberry Peach Enzyme Peel",

  // Plexr plasma skin tightening
  "/plexr-plasma-skin-tightening/ablative-skin-resurfacing": "Ablative Skin Resurfacing",
  "/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing": "Nano-Ablative Skin Resurfacing",
  "/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing": "Semi-Ablative Skin Resurfacing",
  "/plexr-plasma-skin-tightening/mole-removal-treatment": "Mole Removal",
  "/plexr-plasma-skin-tightening/skin-tag-removal-treatment": "Skin Tag Removal",
  "/plexr-plasma-skin-tightening/sun-spot-removal-treatment": "Sun Spot Removal",
  "/plexr-plasma-skin-tightening/wart-removal-treatment": "Wart Removal",
};

/**
 * Build the BreadcrumbList JSON-LD object for a given page path.
 *
 * Hierarchy:  Home  >  Category hub  >  Detail page
 *
 * @param path - The page path, e.g. "/microneedling/traditional-microneedling"
 * @returns A schema.org BreadcrumbList object ready for JSON.stringify
 */
export function breadcrumbJsonLd(path: string) {
  const base = siteConfig.url;
  const items: BreadcrumbItem[] = [{ name: "Home", url: `${base}/` }];

  const segments = path.replace(/^\//, "").split("/");

  if (segments.length >= 1 && segments[0]) {
    const categoryPath = `/${segments[0]}`;
    const categoryLabel = breadcrumbLabels[categoryPath];
    if (categoryLabel) {
      items.push({ name: categoryLabel, url: `${base}${categoryPath}` });
    }
  }

  if (segments.length >= 2) {
    const fullPath = `/${segments[0]}/${segments[1]}`;
    const detailLabel = breadcrumbLabels[fullPath];
    if (detailLabel) {
      items.push({ name: detailLabel, url: `${base}${fullPath}` });
    }
  }

  return buildBreadcrumbList(items);
}
