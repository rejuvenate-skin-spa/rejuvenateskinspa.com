import { Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function DesktopUtilityBar() {
  return (
    <div className="hidden md:block bg-sage-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-9">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            aria-label="Call Rejuvenate Skin Spa"
            className="flex items-center gap-2 text-white hover:text-sage-100 transition-colors duration-200 font-medium text-sm"
          >
            <Phone className="h-4 w-4" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

