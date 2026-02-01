"use client";

import { SmartContactCTA } from "@/components/SmartContactCTA";
import { cn } from "@/lib/utils";

interface PhoneCtaButtonProps {
  className?: string;
  ariaLabel?: string;
}

/**
 * Phone CTA button that shows phone number during business hours,
 * "Contact Us" outside hours. Wrapper around SmartContactCTA.
 */
export default function PhoneCtaButton({
  className,
}: PhoneCtaButtonProps) {
  return (
    <SmartContactCTA
      className={cn("backdrop-blur-sm", className)}
      showPhoneWhenOpen={true}
    />
  );
}
