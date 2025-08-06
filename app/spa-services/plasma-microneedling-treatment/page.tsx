import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PlasmaMicroneedlingTreatmentFAQ from "@/components/plasma-microneedling-treatment-faq"
import {
  Clock,
  DollarSign,
  Star,
  CheckCircle,
  Users,
  Calendar,
  Zap,
  Sparkles,
  Shield,
  Target,
  Award,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Plasma Microneedling Treatment | Rejuvenate Skin Spa Queen Creek",
  description:
    "Advanced plasma microneedling at Rejuvenate Skin Spa. Combine microneedling with plasma energy for maximum collagen stimulation and skin rejuvenation. Book today!",
  keywords:
    "plasma microneedling, radiofrequency microneedling, collagen induction, skin tightening, Queen Creek spa, Rejuvenate Skin Spa",
}

export default function PlasmaMicroneedlingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sage-600 to-sage-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Premium Plasma Technology</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Plasma Microneedling</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Revolutionary treatment combining microneedling with plasma energy for maximum collagen stimulation and
              dramatic skin rejuvenation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-sage-700 hover:bg-gray-100 text-lg px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Book Treatment
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
              <div className="text-2xl font-bold text-gray-900">75 min</div>
              <div className="text-sm text-gray-600">Treatment Time</div>
            </div>
            <div className="text-center">
              <DollarSign className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$295</div>
              <div className="text-sm text-gray-600">Starting Price</div>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">6-12 months</div>
              <div className="text-sm text-gray-600">Results Last</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Plasma Microneedling */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-sage-100 text-sage-800">Revolutionary Technology</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
                What is Plasma Microneedling?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Plasma microneedling represents the pinnacle of skin rejuvenation technology, combining traditional
                microneedling with radiofrequency plasma energy. This advanced treatment creates controlled
                micro-injuries while simultaneously delivering plasma energy deep into the skin layers.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                The plasma energy heats the deeper layers of skin, causing immediate collagen contraction and long-term
                collagen remodeling. This dual-action approach delivers superior results compared to traditional
                microneedling alone.
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
                src="/placeholder.svg?height=500&width=600"
                alt="Plasma Microneedling Treatment"
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
              Why Choose Plasma Microneedling?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the most advanced microneedling technology for superior skin transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Plasma Energy</h3>
                <p className="text-gray-600">
                  Radiofrequency plasma energy penetrates deeper layers for enhanced collagen stimulation and skin
                  tightening.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Precision Treatment</h3>
                <p className="text-gray-600">
                  Controlled energy delivery targets specific skin layers for optimal results with minimal surface
                  damage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Immediate Tightening</h3>
                <p className="text-gray-600">
                  See instant skin tightening effects immediately after treatment, with continued improvement over
                  months.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Superior Results</h3>
                <p className="text-gray-600">
                  Delivers more dramatic improvements compared to traditional microneedling or other non-invasive
                  treatments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe & Effective</h3>
                <p className="text-gray-600">
                  FDA-approved technology with proven safety profile and predictable, long-lasting results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-Lasting Results</h3>
                <p className="text-gray-600">
                  Results continue to improve for 6-12 months as new collagen forms and skin naturally regenerates.
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
            <Badge className="mb-4 bg-sage-100 text-sage-800">Treatment Areas</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              What Can Plasma Microneedling Treat?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced plasma technology addresses multiple skin concerns with superior results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Deep Wrinkles</h3>
              <p className="text-gray-600 text-sm">Significantly reduce moderate to deep facial wrinkles</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Skin Laxity</h3>
              <p className="text-gray-600 text-sm">Tighten loose skin on face, neck, and body</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Acne Scars</h3>
              <p className="text-gray-600 text-sm">Dramatically improve severe acne scarring</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Stretch Marks</h3>
              <p className="text-gray-600 text-sm">Reduce appearance of stubborn stretch marks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Large Pores</h3>
              <p className="text-gray-600 text-sm">Minimize enlarged pores for smoother texture</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Uneven Texture</h3>
              <p className="text-gray-600 text-sm">Smooth rough, uneven skin texture</p>
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
              Premium Treatment Investment
            </h2>
            <p className="text-lg text-gray-600">Advanced plasma microneedling technology for superior results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Single Treatment</h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$295</div>
                <p className="text-gray-600 mb-6">
                  Complete plasma microneedling treatment with advanced radiofrequency technology.
                </p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Comprehensive skin assessment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Plasma microneedling treatment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Post-treatment serum application</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Recovery care instructions</span>
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Single Session</Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow bg-sage-50">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-sage-600 text-white">Optimal Results</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3-Treatment Series</h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$795</div>
                <div className="text-sm text-gray-500 mb-4">Save $90 • $265 per session</div>
                <p className="text-gray-600 mb-6">
                  Complete transformation series with three treatments spaced 6-8 weeks apart for maximum results.
                </p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Everything in single treatment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>3 plasma microneedling sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Progress documentation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Customized treatment plan</span>
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Treatment Series</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <PlasmaMicroneedlingTreatmentFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Experience Advanced Skin Rejuvenation</h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your skin with the most advanced plasma microneedling technology available
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
