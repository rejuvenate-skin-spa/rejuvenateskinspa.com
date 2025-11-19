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
      window.location.href = "tel:480-225-9549"
    } else {
      router.push("/about-us/contact-us")
    }
  }

  return (
    <section className="relative min-h-[500px] py-12 bg-sage-50 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/rejuvenate-med-spa-queen-creek-az-homepage-hero.jpg"
          alt="Rejuvenate Skin Spa"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for accessibility - ensures WCAG contrast compliance */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-6 relative z-10">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-white">About</span>
              <span className="text-sage-300 block">Rejuvenate Skin Spa</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-lg">
              Dedicated to helping you achieve your best skin through advanced
              treatments, personalized care, and a commitment to excellence in
              aesthetic medicine.
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
          <div></div>
        </div>
      </div>
    </section>
  )
}
