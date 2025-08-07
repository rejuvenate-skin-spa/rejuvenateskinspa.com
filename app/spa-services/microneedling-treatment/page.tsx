import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Star, Zap, Heart } from 'lucide-react'
import Image from "next/image"
import MicroneedlingTreatmentFAQ from "@/components/microneedling-treatment-faq"
import MicroneedlingTreatmentHero from "@/components/microneedling-treatment-hero"

export default function MicroneedlingTreatmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MicroneedlingTreatmentHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Stimulate Natural Collagen Production
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Microneedling, also known as collagen induction therapy, uses fine needles to create controlled
                  micro-injuries in the skin. This process triggers your body's natural healing response, stimulating
                  the production of collagen and elastin.
                </p>
                <p>
                  The result is firmer, smoother, more youthful-looking skin with improved texture and tone.
                  Microneedling is effective for treating fine lines, acne scars, large pores, and overall skin
                  rejuvenation with minimal downtime.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Collagen+Stimulation"
                alt="Collagen stimulation process"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how microneedling can transform your skin naturally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Collagen Boost",
                description: "Stimulates natural collagen and elastin production for firmer, younger-looking skin.",
              },
              {
                icon: Star,
                title: "Reduces Fine Lines",
                description: "Smooths fine lines and wrinkles by improving skin structure and elasticity.",
              },
              {
                icon: Shield,
                title: "Minimizes Pores",
                description: "Tightens and reduces the appearance of enlarged pores for smoother skin texture.",
              },
              {
                icon: Heart,
                title: "Improves Scars",
                description: "Effectively reduces the appearance of acne scars and other skin imperfections.",
              },
              {
                icon: Clock,
                title: "Minimal Downtime",
                description: "Quick recovery with only mild redness for 24-48 hours after treatment.",
              },
              {
                icon: CheckCircle,
                title: "All Skin Types",
                description: "Safe and effective for all skin types and colors with customizable depth.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Microneedling can be performed on various areas of the body for comprehensive skin improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: "Face",
                description: "Full facial treatment for overall skin rejuvenation and anti-aging.",
                price: "$200",
              },
              {
                area: "Neck & Décolletage",
                description: "Target delicate areas prone to aging and sun damage.",
                price: "$150",
              },
              {
                area: "Acne Scars",
                description: "Focused treatment to improve the appearance of acne scarring.",
                price: "$250",
              },
              {
                area: "Stretch Marks",
                description: "Body treatment to reduce the appearance of stretch marks.",
                price: "$300",
              },
            ].map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.area}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                  <div className="text-2xl font-bold text-sage-600 mb-4">{area.price}</div>
                  <Button
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your microneedling treatment from consultation to recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Skin assessment and treatment plan customization based on your concerns.",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Cleansing and application of topical numbing cream for comfort.",
              },
              {
                step: "03",
                title: "Microneedling",
                description: "Precise treatment using professional-grade microneedling device.",
              },
              {
                step: "04",
                title: "Recovery Care",
                description: "Soothing serum application and detailed aftercare instructions.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Packages</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Single Treatment",
                price: "$200",
                duration: "60-90 minutes",
                features: [
                  "Full facial microneedling",
                  "Numbing cream included",
                  "Post-treatment serum",
                  "Aftercare instructions",
                ],
              },
              {
                title: "Series of 3",
                price: "$540",
                duration: "3 treatments",
                features: [
                  "3 microneedling sessions",
                  "10% package savings",
                  "Customized treatment plan",
                  "Complimentary skincare consultation",
                ],
                popular: true,
              },
              {
                title: "Series of 6",
                price: "$960",
                duration: "6 treatments",
                features: [
                  "6 microneedling sessions",
                  "20% package savings",
                  "Priority booking",
                  "Free maintenance treatment",
                ],
              },
            ].map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-sage-600" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sage-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Best Value
                    </span>
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="text-3xl font-bold text-sage-600 mb-1">{pkg.price}</div>
                  <p className="text-gray-500 mb-6">{pkg.duration}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.popular ? "bg-sage-600 hover:bg-sage-700 text-white" : "bg-white border border-sage-600 text-sage-600 hover:bg-sage-50"}`}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <MicroneedlingTreatmentFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready to Boost Your Natural Collagen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the transformative power of microneedling and reveal your skin's natural radiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
              Book Your Treatment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sage-600 bg-transparent"
            >
              Call (480) 447-4505
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
