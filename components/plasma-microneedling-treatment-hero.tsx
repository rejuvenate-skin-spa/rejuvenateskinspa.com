"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function PlasmaMicroneedlingTreatmentHero() {
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

    // Monday (1) to Saturday (6), 8 AM to 6 PM
    return day >= 1 && day <= 6 && hour >= 8 && hour < 18
  }

  const handlePrimaryClick = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:+14802259549"
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
      <div className="absolute inset-0">
        <Image
          src="/images/plasma-microneedling-services-rejuventate-skin-spa-queen-creek-az.avif"
          alt="Plasma Pen Microneedling Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-sage-600">Plasma Pen Microneedling</span>
            </h1>
            <p className="text-xl text-sage-700 max-w-lg">
              Experience the fusion of plasma energy and precision microneedle-free needling, a breakthrough treatment that lifts, tightens, and transforms your skin from within.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white rounded-md shadow-lg backdrop-blur-sm"
                onClick={handlePrimaryClick}
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white rounded-md bg-transparent shadow-lg backdrop-blur-sm"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">{/* This div creates the right side space for the layout balance */}</div>
        </div>
      </div>
    </section>
  )
}
