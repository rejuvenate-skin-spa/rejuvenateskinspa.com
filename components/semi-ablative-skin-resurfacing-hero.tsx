"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export default function SemiAblativeSkinResurfacingHero() {
  return (
    <section className="relative min-h-[550px] py-12 flex items-center overflow-hidden bg-sage-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/semi-ablative-resurfacing-hero.png"
          alt="Semi-ablative skin resurfacing treatment background"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-white">Semi-Ablative Plexr Plasma Pen</span>
              <span className="text-sage-300 block">The CAT Resurface</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-lg">
              Positioned between the gentle Plexr Plasma Pen Shower
              (nano-ablative) and the intensive Plexr Plasma Pen Fibroblast Lift
              (fully ablative), Plexr CAT Resurfacing (semi-ablavtive) delivers
              the perfect balance of precision, renewal and dramatic results
              with moderate downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white rounded-lg shadow-lg backdrop-blur-sm"
              >
                <a href="tel:+14802049366" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  (480) 204-9366
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
