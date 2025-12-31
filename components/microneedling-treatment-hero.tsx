"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";

interface MicroneedlingTreatmentHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function MicroneedlingTreatmentHero({
  title = "Microneedling Treatment",
  subtitle = "in Queen Creek, AZ",
  description = "Three advanced options: Traditional Microneedling, SQT Bio-Microneedling (needle-free), and Plexr Plasma Microneedling at Rejuvenate Skin Spa.",
}: MicroneedlingTreatmentHeroProps) {
  return (
    <section className="relative min-h-[500px] py-12 overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/microneedling-services-rejuventate-skin-spa-queen-creek-az.avif"
          alt="Advancements in Microneedling Technology at Rejuvenate Skin Spa"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-6">
            {title}
            <span className="text-sage-300 block">{subtitle}</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-lg">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-sage-600 hover:bg-sage-700 text-white"
            >
              <a href="tel:+14802049366" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                (480) 204-9366
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
