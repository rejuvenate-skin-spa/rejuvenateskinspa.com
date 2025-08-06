import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star, Users, Clock, Shield, Sparkles } from "lucide-react"
import Image from "next/image"
import BlueberryEnzymePeelHero from "@/components/blueberry-enzyme-peel-hero"
import BlueberryEnzymePeelFAQ from "@/components/blueberry-enzyme-peel-faq"

export const metadata: Metadata = {
  title: "Blueberry Enzyme Peel | Antioxidant Facial Treatment | Rejuvenate Skin Spa",
  description:
    "Discover our gentle Blueberry Enzyme Peel rich in antioxidants. Perfect for sensitive skin renewal in Queen Creek, AZ.",
  keywords: "blueberry enzyme peel, antioxidant facial, gentle treatment, sensitive skin, Queen Creek spa",
}

export default function BlueberryEnzymePeelPage() {
  return (
    <div className="min-h-screen bg-white">
      <BlueberryEnzymePeelHero />

      {/* Treatment Overview */}
      <section id="treatment-overview" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Antioxidant-Rich Treatment
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Blueberry Enzyme Peel harnesses the powerful antioxidants found in blueberries to gently exfoliate
                and protect your skin. This treatment is specifically designed for sensitive skin types, providing
                gentle renewal while delivering essential vitamins and nutrients for a healthy, radiant complexion.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Rich in Antioxidants</h3>
                    <p className="text-gray-700">Blueberry enzymes protect against free radical damage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Gentle Exfoliation</h3>
                    <p className="text-gray-700">Natural fruit acids provide mild resurfacing without irritation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sensitive Skin Safe</h3>
                    <p className="text-gray-700">Perfect for delicate or reactive skin types</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Blueberry+Treatment+Benefits"
                alt="Blueberry Enzyme Peel Benefits"
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
              Experience the gentle power of blueberry antioxidants for your skin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Antioxidant Protection</h3>
                <p className="text-gray-700">Powerful blueberry antioxidants shield skin from environmental damage.</p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gentle Brightening</h3>
                <p className="text-gray-700">Natural fruit acids gently brighten and even skin tone.</p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Vitamin Rich</h3>
                <p className="text-gray-700">Loaded with vitamins C and E for healthy, nourished skin.</p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sensitive Skin Friendly</h3>
                <p className="text-gray-700">Specially formulated for delicate and reactive skin types.</p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">No Downtime</h3>
                <p className="text-gray-700">Gentle treatment with immediate results and no recovery time.</p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Ingredients</h3>
                <p className="text-gray-700">Pure blueberry enzymes and natural fruit extracts only.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">Treatment Pricing</h2>
            <p className="text-xl text-gray-600">Gentle, effective treatment at an affordable price</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Single Treatment</h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$89</div>
                <p className="text-gray-700 mb-6">Perfect for experiencing our gentle blueberry treatment</p>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Best Value</span>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Series of 3</h3>
                <div className="text-4xl font-bold text-sage-600 mb-2">$240</div>
                <div className="text-sm text-gray-500 mb-4">Save $27</div>
                <p className="text-gray-700 mb-6">Recommended series for optimal skin health</p>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Series</Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Series of 6</h3>
                <div className="text-4xl font-bold text-sage-600 mb-2">$450</div>
                <div className="text-sm text-gray-500 mb-4">Save $84</div>
                <p className="text-gray-700 mb-6">Maximum benefits for long-term skin care</p>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Series</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Your gentle blueberry enzyme peel experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Skin Analysis</h3>
              <p className="text-gray-700">We evaluate your skin sensitivity and customize the treatment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gentle Cleansing</h3>
              <p className="text-gray-700">Mild cleansing prepares your skin for the enzyme treatment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enzyme Application</h3>
              <p className="text-gray-700">Blueberry enzyme mask is applied for gentle exfoliation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nourishing Finish</h3>
              <p className="text-gray-700">Antioxidant serum and moisturizer complete the treatment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <BlueberryEnzymePeelFAQ />

      {/* Related Treatments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">Other Enzyme Peels</h2>
            <p className="text-xl text-gray-600">Explore our complete collection of natural enzyme treatments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cherry Enzyme Peel</h3>
                <p className="text-gray-700 mb-4">
                  Antioxidant-rich treatment for brightening and anti-aging benefits.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Raspberry-Peach Peel</h3>
                <p className="text-gray-700 mb-4">Gentle hydrating treatment perfect for dry or mature skin.</p>
                <Button
                  variant="outline"
                  className="w-full border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pumpkin Orange Peel</h3>
                <p className="text-gray-700 mb-4">Seasonal favorite for deep exfoliation and skin renewal.</p>
                <Button
                  variant="outline"
                  className="w-full border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Gentle Antioxidant Care?
          </h2>
          <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
            Experience the protective benefits of our Blueberry Enzyme Peel. Perfect for sensitive skin.
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
