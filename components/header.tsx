"use client"

import { DesktopUtilityBar } from "@/components/desktop-utility-bar"
import { Navigation } from "@/components/navigation"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <DesktopUtilityBar />
      <Navigation />
    </header>
  )
}

