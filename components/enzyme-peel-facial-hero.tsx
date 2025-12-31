"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export default function EnzymePeelFacialHero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/enzyme-peel-facial-treatment-services-rejuvenate-skin-spa-queen-creek-az.avif"
          alt="Enzyme Peel Facial Treatment at Rejuvenate Skin Spa"
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

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">Enzyme Peel Facials in Queen Creek, AZ</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Gentle fruit enzyme facials that reveal brighter, smoother skin. Eight natural enzyme options available at Rejuvenate Skin Spa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  )
}
