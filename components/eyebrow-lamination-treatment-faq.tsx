"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqSections = [
  {
    title: "Understanding the Service",
    faqs: [
      {
        question: "What is eyebrow lamination?",
        answer:
          "Eyebrow lamination is a non-invasive treatment that restructures the brow hairs to maintain a desired shape. It gives the brows a fuller, fluffier, and more defined appearance by lifting and setting the hairs in place.",
      },
      {
        question: "What are the benefits of eyebrow lamination?",
        answer:
          "• Fuller, more uniform-looking brows\n• Helps tame unruly hair\n• Ideal for gaps or thinning brows\n• No needles or tint required (optional)",
      },
      {
        question: "Is eyebrow lamination the same as microblading?",
        answer:
          "No. Lamination is a temporary treatment that enhances your natural brow hairs without the use of pigment or tattooing. Microblading is a semi-permanent cosmetic tattoo technique.",
      },
      {
        question: "Who is a good candidate for brow lamination?",
        answer:
          "Ideal for anyone looking to enhance the shape and fullness of their natural brows, especially those with gaps, uneven growth, or thinning hair.",
      },
      {
        question: "How long does brow lamination last?",
        answer: "Results typically last 6–8 weeks, depending on your hair growth cycle and post-care routine.",
      },
    ],
  },
  {
    title: "The Procedure",
    faqs: [
      {
        question: "What happens during a brow lamination appointment?",
        answer:
          "The treatment involves applying a gentle lifting solution to soften the brow hairs, setting them into place with a neutralizer, and conditioning the brows. The full process takes about 30–45 minutes.",
      },
      {
        question: "Does brow lamination hurt?",
        answer: "No. The treatment is completely painless and requires no downtime.",
      },
      {
        question: "Can I get tinting or waxing with brow lamination?",
        answer:
          "Yes. Brow lamination can be combined with tinting and shaping (such as waxing or tweezing) during the same appointment for a polished look.",
      },
      {
        question: "Will my brows look overly dramatic?",
        answer:
          "Not unless you want them to. Your provider will work with you to shape the brows naturally or boldly based on your preferences.",
      },
      {
        question: "Is there any downtime?",
        answer:
          "There is no downtime. However, you should avoid getting your brows wet or applying makeup for 24 hours after the service.",
      },
    ],
  },
  {
    title: "Safety & Aftercare",
    faqs: [
      {
        question: "Is brow lamination safe?",
        answer:
          "Yes. The products used are formulated for use around the eyes and brows, and the treatment is gentle when performed by a trained professional.",
      },
      {
        question: "Are there any side effects or risks?",
        answer:
          "Minor redness or irritation may occur, especially in individuals with sensitive skin. A patch test is available if you have concerns.",
      },
      {
        question: "How should I care for my brows after a lamination treatment?",
        answer:
          "• Avoid getting them wet for 24 hours\n• Avoid oil-based products around brows\n• Brush brows daily to maintain shape\n• Use a nourishing brow serum for hydration",
      },
      {
        question: "Can I wear makeup after brow lamination?",
        answer: "Wait at least 24 hours before applying brow makeup or skincare products to the area.",
      },
      {
        question: "How much does eyebrow lamination cost at Rejuvenate Skin Spa?",
        answer:
          "Brow lamination treatments typically start at $85. Add-on tinting or shaping may be available for an additional fee.",
      },
    ],
  },
]

export function EyebrowLaminationFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  // Generate FAQ schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Eyebrow Lamination Services FAQ's
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our eyebrow lamination treatments</p>
          </div>

          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-semibold text-sage-600 mb-4">{section.title}</h3>
                <div className="space-y-2">
                  {section.faqs.map((faq, faqIndex) => {
                    const itemId = `${sectionIndex}-${faqIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <div key={faqIndex} className="bg-white border border-gray-300 rounded">
                        <button
                          className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                          onClick={() => toggleItem(itemId)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${itemId}`}
                        >
                          <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                          <ChevronDown
                            className={`h-4 w-4 text-gray-600 transition-transform flex-shrink-0 ${
                              isOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div id={`faq-answer-${itemId}`} className="px-4 pb-4 border-t border-gray-200">
                            <div className="text-gray-700 leading-relaxed pt-3">
                              {faq.answer.split("\n").map((line, lineIndex) => (
                                <div key={lineIndex}>
                                  {line}
                                  {lineIndex < faq.answer.split("\n").length - 1 && <br />}
                                </div>
                              ))}
                            </div>
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
