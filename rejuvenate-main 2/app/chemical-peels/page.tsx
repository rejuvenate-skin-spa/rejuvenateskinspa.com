"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { CheckCircle, Clock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ChemicalPeelsHero from "@/components/chemical-peels-hero"
import { useState, useEffect } from "react"

export default function ChemicalPeelsPage() {
  const [isMobile, setIsMobile] = useState(false)

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

    // Business hours: Monday-Friday 9AM-6PM, Saturday 9AM-3PM
    if (day >= 1 && day <= 5) {
      // Monday to Friday
      return hour >= 9 && hour < 18
    } else if (day === 6) {
      // Saturday
      return hour >= 9 && hour < 15
    }
    return false // Sunday or outside business hours
  }

  const handleGetInTouch = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:+14802818888"
    } else {
      window.location.href = "/about-us/contact-us"
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ChemicalPeelsHero />

      {/* Before/After Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">See the Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drag the slider to see real before and after results from our chemical peel treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <BeforeAfterSlider
              beforeImage="/placeholder.svg?height=400&width=600"
              afterImage="/placeholder.svg?height=400&width=600"
              alt="Chemical Peel Results - Acne Scarring"
            />
            <BeforeAfterSlider
              beforeImage="/placeholder.svg?height=400&width=600"
              afterImage="/placeholder.svg?height=400&width=600"
              alt="Chemical Peel Results - Sun Damage"
            />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              *Results may vary. Individual results are not guaranteed and may vary from person to person.
            </p>
            <Button className="bg-sage-600 hover:bg-sage-700 text-white">View More Results</Button>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Our Chemical Peel Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of professional chemical peels, each designed to address specific skin concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "TCA 25% Peel",
                description: "Deep penetrating peel for significant skin rejuvenation and resurfacing.",
                benefits: [
                  "Reduces deep wrinkles and fine lines",
                  "Improves skin texture and tone",
                  "Minimizes acne scars",
                  "Addresses sun damage and age spots",
                ],
                duration: "60-90 minutes",
                downtime: "3-5 days",
                href: "/chemical-peels/tca-40-peel",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Glycolic 20-40% Peel",
                description: "Medium-depth peel perfect for improving skin clarity and reducing signs of aging.",
                benefits: [
                  "Smooths fine lines",
                  "Brightens complexion",
                  "Reduces pore size",
                  "Improves skin elasticity",
                ],
                duration: "45-60 minutes",
                downtime: "3-7 days",
                href: "/chemical-peels/glycolic-50-peel",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((treatment, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={treatment.image || "/placeholder.svg"}
                    alt={treatment.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{treatment.title}</h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {treatment.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="h-4 w-4 text-sage-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-sage-600" />
                        {treatment.duration}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Shield className="h-4 w-4 mr-2 text-sage-600" />
                        {treatment.downtime} recovery
                      </div>
                    </div>
                  </div>

                  <Link href={treatment.href}>
                    <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our chemical peel process is designed for your comfort and optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Comprehensive skin analysis and treatment planning.",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Skin cleansing and pre-treatment conditioning.",
              },
              {
                step: "03",
                title: "Treatment",
                description: "Professional application of chemical peel solution.",
              },
              {
                step: "04",
                title: "Aftercare",
                description: "Post-treatment care instructions and follow-up.",
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

      {/* CTA Section */}
      <section id="faq-section" className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready for Radiant Skin?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your chemical peel consultation today and take the first step towards healthier, more beautiful
            skin.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={handleGetInTouch}
              className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
