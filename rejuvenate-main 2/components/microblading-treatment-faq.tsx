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
    section: "Understanding the Service",
    items: [
      {
        question: "What is microblading?",
        answer:
          "Microblading is a semi-permanent cosmetic tattooing technique used to enhance or reshape eyebrows. A manual tool with ultra-fine needles deposits pigment into the upper layers of the skin, creating natural-looking hair strokes.",
      },
      {
        question: "How is microblading different from eyebrow tattooing?",
        answer:
          "Unlike traditional tattoos, microblading utilizes a manual tool and pigments that are designed to fade over time. The result is a more natural, hair-like appearance that typically lasts 1–2 years.",
      },
      {
        question: "What are the benefits of microblading?",
        answer:
          "- Fuller, well-shaped eyebrows\n- Time-saving daily routine\n- Smudge-proof and waterproof results\n- Custom shape and pigment tailored to your features",
      },
      {
        question: "Is microblading suitable for all skin types?",
        answer:
          "Microblading is most effective on normal to dry skin. Individuals with oily or sensitive skin types may require more frequent touch-ups or alternative brow techniques, such as powder brows.",
      },
      {
        question: "Who is a good candidate for microblading?",
        answer:
          "Microblading is ideal for clients with sparse, uneven, or thinning brows who want a more defined, natural look. It's not recommended for those who are pregnant, breastfeeding, or have certain medical conditions.",
      },
    ],
  },
  {
    section: "Procedure & Customization",
    items: [
      {
        question: "What happens during a microblading appointment?",
        answer:
          "The process begins with a consultation and brow mapping to determine shape and symmetry. A numbing cream is applied, and your provider carefully creates individual strokes using pigment and a microblade tool. The appointment lasts about 2–3 hours.",
      },
      {
        question: "Does microblading hurt?",
        answer:
          "Most clients describe the sensation as mild scratching. A topical anesthetic is used before and during the procedure to ensure comfort.",
      },
      {
        question: "How is the brow shape and color chosen?",
        answer:
          "Your provider will assess your facial features, brow goals, and natural hair color to create a flattering, personalized brow shape and pigment match that suits you.",
      },
      {
        question: "Is there a risk of an allergic reaction?",
        answer:
          "Though rare, allergic reactions can happen. A patch test is available for clients with concerns before treatment.",
      },
      {
        question: "Can microblading be combined with other brow techniques?",
        answer:
          "Yes. Combination brows (microblading + shading) offer more definition and are ideal for clients who want a fuller, makeup-like result.",
      },
    ],
  },
  {
    section: "Healing & Results",
    items: [
      {
        question: "What is the healing process like?",
        answer:
          "Healing takes about 7–14 days. Brows may appear darker at first, then scab and lighten as they heal. It's important not to pick or scratch. Full results are visible in about 4–6 weeks.",
      },
      {
        question: "What aftercare is required?",
        answer:
          "- Avoid sweating, water exposure, and makeup on the brows for 7–10 days\n- Use a healing ointment as directed\n- Avoid sun exposure, exfoliants, and retinoids during healing",
      },
      {
        question: "Will I need a touch-up?",
        answer:
          "Yes. A touch-up session is typically scheduled 6–8 weeks after the initial procedure to perfect the shape and color. Annual maintenance is recommended to keep brows fresh.",
      },
      {
        question: "How long does microblading last?",
        answer:
          "Results typically last 12–24 months, depending on the skin type, lifestyle, and adherence to aftercare. Fading is a gradual process, and color boosts can be scheduled as needed.",
      },
      {
        question: "What is the cost of microblading at Rejuvenate Skin Spa?",
        answer:
          "Microblading sessions typically start at $495, including the initial appointment and one touch-up. Additional touch-ups may be priced separately.",
      },
    ],
  },
]

export default function MicrobladingTreatmentFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const jsonLd = {
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
    <section className="py-16 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Microblading Services FAQ's
          </h2>
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
                          <div className="text-gray-600 whitespace-pre-line">{item.answer}</div>
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
  )
}
