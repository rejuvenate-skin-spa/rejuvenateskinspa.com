"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Star, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SpaServicesFAQ from "@/components/spa-services-faq"
import { SpaServicesHero } from "@/components/spa-services-hero"
import { siteConfig } from "@/lib/site-config"

export default function SpaServicesPageClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SpaServicesHero />

      {/* Definition Section - GEO Optimized */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-4">
            What Are Spa Services?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Spa services are professional beauty and skincare treatments designed to enhance your natural appearance and promote relaxation. At Rejuvenate Skin Spa in Queen Creek, Arizona, our spa services include dermaplaning facials for instant smoothness, microblading for perfectly defined brows, eyebrow lamination for fuller-looking brows, and red light therapy for cellular rejuvenation. Each treatment is performed by licensed professionals using premium products tailored to your skin type and goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {[
              {
                title: "Eyebrow Lamination",
                description:
                  "Create fuller, lifted, and perfectly shaped brows using a gentle keratin formula. Smooth, define, and enhance your natural beauty. (6–8 weeks)",
                benefits: [
                  "Instantly lifts and defines the brows",
                  "Creates the appearance of thicker, fuller brows",
                  "Smooths and straightens coarse or curly hairs",
                  "Enhances symmetry and shape",
                  "Long-lasting results with no downtime",
                ],
                duration: "60 minutes",
                price: "From $90",
                href: "/spa-services/eyebrow-lamination-treatment",
                image: "/images/eyebrow-lamination-feature.jpg",
              },
              {
                title: "Dermaplaning Facial",
                description: "Professional exfoliation treatment using a surgical-grade blade to gently remove dead skin cells and fine vellus hair (peach fuzz), revealing a smoother, brighter complexion instantly.",
                benefits: [
                  "Instantly smoother, softer skin texture",
                  "Enhanced product absorption and efficacy",
                  "Makeup applies flawlessly and evenly",
                  "Reduces appearance of fine lines",
                  "Safe for most skin types with no downtime",
                ],
                duration: "45 minutes",
                price: "From $80",
                href: "/spa-services/dermaplaning-treatment",
                image: "/images/dermaplaning-facial-treatment-in-progress.png",
              },
              {
                title: "Microblading",
                description: "Semi-permanent eyebrow enhancement using precise hair-stroke technique.",
                benefits: ["Perfectly defined, natural-looking brows", "Long-lasting results", "Saves time & enhances confidence", "Customizable shape & color", "Waterproof & smudge-proof", "Restores thinning or over-plucked brows"],
                duration: "2–3 hours",
                price: "From $450",
                href: "/spa-services/microblading-treatment",
                image: "/images/microblading-service.jpg",
              },
              {
                title: "Red Light Therapy",
                description: "Non-invasive treatment that promotes healing, stimulates collagen, and reduces fine lines and wrinkles with advanced LED technology.",
                benefits: ["Stimulates collagen & elastin production", "Reduces fine lines & wrinkles", "Improves tone & texture", "Minimizes inflammation & redness", "Accelerates healing & recovery", "Enhances cellular energy"],
                duration: "15–30 minutes",
                price: "From $25",
                href: "/spa-services/red-light-therapy-treatment",
                image: "/images/red-lamp-only.png",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-64 bg-gray-100 flex items-center justify-center">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className={service.title === "Red Light Therapy" ? "object-contain" : "object-cover"} />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="space-y-4 mb-6 flex-grow">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="h-4 w-4 text-sage-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-sage-600" />
                        {service.duration}
                      </div>
                      <div className="flex items-center text-sage-600 font-semibold">
                        <Star className="h-4 w-4 mr-1" />
                        {service.price}
                      </div>
                    </div>
                  </div>

                  <Link href={service.href} className="mt-auto">
                    <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">Learn about {service.title}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              The Rejuvenate Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the highest standard of spa services with our expert team and premium products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Practitioners",
                description: "All treatments performed by licensed, certified professionals with years of experience.",
                icon: "👩‍⚕️",
              },
              {
                title: "Premium Products",
                description: "We use only the finest, medical-grade products and equipment for optimal results.",
                icon: "✨",
              },
              {
                title: "Personalized Care",
                description: "Every treatment is customized to your unique skin type, concerns, and goals.",
                icon: "💆‍♀️",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <SpaServicesFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready to Pamper Yourself?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Treat yourself to a spa service today and experience the ultimate in relaxation and skin rejuvenation.
          </p>
          <Button
            asChild
            className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-3 shadow-lg"
          >
            <a href={`tel:${siteConfig.phoneTel}`} aria-label="Call Rejuvenate Skin Spa" className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              {siteConfig.phoneDisplay}
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

