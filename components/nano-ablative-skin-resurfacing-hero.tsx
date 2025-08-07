'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface NanoAblativeSkinResurfacingHeroProps {
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  className?: string
}

export default function NanoAblativeSkinResurfacingHero({
  title = "Nano-Ablative",
  subtitle = "Skin Resurfacing",
  description = "Ultra-gentle plasma technology that improves skin texture and tone with microscopic precision. Perfect for those seeking skin rejuvenation with zero downtime.",
  primaryButtonText = "Get in Touch",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  className = "",
}: NanoAblativeSkinResurfacingHeroProps) {
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
    const day = arizonaTime.getDay() // 0 = Sunday, 1 = Monday, etc.
    const hour = arizonaTime.getHours()

    // Monday (1) through Saturday (6), 8am to 6pm
    return day >= 1 && day <= 6 && hour >= 8 && hour < 18
  }

  const handlePrimaryClick = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:480-225-9549"
    } else {
      router.push("/about-us/contact-us")
    }

    if (onPrimaryClick) {
      onPrimaryClick()
    }
  }

  const handleLearnMoreClick = () => {
    const faqSection = document.getElementById("faq-section")
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" })
    }
    if (onSecondaryClick) {
      onSecondaryClick()
    }
  }

  return (
    <section className={`relative h-[500px] overflow-hidden flex items-center ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/non-ablative-skin-resurfacing-treatment-services-rejuvenate-skin-spa-queen-creek-az.avif"
          alt="Nano-ablative skin resurfacing treatment at Rejuvenate Skin Spa"
          fill
          className="object-cover object-center lg:object-right"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-sage-50/80 via-sage-50/40 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-2xl">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight">
              {title}
              <span className="text-sage-600 block">{subtitle}</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-lg">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg"
                onClick={handlePrimaryClick}
              >
                {primaryButtonText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sage-600 text-sage-700 hover:bg-sage-50 backdrop-blur-sm bg-white/80"
                onClick={handleLearnMoreClick}
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
