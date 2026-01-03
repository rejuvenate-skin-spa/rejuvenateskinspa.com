"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhoneCtaButtonProps {
  className?: string;
}

export default function PhoneCtaButton({ className }: PhoneCtaButtonProps) {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "bg-sage-600 hover:bg-sage-700 text-white rounded-md shadow-lg backdrop-blur-sm",
        className
      )}
    >
      <a href="tel:+14802049366" className="flex items-center gap-2">
        <Phone className="h-5 w-5" />
        (480) 204-9366
      </a>
    </Button>
  );
}

