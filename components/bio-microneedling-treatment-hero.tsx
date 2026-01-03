"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function BioMicroneedlingTreatmentHero() {
  return (
    <section className="relative min-h-[500px] py-12 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bio-microneedling-services-rejuventate-skin-spa-queen-creek-az.avif"
          alt="SQT Bio Microneedling Treatment at Rejuvenate Skin Spa"
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
        <h1 className="text-4xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
          SQT Bio Microneedling
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          (Silicon Quartz Technology) Needle-free skin repair that uses marine
          spicules to renew collagen, smooth texture, tighten, brighten and
          revitalize your youthful glow. Fast result and little to no downtime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  );
}
