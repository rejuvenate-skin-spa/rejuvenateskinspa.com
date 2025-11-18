"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function RaspberryPeachEnzymePeelHero() {
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
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/raspberry-peach-enzyme-peel-benefits.png"
          alt="Raspberry-Peach Enzyme Peel Treatment"
          fill
          className="object-cover object-right"
          priority
        />
        {/* Dark overlay for accessibility - ensures WCAG contrast compliance */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Raspberry-Peach Enzyme Peel
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-100">
          Perfect balance of gentle exfoliation and deep hydration with
          antioxidant-rich raspberry and soothing peach extract
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handlePrimaryClick}
            className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 shadow-lg backdrop-blur-sm"
          >
            Get in Touch
          </Button>
          <Button
            onClick={handleLearnMoreClick}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2 bg-transparent backdrop-blur-sm"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
