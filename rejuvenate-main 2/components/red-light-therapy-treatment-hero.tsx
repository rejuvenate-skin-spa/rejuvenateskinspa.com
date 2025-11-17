"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function RedLightTherapyTreatmentHero() {
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
    <section className="relative h-[500px] bg-sage-50 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/red-light-therapy-treatment-services-rejuventate-skin-spa-queen-creek-az.avif"
          alt="Red Light Therapy Treatment Services"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-playfair">
              <span className="text-sage-600">Red Light</span> <span className="text-sage-800">Therapy</span>
            </h1>
            <p className="text-xl text-sage-700 mb-8 max-w-2xl leading-relaxed">
              Harness the healing power of red and near-infrared light for natural skin rejuvenation, pain relief, and
              cellular regeneration
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg"
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleLearnMoreClick}
                className="border-sage-600 text-sage-700 hover:bg-sage-50 backdrop-blur-sm bg-white/80"
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
