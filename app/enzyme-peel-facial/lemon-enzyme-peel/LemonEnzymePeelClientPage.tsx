"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users } from "lucide-react";
import Image from "next/image";
import LemonEnzymePeelFAQ from "@/components/lemon-enzyme-peel-faq";
import LemonEnzymePeelHero from "@/components/lemon-enzyme-peel-hero";

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Treatment Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Single Treatment
                </h3>
                <div className="text-4xl font-bold text-sage-600 mb-2">
                  $120
                </div>
                <div className="text-sm text-gray-600 mb-4">60 minutes</div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Skin consultation
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Enzyme facial peel
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Hydrating mask
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Post-treatment skincare
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sage-600 shadow-lg transform scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-sage-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Monthly Package
                </h3>
                <div className="text-4xl font-bold text-sage-600 mb-2">
                  $320
                </div>
                <div className="text-sm text-gray-600 mb-4">3 treatments</div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />3
                    enzyme peels
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    15% savings
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Customized treatment plan
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Seasonal Package
                </h3>
                <div className="text-4xl font-bold text-sage-600 mb-2">
                  $600
                </div>
                <div className="text-sm text-gray-600 mb-4">6 treatments</div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />6
                    enzyme peels
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    25% savings
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Priority booking
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Complimentary add-ons
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  Book Now
                </Button>
              </CardContent>
            </Card>
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
            Book your Lemon Zest Enzyme Peel treatment today and experience the
            refreshing power of natural citrus.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-white text-sage-600 hover:bg-gray-100 px-4 py-1.5 text-base"
              onClick={() => {
                const isMobile =
                  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  );
                const currentHour = new Date().getHours();
                const isBusinessHours = currentHour >= 9 && currentHour < 17;

                if (isMobile && isBusinessHours) {
                  window.location.href = "tel:+14805551234";
                } else {
                  window.location.href = "/about-us/contact-us";
                }
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
