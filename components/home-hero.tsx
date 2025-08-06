"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HomeHeroProps {
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  className?: string
}

export function HomeHero({
  title = "Rejuvenate Your Skin,",
  subtitle = "Restore Your Confidence",
  description = "Experience advanced skincare treatments in our luxury spa environment. From plasma skin tightening to chemical peels, we help you achieve radiant, youthful skin.",
  primaryButtonText = "Book Consultation",
  secondaryButtonText = "View Services",
  onPrimaryClick,
  onSecondaryClick,
  className = "",
}: HomeHeroProps) {
  return (
    <section className={`relative h-[500px] overflow-hidden flex items-center ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/rejuvenate-med-spa-queen-creek-az-homepage-hero.webp"
          alt="Natural spa elements with cucumber slices and skincare products"
          fill
          className="object-cover object-center lg:object-right"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-sage-50/80 via-sage-50/40 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-2xl">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight">
              {title}
              <span className="text-sage-600 block">{subtitle}</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-lg">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg rounded-md"
                onClick={onPrimaryClick}
              >
                {primaryButtonText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sage-600 text-sage-700 hover:bg-sage-50 backdrop-blur-sm bg-white/80 rounded-md"
                onClick={onSecondaryClick}
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
