"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Star, Zap, Heart, Users, AlertTriangle, Info, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import WartRemovalTreatmentFAQ from "@/components/wart-removal-treatment-faq"
import WartRemovalTreatmentHero from "@/components/wart-removal-treatment-hero"
import { SmartContactCTA } from "@/components/SmartContactCTA"

export default function WartRemovalTreatmentClientPage() {
  return (
    <div className="min-h-screen">
      <WartRemovalTreatmentHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                What Is Plasma Wart Removal?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Warts are benign skin growths caused by the human papillomavirus (HPV). Our advanced plasma technology
                  offers an effective alternative to traditional treatments like freezing or burning, providing precise
                  removal with minimal discomfort and excellent healing.
                </p>
                <p>
                  Plasma energy precisely targets wart tissue while preserving surrounding healthy tissue. This method
                  is particularly effective for stubborn warts that have not responded to other treatments, offering
                  high success rates with minimal scarring potential.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/wart-removal-treatment.avif"
                alt="Plasma wart treatment process"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Consultation Required Inline Callout */}
          <div className="mt-10 bg-sage-50 border border-sage-200 rounded-lg p-5 max-w-2xl mx-auto text-left">
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
      </section>

      {/* Benefits & Features */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of plasma technology for effective wart removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "High Success Rate",
                description: "Excellent success rates, even for warts that haven't responded to other treatments.",
              },
              {
                icon: Zap,
                title: "Precise Treatment",
                description: "Targeted plasma energy removes wart tissue while preserving healthy surrounding skin.",
              },
              {
                icon: Shield,
                title: "Minimal Scarring",
                description: "Advanced technology minimizes scarring potential compared to traditional methods.",
              },
              {
                icon: Heart,
                title: "Comfortable Process",
                description: "Local anesthesia ensures comfortable treatment with minimal discomfort.",
              },
              {
                icon: Clock,
                title: "Quick Treatment",
                description: "Most wart removals can be completed in 15-30 minutes per session.",
              },
              {
                icon: Users,
                title: "All Ages",
                description: "Safe and effective for patients of all ages, including children and adults.",
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

      {/* Types of Warts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Types of Warts We Treat</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our plasma technology effectively treats various types of warts in different locations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: "Common Warts",
                location: "Hands, Fingers",
                description: "Rough, raised warts commonly found on hands and fingers.",
                difficulty: "Standard",
              },
              {
                type: "Plantar Warts",
                location: "Feet, Soles",
                description: "Flat warts on the bottom of feet, often painful when walking.",
                difficulty: "Complex",
              },
              {
                type: "Flat Warts",
                location: "Face, Legs",
                description: "Small, smooth warts that appear in clusters.",
                difficulty: "Standard",
              },
              {
                type: "Filiform Warts",
                location: "Face, Neck",
                description: "Thread-like warts that grow quickly around the face and neck.",
                difficulty: "Delicate",
              },
              {
                type: "Periungual Warts",
                location: "Around Nails",
                description: "Warts that grow around fingernails and toenails.",
                difficulty: "Complex",
              },
              {
                type: "Genital Warts",
                location: "Private Areas",
                description: "Require medical evaluation and specialized treatment approach.",
                difficulty: "Specialist",
              },
            ].map((wart, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{wart.type}</h3>
                  <p className="text-sage-600 font-medium mb-3">{wart.location}</p>
                  <p className="text-gray-600 text-sm mb-4">{wart.description}</p>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      wart.difficulty === "Standard"
                        ? "bg-green-100 text-green-700"
                        : wart.difficulty === "Complex"
                          ? "bg-amber-100 text-amber-700"
                          : wart.difficulty === "Delicate"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-red-100 text-red-700"
                    }`}
                  >
                    {wart.difficulty}
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
              Comprehensive approach to effective wart removal with optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Evaluate wart type, size, and determine treatment approach.",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Clean area and apply local anesthesia for comfort.",
              },
              {
                step: "03",
                title: "Treatment",
                description: "Precise plasma application to remove wart tissue.",
              },
              {
                step: "04",
                title: "Aftercare",
                description: "Wound care instructions and healing guidance.",
              },
              {
                step: "05",
                title: "Follow-up",
                description: "Monitor healing and additional treatments if needed.",
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
              Key considerations for successful wart removal treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Treatment Expectations</h3>
              <ul className="space-y-4">
                {[
                  "Multiple sessions may be required for complete removal",
                  "Larger or deeper warts typically need more treatments",
                  "Healing time varies from 1-4 weeks depending on location",
                  "Some discomfort during healing is normal",
                  "Follow-up appointments ensure complete removal",
                  "Success rates are high with proper aftercare",
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
                  "Warts that are painful or interfere with daily activities",
                  "Warts that are spreading or multiplying",
                  "Cosmetic concerns, especially on visible areas",
                  "Warts that haven't responded to over-the-counter treatments",
                  "Uncertainty about whether growth is actually a wart",
                  "Warts in sensitive areas requiring professional care",
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

      {/* Recovery & Aftercare */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            Recovery &amp; Aftercare
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              After plasma wart removal, a small scab or crust forms at the treatment site. This is a normal part of the healing process. Most clients can return to daily activities immediately, though the treated area should be kept clean and protected from sun exposure.
            </p>
            <p>
              Healing time typically ranges from 1 to 4 weeks depending on the size and location of the wart. Your practitioner will provide specific aftercare instructions tailored to your treatment during your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Postpone */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            Who May Want to Postpone Treatment
          </h2>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Active skin infections or open wounds near the treatment area</span>
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
          </ul>
          <p className="mt-6 text-gray-600">
            If you are unsure whether this treatment is right for you, a consultation will help determine the best approach.
          </p>
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
            Plasma treatments are advanced procedures that require a professional assessment to ensure safety and effectiveness. During your consultation, we evaluate your skin type, discuss your goals, review your health history, and determine the most appropriate treatment approach for you.
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
            Rejuvenate Skin Spa in Queen Creek, Arizona is a licensed Plexr technology provider offering plasma wart removal — a non-surgical method that targets wart tissue without cutting or scarring. Every treatment begins with a consultation to assess the type and location of the wart and determine the best approach for effective removal.
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
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-playfair font-bold text-gray-900 mb-4">
            Related Plexr Treatments
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plexr-plasma-skin-tightening" className="text-sage-600 hover:text-sage-700 font-medium underline">
              All Plexr Plasma Services →
            </Link>
            <Link href="/plexr-plasma-skin-tightening/mole-removal-treatment" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Mole Removal →
            </Link>
            <Link href="/plexr-plasma-skin-tightening/skin-tag-removal-treatment" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Skin Tag Removal →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <WartRemovalTreatmentFAQ />
      </div>
    </div>
  )
}
