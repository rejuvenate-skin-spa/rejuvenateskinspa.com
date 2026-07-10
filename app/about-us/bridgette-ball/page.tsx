import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SmartContactCTA } from "@/components/SmartContactCTA";
import { Shield, Zap, Sparkles, Leaf, Heart, Scissors } from "lucide-react";
import { buildPerson, buildProfilePage } from "@/lib/schema";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { bridgetteBall } from "@/lib/providers";

export const metadata: Metadata = {
  title:
    "Bridgette Ball — Founder & Licensed Cosmetologist | Rejuvenate Skin Spa",
  description:
    "Bridgette Ball is the founder and lead practitioner at Rejuvenate Skin Spa in Queen Creek, Arizona. Licensed cosmetologist specializing in Plexr plasma, microneedling, and chemical peels.",
  keywords: [
    "Bridgette Ball",
    "Rejuvenate Skin Spa",
    "Queen Creek cosmetologist",
    "Plexr plasma specialist",
    "licensed cosmetologist Queen Creek AZ",
  ],
  alternates: { canonical: "/about-us/bridgette-ball" },
};

const specialties = [
  {
    icon: Zap,
    title: "Plexr Plasma Skin Tightening",
    description:
      "Non-surgical lifting and resurfacing using advanced Plexr plasma technology.",
    href: "/plexr-plasma-skin-tightening",
  },
  {
    icon: Sparkles,
    title: "Microneedling",
    description:
      "Traditional, SQT bio-microneedling, and plasma microneedling for skin rejuvenation.",
    href: "/microneedling",
  },
  {
    icon: Leaf,
    title: "Chemical Peels",
    description:
      "Professional-grade peels including BioRePeel, TCA, and glycolic acid treatments.",
    href: "/chemical-peels",
  },
  {
    icon: Heart,
    title: "Enzyme Peel Facials",
    description:
      "Gentle fruit enzyme facials ideal for sensitive or reactive skin types.",
    href: "/enzyme-peel-facial",
  },
  {
    icon: Scissors,
    title: "Spa Services",
    description:
      "Dermaplaning, microblading, eyebrow lamination, and red light therapy.",
    href: "/spa-services",
  },
];

export default function BridgetteBallPage() {
  const personInput = {
    name: bridgetteBall.name,
    jobTitle: bridgetteBall.jobTitle,
    description: bridgetteBall.description,
    path: bridgetteBall.path,
    image: bridgetteBall.image,
    sameAs: bridgetteBall.sameAs,
    knowsAbout: bridgetteBall.knowsAbout,
    hasCredential: bridgetteBall.credentials
      ? [...bridgetteBall.credentials]
      : undefined,
  };
  const personJsonLd = buildPerson(personInput);
  const profilePageJsonLd = buildProfilePage(personInput);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd("/about-us/bridgette-ball")),
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
        {/* Hero */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-sage-100 to-sage-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sage-600 font-medium mb-2">
              Founder &amp; Licensed Cosmetologist
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight mb-6">
              Bridgette Ball
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Licensed cosmetologist and founder of Rejuvenate Skin Spa in Queen
              Creek, Arizona. Specializing in non-surgical aesthetic treatments
              that deliver real, visible results.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="relative">
                <Image
                  src="/images/bridgette-ball-rejuventate-skin-spa.jpeg"
                  alt="Bridgette Ball, founder of Rejuvenate Skin Spa"
                  width={375}
                  height={428}
                  className="rounded-lg shadow-xl object-cover"
                  priority
                />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
                  About Bridgette
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Bridgette Ball founded Rejuvenate Skin Spa to bring advanced,
                    results-driven skincare to the Queen Creek community. As a
                    licensed cosmetologist with advanced certifications in Plexr
                    plasma technology and chemical peel applications, Bridgette
                    focuses on non-surgical aesthetic treatments designed to improve
                    skin texture, tone, and firmness without invasive procedures or
                    extended downtime.
                  </p>
                  <p>
                    Every treatment at Rejuvenate Skin Spa begins with a
                    consultation. Bridgette takes time to assess each client&apos;s
                    skin, understand their goals, and recommend a personalized path
                    forward that fits their lifestyle and expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Specialties */}
        <section className="py-12 sm:py-16 bg-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-3">
                Treatment Specialties
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Bridgette offers a range of professional skincare treatments
                backed by advanced technology and continuing education.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialties.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group"
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

        {/* Approach & Philosophy */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
              Approach &amp; Philosophy
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Bridgette believes in honest, education-first consultations. She
                takes the time to explain what each treatment involves, set
                realistic expectations, and ensure every client feels confident
                before moving forward.
              </p>
              <p>
                Her practice emphasizes safety, professional-grade equipment, and
                trusted products. All treatments are tailored to the
                individual — no one-size-fits-all protocols.
              </p>
              <p>
                Rejuvenate Skin Spa serves clients throughout Queen Creek, San
                Tan Valley, Gilbert, Mesa, and the greater Phoenix East Valley.
              </p>
            </div>
          </div>
        </section>

        {/* Training & Credentials */}
        <section className="py-12 sm:py-16 bg-sage-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
              Training &amp; Credentials
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                Bridgette is a licensed cosmetologist in the state of Arizona
                with advanced certifications in Plexr plasma technology and
                chemical peel applications. She stays current with industry best
                practices through ongoing professional development and
                continuing education.
              </p>
              {/* TODO: Add specific credential details here if desired, such as:
                  - Cosmetology license number / issuing body
                  - Plexr certification details
                  - Chemical peel training programs completed
                  - Years of experience
                  - Any additional certifications or awards
              */}
            </div>
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-sm">
              <Shield className="h-5 w-5 text-sage-600 mr-2" />
              <span className="text-sage-700 font-medium">
                Licensed &amp; Insured in Arizona
              </span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
              Ready to Book a Consultation?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact Rejuvenate Skin Spa to schedule a consultation with
              Bridgette and find out which treatments are right for your skin.
            </p>
            <div className="flex justify-center">
              <SmartContactCTA
                variant="outline"
                showPhoneWhenOpen
                className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-3 shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
