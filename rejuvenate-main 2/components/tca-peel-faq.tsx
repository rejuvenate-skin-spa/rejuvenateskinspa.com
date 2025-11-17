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
        question: "What is a TCA peel?",
        answer:
          "A TCA (trichloroacetic acid) peel is a medium-depth chemical peel that penetrates the upper and middle layers of the skin to treat imperfections like sun damage, pigmentation, acne scars, and fine lines. It promotes skin regeneration by exfoliating damaged cells and stimulating collagen production.",
      },
      {
        question: "What strengths of TCA peels are available at Rejuvenate Skin Spa?",
        answer:
          "We offer a range of TCA peels, including: Low-concentration (10–20%) TCA peels for gentle resurfacing and brightening, Medium-depth (25–35%) TCA peels for acne, aging skin, and pigmentation, and Advanced 50% TCA peels for body areas, including back, chest, hands, and arms. Our providers select the strength based on your goals, skin condition, and treatment area.",
      },
      {
        question: "What skin concerns do TCA peels address?",
        answer:
          "TCA peels effectively treat sun damage and age spots, melasma and hyperpigmentation, acne and acne scarring, rough skin texture, enlarged pores, and fine lines and dullness.",
      },
      {
        question: "Are TCA peels considered aggressive?",
        answer:
          "TCA peels are more intensive than superficial peels but less aggressive than ablative lasers. They provide a powerful resurfacing effect while remaining safe under professional care, provided proper aftercare is followed.",
      },
      {
        question: "How are TCA peels different from other chemical peels?",
        answer:
          "TCA peels penetrate deeper than glycolic or lactic acid peels and offer stronger skin regeneration. They're especially effective for pigmentation and acne scarring, and can be customized in depth and frequency.",
      },
    ],
  },
  {
    section: "Safety & Candidacy",
    faqs: [
      {
        question: "Who is a good candidate for a TCA peel?",
        answer:
          "Clients with concerns about pigmentation, texture, acne scars, or premature aging are ideal candidates. TCA peels are best suited for Fitzpatrick skin types I–IV; however, darker skin tones may require pre-treatment prep or modified protocols.",
      },
      {
        question: "Are TCA peels safe for darker skin tones?",
        answer:
          "Yes, with proper evaluation and pre/post-care. At Rejuvenate, we utilize conservative techniques and may recommend pigment suppression protocols to minimize the risk of post-inflammatory hyperpigmentation.",
      },
      {
        question: "Are there any contraindications?",
        answer:
          "TCA peels should be avoided if you are pregnant or breastfeeding, have active herpes, eczema, or open wounds, are using isotretinoin (Accutane), have recently had laser, waxing, or microneedling, or are prone to keloid scarring. Your provider will conduct a comprehensive assessment before initiating treatment.",
      },
      {
        question: "Can TCA peels be performed on the body?",
        answer:
          "Yes! Rejuvenate offers 50% TCA peels formulated specifically for body areas such as the back, chest, shoulders, arms, hands, and thighs. These help reduce keratosis pilaris, sun spots, and body acne.",
      },
    ],
  },
  {
    section: "The Procedure",
    faqs: [
      {
        question: "What happens during a TCA peel appointment?",
        answer:
          "Your skin is thoroughly cleansed, and the TCA solution is applied in layers. You may feel heat or stinging. After a few minutes, the peel is neutralized, and calming products and SPF are applied. The treatment typically lasts between 30 and 45 minutes.",
      },
      {
        question: "Will I need to prep my skin before a TCA peel?",
        answer:
          "Yes, in some cases. Pre-treatment with gentle exfoliants or pigment suppressants (like hydroquinone or kojic acid) may be recommended 1–2 weeks before deeper peels, especially for darker skin tones or those prone to pigmentation.",
      },
      {
        question: "How often should I get a TCA peel?",
        answer:
          "This depends on your goals and the depth of the peel. Lighter peels may be done monthly, while deeper peels are spaced 6–12 weeks apart. Most clients benefit from a series of 2 to 4 treatments.",
      },
    ],
  },
  {
    section: "Recovery & Results",
    faqs: [
      {
        question: "Will my skin peel after a TCA treatment?",
        answer:
          "Yes. Expect visible peeling to start 2–4 days post-treatment, lasting approximately 5–7 days. The extent of peeling varies based on peel strength and skin type. Do not pick or exfoliate peeling skin.",
      },
      {
        question: "What aftercare is required?",
        answer:
          "Keep the skin moisturized and use SPF daily, avoid makeup, retinoids, exfoliants, and heavy sun exposure for 7–10 days, and follow any custom care instructions provided. Proper aftercare is essential for optimal healing and achieving the best results.",
      },
      {
        question: "When will I see results?",
        answer:
          "After the peeling phase, the skin appears noticeably smoother, clearer, and more evenly toned. Full results continue to develop over 2–4 weeks as new collagen forms and pigmentation fades.",
      },
      {
        question: "How long do the results last?",
        answer:
          "With good skincare and sun protection, results can last several months or longer. Maintenance peels or seasonal treatments can prolong your glow and prevent the recurrence of concerns.",
      },
      {
        question: "How much do TCA peels cost at Rejuvenate Skin Spa?",
        answer:
          "TCA peel sessions start at $175, with pricing determined by the treatment strength and area. Body peels or multi-session packages may be available at a discounted rate.",
      },
    ],
  },
]

export function TcaPeelFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const structuredData = {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              TCA Peel Treatment Services FAQ's
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most frequently asked questions about our TCA chemical peel treatments.
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
                          <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-sage-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-sage-600 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-white border-t border-gray-200">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
