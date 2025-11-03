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
        question: "What is a Coconut-Papaya Enzyme Peel?",
        answer:
          "The Coconut-Papaya Enzyme Peel is a tropical, fruit-based facial treatment that utilizes natural enzymes from papaya and hydrating elements from coconut to exfoliate and brighten the skin gently.",
      },
      {
        question: "How does the Coconut-Papaya Enzyme Peel work?",
        answer:
          "Papaya enzymes serve as natural exfoliants, breaking down dead skin cells and enhancing texture. Coconut milk and extracts provide deep hydration and nourishment to soothe the skin.",
      },
      {
        question: "What are the benefits of this peel?",
        answer:
          "- Gently removes dead skin cells\n- Boosts hydration and skin suppleness\n- Enhances natural glow and softness\n- Reduces dullness and uneven texture\n- Safe for sensitive and dry skin types",
      },
      {
        question: "Is the Coconut-Papaya Peel good for dry or sensitive skin?",
        answer:
          "Yes. It's one of the most soothing enzyme peels available, making it ideal for dry, mature, or sensitive skin that needs gentle exfoliation without irritation.",
      },
      {
        question: "Is this peel considered a chemical treatment?",
        answer:
          "No. It is a fruit enzyme-based treatment and does not involve traditional chemical acids. It exfoliates using natural enzymatic activity.",
      },
    ],
  },
  {
    section: "Treatment Experience",
    items: [
      {
        question: "What does this treatment feel like?",
        answer:
          "You may feel a mild warming or tingling sensation, but most clients find the experience very soothing and relaxing due to the natural coconut and papaya ingredients.",
      },
      {
        question: "How long is a typical session?",
        answer:
          "Most sessions last 30–45 minutes and include cleansing, enzyme application, a brief rest period while the peel is working, and post-treatment hydration.",
      },
      {
        question: "Will I experience peeling or redness?",
        answer:
          "Most clients experience no visible peeling. Mild redness may occur briefly, but it typically fades within a few hours.",
      },
      {
        question: "How often should I get a Coconut-Papaya Enzyme Peel?",
        answer:
          "It can be done monthly to maintain skin clarity and hydration. For targeted concerns, a series of treatments may be recommended.",
      },
      {
        question: "Can I get this peel before an event?",
        answer:
          "Yes. This enzyme peel is great as a pre-event facial because it refreshes and hydrates the skin without downtime.",
      },
    ],
  },
  {
    section: "Aftercare & Results",
    items: [
      {
        question: "What aftercare is required?",
        answer:
          "Use a gentle cleanser, hydrate generously, and apply SPF daily for optimal skin care. Avoid using exfoliating products and active ingredients for 48 hours after treatment.",
      },
      {
        question: "When will I see results?",
        answer:
          "Most clients notice a smoother, brighter complexion immediately, with full benefits appearing over the next few days.",
      },
      {
        question: "Can it be combined with other treatments?",
        answer:
          "Yes. It pairs beautifully with dermaplaning, hydrating masks, or red light therapy to enhance glow and hydration.",
      },
      {
        question: "Is this safe for all skin tones?",
        answer:
          "Yes. It's safe and effective for all Fitzpatrick skin types due to its gentle, non-irritating formula.",
      },
      {
        question: "How much does the Coconut-Papaya Enzyme Peel cost at Rejuvenate Skin Spa?",
        answer:
          "The treatment typically starts at $95. Package pricing or add-ons may be available for enhanced facial experiences.",
      },
    ],
  },
]

export default function CoconutPapayaEnzymePeelFAQ() {
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
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Coconut-Papaya Enzyme Peel Services FAQ's
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our tropical enzyme peel treatment
            </p>
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
                      <div key={itemIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                          onClick={() => toggleItem(itemId)}
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-sage-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-sage-600 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-white">
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
