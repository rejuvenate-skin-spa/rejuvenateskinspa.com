"use client"

import Image from "next/image"
import PhoneCtaButton from "@/components/phone-cta-button"

export default function PlasmaMicroneedlingTreatmentHero() {
  return (
    <section className="relative min-h-[500px] py-12 bg-sage-50 flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/plasma-pen-microneedling-background.jpg"
          alt="Plasma Pen Microneedling Background"
          fill
          className="object-cover object-left"
          priority
        />
        {/* 
          Hero overlay: Left-to-right gradient keeps text readable while letting 
          the hero image shine through on the right for a brighter, premium feel.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-white">Plasma Pen Microneedling</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-lg">
              Experience the fusion of plasma energy and precision
              microneedle-free needling, a breakthrough treatment that lifts,
              tightens, and transforms your skin from within.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PhoneCtaButton />
            </div>
          </div>
          <div className="relative">
            {/* This div creates the right side space for the layout balance */}
          </div>
        </div>
      </div>
    </section>
  )
}
