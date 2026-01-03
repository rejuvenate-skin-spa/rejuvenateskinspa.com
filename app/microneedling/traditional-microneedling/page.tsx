import type { Metadata } from "next";
import MicroneedlingTreatmentFAQ from "@/components/microneedling-treatment-faq";
import MicroneedlingTreatmentHero from "@/components/microneedling-treatment-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Star, Zap, Heart } from "lucide-react";
import PhoneCtaButton from "@/components/phone-cta-button";

export const metadata: Metadata = {
  title:
    "Traditional Microneedling | Collagen Induction Therapy | Rejuvenate Skin Spa",
  description:
    "Traditional microneedling (collagen induction therapy) in Queen Creek, AZ. Improve fine lines, acne scars, pores, and skin texture with minimal downtime.",
};

export default function TraditionalMicroneedlingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <MicroneedlingTreatmentHero
        title="Traditional Microneedling"
        subtitle="Collagen Induction Therapy"
        description="Stimulate natural collagen production to improve skin texture, reduce fine lines, and restore a smoother, more youthful complexion."
      />

      {/* Intro */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Traditional Microneedling – Collagen Induction Therapy (CIT)
          </h1>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Microneedling can be performed on many areas of the body.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Face, neck, décolleté",
              "Hands, arms, legs",
              "Acne scars & stretch marks",
              "Wrinkles & fine lines",
              "Uneven tone & pigmentation",
            ].map((area, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <p className="text-gray-700 font-medium">{area}</p>
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
              Treatment Investment
            </h2>
            <p className="text-lg text-gray-600">
              Professional microneedling for natural skin rejuvenation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
            {/* Single Treatment Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header area with fixed height for alignment */}
                <div className="min-h-[28px] mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Single Treatment
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $200
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

            {/* 3-Treatment Series Card (Featured) */}
            <Card className="border border-sage-300 hover:shadow-md transition-shadow bg-sage-50/50 h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header area with badge */}
                <div className="flex justify-center mb-3">
                  <Badge className="bg-sage-600 text-white text-xs px-3 py-1">
                    Recommended
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  3-Treatment Series
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $540
                </div>
                <div className="text-xs text-sage-700 font-medium mb-3 text-center">
                  Save $60 ($180 per session)
                </div>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Optimal results with three treatments spaced 4–6 weeks apart for maximum collagen stimulation.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Everything in single treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">3 microneedling sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Progress tracking & photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Customized treatment plan</span>
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

      {/* FAQ */}
      <div id="faq-section">
        <MicroneedlingTreatmentFAQ />
      </div>
    </div>
  );
}

