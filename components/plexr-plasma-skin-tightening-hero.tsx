"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PlexrPlasmaSkinTighteningHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

export function PlexrPlasmaSkinTighteningHero({
  title = "Advanced Plasma Pen",
  subtitle = "Skin Tightening",
  description = "Welcome to the future in advanced revolutionary skin rejuvenation, your journey to radiant skin starts here.",
  primaryButtonText = "Get in Touch",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  className = "",
}: PlexrPlasmaSkinTighteningHeroProps) {
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

  const handlePrimaryClick = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:480-225-9549";
    } else {
      router.push("/about-us/contact-us");
    }

    if (onPrimaryClick) {
      onPrimaryClick();
    }
  };

  const handleLearnMoreClick = () => {
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
    if (onSecondaryClick) {
      onSecondaryClick();
    }
  };

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
        {/* Dark overlay for accessibility - ensures WCAG contrast compliance */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
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
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg"
                onClick={handlePrimaryClick}
              >
                {primaryButtonText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent backdrop-blur-sm"
                onClick={handleLearnMoreClick}
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
