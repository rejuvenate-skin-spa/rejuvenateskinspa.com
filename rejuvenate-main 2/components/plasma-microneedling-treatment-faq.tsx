"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqSections = [
  {
    title: "Understanding the Treatment",
    faqs: [
      {
        question: "What is plasma microneedling?",
        answer:
          "Plasma microneedling is an advanced skin rejuvenation treatment that combines traditional microneedling with plasma technology. The combination enhances collagen induction, skin resurfacing, and product absorption, resulting in dramatic skin improvements.",
      },
      {
        question: "How is plasma microneedling different from traditional microneedling?",
        answer:
          "Plasma microneedling uses controlled plasma energy in conjunction with microchannels created by microneedling. Plasma enhances healing, reduces inflammation, and boosts cellular regeneration.",
      },
      {
        question: "What are the benefits of plasma microneedling?",
        answer:
          "- Increases collagen and elastin\n- Improves skin texture and firmness\n- Reduces fine lines and acne scars\n- Enhances the absorption of growth factors or serums\n- Accelerates healing and reduces downtime",
      },
      {
        question: "What skin concerns can it treat?",
        answer:
          "Plasma microneedling is ideal for fine lines, acne scars, enlarged pores, stretch marks, uneven texture, and early signs of aging.",
      },
      {
        question: "Is plasma microneedling safe?",
        answer:
          "Yes. It is a safe treatment when performed by a trained provider. Plasma also has antimicrobial properties, which can support healing.",
      },
    ],
  },
  {
    title: "Treatment Experience",
    faqs: [
      {
        question: "What happens during a plasma microneedling session?",
        answer:
          "After numbing and cleansing the skin, a microneedling device is used to create microchannels. Plasma energy is then applied to enhance the penetration of healing serums and stimulate collagen. The treatment typically takes 60–75 minutes.",
      },
      {
        question: "Does plasma microneedling hurt?",
        answer:
          "A numbing cream is used to minimize discomfort. Most clients experience only mild tingling or heat sensations during treatment.",
      },
      {
        question: "How many treatments will I need?",
        answer:
          "A series of 3–5 treatments, spaced 4–6 weeks apart, is recommended for optimal results. Maintenance sessions help extend benefits.",
      },
      {
        question: "Can this treatment be done on all skin tones?",
        answer:
          "Yes. Plasma microneedling is safe for all Fitzpatrick skin types, with minimal risk of pigmentation changes.",
      },
      {
        question: "Can plasma microneedling be used on areas other than the face?",
        answer:
          "Yes. It can also be used on the neck, chest, hands, and other areas with laxity, texture issues, or scarring.",
      },
    ],
  },
  {
    title: "Recovery & Results",
    faqs: [
      {
        question: "Is there downtime after plasma microneedling?",
        answer:
          "Expect some redness, sensitivity, and mild swelling for 1 to 3 days. Most clients resume normal activities within 24–48 hours.",
      },
      {
        question: "What aftercare is required?",
        answer:
          "- Avoid sun exposure for 3–5 days\n- No makeup for 24 hours\n- Avoid exfoliants and actives for 5–7 days\n- Apply recommended serums and SPF as directed",
      },
      {
        question: "When will I see results?",
        answer:
          "Skin often appears brighter and smoother within one week. Full collagen regeneration and optimal results continue to develop over 4–8 weeks.",
      },
      {
        question: "How long do results last?",
        answer:
          "With proper skincare and sun protection, results can last 6 months or longer. A maintenance schedule helps preserve improvements.",
      },
      {
        question: "What is the cost of plasma microneedling at Rejuvenate Skin Spa?",
        answer:
          "Plasma microneedling treatments typically start at $325 per session. Packages and enhancement options may be available.",
      },
    ],
  },
]

export default function PlasmaMicroneedlingTreatmentFAQ() {
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
              Plasma Microneedling Services FAQ's
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our plasma microneedling treatments
            </p>
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
