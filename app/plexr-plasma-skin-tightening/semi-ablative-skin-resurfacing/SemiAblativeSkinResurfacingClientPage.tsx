"use client";

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
  AlertTriangle,
  Info,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SmartContactCTA } from "@/components/SmartContactCTA";
import SemiAblativeSkinResurfacingFAQ from "@/components/semi-ablative-skin-resurfacing-faq";
import SemiAblativeSkinResurfacingHero from "@/components/semi-ablative-skin-resurfacing-hero";

export default function SemiAblativeSkinResurfacingClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SemiAblativeSkinResurfacingHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                What Is Semi-Ablative Skin Resurfacing?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The CAT Resurface offers the perfect balance between effectiveness and recovery time. This advanced treatment penetrates deeper into the skin dermal layers creating precise controlled micro-injuries that trigger powerful collagen remodeling, target specific skin concerns, address deep wrinkles, acne scars, sun damage, and uneven textures, which then prompts cellular renewal for smoother, firmer, more radiant skin.
                </p>
                <p>
                  While the treatment involves a brief 2–5-day downtime, it delivers remarkable, long-lasting improvements in skin quality, tone, and overall appearance, all achieved without the use of needles or scalpels.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/semi-ablative-transformation.avif"
                alt="Advanced plasma technology process"
                width={400}
                height={300}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience significant skin improvements with our advanced
              semi-ablative plasma technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Powerful Results, Less Downtime",
                description:
                  "Delivers deeper rejuvenation than gentle plasma treatments, while still being less invasive than fully ablative procedures.",
              },
              {
                icon: Zap,
                title: "Stimulates Collagen & Elastin",
                description:
                  "Activates fibroblast cells to boost natural collagen and elastin production, restoring firmness and elasticity.",
              },
              {
                icon: Shield,
                title: "Smoother, Tighter Skin",
                description:
                  "Visibly reduces fine lines, wrinkles, and mild sagging for a firmer, more youthful appearance.",
              },
              {
                icon: Heart,
                title: "Improved Skin Texture",
                description:
                  "Refines uneven texture, softens rough patches, and minimizes the look of enlarged pores.",
              },
              {
                icon: Clock,
                title: "Long-Lasting Results",
                description:
                  "Skin continues to regenerate and improve for weeks after treatment, with results lasting up to 1–2 years.",
              },
              {
                icon: Users,
                title: "Non-Surgical Alternative",
                description:
                  "Achieve noticeable lifting and tightening without needles, scalpels, or extended recovery.",
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
              Semi-ablative plasma treatments are ideal for addressing specific
              skin concerns on various areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: "Full Face",
                description:
                  "Comprehensive facial resurfacing for overall skin transformation.",
                duration: "90–120 minutes",
              },
              {
                area: "Upper Face",
                description:
                  "Target forehead, crow's feet, and upper eyelid concerns.",
                duration: "60–90 minutes",
              },
              {
                area: "Lower Face",
                description:
                  "Address smile lines, jowls, and lower facial concerns.",
                duration: "60–90 minutes",
              },
              {
                area: "Neck & Décolletage",
                description:
                  "Improve neck and chest area texture and tightening.",
                duration: "120–180 minutes",
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 rounded-lg"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {area.area}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {area.description}
                  </p>
                  <div className="text-sm text-gray-500 mb-4">{area.duration}</div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 rounded-md bg-transparent"
                  >
                    <Link href="/contact">Request Info</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Recovery Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding your healing process for optimal results and
              planning.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                day: "Day 1",
                title: "Treatment Day",
                description:
                  "Immediate tightening effect with mild swelling and redness.",
                status: "active",
              },
              {
                day: "Day 2–3",
                title: "Initial Healing",
                description: "Micro-crusting begins, skin feels tight and dry.",
                status: "healing",
              },
              {
                day: "Day 4–5",
                title: "Peeling Phase",
                description:
                  "Natural peeling reveals fresh, new skin underneath.",
                status: "peeling",
              },
              {
                day: "Day 6–7",
                title: "New Skin",
                description:
                  "Fresh, rejuvenated skin with improved texture visible.",
                status: "renewal",
              },
              {
                day: "Week 2+",
                title: "Full Results",
                description:
                  "Continued improvement as collagen production increases.",
                status: "results",
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full text-sm font-bold mb-4">
                  {phase.day.split(" ")[1]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Ideal Candidates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Semi-ablative treatments are perfect for those seeking significant
              improvements with manageable downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Perfect For:
              </h3>
              <ul className="space-y-4">
                {[
                  "Moderate to deep wrinkles and fine lines",
                  "Acne scarring and textural irregularities",
                  "Sun damage and age spots",
                  "Uneven skin tone and texture",
                  "Mild to moderate skin laxity",
                  "Those who can accommodate 2–5 days downtime",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Not Recommended For:
              </h3>
              <ul className="space-y-4">
                {[
                  "Active skin infections or conditions",
                  "Pregnancy or breastfeeding",
                  "Recent sun exposure or tanning",
                  "Unrealistic expectations for results",
                  "Inability to follow aftercare instructions",
                  "Those seeking zero downtime treatments",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
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
              <li>• $100 consultation fee</li>
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
            Semi-ablative plasma treatments penetrate deeper into the skin and require careful assessment to ensure optimal results and safety. During your consultation, we evaluate your skin condition, discuss your goals, review your medical history, and determine if this treatment level is right for you.
          </p>
          <p className="text-gray-600">
            This personalized approach ensures we create a treatment plan that addresses your specific concerns while setting realistic expectations for recovery and results.
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
            Rejuvenate Skin Spa in Queen Creek, Arizona offers semi-ablative skin resurfacing using Plexr plasma technology. This treatment delivers significant skin improvements with a manageable 2–5 day recovery, making it a practical alternative to fully ablative procedures. Every treatment begins with a detailed consultation to evaluate your skin and determine if this depth of treatment is right for your goals.
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
            <Link href="/plexr-plasma-skin-tightening/ablative-skin-resurfacing" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Ablative Resurfacing →
            </Link>
            <Link href="/plexr-plasma-skin-tightening/sun-spot-removal-treatment" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Sun Spot Removal →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <SemiAblativeSkinResurfacingFAQ />
      </div>

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
