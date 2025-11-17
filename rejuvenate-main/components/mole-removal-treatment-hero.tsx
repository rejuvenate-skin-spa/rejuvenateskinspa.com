"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function MoleRemovalTreatmentHero() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

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
    const day = arizonaTime.getDay();
    const hour = arizonaTime.getHours();

    // Monday-Saturday (1-6), 8am-6pm
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
          src="/images/plexr-mole-removal-treatment-rejuvenate-skin-spa-queen-creek-az.jpg"
          alt="Plexr Plasma Mole Removal Treatment"
          fill
          className="object-cover object-right"
          priority
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gray-900">Plexr Plasma</span>
              <span className="text-sage-600 block">Mole Removal</span>
            </h1>
            <p className="text-xl text-sage-700 max-w-lg">
              Clear, confident skin starts here. Our plasma mole removal
              treatment gently targets and removes moles without surgery or
              scarring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white rounded-lg shadow-lg backdrop-blur-sm"
                onClick={handlePrimaryClick}
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sage-600 text-sage-700 hover:bg-sage-50 rounded-lg backdrop-blur-sm bg-white/80"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            {/* Spacer for image alignment */}
          </div>
        </div>
      </div>
    </section>
  );
}
