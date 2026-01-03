"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function BioRePeelFacialChemicalPeelHero() {
  return (
    <section className="relative min-h-[500px] py-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/biorepeel-hero.avif"
          alt="BioRePeel facial chemical peel treatment"
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
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-6">
              BioRePeel Treatment
              <span className="block text-sage-200">in Queen Creek, AZ</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Advanced TCA peel technology that rejuvenates skin from within
              with minimal peeling and maximum results. Safe for all skin types
              year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white"
              >
                <a href={`tel:${siteConfig.phoneTel}`} aria-label="Call Rejuvenate Skin Spa" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  {siteConfig.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
