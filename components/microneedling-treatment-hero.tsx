"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface MicroneedlingTreatmentHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export default function MicroneedlingTreatmentHero({
  title = "Advancements in ",
  subtitle = "Microneedling Technology",
  description = "3 Advanced Options: Traditional Microneedling, SQT Bio-Microneedling (Needle-Free), & Plexr Plasma Pen Microneedling",
  primaryButtonText = "Get in Touch",
  secondaryButtonText = "Learn More",
}: MicroneedlingTreatmentHeroProps) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isBusinessHours = () => {
    const now = new Date();
    const arizonaTime = new Date(
      now.toLocaleString("en-US", { timeZone: "America/Phoenix" })
    );
    const day = arizonaTime.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = arizonaTime.getHours();

    // Monday (1) through Saturday (6), 8am to 6pm
    return day >= 1 && day <= 6 && hour >= 8 && hour < 18;
  };

  const handlePrimaryButtonClick = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:480-225-9549";
    } else {
      router.push("/about-us/contact-us");
    }
  };

  const handleSecondaryButtonClick = () => {
    const faqSection = document.getElementById("faq-section");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[500px] overflow-hidden">
      <Image
        src="/images/microneedling-services-rejuventate-skin-spa-queen-creek-az.avif"
        alt="Advancements in Microneedling Technology at Rejuvenate Skin Spa"
        fill
        className="object-cover object-right"
        priority
      />
      {/* Dark overlay for accessibility - ensures WCAG contrast compliance */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-white leading-tight mb-6">
              {title}
              <span className="text-sage-300 block">{subtitle}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-lg">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white"
                onClick={handlePrimaryButtonClick}
              >
                {primaryButtonText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                onClick={handleSecondaryButtonClick}
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
