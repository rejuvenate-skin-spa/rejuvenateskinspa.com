import type { Metadata } from "next";
import MicroneedlingTreatmentFAQ from "@/components/microneedling-treatment-faq";
import MicroneedlingTreatmentHero from "@/components/microneedling-treatment-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Star, Zap, Heart } from "lucide-react";

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
      <MicroneedlingTreatmentHero />

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

      {/* FAQ */}
      <div id="faq-section">
        <MicroneedlingTreatmentFAQ />
      </div>
    </div>
  );
}

