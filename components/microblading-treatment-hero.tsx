"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

export default function MicrobladingTreatmentHero() {
  return (
    <section className="relative min-h-[500px] py-12 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/microblading-procedure-rejuvenate-skin-spa-queen-creek-az.jpg"
          alt="Microblading services background"
          fill
          className="object-cover object-center"
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
              Professional
              <span className="text-sage-200 block">Microblading</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-lg">
              Semi-permanent eyebrow enhancement using precise hair-stroke
              technique. Wake up every day with perfectly shaped,
              natural-looking brows.
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
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
