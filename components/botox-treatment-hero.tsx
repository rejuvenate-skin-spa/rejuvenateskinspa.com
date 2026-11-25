"use client"

import Image from "next/image"
import { BotoxReachOut } from "@/components/botox-reach-out"

export default function BotoxTreatmentHero() {
  return (
    <section className="relative min-h-[500px] py-12 bg-sage-50 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sage-700 font-medium">Botox in Queen Creek, AZ</p>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight text-gray-900">
              Botox
              <span className="text-sage-600 block">Wrinkle Relaxation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Cosmetic Botox at Rejuvenate Skin Spa, performed by Amy Ball, PA-C, to soften forehead lines, frown lines, and crow&apos;s feet.
            </p>
            <BotoxReachOut align="start" />
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/botox-injection-treatment.jpg"
              alt="Close-up of a cosmetic Botox injection on the forehead"
              width={1600}
              height={2400}
              priority
              className="w-full max-w-sm rounded-lg shadow-xl object-cover object-center aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
