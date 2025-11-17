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
        question: "What is the BioRePeel 50% TCA Body Peel?",
        answer:
          "The BioRePeel 50 TCA Body Peel is a medical-grade, biphasic chemical peel specifically formulated for use on body areas. Using 50% trichloroacetic acid (TCA) along with nourishing ingredients, this treatment targets textural irregularities, pigmentation, and aging skin with minimal peeling and downtime.",
      },
      {
        question: "What areas can be treated with the 50% TCA body formula?",
        answer:
          "Commonly treated areas include the neck, chest, shoulders, back, arms, hands, knees, elbows, buttocks, and the intimate regions. It's ideal for larger zones or areas affected by body acne, keratosis pilaris, hyperpigmentation, or scarring.",
      },
      {
        question: "How does the 50% TCA formula differ from the facial version?",
        answer:
          "While both peels share similar active ingredients, the 50% TCA concentration is stronger and designed to penetrate thicker skin on the body. It provides deeper exfoliation and stimulation where facial formulas may not be as effective.",
      },
      {
        question: "What skin concerns does this peel help improve?",
        answer:
          "- Body acne and acne scars\n- Rough or uneven texture\n- Sun damage or discoloration\n- Stretch marks and scarring\n- Crepey or aging skin",
      },
      {
        question: "Is the BioRePeel 50 TCA a no-downtime body peel?",
        answer:
          "It is considered low-downtime for a body-grade peel. While some clients experience mild flaking or redness, there is typically no severe peeling or need to pause daily activities.",
      },
    ],
  },
  {
    section: "Safety & Candidacy",
    items: [
      {
        question: "Who is a good candidate for the BioRePeel 50% TCA Body Peel?",
        answer:
          "This peel is ideal for clients who want to improve body skin tone and texture, especially those with acne scars, hyperpigmentation, or early signs of aging on the body. It's suitable for most skin types with proper guidance.",
      },
      {
        question: "Is this peel safe for all skin tones?",
        answer:
          "Yes. BioRePeel's formulation is safe for all Fitzpatrick skin types when performed by trained professionals. The biphasic delivery system reduces the risk of post-inflammatory pigmentation.",
      },
      {
        question: "Are there any contraindications?",
        answer:
          "Avoid treatment if you:\n- Are pregnant or breastfeeding\n- Have active skin infections or open wounds\n- Are allergic to aspirin or salicylic acid\n- Have been on Accutane in the past 6 months\n- Have uncontrolled eczema or psoriasis in the treatment area",
      },
      {
        question: "Can the 50% TCA peel be used on sensitive areas of the skin?",
        answer:
          "Yes, but with caution. Intimate or thin-skin areas may be treated using modified protocols. A patch test or consultation may be recommended before treatment.",
      },
    ],
  },
  {
    section: "The Procedure",
    items: [
      {
        question: "What should I expect during a body peel treatment?",
        answer:
          "The area is cleansed, and the BioRePeel solution is applied in sections. A mild tingling or warmth may be felt during application. The solution is neutralized, and aftercare products are used. The procedure typically takes 30–60 minutes, depending on the area size.",
      },
      {
        question: "How many sessions will I need for the best results?",
        answer:
          "Most clients benefit from a series of 3–6 sessions spaced 2–3 weeks apart. Regular maintenance sessions, held every few months, can help preserve your results.",
      },
      {
        question: "Can this peel be combined with other treatments?",
        answer:
          "Yes. Body peels can be enhanced with LED therapy, microneedling, or dermaplaning, depending on the concern. Your provider will customize a plan for layered treatment that is safe and effective.",
      },
    ],
  },
  {
    section: "Aftercare & Results",
    items: [
      {
        question: "Is there downtime or peeling with this treatment?",
        answer:
          "You may experience light flaking or mild redness in the treated area, typically lasting 2–5 days. Most clients can continue normal activities with proper skin care and sun protection.",
      },
      {
        question: "What post-treatment care is recommended?",
        answer:
          "- Keep the area moisturized with gentle lotions or healing balms\n- Avoid hot showers, friction, or exfoliation for 3–5 days\n- Wear loose-fitting clothing to prevent irritation\n- Avoid sun exposure and apply SPF to exposed areas",
      },
      {
        question: "When will I see results?",
        answer:
          "You may notice smoother, brighter skin after just one treatment, but the best results typically appear after a series of treatments. Skin becomes softer, more even, and visibly improved in texture and tone.",
      },
      {
        question: "How much does the BioRePeel 50 TCA Body Peel cost?",
        answer:
          "Treatment prices typically range from $250 to $375 per area, depending on the size and any additional services. Package pricing may be available for multiple sessions or combination services.",
      },
    ],
  },
]

export default function BioRePeel50TCABodyPeelFAQ() {
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
    <section className="py-16 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
            BioRePeel 50% TCA Body Peel FAQ's
          </h2>
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
