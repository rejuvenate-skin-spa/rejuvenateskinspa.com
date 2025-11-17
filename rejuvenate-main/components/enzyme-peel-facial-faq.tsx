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
        question: "What is an enzyme peel?",
        answer:
          "An enzyme peel is a gentle, natural exfoliating treatment that utilizes fruit-derived enzymes to gently dissolve dead skin cells and promote radiant, healthy-looking skin. Unlike acid-based chemical peels, enzyme peels are mild and suitable for even sensitive skin types.",
      },
      {
        question: "What skin concerns do enzyme peels address?",
        answer:
          "- Dull, uneven complexion\n- Dry or flaky skin\n- Mild acne and congestion\n- Enlarged pores\n- Sensitive or reactive skin",
      },
      {
        question: "How does an enzyme peel work?",
        answer:
          "Enzymes—typically derived from fruits like papaya, pineapple, or pumpkin—break down the keratin protein in dead skin cells, loosening and removing them without harming the healthy tissue underneath.",
      },
      {
        question: "Are enzyme peels considered chemical peels?",
        answer:
          "While they exfoliate the skin like a chemical peel, enzyme peels are more natural and work only on the outermost layers of skin. They are often referred to as 'organic' or 'natural' peels.",
      },
      {
        question: "What enzymes are used in Rejuvenate's enzyme peels?",
        answer:
          "We use professional-grade enzyme blends featuring papain (derived from papaya), bromelain (derived from pineapple), and pumpkin enzymes to resurface and brighten the skin gently.",
      },
    ],
  },
  {
    section: "Safety & Candidacy",
    items: [
      {
        question: "Who is a good candidate for an enzyme peel?",
        answer:
          "Enzyme peels are ideal for all skin types, including those with sensitive, rosacea-prone, or compromised skin. They're also great for first-time exfoliation treatments or clients wanting a no-downtime glow.",
      },
      {
        question: "Are enzyme peels safe for pregnant or breastfeeding clients?",
        answer:
          "Yes. Because enzyme peels are natural and non-toxic, they are a safe option for pregnant and nursing clients. Always consult with your provider to confirm suitability.",
      },
      {
        question: "Are there any contraindications for enzyme peels?",
        answer:
          "Avoid treatment if you:\n- Have open wounds or active infections\n- Have had recent chemical peels or laser resurfacing\n- Are allergic to specific fruits used in the enzyme formulation",
      },
      {
        question: "Can enzyme peels be used on darker skin tones?",
        answer:
          "Absolutely. Enzyme peels do not penetrate deeply enough to trigger pigment changes, making them safe and effective for all skin tones.",
      },
      {
        question: "Can enzyme peels be combined with other treatments?",
        answer:
          "Yes. Enzyme peels pair beautifully with facials, dermaplaning, or LED therapy. They are often used as a preparation before advanced procedures, such as microneedling or laser.",
      },
    ],
  },
  {
    section: "The Procedure",
    items: [
      {
        question: "What should I expect during an enzyme peel session?",
        answer:
          "Your provider will cleanse your skin, apply the enzyme formula, and allow it to process for 5–15 minutes, depending on skin sensitivity. You may feel mild warmth or tingling. The treatment concludes with soothing serums, moisturizers, and SPF.",
      },
      {
        question: "How long does an enzyme peel take?",
        answer: "Most treatments take 30 to 45 minutes, making them a perfect lunch-hour option.",
      },
      {
        question: "Does an enzyme peel hurt?",
        answer:
          "No. Enzyme peels are very comfortable. Most clients report only slight warmth or tingling during application.",
      },
      {
        question: "How often should I get an enzyme peel?",
        answer:
          "Enzyme peels can be performed weekly or biweekly as part of a treatment series or monthly as part of a regular skincare routine.",
      },
    ],
  },
  {
    section: "Recovery & Results",
    items: [
      {
        question: "Will my skin peel after an enzyme treatment?",
        answer:
          "No. Enzyme peels exfoliate without visible peeling, flaking, or downtime. You may experience a healthy glow and slight smoothness immediately after.",
      },
      {
        question: "What should I avoid after an enzyme peel?",
        answer:
          "- Avoid exfoliating products for 48 hours\n- Wear SPF daily\n- Avoid excessive heat or sun exposure on the day of your treatment",
      },
      {
        question: "When will I see results?",
        answer:
          "Most clients notice brighter, smoother skin immediately after their first treatment, with continued improvement over a series.",
      },
      {
        question: "Are results cumulative?",
        answer:
          "Yes. Regular enzyme peels help maintain a clear, radiant complexion and support healthy cell turnover over time.",
      },
      {
        question: "How much does an enzyme peel cost at Rejuvenate Skin Spa?",
        answer:
          "Enzyme peel treatments typically start at $95. Discounts may be available for treatment packages or when combined with other facial services.",
      },
    ],
  },
]

export default function EnzymePeelFacialFAQ() {
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
    <section className="py-16 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Enzyme Peel Treatment Services FAQ's
          </h2>
        </div>

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
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                        onClick={() => toggleItem(itemId)}
                        aria-expanded={isOpen}
                      >
                        <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-sage-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-sage-600 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="text-gray-600 whitespace-pre-line">{item.answer}</div>
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
  )
}
