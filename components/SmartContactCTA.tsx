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
  /**
   * If true, shows phone number during open hours instead of "Contact Us".
   * Default: true (shows phone number when open)
   */
  showPhoneWhenOpen?: boolean
  /** Label when open. If not set: phone number when showPhoneWhenOpen, else "Contact Us". */
  openLabel?: string
  /** Label when closed. Default: "Contact Us". */
  closedLabel?: string
}

/**
 * Smart CTA button that uses Phoenix, AZ business hours to determine behavior.
 *
 * Behavior:
 * - During business hours: links to tel: for direct call
 * - Outside business hours: links to /contact page
 * - Label depends on showPhoneWhenOpen prop
 */
export function SmartContactCTA({
  className,
  variant = "default",
  size = "lg",
  showIcon = true,
  showPhoneWhenOpen = true,
  openLabel,
  closedLabel = "Contact Us",
}: SmartContactCTAProps) {
  const { isOpen } = usePhoenixBusinessHours()

  // Determine href and icon based on open status
  const href = isOpen ? `tel:${siteConfig.phoneTel}` : "/contact"
  const ariaLabel = isOpen
    ? `Call Rejuvenate Skin Spa at ${siteConfig.phoneDisplay}`
    : "Contact Rejuvenate Skin Spa"
  const Icon = isOpen ? Phone : Mail

  // Label: openLabel if provided; else phone when showPhoneWhenOpen; else "Contact Us". When closed: closedLabel.
  const label = isOpen
    ? (openLabel ?? (showPhoneWhenOpen ? siteConfig.phoneDisplay : "Contact Us"))
    : closedLabel

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
        {label}
      </a>
    </Button>
  )
}
