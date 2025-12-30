"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function AboutUsHero() {
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
    <section className="relative min-h-[400px] lg:min-h-[500px] py-12 lg:py-12 bg-sage-50 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/rejuvenate-med-spa-queen-creek-az-homepage-hero.jpg"
          alt="Rejuvenate Skin Spa"
          fill
          className="object-cover object-center"
          priority
        />
        {/* 
          Hero overlay: On mobile, use a stronger uniform overlay to ensure text readability.
          On desktop, use left-to-right gradient to let the image shine through on the right.
        */}
        <div className="absolute inset-0 bg-black/50 lg:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/5 hidden lg:block"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-5 lg:space-y-6 relative z-10 py-4 lg:py-0">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-white">About</span>
              <span className="text-sage-400 block">Rejuvenate Skin Spa</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-100 max-w-lg">
              Founder-led, non-surgical skincare in Queen Creek, Arizona.
            </p>
            <p className="text-base text-gray-200">
              Founded in 2025 by Bridgette Ball.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handlePrimaryClick}
                className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 shadow-lg backdrop-blur-sm"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  )
}
