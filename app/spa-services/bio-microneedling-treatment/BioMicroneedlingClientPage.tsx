"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, Star, CheckCircle, Users, Zap, Sparkles, Heart, Shield, Leaf } from "lucide-react"
import BioMicroneedlingTreatmentFAQ from "@/components/bio-microneedling-treatment-faq"
import BioMicroneedlingTreatmentHero from "@/components/bio-microneedling-treatment-hero"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function BioMicroneedlingClientPage() {
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const isBusinessHours = () => {
    const now = new Date()
    const day = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours()

    // Business hours: Monday-Friday 9AM-6PM, Saturday 9AM-4PM
    if (day === 0) return false // Closed Sunday
    if (day >= 1 && day <= 5) return hour >= 9 && hour < 18 // Mon-Fri 9AM-6PM
    if (day === 6) return hour >= 9 && hour < 16 // Sat 9AM-4PM
    return false
  }

  const handleGetInTouch = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:+14805551234"
    } else {
      router.push("/about-us/contact-us")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      {/* Hero Section */}
      <BioMicroneedlingTreatmentHero />

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">60 min</div>
              <div className="text-sm text-gray-600">Treatment Time</div>
            </div>
            <div className="text-center">
              <DollarSign className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$195</div>
              <div className="text-sm text-gray-600">Starting Price</div>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">3-6 months</div>
              <div className="text-sm text-gray-600">Results Last</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">300+</div>
              <div className="text-sm text-gray-600">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Bio Microneedling */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-sage-100 text-sage-800">Advanced Treatment</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
                What is Bio Microneedling?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Bio microneedling combines traditional microneedling with organic, bio-compatible serums to enhance your
                skin's natural healing and regeneration process. This advanced treatment uses fine needles to create
                micro-channels in the skin while simultaneously delivering potent organic nutrients.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Unlike conventional microneedling, bio microneedling incorporates natural, plant-based serums that work
                synergistically with your skin's biology to promote deeper healing and more dramatic results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Organic serums</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Natural healing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Collagen boost</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Minimal downtime</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Bio Microneedling Treatment"
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
              Why Choose Bio Microneedling?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the power of nature combined with advanced microneedling technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Leaf className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Organic Ingredients</h3>
                <p className="text-gray-600">
                  Uses only natural, organic bio-serums that work harmoniously with your skin's natural processes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Absorption</h3>
                <p className="text-gray-600">
                  Micro-channels allow for deeper penetration of nutrients, maximizing treatment effectiveness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collagen Stimulation</h3>
                <p className="text-gray-600">
                  Naturally triggers your body's collagen production for firmer, more youthful-looking skin.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gentle & Safe</h3>
                <p className="text-gray-600">
                  Bio-compatible ingredients reduce risk of irritation while providing powerful anti-aging benefits.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Skin Repair</h3>
                <p className="text-gray-600">
                  Addresses multiple skin concerns including fine lines, scars, hyperpigmentation, and texture issues.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-Lasting Results</h3>
                <p className="text-gray-600">
                  Continued improvement over months as your skin naturally regenerates and rebuilds collagen.
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
              What Can Bio Microneedling Treat?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bio microneedling effectively addresses a wide range of skin concerns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Fine Lines & Wrinkles</h3>
              <p className="text-gray-600 text-sm">Reduce signs of aging around eyes, mouth, and forehead</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Acne Scars</h3>
              <p className="text-gray-600 text-sm">Improve texture and appearance of acne scarring</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Hyperpigmentation</h3>
              <p className="text-gray-600 text-sm">Even out skin tone and reduce dark spots</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Large Pores</h3>
              <p className="text-gray-600 text-sm">Minimize pore appearance for smoother skin</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Skin Texture</h3>
              <p className="text-gray-600 text-sm">Improve overall skin smoothness and radiance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Stretch Marks</h3>
              <p className="text-gray-600 text-sm">Reduce appearance of stretch marks on body</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">Investment in Your Skin</h2>
            <p className="text-lg text-gray-600">Professional bio microneedling with organic serums</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Single Treatment</h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$195</div>
                <p className="text-gray-600 mb-6">
                  Complete bio microneedling treatment with organic serums and aftercare guidance.
                </p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Skin consultation & analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Bio microneedling treatment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Organic bio-serum application</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Post-treatment care kit</span>
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Single Session</Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow bg-sage-50">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-sage-600 text-white">Best Value</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3-Treatment Package</h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$525</div>
                <div className="text-sm text-gray-500 mb-4">Save $60 • $175 per session</div>
                <p className="text-gray-600 mb-6">
                  Optimal results package with three treatments spaced 4-6 weeks apart for maximum collagen stimulation.
                </p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Everything in single treatment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>3 bio microneedling sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Progress tracking & photos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Customized serum selection</span>
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Package</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <BioMicroneedlingTreatmentFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Ready to Transform Your Skin?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the power of bio microneedling with organic serums for naturally radiant skin
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleGetInTouch}
              className="bg-white text-sage-700 hover:bg-gray-100 px-6 py-2 shadow-lg backdrop-blur-sm"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
