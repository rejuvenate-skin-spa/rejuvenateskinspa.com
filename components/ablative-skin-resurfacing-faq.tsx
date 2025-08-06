"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqSections = [
  {
    title: "Understanding the Treatment",
    faqs: [
      {
        question: "What is an ablative PlexrPlasy skin treatment?",
        answer:
          "Ablative Plexr treatment is an advanced skin tightening procedure that utilizes focused plasma energy to remove damaged outer skin layers, stimulating the production of deep collagen, and prompting fibroblasts (cells that produce collagen and elastin) to regenerate and tighten the skin. This controlled micro-ablation rejuvenates the skin without the need for cutting or surgery, leaving your skin 10 years younger.",
      },
      {
        question: "How is ablative PlexrPlasy different from non-ablative or semi-ablative treatments?",
        answer:
          "Ablative treatments penetrate deeper and involve intentional skin removal to trigger a stronger regenerative response. While non-ablative and semi-ablative options focus on stimulation and skin resurfacing. While ablative PlexrPlasy is more invasive, it also delivers more significant and dramatic outcomes, as well as longer-lasting results.",
      },
      {
        question: "What skin conditions respond best to ablative Plexr treatment?",
        answer:
          "Ablative PlexrPlasy is excellent for erasing deep wrinkles, acne scars, melasma, sun damage, uneven texture, saggy skin, or skin laxity. It offers one of the most powerful nonsurgical solutions for facial and overall body rejuvenation.",
      },
      {
        question: "Does ablative PlexrPlasy help with acne scars or surgical scars?",
        answer:
          "Yes. It smooths and remodels scar tissue by vaporizing damaged skin layers and stimulating the production of new collagen(fibroblasting), making it an excellent treatment for acne scars, surgical scars, and post-inflammatory hyperpigmentation marks.",
      },
      {
        question: "How does ablative PlexrPlasy improve skin tone and texture?",
        answer:
          "The treatment tightens sagging skin, rejuvenates rough skin, and reduces uneven pigmentation by removing damaged layers and promoting the growth of new collagen from healthy skin cells. The results are a smoother, more youthful, and radiant complexion.",
      },
    ],
  },
  {
    title: "Candidacy & Safety",
    faqs: [
      {
        question: "Who is a good candidate for ablative Plexr resurfacing?",
        answer:
          "You may be a good candidate if you have significant signs of aging, deep wrinkles, scars, or pigmentation issues, and are willing to commit to a downtime period. A consultation is required to evaluate your skin type, medical history, and treatment goals.",
      },
      {
        question: "Is ablative Plexr suitable for all skin types?",
        answer:
          "It's most suitable for fair to medium skin tones (Fitzpatrick I–IV). Individuals with darker skin types may be at a higher risk of pigmentation changes and should be evaluated carefully by a qualified healthcare provider.",
      },
    ],
  },
  {
    title: "Cost & Treatment Planning",
    faqs: [
      {
        question: "How much does an ablative Plexr treatment cost?",
        answer:
          "Treatment costs typically range from $500 to $2,000, depending on the area treated and the complexity of the case. Smaller areas, such as the upper lip or eyes, incur less cost, while full-face or multiple-area treatments are more extensive and have higher fees.",
      },
      {
        question: "How many sessions of ablative Plexr will I need?",
        answer:
          "Many clients see dramatic improvement with a single session. However, depending on the severity of the condition or aesthetic goals, additional sessions may be required and performed after 8 to 12 weeks.",
      },
    ],
  },
  {
    title: "Pre-Treatment Preparation",
    faqs: [
      {
        question: "How should I prepare for an ablative Plexr treatment?",
        answer:
          "Avoid sun exposure, retinoids, alpha hydroxy acids (AHAs), and blood-thinning substances like alcohol, ibuprofen, turmeric, and garlic for at least a week. Use SPF daily and keep your skin well hydrated.",
      },
      {
        question: "Can I wear makeup or skincare the day of treatment?",
        answer:
          "No. The skin should be clean and free from products. Your provider will cleanse and numb the area before starting the procedure.",
      },
    ],
  },
  {
    title: "During the Procedure",
    faqs: [
      {
        question: "What happens during the ablative Plexr procedure?",
        answer:
          "After numbing, the provider uses the Plexr device to apply a series of plasma arcs that create micro-injuries and carbon crusts on the skin. You may feel warmth or slight discomfort. Treatment typically lasts 30–60 minutes, depending on the area being treated.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Most clients tolerate it well thanks to topical numbing. You may feel a stinging or heated sensation during the procedure and a sunburn-like feeling afterward.",
      },
    ],
  },
  {
    title: "Recovery & Aftercare",
    faqs: [
      {
        question: "What is recovery like after ablative Plexr resurfacing?",
        answer:
          "Expect redness, swelling, and carbon crusts for 7 to 12 days. The crusts will peel away as new skin forms underneath. Swelling, especially around the eyes, may last 2–4 days. Redness may persist slightly longer.",
      },
      {
        question: "How should I care for my skin during the recovery process?",
        answer:
          "Cleanse gently, apply recommended healing ointments, and avoid picking at crusts. Stay hydrated and keep the skin moisturized. Do not use active skincare products until your healthcare provider has cleared you to do so.",
      },
      {
        question: "Is sun protection essential after ablative Plexr treatment?",
        answer:
          "Yes. Sun exposure during healing can cause hyperpigmentation or damage. Use a high-SPF, broad-spectrum sunscreen daily and avoid direct sunlight for several weeks after treatment.",
      },
      {
        question: "Can I wear makeup after an ablative Plexr treatment?",
        answer:
          "Only after the crusts have entirely shed and your provider approves. Typically, you can resume mineral or medical-grade makeup around day 10–14.",
      },
      {
        question: "Are there any side effects or risks with ablative Plexr?",
        answer:
          "Temporary redness, swelling, crusting, and skin sensitivity may occur. Rare side effects include pigment changes or scarring, particularly if aftercare instructions aren't followed.",
      },
    ],
  },
  {
    title: "Results & Maintenance",
    faqs: [
      {
        question: "How soon can I expect to see results from ablative Plexr?",
        answer:
          "Initial improvements in skin texture and tightening are highly visible within 1–2 weeks. Complete collagen remodeling and skin tone improvement continue over 6–12 weeks post-treatment.",
      },
      {
        question: "How long do the results of ablative Plexr last?",
        answer:
          "With proper skincare and sun protection, results can last 2–5 years or more. Additionally, collagen production continues for up to 9 months after the initial treatment, resulting in gradual improvement of skin firmness over time.",
      },
      {
        question: "Will I need maintenance treatments?",
        answer:
          "Maintenance isn't always necessary, but annual or biennial touch-ups can help extend and enhance your results, especially if you have ongoing concerns due to aging or sun exposure.",
      },
      {
        question: "Do I need follow-up appointments after treatment?",
        answer:
          "Yes. Follow-ups help your provider monitor your healing, evaluate the results, and recommend any additional skincare or maintenance as needed. Always attend any scheduled post-treatment visits.",
      },
    ],
  },
]

export function AblativeSkinResurfacingFAQ() {
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
              Ablative Skin Resurfacing FAQ's
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our ablative Plexr treatments</p>
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
