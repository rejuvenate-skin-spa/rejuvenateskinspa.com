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
        question: "What is a Passion Fruit Enzyme Peel?",
        answer:
          "The Passion Fruit Enzyme Peel is a tropical, rejuvenating treatment that utilizes natural enzymes from passion fruit and other botanical ingredients to gently exfoliate the skin, promote collagen production, and reveal a smoother, more vibrant complexion.",
      },
      {
        question: "How does it work?",
        answer:
          "This peel gently dissolves dead skin cells with natural fruit enzymes and mild alpha hydroxy acids (AHAs), improving skin clarity and texture without irritation.",
      },
      {
        question: "What are the benefits of a Passion Fruit Enzyme Peel?",
        answer:
          "- Gently resurfaces the skin\n- Boosts collagen production\n- Helps clear congestion and refine pores\n- Brightens dull or uneven skin tone\n- Provides antioxidant protection",
      },
      {
        question: "Is it good for aging or acne-prone skin?",
        answer:
          "Yes. Passion Fruit Enzyme Peels are effective for aging skin by promoting collagen renewal, and for acne-prone skin by unclogging pores and reducing surface bacteria.",
      },
      {
        question: "How is it different from other enzyme peels?",
        answer:
          "This peel features a slightly more active blend of enzymes and AHAs, making it ideal for clients seeking noticeable results without the downtime associated with a chemical peel.",
      },
    ],
  },
  {
    section: "Treatment Experience",
    items: [
      {
        question: "What should I expect during the treatment?",
        answer:
          "Your provider will cleanse your skin and apply the passion fruit enzyme solution. You may feel mild tingling or warmth. The treatment concludes with soothing, hydrating products.",
      },
      {
        question: "How long is a typical session?",
        answer:
          "A typical session lasts 30–45 minutes and includes full preparation, application, and post-treatment care.",
      },
      {
        question: "Is there any peeling or downtime?",
        answer:
          "You may experience mild flaking or redness for 1–2 days, but most clients resume normal activities immediately.",
      },
      {
        question: "How often should I get this peel?",
        answer:
          "We recommend treatments every 3–4 weeks for skin maintenance or more frequently (bi-weekly) as part of a targeted corrective program.",
      },
      {
        question: "Is this treatment suitable year-round?",
        answer: "Yes. It's gentle enough to be performed year-round, provided appropriate sun protection is used.",
      },
    ],
  },
  {
    section: "Aftercare & Results",
    items: [
      {
        question: "What aftercare is required?",
        answer:
          "Avoid exfoliants, active ingredients, and direct sun exposure for 48 hours. Use hydrating and soothing skincare products and apply SPF daily.",
      },
      {
        question: "When will I see results?",
        answer:
          "You'll likely notice an immediate improvement in skin glow and texture, with continued refinement over several days.",
      },
      {
        question: "Can I combine it with other treatments?",
        answer:
          "Yes. It pairs well with dermaplaning, red light therapy, and hydrating facials for even better results.",
      },
      {
        question: "Is it safe for all skin tones?",
        answer:
          "Yes. It's considered safe for all Fitzpatrick skin types when applied by a licensed skincare professional.",
      },
      {
        question: "How much does a Passion Fruit Enzyme Peel cost at Rejuvenate Skin Spa?",
        answer: "This treatment typically starts at $95. Bundle pricing may be available for multi-session packages.",
      },
    ],
  },
]

export default function PassionFruitEnzymePeelFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
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
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Passion Fruit Enzyme Peel Services FAQ's
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our Passion Fruit Enzyme Peel treatment
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
