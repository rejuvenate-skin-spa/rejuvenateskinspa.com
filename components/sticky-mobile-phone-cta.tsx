"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { usePhoenixBusinessHours } from "@/lib/usePhoenixBusinessHours";

/**
 * Sticky mobile CTA bar that uses Phoenix, AZ business hours to determine behavior.
 *
 * Behavior:
 * - During business hours: shows phone icon + phone number, links to tel:
 * - Outside business hours: shows mail icon + "Contact Us", links to /contact
 */
export function StickyMobilePhoneCta() {
  const { isOpen } = usePhoenixBusinessHours();

  const href = isOpen ? `tel:${siteConfig.phoneTel}` : "/contact";
  const ariaLabel = isOpen
    ? `Call Rejuvenate Skin Spa at ${siteConfig.phoneDisplay}`
    : "Contact Rejuvenate Skin Spa";
  const label = isOpen ? siteConfig.phoneDisplay : "Contact Us";
  const Icon = isOpen ? Phone : Mail;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <Button
        asChild
        size="lg"
        className="w-full min-h-[48px] text-base bg-sage-600 hover:bg-sage-700 text-white rounded-md shadow-lg"
      >
        <a
          href={href}
          aria-label={ariaLabel}
          className="flex items-center justify-center gap-2"
        >
          <Icon className="h-5 w-5" />
          {label}
        </a>
      </Button>
    </div>
  );
}

