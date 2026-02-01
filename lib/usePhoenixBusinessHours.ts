"use client"

import { useState, useEffect } from "react"

/**
 * Hook to determine if the business is currently open based on Phoenix, AZ time.
 *
 * Business hours (America/Phoenix timezone):
 * - Mon–Fri: 8:00 AM – 6:00 PM
 * - Sat: 9:00 AM – 5:00 PM
 * - Sun: Closed
 *
 * Returns { isOpen, mounted } where:
 * - isOpen: true if within business hours, false otherwise
 * - mounted: true once the hook has run on the client (for hydration safety)
 */
export function usePhoenixBusinessHours() {
  // Default to closed to avoid hydration mismatch
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const checkIfOpen = () => {
      const now = new Date()

      // Get Phoenix time components using Intl.DateTimeFormat
      const phoenixFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Phoenix",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      })

      const parts = phoenixFormatter.formatToParts(now)
      const weekday = parts.find((p) => p.type === "weekday")?.value // "Mon", "Tue", etc.
      const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10)
      const minute = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10)

      const minutesSinceMidnight = hour * 60 + minute

      // Business hours in minutes since midnight:
      // Mon–Fri: 08:00 (480) – 18:00 (1080)
      // Sat: 09:00 (540) – 17:00 (1020)
      // Sun: Closed

      let open = false

      if (weekday === "Sun") {
        open = false
      } else if (weekday === "Sat") {
        // 09:00 (540) inclusive to 17:00 (1020) exclusive
        open = minutesSinceMidnight >= 540 && minutesSinceMidnight < 1020
      } else {
        // Mon–Fri: 08:00 (480) inclusive to 18:00 (1080) exclusive
        open = minutesSinceMidnight >= 480 && minutesSinceMidnight < 1080
      }

      setIsOpen(open)
    }

    // Check immediately
    checkIfOpen()

    // Recheck every 60 seconds
    const interval = setInterval(checkIfOpen, 60000)

    return () => clearInterval(interval)
  }, [])

  return { isOpen, mounted }
}
