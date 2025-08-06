"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface FAQSection {
  section: string
  faqs: FAQ[]
}

const faqData: FAQSection[] = [
  {
    section: "Understanding the Treatment",
    faqs: [
      {
        question: "What is a Blueberry Enzyme Peel?",
        answer:
          "The Blueberry Enzyme Peel is a gentle yet effective exfoliating treatment that uses natural fruit enzymes and antioxidants from blueberries to remove dead skin cells, unclog pores, and brighten the complexion.",
      },
      {
        question: "How does the Blueberry Enzyme Peel work?",
        answer:
          "The treatment utilizes natural fruit acids and enzymes to break down the bonds between dead skin cells on the surface, promoting cell turnover and enhancing overall skin clarity and smoothness.",
      },
      {
        question: "What are the benefits of a Blueberry Enzyme Peel?",
        answer:
          "- Gently exfoliates and resurfaces skin\n- Improves skin tone and texture\n- Helps reduce the appearance of pores and acne\n- Provides antioxidant protection\n- Leaves skin glowing and refreshed",
      },
      {
        question: "Is the Blueberry Enzyme Peel suitable for all skin types?",
        answer:
          "Yes. This peel is ideal for most skin types, including sensitive, acne-prone, and mature skin. Your provider will assess your skin before the treatment to ensure it's appropriate.",
      },
      {
        question: "Is this treatment equivalent to a chemical peel?",
        answer:
          "No. While both exfoliate the skin, the Blueberry Enzyme Peel is a fruit enzyme-based treatment that is gentler than traditional chemical peels, with minimal downtime.",
      },
    ],
  },
  {
    section: "Treatment Experience",
    faqs: [
      {
        question: "What should I expect during the treatment?",
        answer:
          "Your skin will be cleansed, and the blueberry enzyme solution will be applied. You may feel a mild tingling sensation. After a few minutes, the peel is removed and followed by soothing and hydrating products.",
      },
      {
        question: "How long does the treatment take?",
        answer:
          "A Blueberry Enzyme Peel session typically lasts 30–45 minutes, making it an excellent lunchtime or same-day treatment for a radiant glow.",
      },
      {
        question: "Does the peel hurt?",
        answer:
          "No. The treatment is very gentle. You may experience a slight warmth or tingling sensation, but most clients find it relaxing and refreshing.",
      },
      {
        question: "Is there any downtime?",
        answer:
          "There is no significant downtime. Some clients may experience mild redness or flaking for 1–2 days, but makeup can typically be worn immediately afterward.",
      },
      {
        question: "How often should I get a Blueberry Enzyme Peel?",
        answer:
          "For best results, we recommend a series of treatments spaced 2–4 weeks apart. Monthly maintenance peels can help sustain your glow and skin health.",
      },
    ],
  },
  {
    section: "Aftercare & Results",
    faqs: [
      {
        question: "What should I do after the treatment?",
        answer:
          "Avoid direct sun exposure and wear SPF daily. Use gentle cleansers and hydrating products for a few days to help your skin recover. Avoid exfoliants and active ingredients for 3–5 days.",
      },
      {
        question: "When will I see results?",
        answer:
          "Many clients notice a brighter, more even complexion immediately after treatment. Continued improvements appear over the next few days as dead skin cells slough off.",
      },
      {
        question: "Can this be combined with other treatments?",
        answer:
          "Yes. The Blueberry Enzyme Peel pairs well with dermaplaning, facials, red light therapy, or extractions. Ask your provider about combination packages.",
      },
      {
        question: "Who should avoid this peel?",
        answer:
          "Individuals with broken skin, active rosacea, or certain allergies may not be suitable candidates. Always disclose your full skin history during consultation.",
      },
      {
        question: "How much does the Blueberry Enzyme Peel cost at Rejuvenate Skin Spa?",
        answer:
          "This treatment typically starts at $95 per session. Package deals and custom facial enhancements may be available.",
      },
    ],
  },
]

export default function BlueberryEnzymePeelFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.flatMap((section) =>
      section.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    ),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blueberry Enzyme Peel Services FAQ's
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our gentle blueberry enzyme peel treatment
            </p>
          </div>

          <div className="space-y-8">
            {faqData.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-semibold text-sage-600 mb-4">{section.section}</h3>
                <div className="space-y-4">
                  {section.faqs.map((faq, faqIndex) => {
                    const itemId = `${sectionIndex}-${faqIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                          onClick={() => toggleItem(itemId)}
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-sage-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-sage-600 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
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
