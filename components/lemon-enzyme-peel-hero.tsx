"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function LemonEnzymePeelHero() {
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

  const handlePrimaryClick = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:480-225-9549"
    } else {
      router.push("/about-us/contact-us")
    }
  }

  const handleLearnMoreClick = () => {
    const faqSection = document.getElementById("faq-section")
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lemon-zest-enzyme-peel-facial-treatment-services-rejuvenate-skin-spa-queen-creek-az.avif"
          alt="Lemon Zest Enzyme Peel Treatment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-green-900/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-tight">Lemon Zest Enzyme Peel</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Energize and refresh your skin with our invigorating Lemon Zest Enzyme Peel for a bright, revitalized
          complexion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handlePrimaryClick}
            className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 shadow-lg backdrop-blur-sm"
          >
            Get in Touch
          </Button>
          <Button
            onClick={handleLearnMoreClick}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2 bg-transparent backdrop-blur-sm"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
