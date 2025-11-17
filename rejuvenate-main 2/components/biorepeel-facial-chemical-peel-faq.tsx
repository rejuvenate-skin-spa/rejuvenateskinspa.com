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
        question: "What is a BioRePeel chemical peel?",
        answer:
          "BioRePeel is a biphasic (two-phase) medical-grade chemical peel designed to exfoliate, hydrate, and rejuvenate the skin without visible peeling or downtime. It uses a combination of trichloroacetic acid (TCA) and other active ingredients to resurface the skin while stimulating collagen and elastin production.",
      },
      {
        question: "How does BioRePeel differ from traditional chemical peels?",
        answer:
          "Unlike traditional peels that often cause heavy flaking or redness, BioRePeel offers a no-peel, no-downtime experience. Its unique formulation penetrates the skin without damaging the outer layer, making it ideal for year-round treatment and sensitive skin types.",
      },
      {
        question: "What are the benefits of BioRePeel?",
        answer:
          "• Improves skin texture and tone\n• Reduces acne and acne scars\n• Minimizes fine lines and pores\n• Brightens dull or sun-damaged skin\n• Promotes collagen and elastin regeneration\n• Safe for all skin types and tones",
      },
      {
        question: "Is BioRePeel a medical-grade treatment?",
        answer:
          "Yes. BioRePeel is a professional-strength, medical-grade peel used by licensed aestheticians or medical providers. It contains 35% TCA for the face and 50% for the body, making it effective for deep rejuvenation with minimal risk.",
      },
      {
        question: "What skin concerns does BioRePeel treat?",
        answer:
          "BioRePeel is effective for acne, hyperpigmentation, fine lines, enlarged pores, sun damage, and dull or uneven skin tone. It is also beneficial for those seeking maintenance or preventative skin care.",
      },
    ],
  },
  {
    section: "Safety & Candidacy",
    faqs: [
      {
        question: "Is BioRePeel safe for all skin tones?",
        answer:
          "Yes. BioRePeel is safe and effective for all Fitzpatrick skin types (I–VI). Its gentle formulation significantly reduces the risk of hyperpigmentation, making it an excellent option for individuals with darker skin tones.",
      },
      {
        question: "Who is a good candidate for BioRePeel?",
        answer:
          "Ideal candidates include those seeking to enhance skin clarity, tone, and texture without downtime. It's suitable for those dealing with acne, signs of aging, or dullness. Pregnant or breastfeeding individuals and those with active infections should consult with a provider first.",
      },
      {
        question: "Can BioRePeel be used year-round?",
        answer:
          "Yes. Because it doesn't cause significant photosensitivity or peeling, BioRePeel can be performed safely throughout the year, even during summer months.",
      },
      {
        question: "Are there any contraindications?",
        answer:
          "You should avoid BioRePeel if you have:\n• Active skin infections or cold sores\n• Open wounds or broken skin\n• Recent sunburn\n• Severe rosacea or eczema flares\n• Allergies to aspirin, salicylic acid, or other ingredients in the peel\n\nAlways consult your provider before treatment.",
      },
    ],
  },
  {
    section: "The Procedure",
    faqs: [
      {
        question: "What happens during a BioRePeel treatment?",
        answer:
          "Your skin will be cleansed, and the BioRePeel solution will be applied to the targeted area. The peel is left on for a few minutes and then removed. The procedure takes about 30 minutes and may be followed by LED therapy or other enhancements.",
      },
      {
        question: "Does BioRePeel hurt?",
        answer:
          "Most clients feel a mild tingling or warming sensation during application. The discomfort is minimal compared to traditional TCA or glycolic acid peels.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "Optimal results for acne patients, a series of 4–6 treatments spaced 1–2 weeks apart, and non-acne, a series of 3 treatments spaced 1-2 weeks apart, are recommended. Maintenance treatments can be done monthly or seasonally.",
      },
    ],
  },
  {
    section: "Recovery & Aftercare",
    faqs: [
      {
        question: "Is there any downtime after BioRePeel?",
        answer:
          "No. Most clients experience no visible peeling or irritation; however, some may notice light flaking or redness for 24–48 hours. You can return to work or social activities immediately.",
      },
      {
        question: "What aftercare is required?",
        answer:
          "• Avoid heavy exfoliants or retinoids for 5–7 days\n• Use gentle cleansers and moisturizers\n• Apply SPF 30+ daily\n• Avoid excessive sun exposure, saunas, and steam rooms for 48 hours\n\nFollowing post-care instructions ensures optimal results.",
      },
      {
        question: "Can I wear makeup after the treatment?",
        answer:
          "You may wear light makeup the next day, though waiting 24 hours is ideal. Mineral-based products are preferred during the healing phase.",
      },
    ],
  },
  {
    section: "Results & Expectations",
    faqs: [
      {
        question: "When can I expect to see results from BioRePeel?",
        answer:
          "Many clients notice an immediate glow and smoother texture after one session. Full improvements in tone, clarity, and firmness build over a series of treatments.",
      },
      {
        question: "Are the results permanent?",
        answer:
          "Results are long-lasting but not permanent. Routine maintenance and sun protection are essential for maintaining your results.",
      },
      {
        question: "Will my skin peel after BioRePeel?",
        answer:
          "Most people experience little to no visible peeling. The term 'peel' refers to the chemical exfoliation process at the cellular level, not the dramatic flaking that occurs.",
      },
      {
        question: "How much does BioRePeel cost?",
        answer:
          "Prices typically range from $175 to $275 per session, depending on the area treated and any additional services (such as microneedling). Packages may be available at discounted rates for multiple sessions.",
      },
    ],
  },
]

export default function BioRePeelFacialChemicalPeelFAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (sectionIndex: number, faqIndex: number) => {
    const key = `${sectionIndex}-${faqIndex}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  // Generate FAQ schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.flatMap((section) =>
      section.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer.replace(/\n/g, " "),
        },
      })),
    ),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              BioRePeel Treatment FAQ's
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most commonly asked questions about BioRePeel treatments.
            </p>
          </div>

          <div className="space-y-8">
            {faqData.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-semibold text-sage-600 mb-4">{section.section}</h3>
                <div className="space-y-4 mb-8">
                  {section.faqs.map((faq, faqIndex) => {
                    const key = `${sectionIndex}-${faqIndex}`
                    const isOpen = openItems[key]

                    return (
                      <div key={faqIndex} className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          onClick={() => toggleItem(sectionIndex, faqIndex)}
                          aria-expanded={isOpen}
                        >
                          <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-sage-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-sage-600 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="text-gray-600 leading-relaxed whitespace-pre-line">{faq.answer}</div>
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
