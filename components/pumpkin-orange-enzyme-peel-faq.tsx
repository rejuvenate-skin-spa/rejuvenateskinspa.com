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
        question: "What is a Pumpkin-Orange Enzyme Peel?",
        answer:
          "The Pumpkin-Orange Enzyme Peel is a seasonal, antioxidant-rich treatment that utilizes natural enzymes from pumpkin and citrus to exfoliate dead skin cells, boost collagen production, and promote a radiant complexion, making it considered the most potent peel in terms of intensity.",
      },
      {
        question: "How does it work?",
        answer:
          "Pumpkin enzymes and orange extracts contain natural alpha-hydroxy acids (AHAs) and beta carotene that help dissolve dead skin cells and stimulate cellular renewal.",
      },
      {
        question: "What are the benefits of this peel?",
        answer:
          "- Improves skin tone and clarity\n- Boosts collagen production\n- Exfoliates and unclogs pores\n- Brightens dull, tired skin\n- Provides antioxidant and vitamin nourishment",
      },
      {
        question: "Is it suitable for acne-prone or aging skin?",
        answer:
          "Yes. This peel is ideal for congested, breakout-prone, and mature skin types, thanks to its exfoliating and anti-inflammatory properties.",
      },
      {
        question: "Is it a chemical peel?",
        answer:
          "No. It's an enzyme-based treatment that utilizes natural fruit and vegetable enzymes to exfoliate gently, eliminating the harshness associated with traditional chemical peels.",
      },
    ],
  },
  {
    section: "Treatment Experience",
    items: [
      {
        question: "What should I expect during the treatment?",
        answer:
          "After cleansing, the pumpkin-orange enzyme solution is applied. You may feel a warm, tingling sensation. After several minutes, it is removed and followed by hydrating and calming products.",
      },
      {
        question: "How long does the treatment take?",
        answer: "Each session lasts approximately 30–45 minutes, making it ideal for a quick rejuvenation boost.",
      },
      {
        question: "Is there downtime or peeling?",
        answer:
          "There is little to no downtime. Some clients may experience minor redness or light flaking within 1 to 2 days.",
      },
      {
        question: "How often can I receive this treatment?",
        answer:
          "This peel can be done monthly for maintenance or as part of a seasonal skincare regimen during the fall and winter months.",
      },
      {
        question: "Can it be used on all skin types?",
        answer:
          "Yes. It's safe for most skin types, but individuals with very sensitive or compromised skin should consult a healthcare provider before treatment.",
      },
    ],
  },
  {
    section: "Aftercare & Results",
    items: [
      {
        question: "What aftercare should I follow?",
        answer:
          "Use gentle cleansers, moisturizers, and daily SPF. Avoid exfoliants and potent active ingredients (such as retinoids and AHAs) for 2–3 days.",
      },
      {
        question: "When will I see results?",
        answer:
          "You'll likely notice immediate radiance and smoother texture, with continued improvements over the next several days.",
      },
      {
        question: "Can this be combined with other services?",
        answer: "Yes. It pairs well with dermaplaning, red light therapy, and hydrating masks to amplify results.",
      },
      {
        question: "Is the Pumpkin-Orange Enzyme Peel safe for deeper skin tones?",
        answer:
          "Yes. It is generally safe for all Fitzpatrick skin types when customized and monitored by a licensed professional.",
      },
      {
        question: "How much does the Pumpkin-Orange Enzyme Peel cost at Rejuvenate Skin Spa?",
        answer: "This treatment typically starts at $95. Seasonal packages or facial upgrades may be available.",
      },
    ],
  },
]

export default function PumpkinOrangeEnzymePeelFAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
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
            Pumpkin-Orange Enzyme Peel Services FAQ's
          </h2>

          <div className="space-y-8">
            {faqData.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-semibold text-sage-600 mb-4">{section.section}</h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => {
                    const key = `${sectionIndex}-${itemIndex}`
                    const isOpen = openItems[key]

                    return (
                      <div key={itemIndex} className="border border-gray-200 rounded-lg">
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-inset"
                          onClick={() => toggleItem(sectionIndex, itemIndex)}
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
                            <div className="text-gray-700 whitespace-pre-line">{item.answer}</div>
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
