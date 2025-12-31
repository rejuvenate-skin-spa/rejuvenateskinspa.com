'use client'

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export function GlycolicAcidPeelHero() {
  return (
    <section className="relative min-h-[500px] py-12 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/glycolic-acid-peel-hero.jpg"
          alt="Glycolic acid peel treatment background"
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
              Glycolic Acid
              <span className="text-sage-200 block">Peel Treatment</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-lg">
              Reveal brighter, smoother skin with our professional glycolic acid chemical peel. Perfect for improving
              skin texture, reducing fine lines, and achieving a radiant glow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg backdrop-blur-sm"
              >
                <a href="tel:+14802049366" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  (480) 204-9366
                </a>
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
