"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SemiAblativeSkinResurfacingHero() {
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

  const handleLearnMoreClick = () => {
    const faqSection = document.getElementById("faq-section");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[500px] flex items-center overflow-hidden bg-sage-50">
      {/* Background Image */}
      <Image
        src="/images/semi-ablative-resurfacing-hero.png"
        alt="Semi-ablative skin resurfacing treatment background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gray-900">Semi-Ablative Plexr Plasma Pen</span>
              <span className="text-gray-900 block">The CAT Resurface</span>
            </h1>
            <p className="text-xl text-gray-900 max-w-lg">
              Positioned between the gentle Plexr Plasma Pen Shower (nano-ablative)
              and the intensive Plexr Plasma Pen Fibroblast Lift (fully ablative),
              Plexr CAT Resurfacing  (semi-ablavtive) delivers the perfect balance of precision,
              renewal and dramatic results with moderate downtime.
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
                className="border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white rounded-lg bg-transparent backdrop-blur-sm"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
