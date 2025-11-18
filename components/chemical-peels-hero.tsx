"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ChemicalPeelsHero() {
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
  }

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section')
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/chemical-peel-treatment-services-rejuvenate-skin-spa-queen-creek-az.avif"
          alt="Chemical peel treatment services background"
          fill
          className="object-cover object-right"
          priority
        />
        {/* Dark overlay for accessibility - ensures WCAG contrast compliance */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-white leading-tight">
              Professional
              <span className="text-sage-200 block">Chemical Peels</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-lg">
              Reveal smoother, more radiant skin with our professional-grade chemical peels. Customized treatments for
              all skin types and concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg"
                onClick={handlePrimaryClick}
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent backdrop-blur-sm"
                onClick={scrollToFAQ}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Empty div for layout balance */}
          </div>
        </div>
      </div>
    </section>
  )
}
