"use client"

import Image from "next/image"
import { SmartContactCTA } from "@/components/SmartContactCTA"

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
  return (
    <section
      className={`relative min-h-[420px] sm:min-h-[500px] py-8 sm:py-12 overflow-hidden flex items-center ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/semi-ablative-resurfacing-hero.avif"
          alt="Advanced skincare treatment at Rejuvenate Skin Spa"
          fill
          className="object-cover object-right"
          priority
        />
        {/* 
          Hero overlay: Left-to-right gradient keeps text readable while letting 
          the hero image shine through on the right for a brighter, premium feel.
          Left side (text area): darker for WCAG contrast compliance
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
              <SmartContactCTA className="px-6 py-3 w-full sm:w-auto min-h-[48px] text-base" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
