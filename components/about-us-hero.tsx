"use client"

import Image from "next/image"
import { SmartContactCTA } from "@/components/SmartContactCTA"

export default function AboutUsHero() {
  return (
    <section className="relative min-h-[400px] lg:min-h-[500px] py-12 lg:py-12 bg-sage-50 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/rejuvenate-med-spa-queen-creek-az-homepage-hero.avif"
          alt="Rejuvenate Skin Spa"
          fill
          className="object-cover object-center"
          priority
        />
        {/* 
          Hero overlay: On mobile, use a stronger uniform overlay to ensure text readability.
          On desktop, use left-to-right gradient to let the image shine through on the right.
        */}
        <div className="absolute inset-0 bg-black/65 lg:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10 hidden lg:block"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-5 lg:space-y-6 relative z-10 py-4 lg:py-0">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-white">About</span>
              <span className="text-sage-400 block">Rejuvenate Skin Spa</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-100 max-w-lg">
              Advanced, non-surgical skincare focused on real results. Serving Queen Creek, Arizona.
            </p>
            <p className="text-base text-gray-200">
              Founder-led since 2025 by Bridgette Ball.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <SmartContactCTA className="px-6 py-3" />
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  )
}
