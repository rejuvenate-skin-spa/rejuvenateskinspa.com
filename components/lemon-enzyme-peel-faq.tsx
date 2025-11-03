"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSection {
  section: string
  items: FAQItem[]
}

const faqData: FAQSection[] = [
  {
    section: "Understanding the Treatment",
    items: [
      {
        question: "What is a Lemon Zest Enzyme Peel?",
        answer:
          "The Lemon Zest Enzyme Peel is a brightening facial treatment that uses natural lemon enzymes and vitamin C to gently exfoliate, fade pigmentation, and promote radiant, even-toned skin.",
      },
      {
        question: "How does it work?",
        answer:
          "This enzyme peel works by dissolving dead skin cells with natural acids from lemon zest while infusing the skin with antioxidants to improve clarity and texture.",
      },
      {
        question: "What are the benefits of a Lemon Zest Enzyme Peel?",
        answer:
          "- Brightens dull skin\n- Fades dark spots and pigmentation\n- Boosts collagen production\n- Smooths rough texture\n- Promotes a healthy glow",
      },
      {
        question: "Is it suitable for hyperpigmentation?",
        answer:
          "Yes. Lemon Zest Enzyme Peels are ideal for treating hyperpigmentation, sun damage, and melasma when used as part of a consistent skincare plan.",
      },
      {
        question: "Is it a chemical peel?",
        answer:
          "No. It's a fruit-based enzyme treatment, which is gentler and suitable for regular use without the peeling or downtime associated with stronger chemical peels.",
      },
    ],
  },
  {
    section: "Treatment Experience",
    items: [
      {
        question: "What does the treatment feel like?",
        answer:
          "You may feel a mild tingling or warmth during the peel as the enzymes activate, but the sensation is typically brief and well-tolerated.",
      },
      {
        question: "How long does the treatment take?",
        answer:
          "Sessions last 30–45 minutes, including cleansing, application of the peel, a rest period, and post-treatment care.",
      },
      {
        question: "Is there downtime with this peel?",
        answer:
          "There's little to no downtime. Some clients may experience temporary redness or mild flaking for a day or two.",
      },
      {
        question: "How often should I get this treatment?",
        answer:
          "We recommend monthly treatments for maintenance or a series of treatments every 2–3 weeks to target pigmentation or uneven skin tone.",
      },
      {
        question: "Can I wear makeup after the peel?",
        answer:
          "Yes, makeup can be applied the next day. However, we suggest allowing your skin to breathe for the remainder of the treatment day.",
      },
    ],
  },
  {
    section: "Aftercare & Results",
    items: [
      {
        question: "What aftercare is needed?",
        answer:
          "Avoid sun exposure and use a daily SPF 30+ sunscreen. Use gentle cleansers and skip exfoliants and active ingredients (like retinoids) for 2–3 days.",
      },
      {
        question: "When will I see results?",
        answer:
          "Most clients notice immediate brightness and improved texture, with continued improvements in pigmentation over several treatments.",
      },
      {
        question: "Can this peel be combined with other services?",
        answer:
          "Yes. It pairs well with dermaplaning, LED red light therapy, and hydrating masks for enhanced glow and effectiveness.",
      },
      {
        question: "Is it safe for all skin tones?",
        answer:
          "Yes. It is suitable for all Fitzpatrick skin types, though caution and customization may be used for deeper skin tones with pigmentation concerns.",
      },
      {
        question: "How much does a Lemon Zest Enzyme Peel cost at Rejuvenate Skin Spa?",
        answer:
          "This treatment typically starts at $95. Package pricing may be available for ongoing skin brightening goals.",
      },
    ],
  },
]

export default function LemonEnzymePeelFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Lemon Zest Enzyme Peel Service FAQ's
          </h2>

          <div className="space-y-8">
            {faqData.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-semibold text-sage-600 mb-4">{section.section}</h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => {
                    const itemId = `${sectionIndex}-${itemIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <div key={itemIndex} className="border border-gray-200 rounded-lg">
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-inset"
                          onClick={() => toggleItem(itemId)}
                          aria-expanded={isOpen}
                        >
                          <span className="font-medium text-gray-900">{item.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-sage-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-sage-600 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-700 whitespace-pre-line">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
