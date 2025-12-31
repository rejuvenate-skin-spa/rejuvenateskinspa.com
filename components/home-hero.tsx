"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

interface HomeHeroProps {
  title?: string
  subtitle?: string
  description?: string
  className?: string
}

export function HomeHero({
  title = "Advanced Skincare",
  subtitle = "in Queen Creek, AZ",
  description = "Rejuvenate Skin Spa offers non-surgical treatments designed to deliver real results. Plasma skin tightening, microneedling, chemical peels, and more in a boutique Queen Creek studio.",
  className = "",
}: HomeHeroProps) {
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

    // Monday-Saturday (1-6), 8am-6pm
    return day >= 1 && day <= 6 && hour >= 8 && hour < 18
  }

  const handlePrimaryClick = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:4802049366"
    } else {
      router.push("/contact")
    }
  }

  return (
    <section
      className={`relative min-h-[420px] sm:min-h-[500px] py-8 sm:py-12 overflow-hidden flex items-center ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/spa-services-rejuventate-skin-spa-queen-creek-az.avif"
          alt="Natural spa elements with cucumber slices and skincare products"
          fill
          className="object-cover object-right"
          priority
        />
        {/* 
          Hero overlay: Left-to-right gradient keeps text readable while letting 
          the hero image shine through on the right for a brighter, premium feel.
          Left side (text area): darker for stronger text contrast
          Right side (image area): lighter to showcase imagery
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-2xl">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold text-white leading-tight">
              {title}
              <span className="text-sage-400 block">{subtitle}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 max-w-lg">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg rounded-md px-6 py-3 w-full sm:w-auto min-h-[48px] text-base"
                onClick={handlePrimaryClick}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
