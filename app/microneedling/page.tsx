import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MicroneedlingHubFAQ from "@/components/microneedling-hub-faq";
import PhoneCtaButton from "@/components/phone-cta-button";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com";

export const metadata: Metadata = {
  title: "Microneedling Services | Traditional, SQT Bio & Plasma | Queen Creek, AZ",
  description:
    "Explore microneedling options at Rejuvenate Skin Spa in Queen Creek, AZ: Traditional Microneedling (CIT), SQT Bio-Microneedling, and Plasma Microneedling.",
  alternates: { canonical: "/microneedling" },
  openGraph: {
    title: "Microneedling Services | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Three microneedling options: Traditional CIT, SQT Bio-Microneedling, and Plasma Microneedling at Rejuvenate Skin Spa in Queen Creek, Arizona.",
    url: `${siteUrl}/microneedling`,
    images: [
      {
        url: `${siteUrl}/og/og-microneedling.jpg`,
        width: 1200,
        height: 630,
        alt: "Microneedling Services at Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microneedling Services | Rejuvenate Skin Spa | Queen Creek, AZ",
    description:
      "Three microneedling options at Rejuvenate Skin Spa in Queen Creek, AZ.",
    images: [`${siteUrl}/og/og-microneedling.jpg`],
  },
};

const options = [
  {
    title: "Traditional Microneedling",
    description:
      "Classic collagen induction therapy using ultra-fine needles to stimulate natural skin renewal and improve overall texture.",
    bestFor: [
      "Fine lines & wrinkles",
      "Acne scars & enlarged pores",
      "General skin rejuvenation",
      "Those comfortable with mild downtime",
    ],
    href: "/microneedling/traditional-microneedling",
    buttonLabel: "Explore Traditional",
  },
  {
    title: "SQT Bio Microneedling",
    description:
      "Needle-free treatment using natural marine sponge spicules to boost radiance and refine texture with minimal recovery.",
    bestFor: [
      "Sensitive or reactive skin",
      "Dull tone & uneven texture",
      "First-time microneedling clients",
      "Those seeking minimal downtime",
    ],
    href: "/microneedling/sqt-bio-microneedling",
    buttonLabel: "Explore SQT Bio",
  },
  {
    title: "Plasma Microneedling",
    description:
      "Advanced treatment combining plasma technology with microneedling for enhanced collagen stimulation and skin tightening.",
    bestFor: [
      "Deeper lines & skin laxity",
      "Stubborn scars & texture issues",
      "Maximum collagen boost",
      "Those ready for more intensive results",
    ],
    href: "/microneedling/plasma-microneedling",
    buttonLabel: "Explore Plasma",
  },
];

export default function MicroneedlingHubPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/microneedling")) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[500px] py-12 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/spa-services-rejuventate-skin-spa-queen-creek-az.avif"
            alt="Microneedling Treatment at Rejuvenate Skin Spa in Queen Creek, AZ"
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-6">
              Microneedling Services
              <span className="text-sage-300 block">in Queen Creek, AZ</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-lg">
              Three advanced options: Traditional Microneedling, SQT Bio-Microneedling (needle-free), and Plexr Plasma Microneedling at Rejuvenate Skin Spa.
            </p>
            <PhoneCtaButton />
          </div>
        </div>
      </section>

      {/* Definition Section - GEO Optimized */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-4">
            What Is Microneedling?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Microneedling is a category of skin treatments that stimulate collagen production through controlled skin injury. Rejuvenate Skin Spa in Queen Creek, Arizona offers three distinct microneedling options: Traditional Microneedling uses fine needles for collagen induction therapy. SQT Bio-Microneedling uses marine spicules for needle-free rejuvenation. Plasma Microneedling uses ionized gas for advanced skin tightening. Each method targets similar concerns, including fine lines, texture, scarring, and skin laxity, but differs in technique, downtime, and intensity. A consultation helps determine which option best matches your skin type and goals.
          </p>
        </div>
      </section>

      {/* Options Cards Section */}
      <section id="options" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Our Microneedling Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the treatment that best fits your skin goals and lifestyle.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
        {options.map((opt) => (
          <Card key={opt.href} className="h-full border border-gray-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6 h-full flex flex-col">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{opt.title}</h2>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {opt.description}
              </p>
              <div className="mb-6 flex-grow">
                <p className="text-sm font-medium text-gray-900 mb-2">Best for:</p>
                <ul className="space-y-1.5">
                  {opt.bestFor.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-sage-600 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="w-full bg-sage-600 hover:bg-sage-700 text-white mt-auto">
                <Link href={opt.href}>
                  {opt.buttonLabel}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              How to Choose the Right Microneedling Option
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Consider these factors to find the treatment that best fits your skin goals and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Downtime</h3>
              <p className="text-sm text-gray-600">
                SQT Bio offers minimal recovery. Traditional and Plasma may involve a few days of redness.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sensitivity</h3>
              <p className="text-sm text-gray-600">
                Sensitive or reactive skin? SQT Bio's needle-free approach is a gentler starting point.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Intensity</h3>
              <p className="text-sm text-gray-600">
                For deeper texture concerns or skin laxity, Plasma Microneedling offers more intensive results.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Versatility</h3>
              <p className="text-sm text-gray-600">
                Traditional Microneedling is a versatile choice for general rejuvenation, suitable for most skin types.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              Not sure which is right for you? We're happy to help you decide.
            </p>
            <PhoneCtaButton />
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Microneedling treatments are performed in a comfortable, professional setting for optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Discuss your goals and determine the best microneedling option for your skin.",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Skin cleansing and topical numbing cream applied for comfort.",
              },
              {
                step: "03",
                title: "Treatment",
                description: "45–75 minute session with your chosen microneedling technique.",
              },
              {
                step: "04",
                title: "Recovery",
                description: "Mild redness resolves in days. Sessions spaced 4–6 weeks apart.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <MicroneedlingHubFAQ />
    </div>
  );
}


