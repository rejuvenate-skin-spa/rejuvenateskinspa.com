"use client"

import { Button } from "@/components/ui/button"
import { SmartContactCTA } from "@/components/SmartContactCTA"
import { Sparkles, Zap, Leaf, Shield, MessageCircle, ClipboardList, Heart, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AboutUsHero from "@/components/about-us-hero"

export default function AboutUsPageClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutUsHero />

      {/* Entity Definition - GEO Optimized */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-4">
            About Rejuvenate Skin Spa
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Rejuvenate Skin Spa is a professional skincare studio located at 20162 E. Sonoqui Blvd. in Queen Creek, Arizona. The spa specializes in non-surgical aesthetic treatments designed to improve skin texture, tone, and firmness without invasive procedures or extended downtime.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded and operated by Bridgette Ball, a licensed cosmetologist with advanced certifications in Plexr plasma technology and chemical peel applications, Rejuvenate Skin Spa serves clients throughout Queen Creek, San Tan Valley, Gilbert, Mesa, and the greater Phoenix East Valley.
          </p>
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

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Our Approach
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Rejuvenate Skin Spa specializes in results-driven, non-surgical treatments that enhance 
                  your natural beauty. No invasive procedures. Minimal downtime. 
                  Real, visible improvement.
                </p>
                <p>
                  Every treatment plan starts with listening. We assess your skin, 
                  understand your goals, and recommend a path forward that fits your 
                  lifestyle.
                </p>
                <p>
                  Based in Queen Creek, Arizona, Rejuvenate Skin Spa brings advanced skincare to the 
                  local community in a space that feels welcoming from the moment 
                  you walk in.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/microneedling-pen.jpg"
                alt="Advanced skincare treatment"
                width={600}
                height={500}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Specialize In */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              What We Specialize In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From skin tightening and resurfacing to gentle exfoliation, we offer targeted treatments backed by professional-grade technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Zap,
                title: "Plasma Skin Tightening",
                description: "Non-surgical lifting and resurfacing using Plexr plasma technology.",
              },
              {
                icon: Sparkles,
                title: "Microneedling",
                description: "Collagen induction for improved texture, tone, and skin firmness.",
              },
              {
                icon: Leaf,
                title: "Chemical Peels",
                description: "Professional-grade peels including BioRePeel and TCA options.",
              },
              {
                icon: Heart,
                title: "Enzyme Peels",
                description: "Gentle fruit enzyme facials ideal for sensitive or reactive skin.",
              },
              {
                icon: Sparkles,
                title: "Spa Services",
                description: "Dermaplaning, microblading, brow lamination, and red light therapy.",
              },
            ].map((specialty, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-sage-600 text-white rounded-full mb-4">
                  <specialty.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 text-sm">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
              Safety & Experience
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Your safety comes first. All treatments are performed by trained, 
                licensed professionals who stay current with industry best practices 
                and continuing education.
              </p>
              <p>
                We use professional-grade equipment and trusted products. Every 
                service begins with a consultation to ensure the treatment is 
                appropriate for your skin type, goals, and health history.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-sage-50 rounded-full">
              <Shield className="h-5 w-5 text-sage-600 mr-2" />
              <span className="text-sage-700 font-medium">Licensed & Insured in Arizona</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Rejuvenate Experience */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              The Rejuvenate Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A clear, comfortable process from your first visit to ongoing care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                step: "01",
                title: "Consultation",
                description: "We discuss your concerns, assess your skin, and answer questions.",
              },
              {
                icon: ClipboardList,
                step: "02",
                title: "Personalized Plan",
                description: "We recommend a treatment approach tailored to your goals.",
              },
              {
                icon: Heart,
                step: "03",
                title: "Treatment",
                description: "Relax while we deliver your service with care and precision.",
              },
              {
                icon: Calendar,
                step: "04",
                title: "Aftercare & Follow-Up",
                description: "Clear guidance on aftercare plus recommended next steps.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="text-sage-600 font-bold text-sm mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Care */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Trust & Care
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center justify-center">
              <span className="w-2 h-2 bg-sage-600 rounded-full mr-3"></span>
              Personalized plans based on your skin and goals
            </li>
            <li className="flex items-center justify-center">
              <span className="w-2 h-2 bg-sage-600 rounded-full mr-3"></span>
              Honest, education-first consultations
            </li>
            <li className="flex items-center justify-center">
              <span className="w-2 h-2 bg-sage-600 rounded-full mr-3"></span>
              Professional-grade equipment and trusted products
            </li>
            <li className="flex items-center justify-center">
              <span className="w-2 h-2 bg-sage-600 rounded-full mr-3"></span>
              Clear aftercare and follow-up support
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Ready to Start Your Skin Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us to schedule a consultation and find out what we can do for your skin.
          </p>
          <div className="flex justify-center">
            <SmartContactCTA
              variant="outline"
              showPhoneWhenOpen
              className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-3 shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
