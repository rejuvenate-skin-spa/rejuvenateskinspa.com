"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Star, Heart, AlertTriangle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BotoxTreatmentFAQ from "@/components/botox-treatment-faq"
import BotoxTreatmentHero from "@/components/botox-treatment-hero"
import { BotoxReachOut } from "@/components/botox-reach-out"
import { amyBall } from "@/lib/providers"
import { formatPrice, getService } from "@/lib/services"

export default function BotoxTreatmentClientPage() {
  const unitPrice = getService("/spa-services/botox-treatment")!.pricing![0]

  return (
    <div className="min-h-screen">
      <BotoxTreatmentHero />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                What Is Botox?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Botox is a cosmetic neuromodulator that temporarily relaxes the muscles responsible for expression lines. At Rejuvenate Skin Spa in Queen Creek, Arizona, it is used to soften forehead lines, the frown lines between the brows, and crow&apos;s feet.
                </p>
                <p>
                  Treatment is non-surgical and planned around how your face moves. A consultation comes first, so the plan matches your features instead of a one-size approach.
                </p>
              </div>
            </div>
            <div className="bg-sage-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common treatment areas</h3>
              <ul className="space-y-3">
                {[
                  "Horizontal forehead lines",
                  "Frown lines between the eyebrows",
                  "Crow's feet at the outer eyes",
                ].map((area) => (
                  <li key={area} className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-0.5 flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Other areas can be discussed during your consultation with Amy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-center">
            <Image
              src="/images/amy_headshot.jpg"
              alt="Amy Ball, PA-C, at Rejuvenate Skin Spa"
              width={983}
              height={1009}
              className="w-full max-w-sm rounded-lg shadow-xl object-cover object-top aspect-[4/5]"
            />
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Meet Amy Ball, PA-C
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Amy Ball, PA-C, performs Botox at Rejuvenate Skin Spa in Queen Creek. She has been working in dermatology for several years. She starts every visit by looking at how your face moves, then maps a treatment plan for the lines you want to soften.
                </p>
                <p>
                  The goal is a rested look that still looks like you. Amy explains what to expect, including when results typically appear and how long they tend to last, before any treatment begins.
                </p>
                <p>
                  <Link href="/about-us/amy-ball" className="text-sage-600 hover:text-sage-700 font-medium">
                    Meet Amy Ball
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Botox is chosen by clients who want to soften expression lines without surgery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Softer Expression Lines",
                description: "Forehead lines, frown lines, and crow's feet look smoother while you are at rest.",
              },
              {
                icon: Heart,
                title: "A Natural Result",
                description: "Treatment is mapped to your facial movement so the result still looks like you.",
              },
              {
                icon: Clock,
                title: "Little Downtime",
                description: "Most clients return to their day after the appointment.",
              },
              {
                icon: Shield,
                title: "Consultation First",
                description: "Amy reviews your goals and history before recommending a plan.",
              },
              {
                icon: CheckCircle,
                title: "Predictable Timeline",
                description: "Softening often starts within a few days, with the full look around two weeks.",
              },
              {
                icon: Star,
                title: "Local Queen Creek Care",
                description: "Treatment is offered at the studio on Sonoqui Blvd., serving the East Valley.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center bg-sage-50 p-6 rounded-lg shadow-sm">
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

      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              The Botox Visit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A focused appointment with Amy Ball at the Queen Creek studio.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Amy reviews your goals, medical history, and how your expression lines form.",
              },
              {
                step: "02",
                title: "Treatment Map",
                description: "She marks the areas that will be treated and explains the plan.",
              },
              {
                step: "03",
                title: "Botox",
                description: "Injections are placed in the mapped muscles. The treatment itself is brief.",
              },
              {
                step: "04",
                title: "Aftercare",
                description: "Aftercare will be discussed at the appointment.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-3">Starting at {formatPrice(unitPrice.price)} per unit</h2>
              <p className="text-gray-600 mb-6">
                Botox starts at {formatPrice(unitPrice.price)} per unit. The total depends on how many units your treatment plan uses. Amy reviews the areas and the unit count before treatment.
              </p>
              <BotoxReachOut />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            Who May Want to Postpone Botox
          </h2>
          <ul className="space-y-3 text-gray-600 text-lg">
            {[
              "Pregnancy or breastfeeding",
              "A neuromuscular condition, or a past reaction to botulinum toxin",
              "An active skin infection in the area to be treated",
              "A recent facial procedure that Amy should know about before treating the same area",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600">
            Amy reviews this with you at the start of the visit and will recommend waiting when treatment is not a fit that day.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-playfair font-bold text-gray-900 mb-4">
            Related Spa Services
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/spa-services" className="text-sage-600 hover:text-sage-700 font-medium underline">
              All Spa Services →
            </Link>
            <Link href="/spa-services/dermaplaning-treatment" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Dermaplaning →
            </Link>
            <Link href="/plexr-plasma-skin-tightening" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Plexr Plasma Skin Tightening →
            </Link>
          </div>
        </div>
      </section>

      <div id="faq-section">
        <BotoxTreatmentFAQ />
      </div>

      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready to Talk About Botox?</h2>
          <div className="max-w-2xl mx-auto">
            <BotoxReachOut onDark />
          </div>
        </div>
      </section>
    </div>
  )
}
