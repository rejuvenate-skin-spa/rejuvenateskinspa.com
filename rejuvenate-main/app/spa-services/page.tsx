"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SpaServicesFAQ from "@/components/spa-services-faq"
import { SpaServicesHero } from "@/components/spa-services-hero"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function SpaServicesPage() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const isBusinessHours = () => {
    const now = new Date()
    const arizonaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Phoenix" }))
    const day = arizonaTime.getDay()
    const hour = arizonaTime.getHours()

    // Monday-Saturday (1-6), 8am-6pm
    return day >= 1 && day <= 6 && hour >= 8 && hour < 18
  }

  const handlePrimaryClick = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:480-225-9549"
    } else {
      router.push("/about-us/contact-us")
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SpaServicesHero />

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Eyebrow Lamination",
                description:
                  "Create fuller, lifted, and perfectly shaped brows using a gentle keratin formula. Smooth, define, and enhance your natural beauty. (6-8 weeks)",
                benefits: [
                  "Instantly lifts and defines the brows",
                  "Creates the appearance of thicker, fuller brows",
                  "Smooths and straightens coarse or curly hairs",
                  "Enhances symmetry and shape",
                  "Long-lasting results with no downtime",
                ],
                duration: "60 minutes",
                price: "From $90",
                href: "/spa-services/enzyme-facial-peels",
                image: "/images/eyebrow-lamination-feature.jpg",
              },
              {
                title: "Dermaplaning Facial",
                description: "Professional exfoliation treatment that removes dead skin cells and fine facial hair.",
                benefits: [
                  "Smoother skin texture",
                  "Better product absorption",
                  "Instant results",
                  "Makeup applies flawlessly",
                ],
                duration: "45 minutes",
                price: "From $90",
                href: "/spa-services/dermaplaning",
                image: "/images/dermaplaning-facial-treatment-in-progress.png",
              },
              {
                title: "Microblading",
                description: "Semi-permanent eyebrow enhancement using precise hair-stroke technique.",
                benefits: ["Perfectly Defined, Natural-Looking Brows", "Long-Lasting Results", "Saves Time & Enhances Confidence", "Customizable Shape & Color", "Waterproof & Smudge-Proof", "Restores Thinning or Over-Plucked Brows"],
                duration: "2-3 hours",
                price: "From $450",
                href: "/spa-services/microblading",
                image: "/images/microblading-service.jpg",
              },
              {
                title: "Red Light Therapy",
                description: "Non-invasive treatment that promotes healing, stimulates collagen, and reduces fine lines and wrinkles with advanced LED technology.",
                benefits: ["Stimulates Collagen & Elastin Production", "Reduces Fine Lines & Wrinkles", "Improves Tone & Texture", "Minimizes Inflammation & Redness", "Accelerates Healing & Recovery", "Enhances Cellular Energy"],
                duration: "15-30 minutes",
                price: "From $25",
                href: "/spa-services/microneedling",
                image: "/images/red-lamp-only.png",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 bg-gray-100 flex items-center justify-center">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className={service.title === "Red Light Therapy" ? "object-contain" : "object-cover"} />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="space-y-4 mb-6">
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

                  <Link href={service.href}>
                    <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">Learn More & Book</Button>
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
            Book your spa service today and experience the ultimate in relaxation and skin rejuvenation.
          </p>
          <Button
            onClick={handlePrimaryClick}
            className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-2 shadow-lg backdrop-blur-sm"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  )
}
