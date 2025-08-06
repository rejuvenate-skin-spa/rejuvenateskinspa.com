"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqSections = [
  {
    title: "Overview of Plexr Plasma Technology",
    faqs: [
      {
        question: "What is Plexr Plasma Skin Tightening?",
        answer:
          "Plexr is an advanced plasma technology that uses ionized gas to create controlled micro-injuries on the skin's surface. This stimulates collagen production and cellular renewal, leading to firmer, smoother, and more youthful skin.",
      },
      {
        question: "How does Plexr plasma differ from other skin treatments?",
        answer:
          "Unlike lasers or microneedling, Plexr plasma does not rely on heat or puncturing the skin. It creates a plasma arc that vaporizes the outermost layers of skin with pinpoint precision, minimizing damage to surrounding tissue.",
      },
      {
        question: "Is Plexr safe for all skin types?",
        answer:
          "Plexr treatments are customizable and include protocols that are safe for various skin tones. Semi-ablative treatments are especially versatile and suitable for diverse skin types.",
      },
      {
        question: "What results can I expect from Plexr treatments?",
        answer:
          "You can expect improved skin tone, reduced wrinkles, tighter skin, and a more even texture. Results vary by treatment intensity but often improve progressively over several weeks.",
      },
      {
        question: "Is there downtime after Plexr treatment?",
        answer:
          "Downtime depends on the type of Plexr treatment. Non-ablative has little to no downtime, semi-ablative typically involves 2–5 days of recovery, while ablative treatments may require 7–10 days of healing.",
      },
    ],
  },
  {
    title: "Services Offered at Rejuvenate Skin Spa",
    faqs: [
      {
        question: "What Plexr plasma services are available at Rejuvenate Skin Spa?",
        answer:
          "We specialize in all three tiers of Plexr plasma treatments:\n- Non-Ablative: Surface-level skin rejuvenation with no downtime\n- Semi-Ablative (CAT Resurfacing): Fractional resurfacing for moderate textural improvement\n- Ablative: Deep resurfacing for significant skin tightening and wrinkle reduction\n\nWe also offer targeted removal services using Plexr for moles, skin tags, sun spots, and warts.",
      },
    ],
  },
  {
    title: "Treatment Selection & Customization",
    faqs: [
      {
        question: "How do I know which Plexr treatment is right for me?",
        answer:
          "Your provider will evaluate your skin type, treatment goals, and desired downtime to recommend the most appropriate protocol—non-ablative, semi-ablative, or ablative.",
      },
      {
        question: "Can Plexr be used on different parts of the body?",
        answer:
          "Yes. Plexr can safely treat a wide range of areas including the eyelids, face, neck, décolleté, hands, and even sensitive regions such as underarms and intimate areas.",
      },
      {
        question: "Are multiple sessions needed?",
        answer:
          "Depending on the concern being treated, some clients see results after one session, while others benefit from a series spaced several weeks apart.",
      },
      {
        question: "How does Plexr plasma compare to traditional skin tightening?",
        answer:
          "Plexr offers a non-surgical alternative to skin tightening without the need for incisions or stitches. It targets both the superficial and deeper layers of the skin to stimulate natural regeneration.",
      },
    ],
  },
  {
    title: "Post-Care & Maintenance",
    faqs: [
      {
        question: "What is the aftercare process like?",
        answer:
          "Aftercare depends on the depth of your treatment. All clients should avoid sun exposure, wear SPF, and follow hydration protocols. Avoid picking scabs or exfoliating prematurely.",
      },
      {
        question: "How long do results last?",
        answer:
          "Results from Plexr treatments are long-lasting, especially when maintained with good skincare habits and sun protection. Many clients enjoy results for 1–3 years.",
      },
      {
        question: "Can I combine Plexr with other treatments?",
        answer:
          "Yes. Plexr can complement facials, microneedling, red light therapy, and other non-invasive treatments for enhanced outcomes.",
      },
      {
        question: "Is there anyone who should not receive a Plexr treatment?",
        answer:
          "Plexr is not recommended for individuals who are pregnant, breastfeeding, have active infections in the treatment area, or have a history of keloid scarring.",
      },
    ],
  },
]

export function PlexrPlasmaFAQ() {
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
              Plexr Plasma Skin Tightening FAQ's
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our Plexr plasma treatments</p>
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
