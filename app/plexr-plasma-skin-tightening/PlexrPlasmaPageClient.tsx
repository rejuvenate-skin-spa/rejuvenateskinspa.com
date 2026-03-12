"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlexrPlasmaSkinTighteningHero } from "@/components/plexr-plasma-skin-tightening-hero"
import { PlexrPlasmaFAQ } from "@/components/plexr-plasma-skin-tightening-faq"
import { Info, ArrowRight } from "lucide-react"
import { SmartContactCTA } from "@/components/SmartContactCTA"
import { PLEXR_CONSULT_PRICING, formatPrice } from "@/lib/services"

const treatmentOptions = [
  {
    title: "Nano-Ablative",
    description:
      "Gentle surface treatment for subtle skin improvement and glow.",
    recovery: "Minimal downtime",
    href: "/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing",
  },
  {
    title: "Semi-Ablative",
    description:
      "Moderate depth treatment for noticeable improvement in skin texture and tone.",
    recovery: "Short recovery period",
    href: "/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing",
  },
  {
    title: "Ablative",
    description:
      "Deep treatment for dramatic skin tightening and wrinkle reduction results.",
    recovery: "Extended recovery required",
    href: "/plexr-plasma-skin-tightening/ablative-skin-resurfacing",
  },
]

const removalServices = [
  {
    title: "Mole Removal Treatment",
    description:
      "Safe, precise removal of unwanted moles using advanced plasma technology.",
    href: "/plexr-plasma-skin-tightening/mole-removal-treatment",
  },
  {
    title: "Skin Tag Removal Treatment",
    description:
      "Quick, effective removal of skin tags with minimal discomfort.",
    href: "/plexr-plasma-skin-tightening/skin-tag-removal-treatment",
  },
  {
    title: "Sun Spot Removal Treatment",
    description:
      "Target and eliminate sun spots for clearer, more even skin tone.",
    href: "/plexr-plasma-skin-tightening/sun-spot-removal-treatment",
  },
  {
    title: "Wart Removal Treatment",
    description: "Effective wart removal using precise plasma technology.",
    href: "/plexr-plasma-skin-tightening/wart-removal-treatment",
  },
]

export default function PlexrPlasmaPageClient() {
  const consultFee = PLEXR_CONSULT_PRICING[0];

  return (
    <div className="min-h-screen">
      <PlexrPlasmaSkinTighteningHero />

      {/* Definition Section - GEO Optimized */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-4">
            What Is Plexr Plasma Skin Tightening?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Plexr plasma skin tightening is a non-surgical cosmetic procedure that uses ionized gas (plasma) to tighten, lift, and resurface the skin. The Plexr device creates a controlled micro-injury that stimulates collagen production and causes immediate skin contraction. At Rejuvenate Skin Spa in Queen Creek, Arizona, Plexr treatments address loose eyelids, fine lines, wrinkles, and skin laxity without incisions or general anesthesia.
          </p>
        </div>
      </section>

      {/* Who Is Plexr For? */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            Who Is Plexr Plasma Skin Tightening For?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Concerns It Addresses</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="w-2 h-2 bg-sage-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>Loose or sagging eyelid skin (hooded eyes)</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-sage-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>Fine lines and wrinkles around the eyes, mouth, or forehead</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-sage-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>Skin laxity on the neck, jawline, or décolleté</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-sage-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>Unwanted moles, skin tags, warts, or sun spots</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-sage-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>Stretch marks and acne scarring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">You May Be a Good Candidate If</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="w-2 h-2 bg-sage-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>You want visible skin tightening without surgery</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-sage-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>You are in generally good health</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-sage-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>You can commit to the recommended recovery period</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-sage-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>You are not currently pregnant or nursing</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-sage-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>You have realistic expectations about results and timing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-600 mb-6">
              Plexr Plasma Pen Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Plexr is the gold standard in plasma skin tightening. This non-surgical treatment tightens, firms, and lifts the skin without needles, general anesthesia, or extended recovery. Rejuvenate Skin Spa in Queen Creek, AZ offers multiple Plexr treatment levels to match your goals and downtime preferences.
            </p>
            {/* Treatment Levels - Responsive Layout */}
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-8">
                {/* Left Image */}
                <div className="relative w-full aspect-[3/2] rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="/images/plasma-eye-lift.avif"
                    alt="Plexr Plasma Pen Eye Lift Treatment"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Right Image */}
                <div className="relative w-full aspect-[3/2] rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="/images/neck-plasma.avif"
                    alt="Plexr Plasma Pen Neck Treatment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Treatment Levels List */}
              <div className="bg-sage-50 rounded-lg p-6 md:p-8 lg:p-10">
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-6 text-center">
                  Plexr Plasma Pen Treatment Levels
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  <Link
                    href="/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing"
                    aria-label="Learn about nano-ablative plasma resurfacing (Level 1 - The Shower)"
                    className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-sage-200 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
                  >
                    <div className="text-sage-600 font-bold text-lg mb-2">
                      Level 1
                    </div>
                    <div className="text-gray-900 font-semibold mb-1">
                      The Shower
                    </div>
                    <div className="text-sm text-gray-600">Nano-ablative</div>
                  </Link>
                  <Link
                    href="/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing"
                    aria-label="Learn about nano-ablative plasma resurfacing (Level 2 - The Glass Lift)"
                    className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-sage-200 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
                  >
                    <div className="text-sage-600 font-bold text-lg mb-2">
                      Level 2
                    </div>
                    <div className="text-gray-900 font-semibold mb-1">
                      The Glass Lift
                    </div>
                    <div className="text-sm text-gray-600">Nano-ablative</div>
                  </Link>
                  <Link
                    href="/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing"
                    aria-label="Learn about semi-ablative plasma resurfacing (Level 3 - Cat Resurface)"
                    className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-sage-200 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
                  >
                    <div className="text-sage-600 font-bold text-lg mb-2">
                      Level 3
                    </div>
                    <div className="text-gray-900 font-semibold mb-1">
                      Cat Resurface
                    </div>
                    <div className="text-sm text-gray-600">Semi-ablative</div>
                  </Link>
                  <Link
                    href="/plexr-plasma-skin-tightening/ablative-skin-resurfacing"
                    aria-label="Learn about ablative plasma resurfacing (Level 4 - The Fibroblast Lift)"
                    className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-sage-200 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
                  >
                    <div className="text-sage-600 font-bold text-lg mb-2">
                      Level 4
                    </div>
                    <div className="text-gray-900 font-semibold mb-1">
                      The Fibroblast Lift
                    </div>
                    <div className="text-sm text-gray-600">Ablative</div>
                  </Link>
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Tap a treatment level to learn more about downtime and candidacy.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                What Makes Plexr Plasma Pen Different?
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">True Plasma Technology</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Many "plasma pens" are really just low-grade electrical arc tools. Plexr uses real plasma energy, ionizing the air between the device and your skin for safe, controlled results.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Medical-Grade & Globally Recognized</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    CE-certified and used by dermatologists, doctors, and advanced aestheticians. Backed by years of research and clinical studies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Precision & Safety</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Targets even the most delicate areas. Advanced energy control means fewer side effects and more predictable healing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Produces natural collagen remodeling for long-lasting tightening, lifting, and rejuvenation. Known as the "gold standard" in plasma skin tightening.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-sage-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Treatment Areas
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm mb-8">
                <p className="text-gray-700">Face</p>
                <p className="text-gray-700">Chest</p>
                <p className="text-gray-700">Neck</p>
                <p className="text-gray-700">Thighs</p>
                <p className="text-gray-700">Arms</p>
                <p className="text-gray-700">Knees</p>
                <p className="text-gray-700">Breasts</p>
                <p className="text-gray-700">Hands</p>
                <p className="text-gray-700">Stomach</p>
                <p className="text-gray-700">Buttocks</p>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Plasma Removal Services
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <p className="text-gray-700">Moles</p>
                <p className="text-gray-700">Melasma</p>
                <p className="text-gray-700">Warts</p>
                <p className="text-gray-700">Keloids</p>
                <p className="text-gray-700">Skin tags</p>
                <p className="text-gray-700">Acne scars</p>
                <p className="text-gray-700">Stretch marks</p>
                <p className="text-gray-700">Fibroids/cysts</p>
                <p className="text-gray-700">Tattoos</p>
                <p className="text-gray-700">Pigmentation/sunspots</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 bg-sage-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Plexr Plasma Pen Skin Treatment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from three intensity levels based on your goals and available recovery time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {treatmentOptions.map((treatment, index) => (
              <Link
                key={index}
                href={treatment.href}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-200 bg-white border border-gray-100 group-hover:border-sage-200">
                  <CardContent className="p-6 h-full flex flex-col bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {treatment.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {treatment.description}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {treatment.recovery}
                    </p>
                    <span className="text-sage-600 text-sm font-medium group-hover:text-sage-700 transition-colors mt-auto">
                      View details →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
            Plasma treatments are advanced procedures that require a professional assessment to ensure safety and effectiveness. During your consultation, we evaluate your skin type, discuss your goals, review your health history, and determine the most appropriate treatment level for you.
          </p>
          <p className="text-gray-600">
            This personalized approach helps us create a treatment plan tailored to your unique needs and ensures you achieve the best possible results.
          </p>
        </div>
      </section>

      {/* Why Choose Rejuvenate */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6 text-center">
            Why Choose Rejuvenate Skin Spa for Plexr Plasma
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Rejuvenate Skin Spa in Queen Creek, Arizona is a licensed Plexr technology provider with advanced certifications in Plexr plasma applications. Every Plexr treatment at Rejuvenate begins with a thorough consultation to assess your skin, discuss your goals, and determine the appropriate treatment level.
            </p>
            <p>
              We use the genuine Plexr device — a CE-certified, medical-grade plasma system — not a generic plasma pen. This matters because the quality and safety of the device directly affects your results and healing experience.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/about-us/bridgette-ball"
              className="inline-flex items-center text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Meet Bridgette Ball
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Removal Services */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Plexr Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Safely and effectively remove unwanted skin imperfections with
              precision plasma technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {removalServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-200 bg-white border border-gray-100 group-hover:border-sage-200">
                  <CardContent className="p-6 text-center bg-white h-full flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {service.description}
                    </p>
                    <span className="text-sage-600 text-sm font-medium group-hover:text-sage-700 transition-colors">
                      Learn more →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Real Results from Plexr Plasma Pen
            </h2>
            <p className="text-xl text-gray-600">
              See the dramatic transformations achieved with our Plexr plasma
              treatments.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Image
              src="/images/plexr-plasma-results.avif"
              alt="Plexr Plasma Pen Results"
              width={1200}
              height={800}
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Related Treatments - Internal Linking */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6 text-center">
            Related Treatments at Rejuvenate Skin Spa
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/microneedling/plasma-microneedling" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Plasma Microneedling</h3>
              <p className="text-sm text-gray-600">Combines plasma energy with microneedling for enhanced collagen stimulation.</p>
            </Link>
            <Link href="/microneedling" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">All Microneedling Options</h3>
              <p className="text-sm text-gray-600">Compare traditional, SQT Bio, and plasma microneedling treatments.</p>
            </Link>
            <Link href="/chemical-peels" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Chemical Peels</h3>
              <p className="text-sm text-gray-600">Professional-grade peels for resurfacing and skin renewal.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <PlexrPlasmaFAQ />

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
  )
}
