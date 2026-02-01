'use client'

import Image from "next/image"
import { SmartContactCTA } from "@/components/SmartContactCTA"

export default function TcaPeelHero() {
  return (
    <section className="relative min-h-[500px] py-12 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/peel-treatment-services-rejuvenate-skin-spa-queen-creek-az.avif"
          alt="TCA Chemical Peel Treatment"
          fill
          className="object-cover object-right"
          priority
        />
        {/* 
          Hero overlay: Left-to-right gradient keeps text readable while letting 
          the hero image shine through on the right for a brighter, premium feel.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-white leading-tight">
              TCA Chemical
              <span className="text-sage-200 block">Peel Treatment</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-lg">
              Experience dramatic skin transformation with our professional TCA (Trichloroacetic Acid) chemical peel.
              Ideal for treating deep wrinkles, acne scars, and sun damage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <SmartContactCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
