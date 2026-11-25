import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService, schemaIds } from "@/lib/schema";
import { getService } from "@/lib/services";
import { amyBall } from "@/lib/providers";
import { siteConfig } from "@/lib/site-config";
import BotoxTreatmentClientPage from "./BotoxTreatmentClientPage";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com";

const servicePath = "/spa-services/botox-treatment";

export const metadata: Metadata = {
  title: "Botox Treatment | Wrinkle Relaxation | Queen Creek, AZ",
  description:
    "Botox in Queen Creek, Arizona with Amy Ball, PA-C, at Rejuvenate Skin Spa. Soften forehead lines, frown lines, and crow's feet. Book a consultation.",
  keywords:
    "Botox Queen Creek, Botox Queen Creek AZ, wrinkle relaxer, forehead lines, frown lines, crow's feet, neuromodulator, Rejuvenate Skin Spa",
  alternates: { canonical: servicePath },
  openGraph: {
    title: "Botox Treatment | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Cosmetic Botox in Queen Creek, Arizona, performed by Amy Ball, PA-C, at Rejuvenate Skin Spa.",
    url: `${siteUrl}${servicePath}`,
    images: [
      {
        url: `${siteUrl}/images/botox-injection-treatment.jpg`,
        width: 1600,
        height: 2400,
        alt: "Close-up of a cosmetic Botox injection on the forehead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Botox Treatment | Queen Creek, AZ",
    description:
      "Botox with Amy Ball, PA-C, at Rejuvenate Skin Spa in Queen Creek, AZ. Soften forehead lines, frown lines, and crow's feet.",
    images: [`${siteUrl}/images/botox-injection-treatment.jpg`],
  },
};

export default function BotoxTreatmentPage() {
  const service = getService(servicePath)!;
  const serviceJsonLd = {
    ...buildService(service),
    provider: [
      { "@id": schemaIds.localBusiness },
      { "@id": `${siteUrl}/#amy-ball` },
    ],
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#amy-ball`,
    name: amyBall.name,
    jobTitle: amyBall.jobTitle,
    description: amyBall.description,
    image: `${siteUrl}${amyBall.image}`,
    url: `${siteUrl}${amyBall.path}`,
    knowsAbout: amyBall.knowsAbout,
    worksFor: {
      "@id": schemaIds.localBusiness,
      "@type": "HealthAndBeautyBusiness",
      name: siteConfig.name,
      url: siteUrl,
    },
    workLocation: {
      "@type": "Place",
      name: siteConfig.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(servicePath)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <BotoxTreatmentClientPage />
    </>
  );
}
