import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star, Users } from "lucide-react"
import Image from "next/image"
import PumpkinOrangeEnzymePeelFAQ from "@/components/pumpkin-orange-enzyme-peel-faq"
import PumpkinOrangeEnzymePeelHero from "@/components/pumpkin-orange-enzyme-peel-hero"

export const metadata: Metadata = {
  title: "Pumpkin-Orange Enzyme Peel | Seasonal Renewal Facial | Rejuvenate Skin Spa",
  description:
    "Experience our seasonal Pumpkin-Orange Enzyme Peel for skin renewal and rejuvenation. Perfect autumn treatment in Queen Creek, AZ.",
  keywords: "pumpkin orange enzyme peel, seasonal facial, renewal treatment, natural enzyme peel, Queen Creek spa",
}

export default function PumpkinOrangeEnzymePeelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PumpkinOrangeEnzymePeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Seasonal Renewal Treatment
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Pumpkin-Orange Enzyme Peel combines the natural exfoliating power of pumpkin enzymes with the
                brightening benefits of orange extract. This seasonal favorite is perfect for transitioning your skin
                through changing weather while providing deep renewal and a warm, comforting spa experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Natural Pumpkin Enzymes</h3>
                    <p className="text-gray-700">
                      Gentle yet effective exfoliation that removes dead skin cells naturally
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Orange Brightening</h3>
                    <p className="text-gray-700">Vitamin C-rich orange extract brightens and energizes tired skin</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Seasonal Comfort</h3>
                    <p className="text-gray-700">Warming spices and aromas create a cozy, seasonal spa experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Pumpkin-Orange Enzyme Peel Benefits"
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
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">Treatment Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the renewing power of our seasonal Pumpkin-Orange Enzyme Peel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Deep Renewal</h3>
                <p className="text-gray-700">
                  Pumpkin enzymes provide deep exfoliation and cellular renewal for refreshed skin.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Seasonal Transition</h3>
                <p className="text-gray-700">
                  Perfect for helping your skin adapt to changing weather and seasonal conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Warming Comfort</h3>
                <p className="text-gray-700">
                  Seasonal aromas and warming ingredients create a cozy, comforting treatment experience.
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
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">Treatment Pricing</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your skincare journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Single Treatment</h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$92</div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    60-minute treatment
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Skin consultation
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Aftercare products
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="border-sage-600 shadow-lg transform scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-sage-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">3-Treatment Series</h3>
                <div className="text-4xl font-bold text-sage-600 mb-2">$246</div>
                <div className="text-sm text-gray-600 mb-4">Save $30</div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Three 60-minute treatments
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Personalized treatment plan
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Home care kit included
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Series</Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">6-Treatment Package</h3>
                <div className="text-4xl font-bold text-sage-600 mb-2">$462</div>
                <div className="text-sm text-gray-600 mb-4">Save $90</div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Six 60-minute treatments
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Comprehensive skin analysis
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Premium aftercare products
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Package</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <PumpkinOrangeEnzymePeelFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Ready for Seasonal Skin Renewal?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your Pumpkin-Orange Enzyme Peel treatment today and embrace the comfort of seasonal skincare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Book Your Treatment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sage-600 px-8 py-3 text-lg bg-transparent"
            >
              Call (480) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
