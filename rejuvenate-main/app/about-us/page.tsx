"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Heart, Star } from "lucide-react"
import Image from "next/image"
import AboutUsHero from "@/components/about-us-hero"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function AboutUsPage() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
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
      {/* Hero Section */}
      <AboutUsHero />

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2018, Rejuvenate Skin Spa was born from a passion for helping people feel confident in
                  their own skin. Our founder, Dr. Sarah Mitchell, recognized the need for a spa that combined
                  cutting-edge technology with personalized, compassionate care.
                </p>
                <p>
                  What started as a small practice has grown into a premier destination for advanced skincare
                  treatments. We've helped thousands of clients achieve their skin goals through our innovative
                  treatments and commitment to excellence.
                </p>
                <p>
                  Today, we continue to stay at the forefront of aesthetic medicine, constantly updating our techniques
                  and equipment to provide the best possible results for our clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/microneedling-pen.jpg"
                alt="Microneedling Pen"
                width={600}
                height={500}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our core values and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for perfection in every treatment and interaction, never settling for anything less than exceptional results.",
              },
              {
                icon: Heart,
                title: "Compassion",
                description:
                  "We understand that skincare is personal. We approach every client with empathy, understanding, and genuine care.",
              },
              {
                icon: Users,
                title: "Personalization",
                description:
                  "Every client is unique. We create customized treatment plans tailored to individual needs and goals.",
              },
              {
                icon: Star,
                title: "Innovation",
                description:
                  "We stay at the cutting edge of aesthetic medicine, continuously adopting the latest technologies and techniques.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by leading industry organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "American Board of Dermatology",
              "International Association of Plasma Specialists",
              "Society of Plastic Surgical Skin Care Specialists",
              "Best Spa Award 2023",
            ].map((certification, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <p className="font-medium text-gray-900">{certification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready to Start Your Skin Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let our expert team help you achieve the healthy, beautiful skin you deserve. Schedule your consultation
            today.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={handleGetInTouch}
              className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-2 shadow-lg backdrop-blur-sm"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
