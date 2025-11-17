"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export function AblativeSkinResurfacingHero() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isBusinessHours = () => {
    const now = new Date();
    const arizonaTime = new Date(
      now.toLocaleString("en-US", { timeZone: "America/Phoenix" })
    );
    const day = arizonaTime.getDay();
    const hour = arizonaTime.getHours();
    return day >= 1 && day <= 6 && hour >= 8 && hour < 18;
  };

  const handlePrimaryClick = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:480-225-9549";
    } else {
      router.push("/about-us/contact-us");
    }
  };

  const handleLearnMoreClick = () => {
    const faqSection = document.getElementById("faq-section");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[500px] bg-sage-50 flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/heroablative.png"
          alt="Rejuvenate Med Spa Queen Creek AZ"
          fill
          className="object-cover object-right"
          priority
        />
        {/* Dark overlay to darken the image */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-sage-50/80 via-sage-50/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gray-900">Ablative</span>
              <span className="text-sage-600 block">Skin Resurfacing</span>
              <span className="text-gray-900 block">The Plasma Pen Fibroblast Lift</span>
            </h1>
            <p className="text-xl text-sage-700 max-w-lg">
              The most advanced plasma pen technology for maximum skin
              transformation. Dramatic results for severe skin concerns with
              comprehensive rejuvenation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg backdrop-blur-sm"
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleLearnMoreClick}
                className="border-sage-600 text-sage-700 hover:bg-sage-50 backdrop-blur-sm bg-white/80"
              >
                Learn More
              </Button>
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
