"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function EyebrowLaminationTreatmentHero() {
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

  const handleLearnMore = () => {
    document.getElementById("faq-section")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-[500px] bg-sage-50">
      <div className="absolute inset-0">
        <Image
          src="/images/rejuvenate-med-spa-queen-creek-az-homepage-hero.webp"
          alt="Rejuvenate Med Spa Queen Creek AZ"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight">
                <span className="text-gray-900">Eyebrow </span>
                <span className="text-sage-600">Lamination</span>
              </h1>
              <p className="text-xl text-sage-700 leading-relaxed max-w-lg">
                Transform your brows with our professional lamination treatment for fuller, perfectly shaped eyebrows
                that last 6-8 weeks
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handlePrimaryClick}
                  className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 shadow-lg backdrop-blur-sm"
                >
                  Get in Touch
                </Button>
                <Button
                  onClick={handleLearnMore}
                  variant="outline"
                  className="border-sage-600 text-sage-700 hover:bg-sage-50 backdrop-blur-sm bg-white/80 px-6 py-2"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
