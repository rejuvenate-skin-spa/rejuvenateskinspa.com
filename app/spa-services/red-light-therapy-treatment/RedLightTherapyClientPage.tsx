"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import RedLightTherapyTreatmentFAQ from "@/components/red-light-therapy-treatment-faq"
import RedLightTherapyTreatmentHero from "@/components/red-light-therapy-treatment-hero"
import { Clock, DollarSign, Star, CheckCircle, Users, Zap, Sparkles, Heart, Shield, Sun, Activity } from "lucide-react"

export default function RedLightTherapyClientPage() {
  const handleGetInTouchClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const currentHour = new Date().getHours()
    const isBusinessHours = currentHour >= 9 && currentHour < 17

    if (isMobile && isBusinessHours) {
      window.location.href = "tel:+14805551234"
    } else {
      window.location.href = "/about-us/contact-us"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      {/* Hero Section */}
      <RedLightTherapyTreatmentHero />

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">20 min</div>
              <div className="text-sm text-gray-600">Session Time</div>
            </div>
            <div className="text-center">
              <DollarSign className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$45</div>
              <div className="text-sm text-gray-600">Per Session</div>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">No Downtime</div>
              <div className="text-sm text-gray-600">Recovery Time</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-sage-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">400+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Red Light Therapy */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-sage-100 text-sage-800">Science-Based Therapy</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
                What is Red Light Therapy?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Red light therapy, also known as photobiomodulation, uses specific wavelengths of red and near-infrared
                light (660-850nm) to stimulate cellular processes. This FDA-approved treatment penetrates deep into
                tissues to promote healing, reduce inflammation, and boost cellular energy production.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                The therapeutic light wavelengths are absorbed by mitochondria in your cells, increasing ATP production
                and triggering beneficial biological processes that promote healing, reduce pain, and improve skin
                health naturally.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">FDA approved</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">No side effects</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Cellular healing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                  <span className="text-gray-700">Natural therapy</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Red Light Therapy Treatment"
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
              Why Choose Red Light Therapy?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the natural healing power of therapeutic light wavelengths
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sun className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Skin Rejuvenation</h3>
                <p className="text-gray-600">
                  Stimulates collagen production, reduces fine lines, and improves skin texture and tone naturally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Activity className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pain Relief</h3>
                <p className="text-gray-600">
                  Reduces inflammation and promotes healing for muscle soreness, joint pain, and chronic conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cellular Energy</h3>
                <p className="text-gray-600">
                  Boosts mitochondrial function and ATP production for enhanced cellular repair and regeneration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Acne Treatment</h3>
                <p className="text-gray-600">
                  Reduces acne-causing bacteria and inflammation while promoting faster healing of blemishes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wound Healing</h3>
                <p className="text-gray-600">
                  Accelerates tissue repair and reduces healing time for cuts, bruises, and post-procedure recovery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mood Enhancement</h3>
                <p className="text-gray-600">
                  Supports mental wellness by potentially improving mood, energy levels, and sleep quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Conditions */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Treatment Applications</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              What Can Red Light Therapy Help With?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Red light therapy addresses a wide range of skin and wellness concerns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Anti-Aging</h3>
              <p className="text-gray-600 text-sm">Fine lines, wrinkles, age spots</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Acne & Blemishes</h3>
              <p className="text-gray-600 text-sm">Active acne, post-acne marks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Muscle Recovery</h3>
              <p className="text-gray-600 text-sm">Soreness, sports injuries</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Joint Pain</h3>
              <p className="text-gray-600 text-sm">Arthritis, stiffness</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Wound Healing</h3>
              <p className="text-gray-600 text-sm">Cuts, bruises, post-surgery</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Hair Growth</h3>
              <p className="text-gray-600 text-sm">Thinning hair, hair loss</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Circulation</h3>
              <p className="text-gray-600 text-sm">Poor blood flow, swelling</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Seasonal Blues</h3>
              <p className="text-gray-600 text-sm">Low mood, energy levels</p>
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
              Affordable Wellness Investment
            </h2>
            <p className="text-lg text-gray-600">Natural healing therapy with flexible pricing options</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Single Session</h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$45</div>
                <p className="text-gray-600 mb-6">Try red light therapy with a single 20-minute session.</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>20-minute session</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Full-body LED panel</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Relaxing environment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>No downtime</span>
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Single Session</Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow bg-sage-50">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-sage-600 text-white">Popular Choice</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">5-Session Package</h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$200</div>
                <div className="text-sm text-gray-500 mb-4">Save $25 • $40 per session</div>
                <p className="text-gray-600 mb-6">Best value for consistent results and ongoing wellness.</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>5 red light sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Progress tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Wellness consultation</span>
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">Book Package</Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">10-Session Package</h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$360</div>
                <div className="text-sm text-gray-500 mb-4">Save $90 • $36 per session</div>
                <p className="text-gray-600 mb-6">Maximum value for long-term wellness and therapeutic benefits.</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>10 red light sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Priority booking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Personalized protocol</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Wellness support</span>
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
        <RedLightTherapyTreatmentFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Start Your Healing Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the natural healing power of red light therapy for better skin and wellness
          </p>
          <div className="flex justify-center">
            <Button
              onClick={handleGetInTouchClick}
              className="bg-white text-sage-700 hover:bg-gray-100 px-4 py-1.5 text-base"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
