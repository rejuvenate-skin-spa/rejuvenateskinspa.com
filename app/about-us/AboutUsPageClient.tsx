"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Leaf, Shield, MessageCircle, ClipboardList, Heart, Calendar } from "lucide-react"
import Image from "next/image"
import AboutUsHero from "@/components/about-us-hero"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function AboutUsPageClient() {
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
    const arizonaTime = new Date(
      now.toLocaleString("en-US", { timeZone: "America/Phoenix" })
    )
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
      {/* Hero Section */}
      <AboutUsHero />

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Our Approach
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Beautiful skin begins with understanding your unique needs. We focus on 
                  results-driven, non-surgical treatments designed to enhance your natural 
                  beauty without invasive procedures or extended downtime.
                </p>
                <p>
                  Every treatment plan is personalized. We listen, assess your skin, and 
                  recommend solutions that fit your goals and lifestyle. Thoughtful care, 
                  tailored to you.
                </p>
                <p>
                  Located in Queen Creek, Arizona, we are proud to serve our local 
                  community with advanced skincare in a warm, welcoming space.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/microneedling-pen.jpg"
                alt="Advanced skincare treatment"
                width={600}
                height={500}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Specialize In */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              What We Specialize In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Targeted treatments for real results, from lifting and resurfacing to gentle exfoliation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Zap,
                title: "Plasma Skin Tightening",
                description: "Non-surgical lifting and resurfacing with Plexr technology.",
              },
              {
                icon: Sparkles,
                title: "Microneedling",
                description: "Collagen induction therapy for texture, tone, and firmness.",
              },
              {
                icon: Leaf,
                title: "Chemical Peels",
                description: "Medical-grade peels including BioRePeel and TCA treatments.",
              },
              {
                icon: Heart,
                title: "Enzyme Peels",
                description: "Gentle, natural fruit enzyme facials for sensitive skin.",
              },
              {
                icon: Sparkles,
                title: "Spa Services",
                description: "Dermaplaning, microblading, lamination, and red light therapy.",
              },
            ].map((specialty, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-sage-600 text-white rounded-full mb-4">
                  <specialty.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 text-sm">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
              Safety & Experience
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Your safety and comfort come first. All treatments are performed by 
                trained, licensed professionals committed to continuing education and 
                industry best practices.
              </p>
              <p>
                We use professional-grade equipment and trusted products. Every service 
                begins with a consultation to confirm the treatment is right for your 
                skin type and health history.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-sage-50 rounded-full">
              <Shield className="h-5 w-5 text-sage-600 mr-2" />
              <span className="text-sage-700 font-medium">Licensed & Insured in Arizona</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Rejuvenate Experience */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              The Rejuvenate Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What to expect when you visit us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                step: "01",
                title: "Consultation",
                description: "We discuss your skin concerns, goals, and answer your questions.",
              },
              {
                icon: ClipboardList,
                step: "02",
                title: "Personalized Plan",
                description: "We recommend a treatment plan tailored to your unique needs.",
              },
              {
                icon: Heart,
                step: "03",
                title: "Treatment",
                description: "Relax while our team delivers your personalized service.",
              },
              {
                icon: Calendar,
                step: "04",
                title: "Aftercare & Follow-Up",
                description: "Clear aftercare guidance and recommended follow-up visits.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="text-sage-600 font-bold text-sm mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Care */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Trust & Care
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center justify-center">
              <span className="w-2 h-2 bg-sage-600 rounded-full mr-3"></span>
              Personalized treatment plans for every client
            </li>
            <li className="flex items-center justify-center">
              <span className="w-2 h-2 bg-sage-600 rounded-full mr-3"></span>
              Education-first consultations with no pressure
            </li>
            <li className="flex items-center justify-center">
              <span className="w-2 h-2 bg-sage-600 rounded-full mr-3"></span>
              Professional-grade technology and products
            </li>
            <li className="flex items-center justify-center">
              <span className="w-2 h-2 bg-sage-600 rounded-full mr-3"></span>
              Aftercare guidance and ongoing support
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Ready to Start Your Skin Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Reach out to schedule a consultation and discover what's possible for your skin.
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
