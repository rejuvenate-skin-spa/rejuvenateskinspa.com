"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Star, Zap, Heart, Users, AlertTriangle, Phone, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SkinTagRemovalTreatmentFAQ from "@/components/skin-tag-removal-treatment-faq"
import SkinTagRemovalTreatmentHero from "@/components/skin-tag-removal-treatment-hero"
import { siteConfig } from "@/lib/site-config"

export default function SkinTagRemovalTreatmentClientPage() {
  return (
    <div className="min-h-screen">
      <SkinTagRemovalTreatmentHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Advanced Skin Tag Removal
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Skin tags are common, benign skin growths that can appear anywhere on the body. While harmless, they
                  can be cosmetically bothersome or catch on clothing and jewelry. Our advanced plasma technology offers
                  a safe, precise method for removing unwanted skin tags without cutting or stitches.
                </p>
                <p>
                  The Plexr plasma device creates a controlled micro-arc that vaporizes the skin tag tissue while
                  minimizing damage to surrounding healthy tissue. This results in faster healing, reduced scarring risk,
                  and excellent cosmetic outcomes for all skin types.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/skin-tag-treatment-process.jpg"
                alt="Plasma skin tag treatment process"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Required Inline Callout */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-sage-50 border border-sage-200 rounded-lg p-5 text-left">
          <div className="flex items-start gap-3 mb-3">
            <Info className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
            <h3 className="text-base font-semibold text-gray-900">Consultation Required for Plexr Plasma Removal Services</h3>
          </div>
          <ul className="text-sm text-gray-600 space-y-1 ml-8">
            <li>• $100 consultation fee (applied toward treatment if you proceed)</li>
            <li>• General pricing guidance is available by phone</li>
            <li>• Final recommendations and exact pricing are confirmed in person</li>
          </ul>
        </div>
      </div>

      {/* Benefits & Features */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of plasma technology for safe and effective skin tag removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "No Cutting Required",
                description: "Non-surgical removal without scalpels, stitches, or bleeding.",
              },
              {
                icon: Zap,
                title: "Precise Treatment",
                description: "Targeted plasma energy removes only the skin tag, preserving healthy tissue.",
              },
              {
                icon: Shield,
                title: "Minimal Scarring",
                description: "Advanced technology minimizes trauma and reduces scarring potential.",
              },
              {
                icon: Heart,
                title: "Quick Procedure",
                description: "Most treatments completed in 5-15 minutes with immediate results.",
              },
              {
                icon: Clock,
                title: "Fast Healing",
                description: "Typical healing time of 3-5 days with minimal downtime.",
              },
              {
                icon: Users,
                title: "All Skin Types",
                description: "Safe and effective for all skin types and sensitive areas.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Common Skin Tag Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skin tags commonly develop in areas where skin rubs against skin or clothing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                location: "Neck",
                description: "Most common location, especially around the collar line and nape.",
                frequency: "Very Common",
                difficulty: "Easy",
              },
              {
                location: "Underarms",
                description: "Friction from arm movement and clothing creates ideal conditions.",
                frequency: "Very Common",
                difficulty: "Easy",
              },
              {
                location: "Groin Area",
                description: "Skin folds and friction from clothing and movement.",
                frequency: "Common",
                difficulty: "Standard",
              },
              {
                location: "Eyelids",
                description: "Delicate area requiring precise treatment and expertise.",
                frequency: "Common",
                difficulty: "Delicate",
              },
              {
                location: "Chest",
                description: "Under breasts and along bra line from friction and moisture.",
                frequency: "Common",
                difficulty: "Standard",
              },
              {
                location: "Back",
                description: "Along bra line and areas where clothing creates friction.",
                frequency: "Less Common",
                difficulty: "Standard",
              },
            ].map((area, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.location}</h3>
                  <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-xs font-medium">
                      {area.frequency}
                    </span>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ml-2 ${
                        area.difficulty === "Easy"
                          ? "bg-green-100 text-green-700"
                          : area.difficulty === "Standard"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {area.difficulty}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, straightforward process for safe and effective skin tag removal.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Examine skin tags and confirm they are benign and suitable for treatment.",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Clean the area and apply topical numbing cream for comfort.",
              },
              {
                step: "03",
                title: "Treatment",
                description: "Apply precise plasma energy to vaporize the skin tag tissue.",
              },
              {
                step: "04",
                title: "Immediate Care",
                description: "Apply healing ointment and provide aftercare instructions.",
              },
              {
                step: "05",
                title: "Healing",
                description: "Natural healing process with scab formation and shedding.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Considerations */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Important Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key considerations for successful skin tag removal treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What to Expect</h3>
              <ul className="space-y-4">
                {[
                  "Immediate removal of skin tag with minimal discomfort",
                  "Small scab formation that heals within 3-5 days",
                  "Possible temporary redness or slight swelling",
                  "No stitches or bandages required",
                  "Return to normal activities immediately",
                  "Final results visible once healing is complete",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">When to Seek Treatment</h3>
              <ul className="space-y-4">
                {[
                  "Skin tags that catch on clothing or jewelry",
                  "Tags in visible areas affecting confidence",
                  "Irritated or inflamed skin tags",
                  "Multiple tags that are cosmetically bothersome",
                  "Tags that have changed in appearance",
                  "Any suspicious growths requiring evaluation",
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
            <Button
              asChild
              className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-3 text-base font-medium rounded-lg shadow-lg min-h-[48px]"
            >
              <a href={`tel:${siteConfig.phoneTel}`} aria-label="Call Rejuvenate Skin Spa" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                {siteConfig.phoneDisplay}
              </a>
            </Button>
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
            Plasma treatments are advanced procedures that require a professional assessment to ensure safety and effectiveness. During your consultation, we evaluate your skin type, discuss your goals, review your health history, and determine the most appropriate treatment approach for you.
          </p>
          <p className="text-gray-600">
            This personalized approach helps us create a treatment plan tailored to your unique needs and ensures you achieve the best possible results.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <SkinTagRemovalTreatmentFAQ />
      </div>
    </div>
  )
}
