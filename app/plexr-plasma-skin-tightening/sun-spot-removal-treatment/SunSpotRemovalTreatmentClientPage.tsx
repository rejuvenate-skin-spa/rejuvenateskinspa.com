"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Star, Zap, Heart, Users, Sun, Phone, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SunSpotRemovalTreatmentFAQ from "@/components/sun-spot-removal-treatment-faq"
import SunSpotRemovalTreatmentHero from "@/components/sun-spot-removal-treatment-hero"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function SunSpotRemovalTreatmentClientPage() {
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
      window.location.href = "tel:4802049366"
    } else {
      router.push("/contact")
    }
  }

  return (
    <div className="min-h-screen">
      <SunSpotRemovalTreatmentHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Precise Pigmentation Removal
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sun spots, age spots, and other pigmented lesions are common signs of sun damage and aging. Our
                  advanced plasma technology offers precise, targeted removal of these unwanted pigmentations without
                  damaging surrounding healthy tissue.
                </p>
                <p>
                  Plasma energy specifically targets the melanin in pigmented lesions, breaking down the excess
                  pigment while stimulating natural skin renewal. With proper sun protection, treated spots generally
                  do not return, giving you clearer, more even-toned skin.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/sun-spot-removal-hero.jpg"
                alt="Precise pigmentation treatment process"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Required Inline Callout */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-sage-50 border border-sage-200 rounded-lg p-5 text-left">
          <div className="flex items-start gap-3 mb-3">
            <Info className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
            <h3 className="text-base font-semibold text-gray-900">Consultation Required for Plexr Plasma Removal Services</h3>
          </div>
          <ul className="text-sm text-gray-600 space-y-1 ml-8">
            <li>• $100 consultation fee (applied toward treatment if you proceed)</li>
            <li>• General pricing guidance is available by phone</li>
            <li>• Final recommendations and exact pricing are confirmed in person</li>
          </ul>
        </div>
      </div>

      {/* Benefits & Features */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of plasma technology for effective sun spot removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Long-Lasting Results",
                description: "Treated sun spots generally do not return when combined with proper sun protection.",
              },
              {
                icon: Zap,
                title: "Precise Targeting",
                description: "Plasma energy specifically targets pigmented areas without affecting healthy tissue.",
              },
              {
                icon: Shield,
                title: "Minimal Downtime",
                description: "Quick healing with most clients returning to normal activities within days.",
              },
              {
                icon: Heart,
                title: "Even Skin Tone",
                description: "Achieve more uniform skin tone and improved overall complexion.",
              },
              {
                icon: Clock,
                title: "Quick Treatment",
                description: "Most sun spot treatments can be completed in 15-45 minutes.",
              },
              {
                icon: Users,
                title: "All Skin Types",
                description: "Safe and effective for various skin types with proper assessment.",
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

      {/* Types of Pigmentation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Types We Treat</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our plasma technology effectively treats various types of pigmented lesions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: "Solar Lentigines",
                common: "Age Spots",
                description: "Brown spots caused by sun exposure, commonly on hands, face, and shoulders.",
                treatable: true,
              },
              {
                type: "Seborrheic Keratoses",
                common: "Barnacles",
                description: "Raised, waxy brown spots that appear with age.",
                treatable: true,
              },
              {
                type: "Café-au-lait Spots",
                common: "Coffee Spots",
                description: "Light brown birthmarks that can be present from birth or develop later.",
                treatable: true,
              },
              {
                type: "Post-Inflammatory",
                common: "PIH",
                description: "Dark spots left after acne, injury, or other skin inflammation.",
                treatable: true,
              },
              {
                type: "Freckles",
                common: "Ephelides",
                description: "Small brown spots that darken with sun exposure.",
                treatable: true,
              },
              {
                type: "Melasma",
                common: "Pregnancy Mask",
                description: "Hormonal pigmentation requiring careful assessment and treatment.",
                treatable: false,
              },
            ].map((pigment, index) => (
              <Card key={index} className={`text-center ${pigment.treatable ? "bg-white" : "bg-gray-50"} rounded-lg`}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{pigment.type}</h3>
                  <p className="text-sage-600 font-medium mb-3">({pigment.common})</p>
                  <p className="text-gray-600 text-sm mb-4">{pigment.description}</p>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      pigment.treatable ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {pigment.treatable ? "Treatable" : "Requires Assessment"}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Common Treatment Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sun spots commonly appear on areas with the most sun exposure over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                area: "Face",
                icon: Sun,
                description: "Cheeks, forehead, nose, and temples where sun exposure is highest.",
                frequency: "Very Common",
              },
              {
                area: "Hands",
                icon: Sun,
                description: "Back of hands and fingers, often the first area to show sun damage.",
                frequency: "Very Common",
              },
              {
                area: "Shoulders",
                icon: Sun,
                description: "Upper shoulders and décolletage area from sun exposure.",
                frequency: "Common",
              },
              {
                area: "Arms",
                icon: Sun,
                description: "Forearms and upper arms exposed to sun during daily activities.",
                frequency: "Common",
              },
              {
                area: "Chest",
                icon: Sun,
                description: "Upper chest area, especially in those who wear low necklines.",
                frequency: "Common",
              },
              {
                area: "Back",
                icon: Sun,
                description: "Upper back and shoulder blade area from sun exposure.",
                frequency: "Less Common",
              },
            ].map((location, index) => (
              <div key={index} className="text-center bg-sage-50 p-6 rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full mb-4">
                  <location.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{location.area}</h3>
                <p className="text-gray-600 text-sm mb-3">{location.description}</p>
                <span className="inline-block px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-xs font-medium">
                  {location.frequency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention & Aftercare */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Prevention & Aftercare</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maintain your results and prevent new sun spots with proper care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Post-Treatment Care</h3>
              <ul className="space-y-4">
                {[
                  "Apply sunscreen SPF 30+ daily to treated areas",
                  "Avoid direct sun exposure for 2 weeks post-treatment",
                  "Keep treated areas moisturized during healing",
                  "Allow natural scabbing and peeling process",
                  "No picking or scratching treated areas",
                  "Use gentle, fragrance-free skincare products",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Prevention Tips</h3>
              <ul className="space-y-4">
                {[
                  "Wear broad-spectrum sunscreen daily, even indoors",
                  "Seek shade during peak sun hours (10am-4pm)",
                  "Wear protective clothing and wide-brimmed hats",
                  "Use antioxidant serums to protect against free radicals",
                  "Regular skin checks for new or changing spots",
                  "Professional skin assessments annually",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            Schedule Your Plexr Consultation
          </h2>
          <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
            Plexr treatment plans are customized based on your goals and treatment area. Call us or request a consultation to learn more about what Plexr can do for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <Button
              asChild
              className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-3 text-base font-medium rounded-lg shadow-lg min-h-[48px]"
            >
              <a href="tel:+14802049366" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                (480) 204-9366
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 text-base font-medium rounded-lg min-h-[48px]"
            >
              <Link href="/contact">
                Request a Consultation
              </Link>
            </Button>
          </div>

          {/* Pricing guidance helper text */}
          <p className="text-sm text-sage-200 mb-10 max-w-xl mx-auto">
            General pricing guidance is available by phone. Final treatment recommendations and exact pricing are determined during your in-person consultation.
          </p>

          {/* Consultation Required Info */}
          <div className="bg-white/15 backdrop-blur-sm rounded-lg p-8 max-w-xl mx-auto text-left border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <Info className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
              <h3 className="text-xl font-semibold text-white">Consultation Required</h3>
            </div>
            <ul className="space-y-3 text-sage-100 text-sm ml-10">
              <li>• In-person consultation required for Plasma services</li>
              <li>• $100 consultation fee</li>
              <li>• Fee is applied toward treatment if you proceed</li>
              <li>• Non-refundable if you choose not to proceed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Consultation Is Required */}
      <section className="pt-10 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-800 mb-6">
            Why Is a Consultation Required?
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Plasma treatments are advanced procedures that require a professional assessment to ensure safety and effectiveness. During your consultation, we evaluate your skin type, discuss your goals, review your health history, and determine the most appropriate treatment approach for you.
          </p>
          <p className="text-gray-600">
            This personalized approach helps us create a treatment plan tailored to your unique needs and ensures you achieve the best possible results.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <SunSpotRemovalTreatmentFAQ />
      </div>
    </div>
  )
}
