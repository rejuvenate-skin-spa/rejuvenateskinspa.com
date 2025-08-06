import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, Star, CheckCircle, Users, Calendar, Eye, Sparkles, Heart, Shield } from "lucide-react"
import { EyebrowLaminationFAQ } from "@/components/eyebrow-lamination-treatment-faq"

export const metadata: Metadata = {
  title: "Eyebrow Lamination Treatment | Rejuvenate Skin Spa Queen Creek",
  description:
    "Transform your brows with professional eyebrow lamination at Rejuvenate Skin Spa. Get fuller, perfectly shaped eyebrows that last 6-8 weeks. Book your appointment today!",
  keywords:
    "eyebrow lamination, brow lamination, eyebrow treatment, brow shaping, Queen Creek spa, Rejuvenate Skin Spa",
}

export default function EyebrowLaminationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sage-600 to-sage-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Premium Brow Treatment</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Eyebrow Lamination</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Transform your brows with our professional lamination treatment for fuller, perfectly shaped eyebrows that
              last 6-8 weeks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-sage-700 hover:bg-gray-100 text-lg px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sage-700 text-lg px-8 py-3 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">45 min</div>
              <div className="text-sm text-gray-600">Treatment Time</div>
            </div>
            <div className="text-center">
              <DollarSign className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$85</div>
              <div className="text-sm text-gray-600">Starting Price</div>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">6-8 weeks</div>
              <div className="text-sm text-gray-600">Results Last</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Eyebrow Lamination */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-sage-100 text-sage-800">About the Treatment</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
                What is Eyebrow Lamination?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Eyebrow lamination is a revolutionary treatment that restructures your brow hairs to create fuller, more
                defined eyebrows. This semi-permanent procedure smooths and lifts your natural brow hairs, giving you
                the appearance of thicker, more uniform brows.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Perfect for those with unruly, sparse, or downward-growing brow hairs, lamination creates a sleek,
                brushed-up look that lasts for weeks without daily styling.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Fuller appearance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Long-lasting results</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Low maintenance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Natural looking</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Eyebrow Lamination Results"
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
            <Badge className="mb-4 bg-sage-100 text-sage-800">Treatment Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Why Choose Eyebrow Lamination?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the transformative benefits of professional eyebrow lamination
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Eye className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fuller Brows</h3>
                <p className="text-gray-600">
                  Creates the appearance of thicker, more voluminous eyebrows by lifting and setting each hair in place.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfect Shape</h3>
                <p className="text-gray-600">
                  Achieves symmetrical, well-defined brows that complement your facial features perfectly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Time-Saving</h3>
                <p className="text-gray-600">
                  Wake up with perfectly styled brows every day - no more daily grooming or filling in sparse areas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Results</h3>
                <p className="text-gray-600">
                  Enhances your natural brow hair without the need for makeup or artificial enhancements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe & Gentle</h3>
                <p className="text-gray-600">
                  Professional-grade products and techniques ensure safe, comfortable treatment with minimal irritation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-Lasting</h3>
                <p className="text-gray-600">
                  Results last 6-8 weeks, making it a cost-effective solution for beautiful brows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Treatment Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">What to Expect</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our professional eyebrow lamination process ensures optimal results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-sage-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation & Prep</h3>
              <p className="text-gray-600">
                We assess your brows, discuss your desired look, and prepare the treatment area for optimal results.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sage-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lamination Process</h3>
              <p className="text-gray-600">
                Professional solutions are applied to lift, shape, and set your brow hairs in the desired direction.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sage-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Finishing Touches</h3>
              <p className="text-gray-600">
                Final shaping, trimming if needed, and aftercare instructions to maintain your beautiful results.
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
              Investment in Your Beauty
            </h2>
            <p className="text-lg text-gray-600">Professional eyebrow lamination with lasting results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Eyebrow Lamination</h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$85</div>
                <p className="text-gray-600 mb-6">
                  Complete eyebrow lamination treatment including consultation, shaping, and aftercare guidance.
                </p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Professional consultation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Complete lamination process</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Brow shaping & trimming</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Aftercare instructions</span>
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow bg-sage-50">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-sage-600 text-white">Popular Choice</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lamination + Tint</h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$110</div>
                <p className="text-gray-600 mb-6">
                  Complete package including lamination and professional tinting for enhanced color and definition.
                </p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Everything in basic package</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Professional brow tinting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Color matching consultation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Enhanced definition</span>
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <EyebrowLaminationFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Ready for Perfect Brows?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your eyebrow lamination appointment today and wake up to beautiful brows every day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage-700 hover:bg-gray-100 text-lg px-8 py-3">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sage-700 text-lg px-8 py-3 bg-transparent"
            >
              Call (480) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
