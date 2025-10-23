"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface HomeHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function HomeHero({
  title = "Rejuvenate Your Skin,",
  subtitle = "Renew Your Confidence",
  description = "Step into a world where science meets sophistication. At our luxury skin spa, we specialize in advanced, results-driven treatments designed to redefine beauty and elevate confidence.",
  className = "",
}: HomeHeroProps) {
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

  return (
    <section
      className={`relative h-[500px] overflow-hidden flex items-center ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/rejuvenate-med-spa-queen-creek-az-homepage-hero.webp"
          alt="Natural spa elements with cucumber slices and skincare products"
          fill
          className="object-cover object-center lg:object-right"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-sage-50/80 via-sage-50/40 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-2xl">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight">
              {title}
              <span className="text-sage-600 block">{subtitle}</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-lg">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-sage-600 hover:bg-sage-700 text-white shadow-lg rounded-md px-6 py-2"
                onClick={handlePrimaryClick}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
