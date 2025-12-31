"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export function EyebrowLaminationTreatmentHero() {
  return (
    <section className="relative min-h-[500px] py-12 bg-sage-50 overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/eyebrow-lamination-hero.jpg"
          alt="Rejuvenate Med Spa Queen Creek AZ"
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

      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
                <span className="text-white">Eyebrow </span>
                <span className="text-sage-300">Lamination</span>
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed max-w-lg">
                Transform your brows with our professional lamination treatment
                for fuller, perfectly shaped eyebrows that last 6-8 weeks
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 shadow-lg backdrop-blur-sm"
                >
                  <a href="tel:+14802049366" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    (480) 204-9366
                  </a>
                </Button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
