"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export function MoleRemovalTreatmentHero() {
  return (
    <section className="relative min-h-[500px] py-12 bg-sage-50 flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/plexr-mole-removal-treatment-rejuvenate-skin-spa-queen-creek-az.jpg"
          alt="Plexr Plasma Mole Removal Treatment"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-white">Plexr Plasma</span>
              <span className="text-sage-300 block">Mole Removal</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-lg">
              Clear, confident skin starts here. Our plasma mole removal
              treatment gently targets and removes moles without surgery or
              scarring.
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
          <div className="hidden lg:block">
            {/* Spacer for image alignment */}
          </div>
        </div>
      </div>
    </section>
  )
}
