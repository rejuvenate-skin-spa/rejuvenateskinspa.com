"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Shield,
  Star,
  Zap,
  Heart,
  Users,
} from "lucide-react";
import Image from "next/image";
import TCAFacialPeelFAQ from "@/components/35-tca-peel-faq";
import TCApeelHero from "@/components/35-tca-peel-hero";
import PhoneCtaButton from "@/components/phone-cta-button";
import { Badge } from "@/components/ui/badge";

export default function BioRePeel35TCAPeelPageClient() {
  return (
    <div className="min-h-screen">
      <TCApeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Gentle Yet Powerful Facial Rejuvenation
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  BioRePeel 35 TCA is specifically formulated for facial
                  treatments, combining 35% Trichloroacetic Acid with amino
                  acids, vitamins, and GABA. This unique biphasic formula
                  provides deep skin renewal while being gentle enough for
                  regular treatments.
                </p>
                <p>
                  Unlike traditional TCA peels that cause significant peeling
                  and downtime, BioRePeel 35 works from within the skin layers
                  to stimulate cellular renewal, improve texture, and boost
                  collagen production with minimal visible peeling.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/biorepeel-35-tca-treatment-rejuvenate-skin-spa-queen-creek-az.jpg"
                alt="BioRePeel 35 TCA treatment"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Ingredients */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Advanced Formula Ingredients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each ingredient is carefully selected for maximum efficacy and
              skin compatibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                ingredient: "35% TCA",
                description:
                  "Trichloroacetic Acid for deep exfoliation and cellular renewal.",
                benefit: "Skin resurfacing",
              },
              {
                ingredient: "Amino Acids",
                description:
                  "Building blocks of proteins that support skin structure.",
                benefit: "Skin repair",
              },
              {
                ingredient: "Vitamin C",
                description:
                  "Powerful antioxidant that brightens and protects skin.",
                benefit: "Brightening",
              },
              {
                ingredient: "GABA",
                description:
                  "Gamma-aminobutyric acid that soothes and calms skin.",
                benefit: "Anti-inflammatory",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-sage-600 mb-2">
                    {item.ingredient}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.description}
                  </p>
                  <div className="text-xs text-sage-700 font-medium bg-sage-100 px-2 py-1 rounded">
                    {item.benefit}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience comprehensive facial rejuvenation with visible results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Improved Skin Texture",
                description:
                  "Smooths rough skin and reduces the appearance of fine lines and wrinkles.",
              },
              {
                icon: Zap,
                title: "Brighter Complexion",
                description:
                  "Reveals radiant, glowing skin by removing dull surface layers.",
              },
              {
                icon: Shield,
                title: "Minimized Pores",
                description:
                  "Reduces pore size and improves overall skin clarity and smoothness.",
              },
              {
                icon: Heart,
                title: "Collagen Boost",
                description:
                  "Stimulates natural collagen production for firmer, more youthful skin.",
              },
              {
                icon: Users,
                title: "All Skin Types",
                description:
                  "Safe and effective for all skin types, including sensitive and darker skin.",
              },
              {
                icon: Clock,
                title: "Minimal Downtime",
                description:
                  "Return to normal activities immediately with little to no visible peeling.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
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

      {/* Treatment Process */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your BioRePeel 35 TCA facial experience from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Skin analysis and treatment customization.",
              },
              {
                step: "02",
                title: "Cleansing",
                description: "Deep cleansing to prepare skin for treatment.",
              },
              {
                step: "03",
                title: "Application",
                description: "Precise application of BioRePeel 35 formula.",
              },
              {
                step: "04",
                title: "Neutralization",
                description: "Gentle neutralization and removal process.",
              },
              {
                step: "05",
                title: "Aftercare",
                description: "Soothing treatment and protection application.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Is BioRePeel 35 Right for You?
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Perfect for treating:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Fine lines and early signs of aging",
                    "Uneven skin tone and texture",
                    "Enlarged pores",
                    "Mild acne scarring",
                    "Dull, lackluster complexion",
                    "Sun damage and age spots",
                  ].map((condition, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-sage-600 mr-3" />
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/biorepeel-ideal-candidate.png"
                alt="Ideal candidate for BioRePeel 35"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Pricing</Badge>
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              BioRePeel Facial Treatment Options
            </h2>
            <p className="text-lg text-gray-600">
              Professional BioRePeel 35 TCA facial treatments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Single Treatment Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full bg-white">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="min-h-[28px] mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Single Treatment
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $249
                </div>
                <div className="min-h-[20px] mb-3" />
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Complete BioRePeel 35 TCA facial treatment with consultation and aftercare.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Improves skin texture & tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Stimulates collagen production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Brightens complexion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Minimizes pores</span>
                  </li>
                </ul>
                <PhoneCtaButton className="w-full mt-auto" />
              </CardContent>
            </Card>

            {/* 3-Treatment Package Card (Featured) */}
            <Card className="border border-sage-300 hover:shadow-md transition-shadow bg-sage-50/50 h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex justify-center mb-3">
                  <Badge className="bg-sage-600 text-white text-xs px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  3-Treatment Package
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $699
                </div>
                <div className="text-xs text-sage-700 font-medium mb-3 text-center">
                  Save $48 ($233 per session)
                </div>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Optimal results with three treatments spaced 2–4 weeks apart.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Improves skin texture & tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Stimulates collagen production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Post-treatment care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Aftercare instructions</span>
                  </li>
                </ul>
                <PhoneCtaButton className="w-full mt-auto" />
              </CardContent>
            </Card>

            {/* 6-Treatment Package Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full bg-white">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex justify-center mb-3">
                  <Badge className="bg-gray-600 text-white text-xs px-3 py-1">
                    Best Value
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  6-Treatment Package
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $1,299
                </div>
                <div className="text-xs text-sage-700 font-medium mb-3 text-center">
                  Save $195 ($217 per session)
                </div>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Comprehensive transformation with six treatments for dramatic, long-lasting results.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Improves skin texture & tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Stimulates collagen production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Post-treatment care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Aftercare instructions</span>
                  </li>
                </ul>
                <PhoneCtaButton className="w-full mt-auto" />
              </CardContent>
            </Card>
          </div>

          {/* Package Pricing Callout */}
          <div className="mt-10 bg-white border border-sage-200 rounded-lg p-6 max-w-2xl mx-auto">
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

      {/* FAQ Section */}
      <div id="faq-section">
        <TCAFacialPeelFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Ready for Radiant, Renewed Skin?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the gentle power of BioRePeel 35 TCA and reveal your most
            beautiful complexion.
          </p>
          <div className="flex justify-center">
            <PhoneCtaButton className="bg-white text-sage-600 hover:bg-gray-100" />
          </div>
        </div>
      </section>
    </div>
  );
}
