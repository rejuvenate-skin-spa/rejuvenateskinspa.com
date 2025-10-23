"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function CherryEnzymePeelHero() {
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

  const scrollToFAQ = () => {
    const element = document.getElementById("faq-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cherry-enzyme-peel-facial-treatment-services-rejuvenate-skin-spa-queen-creek-az.avif"
          alt="Cherry Enzyme Peel Facial Treatment at Rejuvenate Skin Spa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 leading-tight">
          Brightening Cherry Enzyme Peel
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-90 max-w-3xl mx-auto">
          Luminous fruit enzyme peel with restorative exfoliation and
          antioxidant protection
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 shadow-lg backdrop-blur-sm"
            onClick={handlePrimaryClick}
          >
            Get in Touch
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-sage-600 px-6 py-2 bg-transparent backdrop-blur-sm"
            onClick={scrollToFAQ}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
