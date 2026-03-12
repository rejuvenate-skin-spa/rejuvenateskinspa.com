"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PlasmaMicroneedlingTreatmentFAQ from "@/components/plasma-microneedling-treatment-faq"
import PlasmaMicroneedlingTreatmentHero from "@/components/plasma-microneedling-treatment-hero"
import PhoneCtaButton from "@/components/phone-cta-button"
import Link from "next/link"
import { SmartContactCTA } from "@/components/SmartContactCTA"
import {
  Clock,
  DollarSign,
  Star,
  CheckCircle,
  Users,
  Zap,
  Sparkles,
  Shield,
  Target,
  Award,
  AlertTriangle,
  ArrowRight,
} from "lucide-react"

export default function PlasmaMicroneedlingClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      {/* Hero Section */}
      <PlasmaMicroneedlingTreatmentHero />

      {/* What is Plasma Microneedling */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-sage-100 text-sage-800">
                Revolutionary Technology
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
                What is Plasma Microneedling?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Plasma Microneedling is a needle-free skin resurfacing treatment that combines plasma energy technology with collagen induction therapy. Unlike traditional microneedling that uses physical needles, plasma microneedling creates microscopic channels through ionized gas, delivering skin tightening and texture improvement without puncture wounds. Rejuvenate Skin Spa in Queen Creek, Arizona offers plasma microneedling as an advanced option for clients seeking dramatic results with reduced recovery time.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                The treatment tightens, brightens, and refines skin while preparing it to absorb rejuvenating serums at deeper levels than topical application alone. Using advanced plasma energy technology with a triangle tip pen, microscopic channels are created deep into the skin's surface through ionized gas rather than physical punctures.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Plasma energy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Skin tightening</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Collagen boost</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Dramatic results</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/f10a28e0-b307-4440-9abd-b180cb406d10.avif"
                alt="Plasma Pen Microneedling"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">
              Treatment Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Why Choose Plasma Microneedling?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the most advanced microneedling technology for superior
              skin transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Plasma Energy
                </h3>
                <p className="text-gray-600">
                  Plasma energy penetrates deeper into skin's layers for
                  enhanced collagen stimulation and skin tightening.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Precision Treatment
                </h3>
                <p className="text-gray-600">
                  Controlled energy delivery targets specific skin layers for
                  optimal results with minimal surface damage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Immediate Tightening
                </h3>
                <p className="text-gray-600">
                  See instant skin tightening effects immediately after
                  treatment, with continued improvement over months.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Superior Infused Serums
                </h3>
                <p className="text-gray-600">
                  Highly customizable and deeply infused professional serums
                  like hyaluronic acid, peptides, vitamins, amino acids, and
                  "Micro-Botox", etc.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Safe & Effective
                </h3>
                <p className="text-gray-600">
                  FDA-approved technology with proven safety profile and
                  predictable, long-lasting results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Long-Lasting Results
                </h3>
                <p className="text-gray-600">
                  Results continue to improve for 6-12 months as new collagen
                  forms and skin naturally regenerates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">
              Treatment Areas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              What Can Plasma Microneedling Treat?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced plasma technology addresses multiple skin concerns with
              superior results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Deep Wrinkles
              </h3>
              <p className="text-gray-600 text-sm">
                Significantly reduce moderate to deep facial wrinkles
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Skin Laxity</h3>
              <p className="text-gray-600 text-sm">
                Tighten loose skin on face, neck, and body
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Acne Scars</h3>
              <p className="text-gray-600 text-sm">
                Dramatically improve severe acne scarring
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Stretch Marks
              </h3>
              <p className="text-gray-600 text-sm">
                Reduce appearance of stubborn stretch marks
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Large Pores</h3>
              <p className="text-gray-600 text-sm">
                Minimize enlarged pores for smoother texture
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Uneven Texture
              </h3>
              <p className="text-gray-600 text-sm">
                Smooth rough, uneven skin texture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Plasma Microneedling Treatment Options
            </h2>
            <p className="text-lg text-gray-600">
              Advanced plasma microneedling technology for superior results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Single Treatment Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header area with fixed height for alignment */}
                <div className="min-h-[28px] mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Single Treatment
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $299
                </div>
                <div className="min-h-[20px] mb-3" />
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Complete plasma microneedling treatment with advanced plasma technology.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Stimulates collagen & elastin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Tightens & firms skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Reduces fine lines & wrinkles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Improves skin texture & tone</span>
                  </li>
                </ul>
                <PhoneCtaButton className="w-full mt-auto" />
              </CardContent>
            </Card>

            {/* 3-Treatment Package Card (Featured) */}
            <Card className="border border-sage-300 hover:shadow-md transition-shadow bg-sage-50/50 h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header area with badge */}
                <div className="flex justify-center mb-3">
                  <Badge className="bg-sage-600 text-white text-xs px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  3-Treatment Package
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $799
                </div>
                <div className="text-xs text-sage-700 font-medium mb-3 text-center">
                  Save $98 ($266 per session)
                </div>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Complete transformation series with three treatments spaced 6–8 weeks apart.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Stimulates collagen & elastin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Tightens & firms skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Reduces fine lines & wrinkles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Improves skin texture & tone</span>
                  </li>
                </ul>
                <PhoneCtaButton className="w-full mt-auto" />
              </CardContent>
            </Card>

            {/* 6-Treatment Package Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header area with badge */}
                <div className="flex justify-center mb-3">
                  <Badge className="bg-gray-600 text-white text-xs px-3 py-1">
                    Best Value
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  6-Treatment Package
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $1,499
                </div>
                <div className="text-xs text-sage-700 font-medium mb-3 text-center">
                  Save $295 ($250 per session)
                </div>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Comprehensive transformation with six treatments for dramatic, long-lasting results.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Stimulates collagen & elastin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Tightens & firms skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Reduces fine lines & wrinkles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Improves skin texture & tone</span>
                  </li>
                </ul>
                <PhoneCtaButton className="w-full mt-auto" />
              </CardContent>
            </Card>
          </div>

          {/* Package Pricing Callout */}
          <div className="mt-10 bg-sage-50 border border-sage-200 rounded-lg p-6 max-w-2xl mx-auto">
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

      {/* Related Treatments */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-playfair font-bold text-gray-900 mb-4">
            Explore Other Microneedling Options
          </h2>
          <p className="text-gray-600 mb-6">
            Not sure which treatment is right for you? Compare all options or call us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/microneedling" className="text-sage-600 hover:text-sage-700 font-medium underline">
              View All Microneedling Services →
            </Link>
            <Link href="/plexr-plasma-skin-tightening" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Explore Plexr Plasma Treatments →
            </Link>
          </div>
        </div>
      </section>

      {/* Who May Want to Postpone */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            Who May Want to Postpone Plasma Microneedling
          </h2>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Active acne breakouts or skin infections in the treatment area</span>
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
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Recent sunburn or chemical peel within the past 2 weeks</span>
            </li>
          </ul>
          <p className="mt-6 text-gray-600">
            Plasma microneedling is an advanced treatment that combines plasma energy with microneedling. A consultation is recommended to assess your skin and determine the best approach.
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
            Rejuvenate Skin Spa in Queen Creek, Arizona offers plasma microneedling using Plexr plasma technology combined with targeted microneedling for enhanced collagen stimulation. As a licensed Plexr provider, Bridgette Ball brings advanced certifications in both plasma and microneedling techniques to every treatment.
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

      {/* FAQ Section */}
      <div id="faq-section">
        <PlasmaMicroneedlingTreatmentFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Experience Advanced Skin Rejuvenation
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your skin with the most advanced plasma microneedling
            technology available
          </p>
          <div className="flex justify-center">
            <SmartContactCTA
              variant="outline"
              showPhoneWhenOpen
              className="bg-white text-sage-700 hover:bg-gray-100 px-6 py-3 shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
