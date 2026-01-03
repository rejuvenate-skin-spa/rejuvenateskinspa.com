"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users, Clock, Droplets, Heart, Phone } from "lucide-react";
import Image from "next/image";
import RaspberryPeachEnzymePeelFAQ from "@/components/raspberry-peach-enzyme-peel-faq";
import RaspberryPeachEnzymePeelHero from "@/components/raspberry-peach-enzyme-peel-hero";
import { Badge } from "@/components/ui/badge";

const RaspberryPeachEnzymePeelClientPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <RaspberryPeachEnzymePeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Gentle Silky Hydrating Treatment
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Indulge in our Raspberry-Peach Enzyme Peel that delivers the
                perfect balance of gentle exfoliation and deep hydration. This
                luxurious enzyme facial blends the antioxidant-rich,
                anti-inflammatory properties of raspberry seed enzymes with the
                soothing moisture of peach extract, revealing a complexion that
                feels refreshed, supple, and radiant.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ideal for all skin types, this delicate yet highly effective
                peel helps calm redness, reduce irritation, and soften dry or
                flaky skin, leaving the complexion visibly smoother, balanced,
                and radiantly refreshed. Experience gentle skin renewal, maximum
                hydration, and soothing comfort in one luxurious treatment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Gentle Raspberry Exfoliation
                    </h3>
                    <p className="text-gray-700">
                      Natural raspberry enzymes provide the gentlest form of
                      skin renewal
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Peach Hydration
                    </h3>
                    <p className="text-gray-700">
                      Rich peach extract deeply moisturizes and softens skin
                      texture
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      All Skin Types
                    </h3>
                    <p className="text-gray-700">
                      Perfect for sensitive, dry, or mature skin needing gentle
                      care
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/raspberry-peach-enzyme-peel-benefits.jpg"
                alt="Raspberry-Peach Enzyme Peel Benefits"
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
              Experience the gentle, hydrating effects of our Raspberry-Peach
              Enzyme Peel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Silky Softness
                </h3>
                <p className="text-gray-700">
                  Peach extract leaves skin feeling incredibly soft and smooth
                  to the touch.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Deep Hydration
                </h3>
                <p className="text-gray-700">
                  Natural fruit moisture penetrates deeply for long-lasting skin
                  hydration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Gentle Care
                </h3>
                <p className="text-gray-700">
                  Perfect for sensitive skin types that need nurturing, gentle
                  treatment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Universal Appeal
                </h3>
                <p className="text-gray-700">
                  Suitable for all ages and skin types seeking gentle renewal.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quick Recovery
                </h3>
                <p className="text-gray-700">
                  Minimal downtime with immediate hydration and comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Natural Ingredients
                </h3>
                <p className="text-gray-700">
                  Pure fruit enzymes and extracts for natural skin enhancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Pricing</Badge>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Raspberry Peach Peel Treatment Options
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
                    <span className="text-sm text-gray-700">Ultra-gentle formula</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Sensitive skin safe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Soothing treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">No downtime</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                >
                  <a href="tel:+14802049366" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    (480) 204-9366
                  </a>
                </Button>
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
                    <span className="text-sm text-gray-700">Ultra-gentle formula</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Cumulative soothing benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Enhanced skin renewal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Package savings included</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                >
                  <a href="tel:+14802049366" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    (480) 204-9366
                  </a>
                </Button>
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
                    <span className="text-sm text-gray-700">Sustained gentle renewal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Best per-session value</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                >
                  <a href="tel:+14802049366" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    (480) 204-9366
                  </a>
                </Button>
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

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your gentle raspberry-peach enzyme peel experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Consultation
              </h3>
              <p className="text-gray-700">
                We assess your skin type and discuss your hydration goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Preparation
              </h3>
              <p className="text-gray-700">
                Gentle cleansing prepares your skin for the enzyme treatment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Application
              </h3>
              <p className="text-gray-700">
                Raspberry-peach enzyme mask is applied for gentle exfoliation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hydration
              </h3>
              <p className="text-gray-700">
                Moisturizing treatment seals in hydration and softness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <RaspberryPeachEnzymePeelFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Gentle, Hydrating Skin Care?
          </h2>
          <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
            Experience the nurturing benefits of our Raspberry-Peach Enzyme
            Peel. Schedule your appointment today.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-3 text-base"
            >
              <a href="tel:+14802049366" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                (480) 204-9366
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RaspberryPeachEnzymePeelClientPage;
