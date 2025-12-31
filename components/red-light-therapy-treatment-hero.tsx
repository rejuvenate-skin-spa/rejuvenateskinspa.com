"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export default function RedLightTherapyTreatmentHero() {
  return (
    <section className="relative min-h-[500px] py-12 bg-sage-50 overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/red-light-therapy-treatment-services-rejuventate-skin-spa-queen-creek-az.avif"
          alt="Red Light Therapy Treatment Services"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-playfair">
              <span className="text-white">Red Light</span> <span className="text-sage-300">Therapy</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed">
              Harness the healing power of red and near-infrared light for natural skin rejuvenation, pain relief, and
              cellular regeneration
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg"
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
    </section>
  )
}
