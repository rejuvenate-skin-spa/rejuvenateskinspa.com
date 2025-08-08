'use client'

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function GlycolicAcidPeelHero() {
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

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
      window.location.href = 'tel:+14802259549'
    } else {
      router.push('/about-us/contact-us')
    }
  }

  const handleLearnMoreClick = () => {
    const faqSection = document.getElementById('faq-section')
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-[500px] flex items-center overflow-hidden">
      <Image
        src="/images/peel-treatment-services-rejuvenate-skin-spa-queen-creek-az.avif"
        alt="Glycolic acid peel treatment background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-white leading-tight">
              Glycolic Acid
              <span className="text-sage-200 block">Peel Treatment</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-lg">
              Reveal brighter, smoother skin with our professional glycolic acid chemical peel. Perfect for improving
              skin texture, reducing fine lines, and achieving a radiant glow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg backdrop-blur-sm"
                onClick={handlePrimaryClick}
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sage-600 bg-transparent shadow-lg backdrop-blur-sm"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* This div maintains the layout structure but the background image covers the whole section */}
          </div>
        </div>
      </div>
    </section>
  )
}
