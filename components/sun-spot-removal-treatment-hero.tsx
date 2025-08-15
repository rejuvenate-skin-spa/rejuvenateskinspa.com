"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function SunSpotRemovalTreatmentHero() {
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

  const handleLearnMoreClick = () => {
    const faqSection = document.getElementById("faq-section")
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-[500px] bg-sage-50 flex items-center">
      <Image
        src="/images/rejuvenate-med-spa-queen-creek-az-homepage-hero.webp"
        alt="Sun spot removal treatment background"
        fill
        className="object-cover object-right"
        priority
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold leading-tight">
              <span className="text-gray-900">Sun Spot Removal</span>
              <span className="text-sage-600 block">Treatment</span>
            </h1>
            <p className="text-xl text-sage-700 max-w-lg">
              Advanced plasma technology for precise removal of sun spots, age spots, and pigmented lesions. Restore
              even skin tone with permanent results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white rounded-lg shadow-lg backdrop-blur-sm"
                onClick={handlePrimaryClick}
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sage-600 text-sage-700 hover:bg-sage-50 rounded-lg backdrop-blur-sm bg-white/80"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  )
}
