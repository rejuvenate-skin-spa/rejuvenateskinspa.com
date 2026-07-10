import { siteConfig } from "@/lib/site-config";
import {
  formatPrice,
  getPackageSavings,
  getService,
  serviceRegistry,
  type ServiceEntry,
} from "@/lib/services";
import { bridgetteBall } from "@/lib/providers";
import { canonicalHtmlUrl, toAbsoluteUrl } from "./urls";
import type { MarkdownPageDefinition } from "./types";

function link(label: string, path: string): string {
  return `[${label}](${canonicalHtmlUrl(path)})`;
}

function image(alt: string, src: string): string {
  return `![${alt}](${toAbsoluteUrl(src)})`;
}

function pricingTable(service: ServiceEntry): string {
  if (!service.pricing?.length) {
    return "";
  }

  const rows = service.pricing.map((tier) => {
    const priceLabel =
      tier.priceType === "starting_at"
        ? `Starting at ${formatPrice(tier.price)}`
        : formatPrice(tier.price);
    const note = tier.note ? ` — ${tier.note}` : "";
    const sessions = tier.sessions ? ` (${tier.sessions} sessions)` : "";
    return `| ${tier.label}${sessions} | ${priceLabel}${note} |`;
  });

  let savingsNote = "";
  if (service.pricing.length >= 2 && service.pricing[0] && service.pricing[1]?.sessions) {
    const pkg = getPackageSavings(service.pricing[0].price, service.pricing[1]);
    savingsNote = `\n\nPackage savings example: save about ${formatPrice(pkg.savings)} on the ${service.pricing[1].label} (about ${formatPrice(pkg.perSession)} per session).`;
  }

  return [
    "## Pricing",
    "",
    "| Option | Price |",
    "| --- | --- |",
    ...rows,
    savingsNote,
  ]
    .filter((line) => line !== undefined)
    .join("\n");
}

function locationBlock(): string {
  const { address, phoneDisplay, email } = siteConfig;
  return [
    "## Location & Contact",
    "",
    `${siteConfig.name}`,
    `${address.street}`,
    `${address.city}, ${address.state} ${address.zip}`,
    "",
    `- Phone: [${phoneDisplay}](tel:${siteConfig.phoneTel})`,
    `- Email: [${email}](mailto:${email})`,
    `- Book: ${link("Book an appointment", "/book")}`,
    `- Contact: ${link("Contact page", "/contact")}`,
  ].join("\n");
}

function relatedServices(current: ServiceEntry): string {
  const related = serviceRegistry
    .filter((s) => s.category === current.category && s.path !== current.path)
    .slice(0, 8);

  if (!related.length) return "";

  return [
    `## Related ${current.category}`,
    "",
    ...related.map((s) => `- ${link(s.name, s.path)}`),
  ].join("\n");
}

function categoryChildren(categoryPath: string, categoryLabel: string): string {
  const children = serviceRegistry.filter((s) =>
    s.path.startsWith(`${categoryPath}/`),
  );
  if (!children.length) return "";

  return [
    `## ${categoryLabel} Treatments`,
    "",
    ...children.map((s) => `- ${link(s.name, s.path)} — ${s.description}`),
  ].join("\n");
}

function serviceBody(page: MarkdownPageDefinition): string {
  const service = getService(page.path);
  if (!service) {
    return `# ${page.heading ?? page.title}\n\n${page.description}\n`;
  }

  const heading = page.heading ?? service.name;
  const sections: string[] = [
    `# ${heading}`,
    "",
    page.description,
    "",
    `**Category:** ${service.category}`,
    "",
    `## About ${service.name}`,
    "",
    `${service.name} is offered at ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.state}. ${service.description}`,
    "",
  ];

  if (service.image) {
    sections.push(
      image(
        `${service.name} at ${siteConfig.name} in Queen Creek, Arizona`,
        service.image,
      ),
      "",
    );
  }

  const pricing = pricingTable(service);
  if (pricing) {
    sections.push(pricing, "");
  }

  sections.push(
    "## Who It's For",
    "",
    `Clients seeking professional ${service.name.toLowerCase()} results in the East Valley — including Queen Creek, San Tan Valley, Chandler, Gilbert, Mesa, and Apache Junction — can learn more and schedule a consultation at ${siteConfig.name}.`,
    "",
    "## What To Expect",
    "",
    `- Personalized consultation focused on your skin goals`,
    `- Treatment performed by trained aesthetic professionals`,
    `- Aftercare guidance tailored to ${service.name}`,
    `- Follow-up recommendations when a series of sessions is beneficial`,
    "",
    relatedServices(service),
    "",
    "## Book This Treatment",
    "",
    `Ready to schedule ${service.name}? ${link("Book online", "/book")} or call [${siteConfig.phoneDisplay}](tel:${siteConfig.phoneTel}).`,
    "",
    locationBlock(),
  );

  return sections.filter(Boolean).join("\n").replace(/\n{3,}/g, "\n\n");
}

function homepageBody(): string {
  return [
    `# ${siteConfig.name}`,
    "",
    siteConfig.description,
    "",
    image(
      "Rejuvenate Skin Spa in Queen Creek, Arizona",
      siteConfig.image,
    ),
    "",
    "## Welcome to Rejuvenate Skin Spa",
    "",
    `Rejuvenate Skin Spa is a boutique skincare studio located in Queen Creek, Arizona, specializing in non-surgical aesthetic treatments. Founded by Bridgette Ball, a licensed cosmetologist with advanced training in skin aesthetics, the spa offers advanced services including Plexr plasma skin tightening, microneedling (traditional, SQT Bio, and plasma), chemical peels, enzyme facials, and spa treatments like dermaplaning and microblading. The studio serves clients throughout the East Valley, including Queen Creek, San Tan Valley, Chandler, Gilbert, and Mesa.`,
    "",
    "## Signature Treatments",
    "",
    `### ${link("Plexr Plasma Skin Tightening", "/plexr-plasma-skin-tightening")}`,
    "",
    "Non-surgical skin tightening using Plexr plasma pen technology.",
    "",
    "- Three intensity levels",
    "- Firms and lifts the look of skin",
    "- Smooths fine lines and wrinkles",
    "- Minimal downtime",
    "",
    `### ${link("Microneedling", "/microneedling")}`,
    "",
    "Collagen induction therapy for improved texture, tone, and firmness.",
    "",
    "- Improves skin texture and tone",
    "- Supports firmer-looking skin",
    "- Softens the look of fine lines",
    "- Encourages collagen production",
    "",
    `### ${link("Chemical and Enzyme Peels", "/chemical-peels")}`,
    "",
    "Professional-grade peels for smoother, brighter skin.",
    "",
    "- Brightens dull-looking skin",
    "- Smooths rough texture",
    "- Helps even skin tone",
    "- Supports clearer-looking skin",
    "",
    "## Spa Services",
    "",
    ...serviceRegistry
      .filter((s) => s.category === "Spa Services")
      .map((s) => `- ${link(s.name, s.path)}`),
    "",
    "## Why Clients Choose Us",
    "",
    "- Boutique, personalized care in Queen Creek, Arizona",
    "- Advanced non-surgical aesthetic treatments",
    "- Experienced licensed practitioner leadership",
    "- Clear pricing and package options on treatment pages",
    "",
    `## Book or Contact`,
    "",
    `- ${link("Book an appointment", "/book")}`,
    `- ${link("Contact us", "/contact")}`,
    `- ${link("About the spa", "/about-us")}`,
    `- ${link("Meet Bridgette Ball", "/about-us/bridgette-ball")}`,
    `- ${link("View results gallery", "/portfolio")}`,
    "",
    locationBlock(),
  ].join("\n");
}

function aboutBody(): string {
  return [
    "# About Rejuvenate Skin Spa",
    "",
    `${siteConfig.name} is a premier medical aesthetics spa in Queen Creek, Arizona, specializing in Plexr plasma skin tightening, microneedling, SQT bio-microneedling, chemical peels, and luxury facial treatments.`,
    "",
    "## Our Approach",
    "",
    "We focus on non-surgical aesthetic skin treatments designed to improve texture, tone, firmness, and overall skin health. Every visit emphasizes personalized consultation, professional technique, and clear aftercare guidance.",
    "",
    "## Leadership",
    "",
    `${link(bridgetteBall.name, bridgetteBall.path)} is the ${bridgetteBall.jobTitle.toLowerCase()} at ${siteConfig.name}. ${bridgetteBall.description}`,
    "",
    "## Treatment Categories",
    "",
    `- ${link("Spa Services", "/spa-services")}`,
    `- ${link("Microneedling", "/microneedling")}`,
    `- ${link("Chemical Peels", "/chemical-peels")}`,
    `- ${link("Enzyme Peel Facials", "/enzyme-peel-facial")}`,
    `- ${link("Plexr Plasma Skin Tightening", "/plexr-plasma-skin-tightening")}`,
    "",
    locationBlock(),
  ].join("\n");
}

function authorBody(): string {
  return [
    `# ${bridgetteBall.name}`,
    "",
    `**${bridgetteBall.jobTitle}**`,
    "",
    bridgetteBall.description,
    "",
    bridgetteBall.image
      ? image(`${bridgetteBall.name}, ${bridgetteBall.jobTitle}`, bridgetteBall.image)
      : "",
    "",
    "## Specialties",
    "",
    ...bridgetteBall.knowsAbout.map((topic) => `- ${topic}`),
    "",
    "## Learn More",
    "",
    `- ${link("About Rejuvenate Skin Spa", "/about-us")}`,
    `- ${link("Book an appointment", "/book")}`,
    `- ${link("Contact the spa", "/contact")}`,
    "",
    locationBlock(),
  ]
    .filter(Boolean)
    .join("\n");
}

function contactBody(): string {
  return [
    "# Contact Rejuvenate Skin Spa",
    "",
    "Reach out to schedule a consultation, ask about treatments, or get directions to our Queen Creek studio.",
    "",
    locationBlock(),
    "",
    "## Service Area",
    "",
    ...siteConfig.areaServed.map((area) => `- ${area.name}`),
    "",
    "## Hours",
    "",
    ...siteConfig.openingHours.map((slot) => {
      const days = slot.dayOfWeek.join(", ");
      return `- ${days}: ${slot.opens} – ${slot.closes}`;
    }),
    ...siteConfig.closedDays.map((day) => `- ${day}: Closed`),
    "",
    `Prefer to schedule online? ${link("Book an appointment", "/book")}.`,
  ].join("\n");
}

function bookBody(): string {
  return [
    "# Book an Appointment",
    "",
    `Book your skincare appointment online at ${siteConfig.name} in Queen Creek, AZ. Schedule facials, chemical peels, microneedling, plasma treatments, and more.`,
    "",
    "## How to Book",
    "",
    `- Use the online booking experience on this page: ${link("Book", "/book")}`,
    `- Or call [${siteConfig.phoneDisplay}](tel:${siteConfig.phoneTel})`,
    `- Or ${link("contact us", "/contact")} with questions before you schedule`,
    "",
    "## Popular Treatments",
    "",
    `- ${link("Traditional Microneedling", "/microneedling/traditional-microneedling")}`,
    `- ${link("BioRePeel Facial Peel", "/chemical-peels/biorepeel-facial-peels")}`,
    `- ${link("Dermaplaning", "/spa-services/dermaplaning-treatment")}`,
    `- ${link("Plexr Plasma Skin Tightening", "/plexr-plasma-skin-tightening")}`,
    "",
    locationBlock(),
  ].join("\n");
}

function portfolioBody(): string {
  return [
    "# Results Gallery",
    "",
    `View real client results and transformations at ${siteConfig.name} in Queen Creek, Arizona. Before-and-after photos showcase advanced skincare treatments including plasma skin tightening, chemical peels, and microneedling.`,
    "",
    "## Explore Treatments Behind the Results",
    "",
    `- ${link("Plexr Plasma Skin Tightening", "/plexr-plasma-skin-tightening")}`,
    `- ${link("Microneedling", "/microneedling")}`,
    `- ${link("Chemical Peels", "/chemical-peels")}`,
    `- ${link("Enzyme Peel Facials", "/enzyme-peel-facial")}`,
    "",
    `Ready for your own transformation? ${link("Book a consultation", "/book")}.`,
    "",
    locationBlock(),
  ].join("\n");
}

function privacyBody(): string {
  return [
    "# Privacy Policy",
    "",
    `This Privacy Policy describes how ${siteConfig.name} ("we", "us", or "our") collects, uses, and protects personal information when you visit ${canonicalHtmlUrl("")} or contact us.`,
    "",
    "## Information We Collect",
    "",
    "- Contact details you submit through forms (name, email, phone, message)",
    "- Appointment and consultation information you provide",
    "- Basic technical data such as browser type and pages visited",
    "",
    "## How We Use Information",
    "",
    "- To respond to inquiries and schedule appointments",
    "- To provide requested skincare services",
    "- To improve our website and client experience",
    "- To comply with legal obligations",
    "",
    "## Contact",
    "",
    `Questions about privacy can be sent to [${siteConfig.email}](mailto:${siteConfig.email}) or by calling [${siteConfig.phoneDisplay}](tel:${siteConfig.phoneTel}).`,
    "",
    locationBlock(),
  ].join("\n");
}

function termsBody(): string {
  return [
    "# Terms and Conditions",
    "",
    `These Terms and Conditions govern use of the ${siteConfig.name} website and services in Queen Creek, Arizona.`,
    "",
    "## Services",
    "",
    "Treatment descriptions on this website are informational. Individual results vary. A consultation may be required before certain procedures.",
    "",
    "## Appointments",
    "",
    "Please arrive on time and follow pre-care instructions provided for your treatment. Cancellation or rescheduling policies may apply.",
    "",
    "## Website Use",
    "",
    "Content on this site is owned by or licensed to Rejuvenate Skin Spa. Do not copy or redistribute materials without permission.",
    "",
    "## Contact",
    "",
    `For questions about these terms, ${link("contact us", "/contact")} or email [${siteConfig.email}](mailto:${siteConfig.email}).`,
    "",
    locationBlock(),
  ].join("\n");
}

function plexrSalesBody(): string {
  return [
    "# Plexr Equipment Sales",
    "",
    `Professional Plexr plasma device sales and training through ${siteConfig.name} in Queen Creek, Arizona.`,
    "",
    "## For Practices",
    "",
    "- Access to Plexr plasma technology for aesthetic practices",
    "- Training-oriented support for professional use",
    "- Local Queen Creek, Arizona point of contact",
    "",
    `Learn more about clinical Plexr treatments offered to clients: ${link("Plexr Plasma Skin Tightening", "/plexr-plasma-skin-tightening")}.`,
    "",
    `Interested in equipment or training? ${link("Contact us", "/contact")} or call [${siteConfig.phoneDisplay}](tel:${siteConfig.phoneTel}).`,
    "",
    locationBlock(),
  ].join("\n");
}

function categoryBody(page: MarkdownPageDefinition): string {
  const heading = page.heading ?? page.title;
  const intro = page.description;

  const extras: Record<string, string> = {
    "/spa-services": [
      "Spa services at Rejuvenate Skin Spa focus on exfoliation, brow enhancement, and restorative LED therapy.",
      "",
      categoryChildren("/spa-services", "Spa Services"),
    ].join("\n"),
    "/microneedling": [
      "Microneedling at Rejuvenate Skin Spa includes traditional collagen induction therapy, needle-free SQT Bio-Microneedling, and plasma-enhanced microneedling.",
      "",
      "### Treatment Process",
      "",
      "1. **Consultation** — Discuss your goals and determine the best microneedling option for your skin.",
      "2. **Preparation** — Skin cleansing and topical numbing cream applied for comfort.",
      "3. **Treatment** — 45–75 minute session with your chosen microneedling technique.",
      "4. **Recovery** — Mild redness resolves in days. Sessions spaced 4–6 weeks apart.",
      "",
      categoryChildren("/microneedling", "Microneedling"),
    ].join("\n"),
    "/chemical-peels": [
      "Chemical peels at Rejuvenate Skin Spa include BioRePeel facial and body options, glycolic acid peels, and TCA peels for rejuvenation, texture, and tone.",
      "",
      categoryChildren("/chemical-peels", "Chemical Peel"),
    ].join("\n"),
    "/enzyme-peel-facial": [
      "Enzyme peel facials use natural fruit enzymes for gentle exfoliation with little to no downtime — ideal for sensitive skin and regular maintenance.",
      "",
      categoryChildren("/enzyme-peel-facial", "Enzyme Peel"),
    ].join("\n"),
    "/plexr-plasma-skin-tightening": [
      "Plexr plasma treatments offer non-surgical skin tightening and precise lesion removal with ablative, semi-ablative, and nano-ablative options.",
      "",
      categoryChildren("/plexr-plasma-skin-tightening", "Plexr"),
    ].join("\n"),
  };

  return [
    `# ${heading}`,
    "",
    intro,
    "",
    extras[page.path] ?? "",
    "",
    "## Book a Consultation",
    "",
    `${link("Book online", "/book")} or call [${siteConfig.phoneDisplay}](tel:${siteConfig.phoneTel}).`,
    "",
    locationBlock(),
  ]
    .filter(Boolean)
    .join("\n");
}

/** Generate the Markdown body (without front matter) for a registered page. */
export function generateMarkdownBody(page: MarkdownPageDefinition): string {
  switch (page.path) {
    case "":
      return homepageBody();
    case "/about-us":
      return aboutBody();
    case "/about-us/bridgette-ball":
      return authorBody();
    case "/contact":
      return contactBody();
    case "/book":
      return bookBody();
    case "/portfolio":
      return portfolioBody();
    case "/privacy-policy":
      return privacyBody();
    case "/terms-and-conditions":
      return termsBody();
    case "/plexr-sales":
      return plexrSalesBody();
    case "/spa-services":
    case "/microneedling":
    case "/chemical-peels":
    case "/enzyme-peel-facial":
    case "/plexr-plasma-skin-tightening":
      return categoryBody(page);
    default:
      if (page.type === "service") {
        return serviceBody(page);
      }
      return [
        `# ${page.heading ?? page.title}`,
        "",
        page.description,
        "",
        locationBlock(),
      ].join("\n");
  }
}
