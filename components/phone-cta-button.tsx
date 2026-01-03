"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

interface PhoneCtaButtonProps {
  className?: string;
  ariaLabel?: string;
}

export default function PhoneCtaButton({
  className,
  ariaLabel = "Call Rejuvenate Skin Spa",
}: PhoneCtaButtonProps) {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "bg-sage-600 hover:bg-sage-700 text-white rounded-md shadow-lg backdrop-blur-sm",
        className
      )}
    >
      <a
        href={`tel:${siteConfig.phoneTel}`}
        aria-label={ariaLabel}
        className="flex items-center gap-2"
      >
        <Phone className="h-5 w-5" />
        {siteConfig.phoneDisplay}
      </a>
    </Button>
  );
}
