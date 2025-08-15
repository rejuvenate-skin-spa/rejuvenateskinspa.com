"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function EnzymePeelFacialHero() {
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

  const scrollToFAQ = () => {
    const faqSection = document.getElementById("faq-section")
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/enzyme-peel-facial-treatment-services-rejuvenate-skin-spa-queen-creek-az.avif"
          alt="Enzyme Peel Facial Treatment at Rejuvenate Skin Spa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">Natural Enzyme Peel Facials</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience the gentle power of natural fruit enzymes to reveal brighter, smoother, and more radiant skin with
          our signature enzyme peel treatments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg backdrop-blur-sm"
            onClick={handlePrimaryClick}
          >
            Get in Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm bg-white/10"
            onClick={scrollToFAQ}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
