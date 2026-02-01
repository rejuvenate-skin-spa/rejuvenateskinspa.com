"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"
import { usePhoenixBusinessHours } from "@/lib/usePhoenixBusinessHours"

interface SmartContactCTAProps {
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  showIcon?: boolean
}

/**
 * Smart CTA button that uses Phoenix, AZ business hours to determine behavior.
 *
 * Behavior:
 * - During business hours: links to tel: for direct call
 * - Outside business hours: links to /contact page
 * - Label is always "Contact Us"
 */
export function SmartContactCTA({
  className,
  variant = "default",
  size = "lg",
  showIcon = true,
}: SmartContactCTAProps) {
  const { isOpen } = usePhoenixBusinessHours()

  // Determine href and icon based on open status
  const href = isOpen ? `tel:${siteConfig.phoneTel}` : "/contact"
  const ariaLabel = isOpen
    ? "Call Rejuvenate Skin Spa"
    : "Contact Rejuvenate Skin Spa"
  const Icon = isOpen ? Phone : Mail

  // Base button styling matching existing CTA buttons
  const buttonClasses = cn(
    variant === "default" &&
      "bg-sage-600 hover:bg-sage-700 text-white shadow-lg",
    variant === "outline" &&
      "border-sage-600 text-sage-600 hover:bg-sage-50",
    variant === "ghost" && "text-sage-600 hover:bg-sage-50",
    "rounded-md",
    className
  )

  return (
    <Button asChild size={size} className={buttonClasses} variant={variant}>
      <a
        href={href}
        aria-label={ariaLabel}
        className="flex items-center justify-center gap-2"
      >
        {showIcon && <Icon className="h-5 w-5" />}
        Contact Us
      </a>
    </Button>
  )
}
