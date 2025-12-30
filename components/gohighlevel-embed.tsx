"use client"

/**
 * GoHighLevel Booking Embed Component
 * 
 * This component renders a GoHighLevel booking widget when enabled.
 * It is disabled by default and renders nothing until activated.
 * 
 * HOW TO ENABLE:
 * 1. Set `enabled={true}` on the component
 * 2. Provide your GoHighLevel calendar embed URL via the `embedUrl` prop
 * 
 * Example:
 * <GoHighLevelEmbed 
 *   enabled={true} 
 *   embedUrl="https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID" 
 * />
 */

interface GoHighLevelEmbedProps {
  /**
   * Toggle to enable/disable the embed.
   * When false, the component renders nothing.
   * @default false
   */
  enabled?: boolean
  
  /**
   * The GoHighLevel calendar/booking embed URL.
   * Get this from GoHighLevel > Calendars > Embed > Copy iframe URL
   * Example: "https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID"
   */
  embedUrl?: string
  
  /**
   * Optional custom height for the iframe.
   * @default "600px"
   */
  height?: string
  
  /**
   * Optional custom title for accessibility.
   * @default "Schedule an Appointment"
   */
  title?: string
  
  /**
   * Optional CSS class name for the container.
   */
  className?: string
}

export function GoHighLevelEmbed({
  enabled = false,
  embedUrl,
  height = "600px",
  title = "Schedule an Appointment",
  className = "",
}: GoHighLevelEmbedProps) {
  // If not enabled or no URL provided, render nothing
  if (!enabled || !embedUrl) {
    // Invisible placeholder for development reference
    return null
  }

  return (
    <div 
      className={`gohighlevel-embed-container w-full ${className}`}
      data-testid="gohighlevel-embed"
    >
      <iframe
        src={embedUrl}
        title={title}
        width="100%"
        height={height}
        style={{
          border: "none",
          minHeight: "500px",
          maxWidth: "100%",
        }}
        loading="lazy"
        allow="payment"
      />
    </div>
  )
}

export default GoHighLevelEmbed

