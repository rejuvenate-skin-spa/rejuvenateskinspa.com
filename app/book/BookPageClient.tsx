"use client";

import { useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function BookPageClient() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    const existing = widgetRef.current.querySelector("script");
    if (existing) return;

    const script = document.createElement("script");
    script.src =
      "https://square.site/appointments/buyer/widget/58ec32yhenlqtd/L33HT82ACXH9K.js";
    script.async = true;
    widgetRef.current.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-8 sm:py-10 lg:py-12 bg-gradient-to-r from-sage-100 to-sage-50 flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Book an Appointment
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Select a service and choose a time that works for you. We look
              forward to seeing you.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <div ref={widgetRef} className="square-booking-widget" />
        </div>
      </section>

      {/* Fallback CTA */}
      <section className="py-10 sm:py-12 bg-sage-50">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            Prefer to book by phone? Give us a call and we will get you
            scheduled.
          </p>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex items-center justify-center px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors duration-200 font-medium min-h-[48px]"
          >
            <Phone className="h-4 w-4 mr-2" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
