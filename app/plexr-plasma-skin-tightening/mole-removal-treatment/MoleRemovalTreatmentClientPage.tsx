"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Clock,
  Shield,
  Star,
  Zap,
  Heart,
  Users,
  AlertTriangle,
  FileText,
  Info,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MoleRemovalTreatmentFAQ } from "@/components/mole-removal-treatment-faq"
import { MoleRemovalTreatmentHero } from "@/components/mole-removal-treatment-hero"
import { SmartContactCTA } from "@/components/SmartContactCTA"

export default function MoleRemovalTreatmentClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MoleRemovalTreatmentHero />

      {/* Important Notice */}
      <section className="py-8 bg-white border-l-4 border-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Medical Clearance May Be Required
              </h3>
              <p className="text-gray-700">
                If requested, all moles should be evaluated and cleared by a
                dermatologist or physician before removal treatment. We require
                written medical clearance confirming the mole is benign and safe
                for cosmetic removal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                What Is Plexr Plasma Mole Removal?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Plexr Plasma mole removal offers a safe, precise, and
                  non-surgical method for removing unwanted moles, skin tags,
                  and other small benign lesions. Using controlled plasma
                  energy, the treatment sublimates (gently vaporizes)
                  superficial skin tissue without cutting or stitching,
                  minimizing the risk of scarring. This type of procedure allows
                  for precise depth control and immediate tissue coagulation,
                  resulting in minimal bleeding and faster healing compared to
                  conventional excision methods.
                </p>
                <p>
                  Plexr Plasma is ideal for clients seeking a non-invasive, cosmetic alternative for
                  the removal of benign moles, skin tags, or similar
                  imperfections with limited chances of scarring.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/plexr-mole-removal-hero.avif"
                alt="Precise plasma mole removal process"
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
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the rewards of advanced ablative plasma technology for
              safe mole removals and similar skin imperfections with limited
              chances of scarring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Lower Risk of Scarring",
                description:
                  "Precise plasma energy minimizes damage to surrounding tissue compared to traditional removal methods, resulting in a better cosmetic outcome.",
              },
              {
                icon: Zap,
                title: "No Bleeding",
                description:
                  "Plasma technology immediately coagulates tissue, eliminating bleeding during treatment.",
              },
              {
                icon: Clock,
                title: "Quick Treatment",
                description:
                  "Most moles can be removed in 15-30 minutes with immediate results.",
              },
              {
                icon: Heart,
                title: "Comfortable Procedure",
                description:
                  "Local anesthesia ensures a comfortable experience throughout the treatment. No scalpels, cutting, or stitches required.",
              },
              {
                icon: Star,
                title: "Single Session",
                description:
                  "Most moles are completely removed in just one treatment session.",
              },
              {
                icon: Users,
                title: "Expert Care",
                description:
                  "Performed by trained professionals with extensive plasma technology experience.",
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

          <div className="text-center mt-8">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most clients experience only mild redness or tiny crusts at the
              treatment site, which naturally heal within 3–7 days.
            </p>
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
              Your mole removal treatment experience from consultation to
              complete healing.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Medical Clearance",
                description:
                  "Obtain dermatologist evaluation and written clearance for mole removal.",
              },
              {
                step: "02",
                title: "Consultation",
                description:
                  "Review medical clearance and plan precise removal approach.",
              },
              {
                step: "03",
                title: "Preparation",
                description:
                  "Local anesthesia application and treatment area preparation.",
              },
              {
                step: "04",
                title: "Removal",
                description:
                  "Precise plasma removal with immediate tissue coagulation.",
              },
              {
                step: "05",
                title: "Aftercare",
                description:
                  "Wound care instructions and follow-up appointment scheduling.",
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

      {/* Medical Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Medical Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If moles, lesions, or any other skin imperfections look
              suspicious, mandatory medical clearance will be required for safe
              mole removal treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <FileText className="h-6 w-6 text-sage-600 mr-3" />
                Required Documentation, if requested by your Plasma provider
              </h3>
              <ul className="space-y-4">
                {[
                  "Written medical clearance from dermatologist or physician",
                  "Confirmation that mole is benign (non-cancerous)",
                  "Recent medical evaluation (within 6 months)",
                  "Clear photographs of the mole for documentation",
                  "Medical history and current medications list",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-3" />
                Cannot Treat
              </h3>
              <ul className="space-y-4">
                {[
                  "Suspicious or changing moles",
                  "Moles with irregular borders or colors",
                  "Recently biopsied areas",
                  "Moles in sensitive areas without specialist approval",
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

      {/* Aftercare */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Aftercare Instructions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper aftercare ensures optimal healing and minimal scarring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                period: "First 24 Hours",
                instructions: [
                  "Keep area clean and dry",
                  "Apply prescribed antibiotic ointment",
                  "Avoid water contact",
                  "No strenuous activity",
                ],
              },
              {
                period: "Days 2-4",
                instructions: [
                  "Gentle cleansing with mild soap",
                  "Continue antibiotic ointment",
                  "Protect from sun exposure",
                  "Allow natural scab formation",
                ],
              },
              {
                period: "Days 3-7",
                instructions: [
                  "Scab will naturally fall off",
                  "Apply sunscreen to new skin",
                  "Moisturize regularly",
                  "Monitor healing progress",
                ],
              },
            ].map((phase, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {phase.period}
                  </h3>
                  <ul className="space-y-2">
                    {phase.instructions.map((instruction, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <CheckCircle className="h-4 w-4 text-sage-600 mr-2 mt-0.5 flex-shrink-0" />
                        {instruction}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
            Rejuvenate Skin Spa in Queen Creek, Arizona is a licensed Plexr technology provider offering plasma mole removal — a precise, non-surgical method that sublimates mole tissue without scalpels or stitches. Every treatment begins with a consultation to review your medical clearance, assess the mole, and plan the most precise removal approach.
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
            <Link href="/plexr-plasma-skin-tightening/skin-tag-removal-treatment" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Skin Tag Removal →
            </Link>
            <Link href="/plexr-plasma-skin-tightening/wart-removal-treatment" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Wart Removal →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <MoleRemovalTreatmentFAQ />
      </div>
    </div>
  )
}
