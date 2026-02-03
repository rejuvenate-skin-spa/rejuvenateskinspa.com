"use client";

import { CherryEnzymePeelHero } from "@/components/cherry-enzyme-peel-hero";
import { CherryEnzymePeelFAQ } from "@/components/cherry-enzyme-peel-faq";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { SmartContactCTA } from "@/components/SmartContactCTA";

export default function CherryEnzymePeelClientPage() {
  return (
    <main className="min-h-screen">
      <CherryEnzymePeelHero />

      {/* Treatment Overview */}
      <section id="treatment-overview" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Badge className="bg-sage-100 text-sage-800 mb-4">Level 3</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
              Brightening Cherry Enzyme Peel Treatment
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Infused with natural cherry enzymes, this luminous fruit enzyme
              peel combines restorative exfoliation with antioxidant
              protection to restore clarity, radiance, and glow.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              This gentle yet effective cherry enzyme peel harnesses the power
              of 5% lactic acid, blended with 1% arbutin and 1% kojic acid, to
              visibly brighten dull skin, even out skin tone, smooth skin
              texture, hydrate and rejuvenate your skin complexion. Safely
              suitable for most skin types.
            </p>
          </div>
          <div className="bg-sage-50 p-8 rounded-2xl mt-8">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Treatment Benefits
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-sage-600 mr-3">✓</span>
                <span className="text-gray-700">
                  Brightens dull, tired-looking skin
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sage-600 mr-3">✓</span>
                <span className="text-gray-700">
                  Improves skin texture and smoothness
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sage-600 mr-3">✓</span>
                <span className="text-gray-700">
                  Reduces appearance of age spots
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sage-600 mr-3">✓</span>
                <span className="text-gray-700">
                  Stimulates collagen production
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sage-600 mr-3">✓</span>
                <span className="text-gray-700">
                  Provides natural antioxidant protection
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Your Cherry Enzyme Peel Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the transformative power of our carefully crafted cherry
              enzyme treatment process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sage-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Skin Analysis
                </h3>
                <p className="text-gray-600">
                  Comprehensive skin assessment to customize your cherry enzyme
                  peel treatment for optimal results
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sage-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cherry Enzyme Application
                </h3>
                <p className="text-gray-600">
                  Gentle application of our cherry enzyme blend to exfoliate and
                  nourish your skin naturally
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sage-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Hydration & Protection
                </h3>
                <p className="text-gray-600">
                  Finish with hydrating serums and protective moisturizer to
                  lock in your radiant results
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Cherry Peel Treatment Options
            </h2>
            <p className="text-xl text-gray-600">
              Professional enzyme peel treatments for radiant skin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
            {/* Single Treatment Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full bg-white">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="min-h-[28px] mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Single Treatment
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $120
                </div>
                <div className="min-h-[20px] mb-3" />
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Brightening formula</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Deep hydration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Even complexion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">No downtime</span>
                  </li>
                </ul>
                <SmartContactCTA
                  showPhoneWhenOpen
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                />
              </CardContent>
            </Card>

            {/* 3-Treatment Package Card (Featured) */}
            <Card className="border border-sage-300 hover:shadow-md transition-shadow bg-white h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex justify-center mb-3">
                  <Badge className="bg-sage-600 text-white text-xs px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  3-Treatment Package
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $320
                </div>
                <div className="text-xs text-sage-700 font-medium mb-3 text-center">
                  Save $40 ($107 per session)
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Brightening formula</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Cumulative hydration benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Enhanced collagen stimulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Package savings included</span>
                  </li>
                </ul>
                <SmartContactCTA
                  showPhoneWhenOpen
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                />
              </CardContent>
            </Card>

            {/* 6-Treatment Package Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full bg-white">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex justify-center mb-3">
                  <Badge className="bg-gray-600 text-white text-xs px-3 py-1">
                    Best Value
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  6-Treatment Package
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $599
                </div>
                <div className="text-xs text-sage-700 font-medium mb-3 text-center">
                  Save $121 ($100 per session)
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Maximum transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Long-term skin health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Sustained collagen boost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Best per-session value</span>
                  </li>
                </ul>
                <SmartContactCTA
                  showPhoneWhenOpen
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                />
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

      <section className="py-16 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
            Ready for Radiant, Glowing Skin?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the natural brightening power of our Cherry Enzyme Peel.
            Get in touch today and discover your most radiant
            complexion.
          </p>
          <SmartContactCTA
            showPhoneWhenOpen
            className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <CherryEnzymePeelFAQ />
      </div>

    </main>
  );
}
