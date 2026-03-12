import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService } from "@/lib/services";
import MicroneedlingTreatmentFAQ from "@/components/microneedling-treatment-faq";
import MicroneedlingTreatmentHero from "@/components/microneedling-treatment-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Star, Zap, Heart, AlertTriangle, ArrowRight } from "lucide-react";
import PhoneCtaButton from "@/components/phone-cta-button";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com";

export const metadata: Metadata = {
  title:
    "Traditional Microneedling | Collagen Induction Therapy | Queen Creek, AZ",
  description:
    "Traditional microneedling (CIT) at Rejuvenate Skin Spa in Queen Creek, AZ. Improve fine lines, acne scars, pores, and skin texture. Book today!",
  openGraph: {
    title: "Traditional Microneedling | Queen Creek, AZ",
    description:
      "Traditional microneedling (CIT) at Rejuvenate Skin Spa in Queen Creek, AZ. Improve fine lines, acne scars, and skin texture.",
    url: `${siteUrl}/microneedling/traditional-microneedling`,
    images: [
      {
        url: `${siteUrl}/og/og-traditional-microneedling.jpg`,
        width: 1200,
        height: 630,
        alt: "Traditional Microneedling at Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Traditional Microneedling | Queen Creek, AZ",
    description:
      "Traditional microneedling (CIT) at Rejuvenate Skin Spa in Queen Creek, AZ.",
    images: [`${siteUrl}/og/og-traditional-microneedling.jpg`],
  },
};

export default function TraditionalMicroneedlingPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/microneedling/traditional-microneedling")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/microneedling/traditional-microneedling")!)) }}
      />

      {/* Hero */}
      <MicroneedlingTreatmentHero
        title="Traditional Microneedling"
        subtitle="Collagen Induction Therapy"
        description="Stimulate natural collagen production to improve skin texture, reduce fine lines, and restore a smoother, more youthful complexion."
      />

      {/* Definition Section - GEO Optimized */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            What Is Traditional Microneedling?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Traditional microneedling, also called Collagen Induction Therapy (CIT), is a minimally invasive skin treatment that uses fine needles to create controlled micro-injuries in the skin. This process stimulates the body's natural wound-healing response, increasing collagen and elastin production. At Rejuvenate Skin Spa in Queen Creek, Arizona, traditional microneedling treats fine lines, acne scars, enlarged pores, and uneven skin texture.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Traditional Microneedling – Collagen Induction Therapy (CIT)
          </h2>
          <p className="text-xl text-sage-600 font-semibold italic mb-8">
            Stimulate. Restore. Renew.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              Restore smoother texture and a brighter, more even complexion with
              Collagen Induction Therapy (CIT), also known as traditional
              microneedling.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              This advanced rejuvenation treatment uses ultra-fine needles to
              create controlled micro-channels that stimulate collagen and
              elastin production, softening the appearance of fine lines, acne
              scars, and enlarged pores.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              CIT enhances serum absorption, refines uneven texture, and promotes
              firmer, more youthful-looking skin with minimal downtime. Most
              clients see progressive improvement over a series of 3 to 6
              treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how traditional microneedling improves skin health
              naturally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Boosts Collagen",
                description:
                  "Stimulates collagen and elastin for firmer, healthier skin.",
              },
              {
                icon: Star,
                title: "Smooths Fine Lines",
                description:
                  "Reduces wrinkles and softens acne scars over time.",
              },
              {
                icon: Shield,
                title: "Refines Pores",
                description:
                  "Minimizes enlarged pores and improves skin texture.",
              },
              {
                icon: Heart,
                title: "Improves Scarring",
                description:
                  "Targets acne scars, stretch marks, and uneven texture.",
              },
              {
                icon: Clock,
                title: "Minimal Downtime",
                description:
                  "Mild redness for 24–48 hours with quick recovery.",
              },
              {
                icon: CheckCircle,
                title: "Safe for All Skin Types",
                description:
                  "Customizable depth makes it suitable for all skin tones.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Microneedling can be performed on many areas of the body.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Face, neck, décolleté",
              "Hands, arms, legs",
              "Acne scars & stretch marks",
              "Wrinkles & fine lines",
              "Uneven tone & pigmentation",
            ].map((area, index) => (
              <Card key={index} className="text-center bg-white shadow-md border-l-4 border-l-sage-600 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p className="text-gray-800 font-semibold">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION START */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Microneedling Treatment Options
            </h2>
            <p className="text-lg text-gray-600">
              Professional microneedling for natural skin rejuvenation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Single Treatment Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header area with fixed height for alignment */}
                <div className="min-h-[28px] mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Single Treatment
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $199
                </div>
                <div className="min-h-[20px] mb-3" />
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Complete microneedling treatment with collagen-boosting serums and aftercare guidance.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Stimulates collagen production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Improves skin texture & tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Reduces fine lines & pores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Softens acne scarring</span>
                  </li>
                </ul>
                <PhoneCtaButton className="w-full mt-auto" />
              </CardContent>
            </Card>

            {/* 3-Treatment Package Card (Featured) */}
            <Card className="border border-sage-300 hover:shadow-md transition-shadow bg-sage-50/50 h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header area with badge */}
                <div className="flex justify-center mb-3">
                  <Badge className="bg-sage-600 text-white text-xs px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  3-Treatment Package
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $549
                </div>
                <div className="text-xs text-sage-700 font-medium mb-3 text-center">
                  Save $48 ($183 per session)
                </div>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Optimal results with three treatments spaced 4–6 weeks apart for maximum collagen stimulation.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Stimulates collagen production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Improves skin texture & tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Reduces fine lines & pores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Softens acne scarring</span>
                  </li>
                </ul>
                <PhoneCtaButton className="w-full mt-auto" />
              </CardContent>
            </Card>

            {/* 6-Treatment Package Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header area with badge */}
                <div className="flex justify-center mb-3">
                  <Badge className="bg-gray-600 text-white text-xs px-3 py-1">
                    Best Value
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  6-Treatment Package
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $999
                </div>
                <div className="text-xs text-sage-700 font-medium mb-3 text-center">
                  Save $195 ($167 per session)
                </div>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Comprehensive transformation with six treatments for dramatic, long-lasting results.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Stimulates collagen production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Improves skin texture & tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Reduces fine lines & pores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Softens acne scarring</span>
                  </li>
                </ul>
                <PhoneCtaButton className="w-full mt-auto" />
              </CardContent>
            </Card>
          </div>

          {/* Package Pricing Callout */}
          <div className="mt-10 bg-sage-50 border border-sage-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-base font-semibold text-gray-900 mb-3">How package pricing works</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Clients who choose a treatment series may pay per session at the single-treatment rate. When the full series is completed, the package discount is applied to the final treatment.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Clients may also choose to pay for the full series upfront to receive the package pricing immediately.
            </p>
          </div>
        </div>
      </section>
      {/* PRICING SECTION END */}

      {/* What to Expect */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            What to Expect During and After Treatment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">During Treatment</h3>
              <p className="text-gray-600 leading-relaxed">
                A topical numbing cream is applied before treatment to minimize discomfort. The microneedling device is then passed over the treatment area, creating controlled micro-channels. Most sessions take 30–60 minutes depending on the area being treated.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Recovery &amp; Aftercare</h3>
              <p className="text-gray-600 leading-relaxed">
                Expect mild redness similar to a sunburn for 24–48 hours. Most clients return to normal activities the next day. Avoid direct sun exposure and active skincare ingredients (retinol, AHAs) for several days following treatment. Your practitioner will provide specific aftercare guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who May Want to Postpone */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            Who May Want to Postpone Microneedling
          </h2>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Active acne breakouts or skin infections in the treatment area</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Pregnancy or nursing</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Use of isotretinoin (Accutane) within the past 6 months</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>History of keloid scarring (discuss during consultation)</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Recent sunburn or chemical peel within the past 2 weeks</span>
            </li>
          </ul>
          <p className="mt-6 text-gray-600">
            Your practitioner will review your full health history during your consultation to determine if microneedling is appropriate for you.
          </p>
        </div>
      </section>

      {/* Why Choose Rejuvenate */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            Why Choose Rejuvenate Skin Spa
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Rejuvenate Skin Spa in Queen Creek, Arizona offers traditional microneedling performed by a licensed cosmetologist with professional-grade equipment. Every treatment begins with a consultation to assess your skin, discuss your goals, and build a personalized treatment plan. We focus on realistic expectations and clear aftercare guidance so you can feel confident throughout the process.
          </p>
          <Link
            href="/about-us/bridgette-ball"
            className="inline-flex items-center text-sage-600 hover:text-sage-700 font-medium transition-colors"
          >
            Meet Bridgette Ball
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Related Treatments */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-playfair font-bold text-gray-900 mb-4">
            Explore Other Microneedling Options
          </h2>
          <p className="text-gray-600 mb-6">
            Not sure which treatment is right for you? Compare all options or call us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/microneedling" className="text-sage-600 hover:text-sage-700 font-medium underline">
              View All Microneedling Services →
            </Link>
            <Link href="/plexr-plasma-skin-tightening" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Explore Plexr Plasma Treatments →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div id="faq-section">
        <MicroneedlingTreatmentFAQ />
      </div>
    </div>
  );
}

