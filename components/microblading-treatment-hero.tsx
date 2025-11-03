'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function MicrobladingTreatmentHero() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const isBusinessHours = () => {
    const now = new Date()
    const arizonaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Phoenix"}))
    const day = arizonaTime.getDay()
    const hour = arizonaTime.getHours()
    
    // Monday (1) to Saturday (6), 8 AM to 6 PM
    return day >= 1 && day <= 6 && hour >= 8 && hour < 18
  }

  const handlePrimaryClick = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = 'tel:480-225-9549'
    } else {
      router.push('/about-us/contact-us')
    }
  }

  const handleLearnMore = () => {
    const faqSection = document.getElementById('faq-section')
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-[500px] flex items-center overflow-hidden">
      <Image
        src="/images/microblading-services-rejuventate-skin-spa-queen-creek-az.avif"
        alt="Microblading services background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-white leading-tight">
              Professional
              <span className="text-sage-200 block">Microblading</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-lg">
              Semi-permanent eyebrow enhancement using precise hair-stroke technique. Wake up every day with perfectly
              shaped, natural-looking brows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handlePrimaryClick}
                className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg backdrop-blur-sm"
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleLearnMore}
                className="border-white text-white hover:bg-white hover:text-sage-600 bg-transparent shadow-lg backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
