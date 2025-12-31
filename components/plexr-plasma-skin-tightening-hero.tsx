"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";

interface PlexrPlasmaSkinTighteningHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function PlexrPlasmaSkinTighteningHero({
  title = "Plexr Plasma Skin Tightening",
  subtitle = "in Queen Creek, AZ",
  description = "Non-surgical skin tightening and resurfacing with Plexr plasma pen technology. Lift, firm, and rejuvenate your skin at Rejuvenate Skin Spa.",
  className = "",
}: PlexrPlasmaSkinTighteningHeroProps) {

  return (
    <section
      className={`relative min-h-[500px] py-12 overflow-hidden flex items-center ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/plasma-skin-tightening-treatment-services-rejuvenate-skin-spa-queen-creek-az.webp"
          alt="PLEXR plasma skin tightening treatment at Rejuvenate Skin Spa"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-2xl">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-white leading-tight">
              {title}
              <span className="text-sage-300 block">{subtitle}</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-lg">{description}</p>
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
        </div>
      </div>
    </section>
  );
}
