"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Star, Zap, Heart, Users, AlertTriangle } from "lucide-react"
import Image from "next/image"
import WartRemovalTreatmentFAQ from "@/components/wart-removal-treatment-faq"
import WartRemovalTreatmentHero from "@/components/wart-removal-treatment-hero"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function WartRemovalTreatmentClientPage() {
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
    return day >= 1 && day <= 6 && hour >= 8 && hour < 18
  }

  const handleGetInTouch = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:480-225-9549"
    } else {
      router.push("/about-us/contact-us")
    }
  }

  return (
    <div className="min-h-screen">
      <WartRemovalTreatmentHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Advanced Wart Removal Technology
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Warts are benign skin growths caused by the human papillomavirus (HPV). Our advanced plasma technology
                  offers an effective alternative to traditional treatments like freezing or burning, providing precise
                  removal with minimal discomfort and excellent healing.
                </p>
                <p>
                  Plasma energy precisely targets wart tissue while preserving surrounding healthy tissue. This method
                  is particularly effective for stubborn warts that have not responded to other treatments, offering
                  high success rates with minimal scarring potential.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/wart-removal-treatment.jpg"
                alt="Plasma wart treatment process"
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
              Experience the advantages of plasma technology for effective wart removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "High Success Rate",
                description: "Excellent success rates, even for warts that haven't responded to other treatments.",
              },
              {
                icon: Zap,
                title: "Precise Treatment",
                description: "Targeted plasma energy removes wart tissue while preserving healthy surrounding skin.",
              },
              {
                icon: Shield,
                title: "Minimal Scarring",
                description: "Advanced technology minimizes scarring potential compared to traditional methods.",
              },
              {
                icon: Heart,
                title: "Comfortable Process",
                description: "Local anesthesia ensures comfortable treatment with minimal discomfort.",
              },
              {
                icon: Clock,
                title: "Quick Treatment",
                description: "Most wart removals can be completed in 15-30 minutes per session.",
              },
              {
                icon: Users,
                title: "All Ages",
                description: "Safe and effective for patients of all ages, including children and adults.",
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

      {/* Types of Warts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Types of Warts We Treat</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our plasma technology effectively treats various types of warts in different locations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: "Common Warts",
                location: "Hands, Fingers",
                description: "Rough, raised warts commonly found on hands and fingers.",
                difficulty: "Standard",
              },
              {
                type: "Plantar Warts",
                location: "Feet, Soles",
                description: "Flat warts on the bottom of feet, often painful when walking.",
                difficulty: "Complex",
              },
              {
                type: "Flat Warts",
                location: "Face, Legs",
                description: "Small, smooth warts that appear in clusters.",
                difficulty: "Standard",
              },
              {
                type: "Filiform Warts",
                location: "Face, Neck",
                description: "Thread-like warts that grow quickly around the face and neck.",
                difficulty: "Delicate",
              },
              {
                type: "Periungual Warts",
                location: "Around Nails",
                description: "Warts that grow around fingernails and toenails.",
                difficulty: "Complex",
              },
              {
                type: "Genital Warts",
                location: "Private Areas",
                description: "Require medical evaluation and specialized treatment approach.",
                difficulty: "Specialist",
              },
            ].map((wart, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{wart.type}</h3>
                  <p className="text-sage-600 font-medium mb-3">{wart.location}</p>
                  <p className="text-gray-600 text-sm mb-4">{wart.description}</p>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      wart.difficulty === "Standard"
                        ? "bg-green-100 text-green-700"
                        : wart.difficulty === "Complex"
                          ? "bg-amber-100 text-amber-700"
                          : wart.difficulty === "Delicate"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-red-100 text-red-700"
                    }`}
                  >
                    {wart.difficulty}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pricing based on wart type, size, and location complexity. CALL FOR CUSTOM PRICING
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            ].map((pricing, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{pricing.category}</h3>
                  <p className="text-sage-600 font-medium mb-2">{pricing.size}</p>
                  <p className="text-gray-600 mb-4 text-sm">{pricing.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="text-2xl font-bold text-sage-600">{pricing.price}</div>
                    <div className="text-sm text-gray-500">{pricing.sessions}</div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 rounded-md bg-transparent"
                  >
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive approach to effective wart removal with optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Evaluate wart type, size, and determine treatment approach.",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Clean area and apply local anesthesia for comfort.",
              },
              {
                step: "03",
                title: "Treatment",
                description: "Precise plasma application to remove wart tissue.",
              },
              {
                step: "04",
                title: "Aftercare",
                description: "Wound care instructions and healing guidance.",
              },
              {
                step: "05",
                title: "Follow-up",
                description: "Monitor healing and additional treatments if needed.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Considerations */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Important Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key considerations for successful wart removal treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Treatment Expectations</h3>
              <ul className="space-y-4">
                {[
                  "Multiple sessions may be required for complete removal",
                  "Larger or deeper warts typically need more treatments",
                  "Healing time varies from 1-4 weeks depending on location",
                  "Some discomfort during healing is normal",
                  "Follow-up appointments ensure complete removal",
                  "Success rates are high with proper aftercare",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">When to Seek Treatment</h3>
              <ul className="space-y-4">
                {[
                  "Warts that are painful or interfere with daily activities",
                  "Warts that are spreading or multiplying",
                  "Cosmetic concerns, especially on visible areas",
                  "Warts that haven't responded to over-the-counter treatments",
                  "Uncertainty about whether growth is actually a wart",
                  "Warts in sensitive areas requiring professional care",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <WartRemovalTreatmentFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready to Remove Stubborn Warts?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get effective wart removal with our advanced plasma technology. High success rates with minimal scarring.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={handleGetInTouch}
              className="bg-white text-sage-600 hover:bg-gray-100 rounded-md px-6 py-2 shadow-lg backdrop-blur-sm"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
