"use client";

import Image from "next/image";
import { SmartContactCTA } from "@/components/SmartContactCTA";

export default function RaspberryPeachEnzymePeelHero() {
  return (
    <section className="relative min-h-[500px] py-12 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/raspberry-peach-enzyme-peel-benefits.avif"
          alt="Raspberry-Peach Enzyme Peel Treatment"
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="font-playfair text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Raspberry-Peach Enzyme Peel
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-100">
          Perfect balance of gentle exfoliation and deep hydration with
          antioxidant-rich raspberry and soothing peach extract
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <SmartContactCTA className="px-6 py-2" />
        </div>
      </div>
    </section>
  );
}
