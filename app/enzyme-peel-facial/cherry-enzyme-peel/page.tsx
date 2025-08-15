import type { Metadata } from "next"
import { CherryEnzymePeelHero } from "@/components/cherry-enzyme-peel-hero"
import { CherryEnzymePeelFAQ } from "@/components/cherry-enzyme-peel-faq"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cherry Enzyme Peel | Natural Facial Treatment | Rejuvenate Skin Spa",
  description:
    "Brighten and revitalize your skin with our antioxidant-rich Cherry Enzyme Peel. Professional facial treatment in Queen Creek, AZ. Book your appointment today.",
  keywords:
    "cherry enzyme peel, facial treatment, antioxidant facial, skin brightening, Queen Creek spa, natural skincare",
}

export default function CherryEnzymePeelPage() {
  return (
    <main className="min-h-screen">
      <CherryEnzymePeelHero />

      {/* Treatment Overview */}
      <section id="treatment-overview" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-sage-100 text-sage-800 mb-4">Premium Treatment</Badge>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Cherry Enzyme Peel Treatment
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Cherry Enzyme Peel harnesses the natural power of cherry enzymes and vitamin C to gently exfoliate
                and brighten your skin. This antioxidant-rich treatment helps reduce signs of aging, improve skin
                texture, and restore your natural radiance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sage-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Rich in Vitamin C and antioxidants</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sage-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Gentle exfoliation for all skin types</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sage-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Brightens and evens skin tone</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sage-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Reduces fine lines and wrinkles</span>
                </div>
              </div>
            </div>
            <div className="bg-sage-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Treatment Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sage-600 mr-3">✓</span>
                  <span className="text-gray-700">Brightens dull, tired-looking skin</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-3">✓</span>
                  <span className="text-gray-700">Improves skin texture and smoothness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-3">✓</span>
                  <span className="text-gray-700">Reduces appearance of age spots</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-3">✓</span>
                  <span className="text-gray-700">Stimulates collagen production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-3">✓</span>
                  <span className="text-gray-700">Provides natural antioxidant protection</span>
                </li>
              </ul>
            </div>
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
              Discover the transformative power of our carefully crafted cherry enzyme treatment process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sage-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Skin Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive skin assessment to customize your cherry enzyme peel treatment for optimal results
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sage-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cherry Enzyme Application</h3>
                <p className="text-gray-600">
                  Gentle application of our cherry enzyme blend to exfoliate and nourish your skin naturally
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sage-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hydration & Protection</h3>
                <p className="text-gray-600">
                  Finish with hydrating serums and protective moisturizer to lock in your radiant results
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8">
            Cherry Enzyme Peel Investment
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="border-2 border-sage-200 hover:border-sage-400 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Single Treatment</h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$90</div>
                <p className="text-gray-600 mb-6">Perfect for trying our cherry enzyme peel</p>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Single Session</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-sage-400 bg-sage-50 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-sage-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Save $30
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Treatment Series</h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$240</div>
                <p className="text-gray-600 mb-2">3 sessions (normally $270)</p>
                <p className="text-sm text-sage-600 mb-6">Best value for optimal results</p>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Treatment Series</Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
            All treatments include consultation, aftercare products, and personalized skincare recommendations. Contact
            us for package deals and seasonal promotions.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <CherryEnzymePeelFAQ />
      </div>

      {/* Related Treatments */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Explore More Enzyme Treatments
            </h2>
            <p className="text-lg text-gray-600">Discover our complete collection of natural enzyme peel treatments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Blueberry Enzyme Peel</h3>
                <p className="text-gray-600 mb-4">Antioxidant-rich treatment for mature and damaged skin</p>
                <div className="flex justify-between items-center">
                  <span className="text-sage-600 font-semibold">From $85</span>
                  <Link href="/enzyme-peel-facial/blueberry-enzyme-peel">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pumpkin Orange Peel</h3>
                <p className="text-gray-600 mb-4">Vitamin A and C treatment for skin renewal and glow</p>
                <div className="flex justify-between items-center">
                  <span className="text-sage-600 font-semibold">From $95</span>
                  <Link href="/enzyme-peel-facial/pumpkin-orange-enzyme-peel">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion Fruit Peel</h3>
                <p className="text-gray-600 mb-4">Brightening treatment with natural fruit acids</p>
                <div className="flex justify-between items-center">
                  <span className="text-sage-600 font-semibold">From $100</span>
                  <Link href="/enzyme-peel-facial/passion-fruit-enzyme-peel">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/enzyme-peel-facial">
              <Button size="lg" className="bg-sage-600 hover:bg-sage-700">
                View All Enzyme Treatments
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
