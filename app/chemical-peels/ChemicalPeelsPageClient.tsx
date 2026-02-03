"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ChemicalPeelsHero from "@/components/chemical-peels-hero"
import ChemicalPeelsFAQ from "@/components/chemical-peels-faq"
import { SmartContactCTA } from "@/components/SmartContactCTA"
export default function ChemicalPeelsPageClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ChemicalPeelsHero />

      {/* Definition Section - GEO Optimized */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-4">
            What Are Chemical Peels?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Chemical peels are professional skin treatments that use carefully formulated acid solutions to exfoliate damaged outer layers of skin, revealing smoother, more even-toned skin beneath. At Rejuvenate Skin Spa in Queen Creek, Arizona, chemical peels address concerns including fine lines, sun damage, acne scars, uneven pigmentation, and dull skin texture. Peel strength ranges from light (minimal downtime) to deep (more dramatic results). A consultation helps determine which peel type best matches your skin goals and lifestyle.
          </p>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Our Chemical Peel Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of professional chemical peels, each designed to address specific skin concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
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
                duration: "60–90 minutes",
                downtime: "3–5 days",
                href: "/chemical-peels/tca-peels",
                image: "/images/tca-25.jpg",
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
                duration: "45–60 minutes",
                downtime: "3–7 days",
                href: "/chemical-peels/glycolic-acid-peels",
                image: "/images/glycolic-acid-peel-benefits.jpg",
              },
              {
                title: "BioRePeel",
                description: "Advanced bio-stimulating peel with TCA and amino acids for rejuvenation.",
                benefits: [
                  "Little to no visible peeling",
                  "Stimulates collagen production",
                  "Improves skin texture and tone",
                  "Safe for all skin types",
                ],
                duration: "30–45 minutes",
                downtime: "Minimal",
                href: "/chemical-peels/biorepeel-chemical-peels",
                image: "/images/biorepeel-35-tca-treatment-rejuvenate-skin-spa-queen-creek-az.jpg",
              },
            ].map((treatment, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="relative h-48 m-4">
                  <Image
                    src={treatment.image || "/placeholder.svg"}
                    alt={treatment.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{treatment.title}</h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>

                  <div className="space-y-4 mb-6 flex-grow">
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

                  <Link href={treatment.href} className="mt-auto">
                    <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">View {treatment.title} Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-sage-50">
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

      {/* FAQ Section */}
      <ChemicalPeelsFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready for Radiant Skin?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your chemical peel consultation today and take the first step towards healthier, more beautiful
            skin.
          </p>
          <div className="flex justify-center">
            <SmartContactCTA
              variant="outline"
              size="lg"
              showPhoneWhenOpen
              className="bg-white text-sage-600 hover:bg-gray-100 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

