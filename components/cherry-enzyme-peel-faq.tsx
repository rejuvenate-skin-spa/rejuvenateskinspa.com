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
        question: "What is a Cherry Enzyme Peel?",
        answer:
          "The Cherry Enzyme Peel is a gentle exfoliating treatment that utilizes natural cherry enzymes and alpha-hydroxy acids (AHAs) to brighten the skin, improve texture, and promote a radiant glow.",
      },
      {
        question: "How does a Cherry Enzyme Peel work?",
        answer:
          "This peel combines enzymes and natural acids from cherries and other fruit sources to gently dissolve dead skin cells, unclog pores, and encourage cell turnover.",
      },
      {
        question: "What are the benefits of a Cherry Enzyme Peel?",
        answer:
          "- Brightens dull skin\n- Improves texture and clarity\n- Reduces signs of sun damage and pigmentation\n- Smooths fine lines and uneven tone\n- Provides antioxidant protection",
      },
      {
        question: "Is this peel suitable for sensitive skin?",
        answer:
          "Yes, it is generally safe for sensitive and reactive skin types. However, a skin consultation will help determine the best treatment for your needs.",
      },
      {
        question: "Is this a chemical or fruit-based peel?",
        answer:
          "Cherry Enzyme Peels are fruit-based, utilizing natural enzymes and mild acids. They are gentler than chemical peels and are ideal for regular exfoliation without the harsh side effects associated with chemical peels.",
      },
    ],
  },
  {
    section: "Treatment Experience",
    items: [
      {
        question: "What does the Cherry Enzyme Peel feel like?",
        answer:
          "You may experience a mild tingling or warmth as the active ingredients take effect on your skin. The sensation is generally well tolerated and fades quickly after removal.",
      },
      {
        question: "How long does the treatment take?",
        answer:
          "A typical session lasts 30–45 minutes and includes cleansing, enzyme application, removal, and the application of calming skincare products.",
      },
      {
        question: "Is there any downtime?",
        answer:
          "There is minimal to no downtime. You might experience slight redness or flaking for 1–2 days, but this is usually mild.",
      },
      {
        question: "How many sessions are needed?",
        answer:
          "For optimal results, a series of 3–6 treatments, spaced 2–4 weeks apart, is recommended. Monthly maintenance helps keep skin radiant and refreshed.",
      },
      {
        question: "Can this be used year-round?",
        answer:
          "Yes. The Cherry Enzyme Peel is gentle enough for year-round use; however, SPF protection should always be applied afterward.",
      },
    ],
  },
  {
    section: "Aftercare & Results",
    items: [
      {
        question: "What should I avoid after a Cherry Enzyme Peel?",
        answer:
          "Avoid sun exposure, retinoids, exfoliants, and heavy makeup for 2–3 days. Use gentle cleansers and keep the skin hydrated.",
      },
      {
        question: "When will I see results?",
        answer:
          "Most clients notice immediate improvement in brightness and smoothness, with continued benefits over the next few days.",
      },
      {
        question: "Can this treatment be paired with others?",
        answer:
          "Yes. It pairs well with dermaplaning, hydrating facials, and LED red light therapy for enhanced results.",
      },
      {
        question: "Is the Cherry Enzyme Peel safe for all skin tones?",
        answer: "Yes, this peel is non-invasive and safe for all skin types, regardless of Fitzpatrick skin type.",
      },
      {
        question: "How much does a Cherry Enzyme Peel cost at Rejuvenate Skin Spa?",
        answer:
          "This treatment typically starts at $95 per session. Discounts may be available for packages or as part of customized facials.",
      },
    ],
  },
]

export function CherryEnzymePeelFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const generateFAQSchema = () => {
    const faqItems = faqData.flatMap((section) => section.items)
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Cherry Enzyme Peel Services FAQ's
            </h2>
            <p className="text-lg text-gray-600">Everything you need to know about our Cherry Enzyme Peel treatment</p>
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
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
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
