"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  DollarSign,
  Star,
  CheckCircle,
  Users,
  Zap,
  Sparkles,
  Heart,
  Shield,
  Leaf,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import BioMicroneedlingTreatmentFAQ from "@/components/bio-microneedling-treatment-faq";
import BioMicroneedlingTreatmentHero from "@/components/bio-microneedling-treatment-hero";
import PhoneCtaButton from "@/components/phone-cta-button";
import Link from "next/link";
import { SmartContactCTA } from "@/components/SmartContactCTA";

export default function BioMicroneedlingClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      {/* Hero Section */}
      <BioMicroneedlingTreatmentHero />

      {/* What is SQT Bio Microneedling */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-sage-100 text-sage-800">
                Advanced Treatment
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
                What Is SQT Bio-Microneedling?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                SQT Bio-Microneedling is a needle-free skin rejuvenation treatment that uses marine-derived silica spicules to stimulate collagen production and cellular renewal. Unlike traditional microneedling, SQT (Silicon Quartz Technology) delivers millions of microscopic natural spicules into the skin through massage rather than mechanical puncture. Rejuvenate Skin Spa in Queen Creek, Arizona offers SQT Bio-Microneedling as a gentler alternative for clients seeking skin texture improvement with minimal downtime.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The treatment creates invisible micro-channels that enhance serum absorption while triggering the skin's natural repair response. As these mineral-rich spicules are gently massaged into the skin, they awaken cellular activity, triggering a natural exfoliation and regeneration cycle that accelerates cell turnover and stimulates the production of fresh collagen and elastin. The result is skin that feels smoother, firmer, brighter, and more refined.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/sqt-bio-microneedling.avif"
                alt="SQT Bio Microneedling Treatment"
                className="rounded-lg shadow-lg"
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
              Why Choose SQT Bio Microneedling?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience natural spicule infusion technology for deep skin
              rejuvenation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Non-invasive & Needle-Free
                </h3>
                <p className="text-gray-600">
                  No needles, bleeding, or downtime, just natural spicule
                  infusion that rejuvenates from within.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Leaf className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  100% Natural Ingredients
                </h3>
                <p className="text-gray-600">
                  Made from marine-derived sponge spicules and plant-based
                  actives, free from harsh chemicals or toxins.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Enhanced Product Absorption
                </h3>
                <p className="text-gray-600">
                  Creates micro-channels that allow serums and nutrients to
                  penetrate up to 3x deeper.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Stimulates Collagen & Elastin
                </h3>
                <p className="text-gray-600">
                  Triggers deep cellular renewal and fibroblast activation for
                  firmer, smoother, more youthful skin.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Skin Repair & Renewal
                </h3>
                <p className="text-gray-600">
                  Reduces the appearance of fine lines, roughness, and uneven
                  pigmentation for a rejuvenated, refined, and luminous glow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Clinically Proven Results
                </h3>
                <p className="text-gray-600">
                  Delivers visible improvement in clarity, firmness, and
                  radiance after just one treatment.
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
              What Can SQT Bio Microneedling Treat?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bio microneedling effectively addresses a wide range of skin
              concerns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Fine Lines & Wrinkles
              </h3>
              <p className="text-gray-600 text-sm">
                Reduce signs of aging around eyes, mouth, and forehead
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Acne Scars</h3>
              <p className="text-gray-600 text-sm">
                Improve texture and appearance of acne scarring
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Hyperpigmentation
              </h3>
              <p className="text-gray-600 text-sm">
                Even out skin tone and reduce dark spots
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Large Pores</h3>
              <p className="text-gray-600 text-sm">
                Minimize pore appearance for smoother skin
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Skin Texture</h3>
              <p className="text-gray-600 text-sm">
                Improve overall skin smoothness and radiance
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Stretch Marks
              </h3>
              <p className="text-gray-600 text-sm">
                Reduce appearance of stretch marks on body
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION START */}
      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Bio Microneedling Treatment Options
            </h2>
            <p className="text-lg text-gray-600">
              Professional bio microneedling with organic serums
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
                  $249
                </div>
                <div className="min-h-[20px] mb-3" />
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Complete bio microneedling treatment with organic serums and aftercare guidance.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Stimulates collagen & elastin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Improves skin texture & tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Reduces fine lines & pores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Enhances skin radiance</span>
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
                  $699
                </div>
                <div className="text-xs text-sage-700 font-medium mb-3 text-center">
                  Save $48 ($233 per session)
                </div>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Optimal results with three treatments spaced 4–6 weeks apart for maximum collagen stimulation.
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Stimulates collagen & elastin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Improves skin texture & tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Reduces fine lines & pores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Enhances skin radiance</span>
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
                  $1,299
                </div>
                <div className="text-xs text-sage-700 font-medium mb-3 text-center">
                  Save $195 ($217 per session)
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
                    <span className="text-sm text-gray-700">Improves skin texture & tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Reduces fine lines & pores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Enhances skin radiance</span>
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
      {/* PRICING SECTION END */}

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
            Who May Want to Postpone SQT Bio-Microneedling
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
              <span>Open wounds, eczema flare-ups, or active rosacea in the treatment area</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Recent sunburn or chemical peel within the past 2 weeks</span>
            </li>
          </ul>
          <p className="mt-6 text-gray-600">
            SQT Bio-Microneedling is gentler than traditional microneedling, but a consultation ensures the treatment is appropriate for your skin type and current condition.
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
            Rejuvenate Skin Spa in Queen Creek, Arizona offers SQT Bio-Microneedling as a needle-free alternative to traditional microneedling. Using marine sponge spicules, this treatment stimulates collagen renewal without the puncture wounds of conventional devices. Every session begins with a skin assessment to ensure the treatment suits your skin type and goals.
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
        <BioMicroneedlingTreatmentFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the power of bio microneedling with organic serums for
            naturally radiant skin
          </p>
          <div className="flex justify-center">
            <SmartContactCTA
              variant="outline"
              size="lg"
              showPhoneWhenOpen
              className="bg-white text-sage-700 hover:bg-gray-100 px-6 py-3 shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
