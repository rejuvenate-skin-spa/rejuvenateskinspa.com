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
        question: "What is a Pomegranate Enzyme Peel?",
        answer:
          "The Pomegranate Enzyme Peel is a nourishing exfoliating treatment that utilizes antioxidant-rich pomegranate enzymes and gentle alpha-hydroxy acids (AHAs) to brighten the skin, reduce inflammation, and promote a healthy glow. This peel delivers a 4-5 out of 5 on the intensity scale.",
      },
      {
        question: "How does it work?",
        answer:
          "Pomegranate enzymes break down dead skin cells on the surface, while natural acids stimulate cell renewal, improving skin tone and texture.",
      },
      {
        question: "What are the key benefits?",
        answer:
          "- Brightens dull, uneven skin\n- Helps calm inflammation and redness\n- Improves texture and tone\n- Provides antioxidant protection\n- Safe for sensitive and mature skin types",
      },
      {
        question: "Is it suitable for sensitive or aging skin?",
        answer:
          "Yes. This peel is designed to be gentle yet effective, making it ideal for dry, aging, or reactive skin types.",
      },
      {
        question: "Is it considered a chemical peel?",
        answer:
          "No. This is an enzyme-based treatment derived from fruit acids and antioxidants. It offers a mild exfoliation without the intensity of traditional chemical peels.",
      },
    ],
  },
  {
    section: "Treatment Experience",
    items: [
      {
        question: "What should I expect during the treatment?",
        answer:
          "Your skin will be cleansed, and the pomegranate enzyme solution applied. You may feel mild tingling. After a short activation period, your provider will apply calming serums and moisturizers.",
      },
      {
        question: "How long does the treatment take?",
        answer:
          "The whole session typically lasts between 30 and 45 minutes, depending on the skin type and any additional services being combined.",
      },
      {
        question: "Is there any downtime?",
        answer:
          "Most clients experience no downtime. Occasionally, mild redness or flaking may occur, but this typically resolves within a short period.",
      },
      {
        question: "How often should I schedule this peel?",
        answer:
          "Monthly treatments are ideal for maintaining your skin's health regularly. For targeted goals like brightening or texture smoothing, a series of treatments spaced 2–3 weeks apart may be recommended.",
      },
      {
        question: "Can I wear makeup after the peel?",
        answer:
          "Yes, but it's best to wait at least 12–24 hours and allow your skin to breathe immediately after treatment.",
      },
    ],
  },
  {
    section: "Aftercare & Results",
    items: [
      {
        question: "What should I do after the treatment?",
        answer:
          "Use gentle skincare, avoid exfoliants and active ingredients for 48 hours, and wear SPF daily to protect your skin.",
      },
      {
        question: "When will I see results?",
        answer:
          "Many clients notice an immediate enhancement in brightness and smoothness. Full benefits continue to develop over several days.",
      },
      {
        question: "Can this peel be combined with other services?",
        answer:
          "Yes. It pairs well with dermaplaning, hydrating masks, and red light therapy for even greater rejuvenation.",
      },
      {
        question: "Is the Pomegranate Enzyme Peel safe for all skin tones?",
        answer: "Yes. This peel is gentle and safe for all skin types, regardless of Fitzpatrick classification.",
      },
      {
        question: "How much does the Pomegranate Enzyme Peel cost at Rejuvenate Skin Spa?",
        answer:
          "This treatment typically starts at $95. Discounts may be available for treatment packages or facial upgrades.",
      },
    ],
  },
]

export default function PomegranateEnzymePeelFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const generateFAQSchema = () => {
    const faqItems = faqData.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    )

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems,
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Pomegranate Enzyme Peel Services FAQ's
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
