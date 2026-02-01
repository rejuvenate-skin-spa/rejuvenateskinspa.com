"use client"

import Image from "next/image"
import { SmartContactCTA } from "@/components/SmartContactCTA"

export default function SunSpotRemovalTreatmentHero() {
  return (
    <section className="relative min-h-[500px] py-12 bg-sage-50 flex items-center overflow-hidden">
      <div className="absolute inset-0 h-[140%]">
        <Image
          src="/images/shutterstock-2171144943-sun-spot-edited.jpg"
          alt="Sun spot removal treatment background"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-white">Sun Spot Removal</span>
              <span className="text-sage-300 block">Treatment</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-lg">
              Advanced plasma technology for precise removal of sun spots, age
              spots, and pigmented lesions. Restore even skin tone with
              permanent results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <SmartContactCTA className="rounded-lg" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  )
}
