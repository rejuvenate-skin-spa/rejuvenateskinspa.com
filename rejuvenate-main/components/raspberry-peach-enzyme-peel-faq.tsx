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
        question: "What is a Raspberry-Peach Enzyme Peel?",
        answer:
          "The Raspberry-Peach Enzyme Peel is a refreshing, antioxidant-rich treatment that gently exfoliates using fruit enzymes from raspberries and peaches. It promotes brighter skin, smoother texture, and a healthy glow.",
      },
      {
        question: "How does it work?",
        answer:
          "This peel uses natural fruit acids and enzymes to break down dead skin cells and encourage cell turnover, while antioxidant compounds help protect and nourish the skin.",
      },
      {
        question: "What are the benefits of this peel?",
        answer:
          "- Gently exfoliates without irritation\n- Brightens dull, uneven skin\n- Refines pores and texture\n- Provides antioxidant protection\n- Suitable for sensitive and rosacea-prone skin",
      },
      {
        question: "Is it safe for sensitive skin types?",
        answer:
          "Yes. Raspberry-Peach Enzyme Peels are designed to be very gentle and are ideal for clients with sensitive, dry, or reactive skin types.",
      },
      {
        question: "Is this considered a chemical peel?",
        answer:
          "No. It's an enzyme-based exfoliation treatment using fruit-derived acids and enzymes, making it a milder alternative to chemical peels.",
      },
    ],
  },
  {
    section: "Treatment Experience",
    items: [
      {
        question: "What should I expect during the treatment?",
        answer:
          "Your skin will be cleansed, and the raspberry-peach enzyme solution applied. You may feel a slight tingling or warming sensation. The peel is then removed and followed by hydrating and calming products.",
      },
      {
        question: "How long does the treatment take?",
        answer: "A typical session lasts 30–45 minutes, making it an excellent lunchtime or same-day glow treatment.",
      },
      {
        question: "Is there downtime?",
        answer: "No. There is little to no downtime, although mild redness or flaking may occur in some cases.",
      },
      {
        question: "How often can I get this peel?",
        answer: "This peel can be performed every 3–4 weeks for maintenance or as part of a seasonal skincare routine.",
      },
      {
        question: "Can it be used year-round?",
        answer: "Yes. Its gentle nature makes it safe and effective throughout all seasons with regular use of SPF.",
      },
    ],
  },
  {
    section: "Aftercare & Results",
    items: [
      {
        question: "What should I do after the peel?",
        answer:
          "Avoid exfoliants, retinoids, and sun exposure for 2–3 days. Use gentle skincare and wear daily sunscreen to protect your skin.",
      },
      {
        question: "When will I see results?",
        answer:
          "Many clients notice an immediate glow and smoother skin texture, with optimal results unfolding over several days.",
      },
      {
        question: "Can this be combined with other treatments?",
        answer:
          "Yes. It pairs well with dermaplaning, LED red light therapy, and hydrating masks for enhanced results.",
      },
      {
        question: "Is it safe for all skin tones?",
        answer:
          "Yes. It is gentle enough to be used on all Fitzpatrick skin types, including those prone to hyperpigmentation.",
      },
      {
        question: "How much does the Raspberry-Peach Enzyme Peel cost at Rejuvenate Skin Spa?",
        answer:
          "This treatment typically starts at $95 per session. Bundle pricing may be available for facial packages or seasonal promotions.",
      },
    ],
  },
]

export default function RaspberryPeachEnzymePeelFAQ() {
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
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Raspberry-Peach Enzyme Peel Services FAQ's
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our gentle raspberry-peach enzyme peel treatment
            </p>
          </div>

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
