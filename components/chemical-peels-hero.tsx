"use client"

import Image from "next/image"
import { SmartContactCTA } from "@/components/SmartContactCTA"

export default function ChemicalPeelsHero() {
  return (
    <section className="relative min-h-[500px] py-12 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/chemical-peel-treatment-services-rejuvenate-skin-spa-queen-creek-az.avif"
          alt="Chemical peel treatment services background"
          fill
          className="object-cover object-right"
          priority
        />
        {/* 
          Hero overlay: Left-to-right gradient keeps text readable while letting 
          the hero image shine through on the right for a brighter, premium feel.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-white leading-tight">
              Chemical Peels
              <span className="text-sage-200 block">in Queen Creek, AZ</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-lg">
              Professional-grade chemical peels customized for your skin type and concerns. BioRePeel, TCA, and glycolic acid options available at Rejuvenate Skin Spa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <SmartContactCTA />
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
