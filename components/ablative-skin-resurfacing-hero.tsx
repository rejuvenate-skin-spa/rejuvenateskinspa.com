"use client";

import Image from "next/image";
import { SmartContactCTA } from "@/components/SmartContactCTA";

export function AblativeSkinResurfacingHero() {
  return (
    <section className="relative min-h-[500px] py-12 bg-sage-50 flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/heroablative.avif"
          alt="Rejuvenate Med Spa Queen Creek AZ"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-white">Ablative</span>
              <span className="text-sage-300 block">Skin Resurfacing</span>
              <span className="text-white block">The Plasma Pen Fibroblast Lift</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-lg">
              The most advanced plasma pen technology for maximum skin
              transformation. Dramatic results for severe skin concerns with
              comprehensive rejuvenation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <SmartContactCTA />
            </div>
          </div>
          <div className="hidden lg:block">
            {/* Space for image alignment */}
          </div>
        </div>
      </div>
    </section>
  );
}
