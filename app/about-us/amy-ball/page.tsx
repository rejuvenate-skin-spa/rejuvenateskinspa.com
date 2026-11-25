import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SmartContactCTA } from "@/components/SmartContactCTA";
import { Syringe } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { schemaIds } from "@/lib/schema";
import { amyBall } from "@/lib/providers";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Amy Ball, a certified physician assistant | Rejuvenate Skin Spa",
  description: amyBall.description,
  keywords: [
    "Amy Ball",
    "Botox Queen Creek",
    "Rejuvenate Skin Spa",
    "certified physician assistant Queen Creek AZ",
  ],
  alternates: { canonical: "/about-us/amy-ball" },
};

const specialties = [
  {
    icon: Syringe,
    title: "Botox",
    description:
      "Cosmetic Botox to soften forehead lines, frown lines, and crow's feet, with a consultation before treatment.",
    href: "/spa-services/botox-treatment",
  },
];

export default function AmyBallPage() {
  const personUrl = `${siteConfig.url}${amyBall.path}`;
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#amy-ball`,
    name: amyBall.name,
    jobTitle: amyBall.jobTitle,
    description: amyBall.description,
    url: personUrl,
    image: amyBall.image ? `${siteConfig.url}${amyBall.image}` : undefined,
    knowsAbout: amyBall.knowsAbout,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": personUrl,
    },
    worksFor: {
      "@id": schemaIds.localBusiness,
      "@type": "HealthAndBeautyBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${personUrl}#profilepage`,
    url: personUrl,
    name: `${amyBall.name} — ${amyBall.jobTitle}`,
    description: amyBall.description,
    mainEntity: { "@id": `${siteConfig.url}/#amy-ball` },
    isPartOf: { "@id": schemaIds.website },
    about: { "@id": `${siteConfig.url}/#amy-ball` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd("/about-us/amy-ball")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <div className="min-h-screen">
        <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-sage-100 to-sage-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sage-600 font-medium mb-2">
              Botox Specialist
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight mb-6">
              Amy Ball, PA-C
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Amy Ball, PA-C, performs cosmetic Botox at Rejuvenate Skin Spa in
              Queen Creek, Arizona.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="relative">
                <Image
                  src="/images/amy_headshot.jpg"
                  alt="Amy Ball, a certified physician assistant, Botox specialist at Rejuvenate Skin Spa"
                  width={375}
                  height={428}
                  className="rounded-lg shadow-xl object-cover"
                  priority
                />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
                  About Amy
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Amy Ball is a certified physician assistant with years of dermatology experience, specializing in Botox at Rejuvenate Skin Spa in Queen Creek.
                  </p>
                  <p>
                    Cosmetic Botox with Amy is used to soften forehead lines,
                    frown lines, and crow&apos;s feet. A consultation comes
                    before every visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-3">
                Treatment Specialties
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Botox is the treatment Amy provides at the studio.
              </p>
            </div>
            <div className="flex justify-center">
              {specialties.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group w-full max-w-md"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full mb-4 group-hover:bg-sage-700 transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-sage-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{s.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
              Approach
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Every Botox visit with Amy starts with a consultation, so the
                plan is based on that conversation rather than a set menu.
              </p>
              <p>
                Amy focuses on collaboration with patients to achieve their goals.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-sage-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
              Training &amp; Credentials
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Amy Ball, a certified physician assistant, has been
                working in dermatology for several years.
              </p>
              <p>
                Amy graduated from Midwestern University in Glendale, Arizona. She earned a master&apos;s in physician assistant studies. Amy is certified by the NCCPA.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
              Outside the Studio
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In her free time when not with patients, Amy enjoys hanging out with her husband and their two dogs.
            </p>
          </div>
        </section>

        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
              Ready to Book Botox?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Book a Botox visit on the site, or read more about the treatment
              before you schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-white text-sage-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold shadow-lg"
              >
                Book now
              </Link>
              <Link
                href="/spa-services/botox-treatment"
                className="inline-flex items-center justify-center border border-white/60 text-white hover:bg-white/10 px-6 py-3 rounded-md"
              >
                Botox treatment
              </Link>
              <SmartContactCTA
                variant="outline"
                showPhoneWhenOpen
                className="bg-transparent text-white border-white/60 hover:bg-white/10 px-6 py-3 shadow-none"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
