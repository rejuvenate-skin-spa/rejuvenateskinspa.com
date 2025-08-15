"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqSections = [
  {
    title: "Understanding the Service",
    faqs: [
      {
        question: "What is microneedling?",
        answer:
          "Microneedling is a minimally invasive skin rejuvenation treatment that utilizes fine needles to create controlled micro-injuries in the skin, stimulating the production of collagen and elastin for improved skin texture, tone, and firmness.",
      },
      {
        question: "What are the benefits of microneedling?",
        answer:
          "- Reduces fine lines and wrinkles\n- Improves acne scars and stretch marks\n- Minimizes enlarged pores\n- Even skin tone and texture\n- Enhances product absorption",
      },
      {
        question: "How does microneedling work?",
        answer:
          "Tiny needles create microchannels in the skin, triggering the body's natural wound-healing response. This leads to increased collagen and elastin production, which rejuvenates the skin from within.",
      },
      {
        question: "What skin concerns can microneedling treat?",
        answer:
          "Microneedling is effective for acne scars, fine lines, large pores, sun damage, melasma, and overall skin texture issues.",
      },
      {
        question: "Is microneedling safe?",
        answer:
          "Yes. When performed by a trained professional, microneedling is a safe and effective treatment with minimal downtime.",
      },
    ],
  },
  {
    title: "Treatment Experience",
    faqs: [
      {
        question: "What should I expect during a microneedling session?",
        answer:
          "Your skin will be cleansed and numbed with a topical anesthetic. The microneedling device is then passed over the skin, creating controlled micro-injuries. A calming serum or mask is applied post-treatment. The session lasts 45–60 minutes.",
      },
      {
        question: "Does microneedling hurt?",
        answer:
          "Thanks to numbing cream, most clients experience only mild discomfort, such as a light prickling or pressure sensation.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "For best results, a series of 3–6 treatments spaced 4–6 weeks apart is recommended. Maintenance sessions may be performed quarterly.",
      },
      {
        question: "Can microneedling be done on all skin tones?",
        answer:
          "Yes. Microneedling is safe for all Fitzpatrick skin types and is a great alternative to laser for darker skin tones.",
      },
      {
        question: "Is microneedling only for the face?",
        answer:
          "No. Microneedling can also be performed on the neck, décolleté, hands, and body areas affected by scars, stretch marks, or skin laxity.",
      },
    ],
  },
  {
    title: "Recovery & Aftercare",
    faqs: [
      {
        question: "What is the downtime after microneedling?",
        answer:
          "Downtime is minimal. Expect redness and mild swelling for 24 to 72 hours. Some dryness, flaking, or sensitivity may occur over the next few days.",
      },
      {
        question: "What should I avoid after microneedling?",
        answer:
          "- No makeup for 24 hours\n- Avoid sun exposure and heat for 48–72 hours\n- Refrain from exfoliants, retinoids, and active ingredients for 5–7 days\n- Follow your provider's aftercare instructions",
      },
      {
        question: "When will I see results?",
        answer:
          "Initial improvements can be observed within 1–2 weeks, with continued improvements occurring over several months as collagen remodeling progresses.",
      },
      {
        question: "How long do the results last?",
        answer:
          "Results from a series of treatments can last 6 months to a year or longer, provided good skincare and sun protection are maintained.",
      },
      {
        question: "What is the cost of microneedling at Rejuvenate Skin Spa?",
        answer:
          "Microneedling treatments typically start at $275 per session. Package pricing may be available for multiple sessions.",
      },
    ],
  },
]

export default function MicroneedlingTreatmentFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

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
              Microneedling Services FAQ's
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our microneedling treatments</p>
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
