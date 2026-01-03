"use client";

import PhoneCtaButton from "@/components/phone-cta-button";

export function StickyMobilePhoneCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3">
      <PhoneCtaButton
        className="w-full min-h-[48px] text-base"
        ariaLabel="Call Rejuvenate Skin Spa at (480) 204-9366"
      />
    </div>
  );
}

