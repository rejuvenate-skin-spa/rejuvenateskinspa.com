"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Shield,
  Star,
  Zap,
  Target,
  Award,
  Phone,
} from "lucide-react";
import Image from "next/image";
import BioRePeel50TCABodyPeelFAQ from "@/components/50-tca-peel-faq";
import FiftyTCAPeelHero from "@/components/50-tca-peel-hero";
import { Badge } from "@/components/ui/badge";
import PhoneCtaButton from "@/components/phone-cta-button";
import { siteConfig } from "@/lib/site-config";

export default function BioRePeel50TCAPeelPageClient() {
  return (
    <div className="min-h-screen">
      <FiftyTCAPeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Intensive Body Skin Rejuvenation
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  BioRePeel 50 TCA is specifically formulated for body
                  treatments, featuring a higher concentration of 50%
                  Trichloroacetic Acid combined with amino acids and vitamins.
                  This powerful formula is designed to address more stubborn
                  skin concerns on the body.
                </p>
                <p>
                  The thicker skin on the body can handle this higher
                  concentration, making it ideal for treating areas like the
                  back, chest, arms, and legs where traditional facial
                  treatments may not be strong enough to achieve desired
                  results.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/chemical-peel-back-image.jpg"
                alt="BioRePeel 50 TCA body treatment results"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
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
              BioRePeel 50 TCA can effectively treat various body areas for
              comprehensive skin improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: "Back & Shoulders",
                description:
                  "Treat back acne, scarring, and rough texture for smoother skin.",
                duration: "60 minutes",
              },
              {
                area: "Chest & Décolletage",
                description:
                  "Address sun damage, age spots, and fine lines in delicate areas.",
                duration: "45 minutes",
              },
              {
                area: "Arms & Hands",
                description:
                  "Improve skin texture and reduce age spots on arms and hands.",
                duration: "45 minutes",
              },
              {
                area: "Legs",
                description:
                  "Smooth rough skin and improve overall texture on legs.",
                duration: "75 minutes",
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {area.area}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {area.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-500">{area.duration}</div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                  >
                    Book Area
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience dramatic improvements in body skin texture and
              appearance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Treats Body Acne",
                description:
                  "Effectively addresses back acne, chest acne, and body breakouts.",
              },
              {
                icon: Star,
                title: "Reduces Scarring",
                description:
                  "Minimizes the appearance of acne scars and other body imperfections.",
              },
              {
                icon: Zap,
                title: "Improves Texture",
                description:
                  "Smooths rough, bumpy skin for a more refined appearance.",
              },
              {
                icon: Shield,
                title: "Fades Hyperpigmentation",
                description:
                  "Reduces dark spots, age spots, and uneven skin tone.",
              },
              {
                icon: Award,
                title: "Professional Strength",
                description:
                  "Higher concentration formula for more dramatic results.",
              },
              {
                icon: Clock,
                title: "Long-Lasting Results",
                description:
                  "Provides lasting improvement with proper maintenance.",
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
              Your BioRePeel 50 TCA body treatment experience.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Assessment",
                description:
                  "Thorough evaluation of treatment areas and skin concerns.",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Cleansing and preparation of treatment areas.",
              },
              {
                step: "03",
                title: "Application",
                description:
                  "Careful application of BioRePeel 50 formula to target areas.",
              },
              {
                step: "04",
                title: "Monitoring",
                description:
                  "Close monitoring during treatment for optimal results.",
              },
              {
                step: "05",
                title: "Aftercare",
                description:
                  "Post-treatment care and detailed recovery instructions.",
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
                Is BioRePeel 50 Right for You?
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Ideal for treating:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Persistent body acne and breakouts",
                    "Acne scarring on back and chest",
                    "Rough, bumpy skin texture",
                    "Hyperpigmentation and dark spots",
                    "Sun damage on décolletage and arms",
                    "Keratosis pilaris (chicken skin)",
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
                src="/images/biorepeel-50-tca-body-treatment.png"
                alt="BioRePeel 50 TCA body treatment results"
                width={700}
                height={560}
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
              BioRePeel Body Treatment Options
            </h2>
            <p className="text-lg text-gray-600">
              Professional BioRePeel 50 TCA body treatments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
            {/* Single Body Part Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full bg-white">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="min-h-[28px] mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Single Body Part
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  Starting at $249
                </div>
                <div className="min-h-[20px] mb-3" />
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Targeted treatment for one body area such as back, chest, arms, or legs.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Complete BioRePeel 50 TCA treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Improves texture & reduces scarring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Post-treatment care included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 italic">Pricing depends on body region selected</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                >
                  <a href={`tel:${siteConfig.phoneTel}`} aria-label="Call Rejuvenate Skin Spa" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call for Pricing
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Multiple Body Parts Card */}
            <Card className="border border-sage-300 hover:shadow-md transition-shadow bg-white h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex justify-center mb-3">
                  <Badge className="bg-sage-600 text-white text-xs px-3 py-1">
                    Best Value
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Multiple Body Parts
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  Starting at $499
                </div>
                <div className="min-h-[20px] mb-3" />
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Treat multiple body areas in a single session for comprehensive results.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Treat 2 or more body areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Combined treatment savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Comprehensive aftercare support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 italic">Pricing depends on number and size of body parts</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                >
                  <a href={`tel:${siteConfig.phoneTel}`} aria-label="Call Rejuvenate Skin Spa" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call for Pricing
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recovery, Aftercare & Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Recovery, Aftercare & Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper aftercare ensures optimal healing and maximized results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                What to Expect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Days 1-3: Initial Healing
                    </h4>
                    <p className="text-gray-600">
                      Mild redness and sensitivity. Keep treated areas clean and
                      moisturized.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Days 3-7: Peeling Phase
                    </h4>
                    <p className="text-gray-600">
                      Light peeling may occur. Avoid picking and use gentle
                      moisturizers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Days 7-14: Renewal
                    </h4>
                    <p className="text-gray-600">
                      New skin emerges smoother and more refined. Results become
                      visible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/mans-back-biorepeel-50.jpg"
                alt="BioRePeel 50 TCA body treatment results"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <BioRePeel50TCABodyPeelFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Transform Your Body Skin Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the powerful results of BioRePeel 50 TCA and achieve the
            smooth, clear body skin you deserve.
          </p>
          <div className="flex justify-center">
            <PhoneCtaButton className="bg-white text-sage-600 hover:bg-gray-100" />
          </div>
        </div>
      </section>
    </div>
  );
}
