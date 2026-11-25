import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHONE_DISPLAY = "480-459-9613"
const PHONE_TEL = "+14804599613"

interface BotoxReachOutProps {
  /** Light text for the sage closing band. */
  onDark?: boolean
  /** Hero copy is left-aligned; pricing and the closing band are centered. */
  align?: "start" | "center"
}

export function BotoxReachOut({ onDark = false, align = "center" }: BotoxReachOutProps) {
  const textClass = onDark ? "text-white/90" : "text-gray-600"
  const alignClass = align === "start" ? "items-stretch sm:items-start text-left" : "items-center text-center"
  const rowClass = align === "start" ? "sm:justify-start" : "sm:justify-center"

  const bookClass = onDark
    ? "h-14 px-10 text-lg font-semibold bg-white text-sage-700 hover:bg-gray-100 shadow-lg"
    : "h-14 px-10 text-lg font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-lg"

  const secondaryClass = onDark
    ? "h-10 px-4 text-sm font-normal border-white/40 text-white bg-transparent hover:bg-white/10"
    : "h-10 px-4 text-sm font-normal border-gray-300 text-gray-600 bg-white hover:bg-gray-50"

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      <p className={`text-base leading-relaxed ${textClass}`}>
        Questions are welcome by text or phone at {PHONE_DISPLAY}. A text is the easiest way to reach us, and a phone call is just as welcome. When you are ready, booking is done right here on the site.
      </p>
      <Button asChild className={`w-full sm:w-auto ${bookClass}`}>
        <Link href="/book">Book now</Link>
      </Button>
      <div className={`flex flex-col sm:flex-row gap-2 w-full sm:w-auto ${rowClass}`}>
        <Button asChild variant="outline" className={`w-full sm:w-auto ${secondaryClass}`}>
          <a href={`sms:${PHONE_TEL}`} className="flex items-center justify-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Text {PHONE_DISPLAY}
          </a>
        </Button>
        <Button asChild variant="outline" className={`w-full sm:w-auto ${secondaryClass}`}>
          <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            Call {PHONE_DISPLAY}
          </a>
        </Button>
      </div>
    </div>
  )
}
