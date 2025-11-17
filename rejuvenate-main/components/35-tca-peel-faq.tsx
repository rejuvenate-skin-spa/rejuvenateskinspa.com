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
        question: "What is the BioRePeel 35% TCA Facial Peel?",
        answer:
          "The BioRePeel 35 TCA Facial Peel is an innovative, biphasic peel that utilizes 35% trichloroacetic acid (TCA) to exfoliate, revitalize, and hydrate the skin, resulting in minimal visible peeling and downtime. It combines deep exfoliation with powerful skin regeneration for a clearer, more youthful appearance.",
      },
      {
        question: "How is the 35% TCA version different from other peels?",
        answer:
          "Unlike traditional TCA peels, which often result in heavy peeling and prolonged recovery, the BioRePeel's biphasic formulation enables deep action with minimal surface trauma. The lipid phase protects and nourishes the skin while the aqueous phase drives powerful exfoliating and rejuvenating effects.",
      },
      {
        question: "What skin concerns does the BioRePeel 35 TCA target?",
        answer:
          "• Acne and oily skin\n• Enlarged pores\n• Hyperpigmentation\n• Fine lines and early signs of aging\n• Dull, uneven texture\n• Sun damage and photoaging",
      },
      {
        question: "Is this peel only for the face?",
        answer:
          "While this version is optimized for the face, BioRePeel is also available in a 50% TCA strength for body areas such as the neck, chest, hands, and back. The 35% facial formula is specifically designed for the delicate facial skin.",
      },
      {
        question: 'Is the BioRePeel 35 TCA considered a "no-downtime" peel?',
        answer:
          'Yes. While some clients experience light flaking, most do not have visible peeling. This makes it an ideal "social peel" for those who want results without having to take time off work or events.',
      },
    ],
  },
  {
    section: "Safety & Candidacy",
    items: [
      {
        question: "Who is a good candidate for the BioRePeel 35 TCA Facial Peel?",
        answer:
          "Anyone with dull, congested, aging, or uneven facial skin may benefit from this treatment. It's ideal for acne-prone or combination skin, and safe for most Fitzpatrick skin types. A consultation is recommended for those with very sensitive skin or active skin conditions.",
      },
      {
        question: "Is the BioRePeel 35 TCA safe for darker skin tones?",
        answer:
          "Yes. Unlike many deeper TCA peels, BioRePeel's controlled delivery system minimizes the risk of post-inflammatory hyperpigmentation, making it suitable for darker skin types under the care of a qualified provider.",
      },
      {
        question: "Are there any contraindications for the 35% TCA peel?",
        answer:
          "You should avoid this treatment if you:\n• Are pregnant or breastfeeding\n• Have active herpes or skin infections\n• Have recently used Accutane or strong exfoliants\n• Are allergic to aspirin or salicylic acid\n• Have severely reactive or barrier-impaired skin",
      },
      {
        question: "Can this peel be used with acne medications?",
        answer:
          "Some medications may need to be paused before treatment. Your provider will advise you if adjustments are necessary, especially if you're using retinoids or antibiotics for acne.",
      },
    ],
  },
  {
    section: "The Procedure",
    items: [
      {
        question: "What should I expect during the treatment?",
        answer:
          "The treatment begins with a thorough cleanse. The BioRePeel solution is applied and left on for a few minutes. You may feel a light tingling or warm sensation. After neutralization, soothing products and SPF are applied. The full appointment takes about 30 minutes.",
      },
      {
        question: "How often should I get this facial peel?",
        answer:
          "A series of 3 treatments for non-acne and 4–6 treatments for acne patients, spaced 1–2 weeks apart, delivers optimal results. For maintenance, regular monthly treatments can help keep the skin refreshed and clear.",
      },
      {
        question: "Can BioRePeel be combined with other treatments?",
        answer:
          "Yes. It pairs well with dermaplaning, LED therapy, microneedling, and oxygen facials, though your provider will space or stack them appropriately to maximize benefits and minimize sensitivity.",
      },
    ],
  },
  {
    section: "Aftercare & Results",
    items: [
      {
        question: "Is there any peeling after a 35% TCA BioRePeel?",
        answer:
          "Most clients don't experience heavy peeling, though minor flaking can occur 1–3 days post-treatment. This is a normal part of the skin renewal process and should not be manually exfoliated.",
      },
      {
        question: "What aftercare should I follow?",
        answer:
          "• Avoid sun exposure for 48–72 hours\n• Use gentle cleansers and hydrating moisturizers\n• Apply SPF 30+ daily\n• Avoid actives like retinoids or exfoliants for 5–7 days",
      },
      {
        question: "When will I see results?",
        answer:
          "Many clients notice improved skin tone and glow after one treatment. Texture, breakouts, and pigmentation typically improve after 2–3 sessions, with maximum benefits seen after a full series.",
      },
      {
        question: "How much does a BioRePeel 35 TCA Facial Peel cost?",
        answer:
          "At Rejuvenate Skin Spa, single sessions typically range from $200 to $275, with discounted pricing available for treatment packages or combination services.",
      },
    ],
  },
]

export default function TCAFacialPeelFAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              BioRePeel 35% TCA Facial Peel FAQ's
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
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
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
    </>
  )
}
