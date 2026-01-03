"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

export default function FiftyTCAPeelHero() {
  return (
    <section className="relative min-h-[500px] py-12 bg-sage-50 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/biorepeel-hero.avif"
          alt="BioRePeel 50 TCA Body Peel background"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-white leading-tight">
              BioRePeel 50
              <span className="text-white/90 block">TCA Body Peel</span>
            </h1>
            <p className="text-xl text-white/90 max-w-lg">
              Intensive body treatment with 50% TCA concentration. Perfect for addressing stubborn skin concerns on the
              body, including acne scarring, hyperpigmentation, and rough texture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg backdrop-blur-sm"
              >
                <a href={`tel:${siteConfig.phoneTel}`} aria-label="Call Rejuvenate Skin Spa" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  {siteConfig.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
          <div />
        </div>
      </div>
    </section>
  )
}
