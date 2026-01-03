import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MicroneedlingHubFAQ from "@/components/microneedling-hub-faq";
import PhoneCtaButton from "@/components/phone-cta-button";

export const metadata: Metadata = {
  title: "Microneedling | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Explore microneedling options at Rejuvenate Skin Spa in Queen Creek, AZ: Traditional Microneedling (CIT), SQT Bio-Microneedling, and Plasma Microneedling.",
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
      {/* Hero Section */}
      <section className="relative min-h-[500px] py-12 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/microneedling-services-rejuventate-skin-spa-queen-creek-az.avif"
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
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            What Is Microneedling?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Microneedling is a category of skin treatments that stimulate collagen production through controlled skin injury. Rejuvenate Skin Spa in Queen Creek, Arizona offers three distinct microneedling options: Traditional Microneedling uses fine needles for collagen induction therapy. SQT Bio-Microneedling uses marine spicules for needle-free rejuvenation. Plasma Microneedling uses ionized gas for advanced skin tightening.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Each method targets similar concerns—fine lines, texture, scarring, and skin laxity—but differs in technique, downtime, and intensity. A consultation helps determine which option best matches your skin type and goals.
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            How to Choose the Right Microneedling Option
          </h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-sage-600 mt-0.5">•</span>
            <span className="text-gray-700">Consider how much downtime fits your schedule—SQT Bio offers minimal recovery, while Traditional and Plasma may involve a few days of redness.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sage-600 mt-0.5">•</span>
            <span className="text-gray-700">If you have sensitive or reactive skin, SQT Bio's needle-free approach may be a gentler starting point.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sage-600 mt-0.5">•</span>
            <span className="text-gray-700">For deeper texture concerns or skin laxity, Plasma Microneedling offers a more intensive option.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sage-600 mt-0.5">•</span>
            <span className="text-gray-700">Traditional Microneedling is a versatile choice for general rejuvenation and is suitable for most skin types.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sage-600 mt-0.5">•</span>
            <span className="text-gray-700">Not sure which is right for you? Call us to discuss your goals—we're happy to help you decide.</span>
          </li>
        </ul>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            What to Expect
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Microneedling treatments are performed in a comfortable, professional setting. Your provider will discuss your goals, prepare your skin, and guide you through aftercare to support optimal results.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-sage-600 mt-0.5">•</span>
              <span className="text-gray-700">Appointment length typically ranges from 45 to 75 minutes depending on the treatment type.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-600 mt-0.5">•</span>
              <span className="text-gray-700">Mild redness or sensitivity is common and usually resolves within a few days.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-600 mt-0.5">•</span>
              <span className="text-gray-700">Sessions are generally spaced 4–6 weeks apart to allow for proper healing and collagen development.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <MicroneedlingHubFAQ />
    </div>
  );
}


