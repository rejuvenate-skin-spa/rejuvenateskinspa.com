"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users } from "lucide-react";
import Image from "next/image";
import LemonEnzymePeelFAQ from "@/components/lemon-enzyme-peel-faq";
import LemonEnzymePeelHero from "@/components/lemon-enzyme-peel-hero";
import { Badge } from "@/components/ui/badge";
import { SmartContactCTA } from "@/components/SmartContactCTA";

export default function LemonEnzymePeelClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <LemonEnzymePeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energizing Citrus Treatment
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Lemon Zest Enzyme Peel harnesses the natural brightening and
                energizing properties of fresh lemon extract. Ideal for normal
                to dry, mature, or sun-damaged skin, this antioxidant-rich peel
                delivers powerful brightening and lightening effects. Formulated
                with 8% arbutin, 6% lactic acid, 3% glycolic acid, and 2% kojic
                acid, it gently exfoliates while targeting hyperpigmentation,
                fine lines, and sun damage. The infusion of arbutin and kojic
                acid provides an added boost for a more luminous, even
                complexion.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Natural Citric Acid
                    </h3>
                    <p className="text-gray-700">
                      Lemon's natural acids gently exfoliate, lighten and
                      brighten dull, tired, dry sun damaged skin
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Energizing Properties
                    </h3>
                    <p className="text-gray-700">
                      Refreshing citrus scent awakens the senses while
                      revitalizing skin
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Oil Control</h3>
                    <p className="text-gray-700">
                      Natural astringent properties help balance oily and
                      combination skin
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Antioxidant</h3>
                    <p className="text-gray-700">
                      Protection against free radicals
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Anti-aging Properties
                    </h3>
                    <p className="text-gray-700">
                      Supports in soften fine lines, wrinkles and smoothens skin
                      texture
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Brightening & lightening Properties
                    </h3>
                    <p className="text-gray-700">
                      Fights discoloration, uneven skin tones and sun damage
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/lemon-zest-enzyme-peel.jpg"
                alt="Lemon Zest Enzyme Peel Benefits"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Treatment Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the energizing effects of our Lemon Zest Enzyme Peel
              treatment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Instant Brightness
                </h3>
                <p className="text-gray-700">
                  Natural citric acid immediately brightens and refreshes tired,
                  dull complexions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Pore Refinement
                </h3>
                <p className="text-gray-700">
                  Astringent properties help tighten and minimize the appearance
                  of enlarged pores.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Oil Balance
                </h3>
                <p className="text-gray-700">
                  Natural acids help regulate oil production for a balanced,
                  healthy complexion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Pricing</Badge>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lemon Zest Peel Treatment Options
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
                    <span className="text-sm text-gray-700">Zesty brightening formula</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Vitamin C boost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Refreshes dull skin</span>
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
                    <span className="text-sm text-gray-700">Zesty brightening formula</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Cumulative brightening results</span>
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
                    <span className="text-sm text-gray-700">Sustained brightening</span>
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
          <div className="mt-10 bg-white border border-sage-200 rounded-lg p-6 max-w-2xl mx-auto">
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

      {/* FAQ Section */}
      <div id="faq-section">
        <LemonEnzymePeelFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Ready to Energize Your Skin?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Treat yourself to a Lemon Zest Enzyme Peel today and experience the
            refreshing power of natural citrus.
          </p>
          <div className="flex justify-center">
            <SmartContactCTA
              variant="outline"
              showPhoneWhenOpen
              className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-3 text-base"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
