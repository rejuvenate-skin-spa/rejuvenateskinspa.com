"use client";

import NanoAblativeSkinResurfacingHero from "@/components/nano-ablative-skin-resurfacing-hero";
import NanoAblativeSkinResurfacingFAQ from "@/components/nano-ablative-skin-resurfacing-faq";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Shield,
  Star,
  Zap,
  Heart,
  Users,
  Info,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SmartContactCTA } from "@/components/SmartContactCTA";
import { PLEXR_CONSULT_PRICING, formatPrice } from "@/lib/services";

export default function NanoAblativeClientPage() {
  const consultFee = PLEXR_CONSULT_PRICING[0];

  return (
    <div className="min-h-screen">
      <NanoAblativeSkinResurfacingHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
              What Is Nano-Ablative Skin Resurfacing?
            </h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Considered the gentlest form of Plasma skin resurfacing at a microscopic level. The Plexr Shower is an advanced treatment that creates invisible micro-channels on the skin's surface while using controlled plasma energy. These micro-channels open pathways to stimulate collagen production, enhance elasticity, and boost infused professional serums deep within the dermal layers for maximum hydration, cellular renewal and intense moisture renewal.
              </p>
            </div>
            
            {/* Image */}
            <div className="relative mb-8 max-w-2xl mx-auto">
              <Image
                src="/images/nano-ablative-shower-results-rejuvenate-skin-spa-queen-creek-az.avif"
                alt="Nano plasma technology process"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch mt-8">
            <div className="h-full">
              {/* How It Works Box */}
              <div className="bg-sage-50 p-6 rounded-lg border border-sage-200 h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  The Plexr Plasma Pen Shower – Here's How It Works
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-xs font-semibold tracking-wide text-sage-600 uppercase whitespace-nowrap pt-0.5">
                      Step 1
                    </span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Nano-Ablative Plasma Energy
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – Our Plexr pen produces a delicate plasma arc with a special
                        triangle tip to create microscopic, invisible channels
                        on the skin's surface.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xs font-semibold tracking-wide text-sage-600 uppercase whitespace-nowrap pt-0.5">
                      Step 2
                    </span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Cellular Activation
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – These micro-pathways awaken fibroblast activity,
                        stimulating natural collagen and elastin production for
                        firmer, smoother skin.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xs font-semibold tracking-wide text-sage-600 uppercase whitespace-nowrap pt-0.5">
                      Step 3
                    </span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Serum Infusion
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – Customized serums are then applied, penetrating deeply
                        through the channels for maximum absorption and
                        effectiveness.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xs font-semibold tracking-wide text-sage-600 uppercase whitespace-nowrap pt-0.5">
                      Step 4
                    </span>
                    <div>
                      <span className="font-medium text-gray-900">Redness</span>
                      <span className="text-gray-600">
                        {" "}
                        – Temporary redness may occur, but it typically fades quickly.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-full">
              {/* Benefits Box */}
              <div className="bg-white p-6 rounded-lg border border-sage-200 shadow-sm h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Benefits of the Plexr Plasma Pen Shower
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-sage-600">•</span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Gentle Rejuvenation
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – Refines pores, restores radiance, and revitalizes skin for a smooth, luminous finish.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-sage-600">•</span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Collagen & Elastin Boost
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – Stimulates natural collagen and elastin production to firm, tighten, and tone the skin.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-sage-600">•</span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Enhanced Serum Absorption
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – Creates precise Plasma Pen micro-channels for deeper infusion of medical-grade serums and nutrients.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-sage-600">•</span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Radiant Complexion
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – Brightens dullness, refines texture, and replenishes hydration for a youthful glow.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-sage-600">•</span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Non-Invasive = ZERO DOWNTIME
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – Enjoy remarkable results without needles, surgery, or extended recovery.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              Nano-ablative plasma can be used on various areas for comprehensive skin improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                area: "Face",
                description:
                  "Refines pores, smooths texture, and restores a youthful radiance.",
              },
              {
                area: "Neck",
                description:
                  "Tightens and firms delicate skin to reduce visible signs of aging.",
              },
              {
                area: "Décolletage",
                description:
                  "Improves chest area texture and reduces sun damage for smoother skin.",
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-md transition-shadow duration-300 rounded-lg border-sage-100"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {area.area}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
            Treatment areas may be combined during a single session. Exact treatment plans and timing are determined during your consultation.
          </p>
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
              Your nano-ablative plasma treatment experience from consultation
              to results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Comprehensive skin analysis and treatment planning.",
              },
              {
                step: "02",
                title: "Preparation",
                description:
                  "Gentle cleansing and numbing cream application if needed.",
              },
              {
                step: "03",
                title: "Treatment",
                description:
                  "Precise nano-ablative plasma application to targeted areas.",
              },
              {
                step: "04",
                title: "Aftercare",
                description:
                  "Soothing application and post-treatment instructions.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It Best For */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
                Who Is Nano-Ablative Best For?
              </h2>
              <ul className="space-y-3">
                {[
                  "Those new to plasma treatments seeking a gentle introduction",
                  "Anyone wanting improved skin texture with no downtime",
                  "Clients looking for a refreshed, glowing complexion",
                  "Those with mild skin concerns or early signs of aging",
                  "People who cannot accommodate recovery time",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
                Ask Us First If You Have:
              </h2>
              <ul className="space-y-3">
                {[
                  "Active skin infections or irritation",
                  "Recent sun exposure or sunburn",
                  "Certain skin conditions (we'll discuss during consultation)",
                  "Pregnancy or breastfeeding",
                  "Very deep wrinkles or significant laxity (may need a higher level)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Info className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            Schedule Your Plexr Consultation
          </h2>
          <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
            Plexr treatment plans are customized based on your goals and treatment area. Call us or request a consultation to learn more about what Plexr can do for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <SmartContactCTA
              variant="outline"
              showPhoneWhenOpen
              className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-3 text-base font-medium rounded-lg shadow-lg min-h-[48px]"
            />
            <Button
              asChild
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 text-base font-medium rounded-lg min-h-[48px]"
            >
              <Link href="/contact">
                Request a Consultation
              </Link>
            </Button>
          </div>

          {/* Pricing guidance helper text */}
          <p className="text-sm text-sage-200 mb-10 max-w-xl mx-auto">
            General pricing guidance is available by phone. Final treatment recommendations and exact pricing are determined during your in-person consultation.
          </p>

          {/* Consultation Required Info */}
          <div className="bg-white/15 backdrop-blur-sm rounded-lg p-8 max-w-xl mx-auto text-left border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <Info className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
              <h3 className="text-xl font-semibold text-white">Consultation Required</h3>
            </div>
            <ul className="space-y-3 text-sage-100 text-sm ml-10">
              <li>• In-person consultation required for Plasma services</li>
              <li>• {formatPrice(consultFee.price)} consultation fee</li>
              <li>• Fee is applied toward treatment if you proceed</li>
              <li>• Non-refundable if you choose not to proceed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Consultation Is Required */}
      <section className="pt-10 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-800 mb-6">
            Why Is a Consultation Required?
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Plasma treatments are advanced procedures that require a professional assessment to ensure safety and effectiveness. During your consultation, we evaluate your skin type, discuss your goals, review your health history, and determine whether nano-ablative plasma is the right fit for you.
          </p>
          <p className="text-gray-600">
            This personalized approach helps us create a treatment plan tailored to your unique needs and ensures you achieve the best possible results.
          </p>
        </div>
      </section>

      {/* Why Choose Rejuvenate */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            Why Choose Rejuvenate Skin Spa
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Rejuvenate Skin Spa in Queen Creek, Arizona offers nano-ablative skin resurfacing using the genuine Plexr plasma device with its specialized triangle tip. This is the gentlest level of Plexr plasma treatment — ideal for clients new to plasma or those who need zero downtime. Every session includes a professional skin assessment and customized serum infusion.
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

      {/* Related Plexr Treatments */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-playfair font-bold text-gray-900 mb-4">
            Related Plexr Plasma Treatments
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plexr-plasma-skin-tightening" className="text-sage-600 hover:text-sage-700 font-medium underline">
              All Plexr Treatments →
            </Link>
            <Link href="/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Semi-Ablative Resurfacing →
            </Link>
            <Link href="/plexr-plasma-skin-tightening/ablative-skin-resurfacing" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Ablative Resurfacing →
            </Link>
          </div>
        </div>
      </section>

      <NanoAblativeSkinResurfacingFAQ />

      {/* Compact Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <SmartContactCTA
              showPhoneWhenOpen
              className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 text-base font-medium rounded-lg min-h-[48px]"
            />
            <Button
              asChild
              variant="outline"
              className="border-2 border-sage-600 text-sage-600 hover:bg-sage-50 px-6 py-3 text-base font-medium rounded-lg min-h-[48px]"
            >
              <Link href="/contact">
                Request a Consultation
              </Link>
            </Button>
          </div>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            General pricing guidance is available by phone. Final treatment recommendations and exact pricing are determined during your in-person consultation.
          </p>
        </div>
      </section>
    </div>
  );
}
