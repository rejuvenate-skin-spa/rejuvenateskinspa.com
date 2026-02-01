"use client";

import Image from "next/image";
import { SmartContactCTA } from "@/components/SmartContactCTA";

export function CherryEnzymePeelHero() {
  return (
    <section className="relative min-h-[500px] py-12 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cherry-enzyme-peel-facial-treatment-services-rejuvenate-skin-spa-queen-creek-az.avif"
          alt="Cherry Enzyme Peel Facial Treatment at Rejuvenate Skin Spa"
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
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-playfair font-bold mb-4 leading-tight">
          Brightening Cherry Enzyme Peel
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-90 max-w-3xl mx-auto">
          Luminous fruit enzyme peel with restorative exfoliation and
          antioxidant protection
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <SmartContactCTA className="px-6 py-2" />
        </div>
      </div>
    </section>
  );
}
