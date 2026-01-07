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
    section: "Understanding Microneedling",
    faqs: [
      {
        question: "What is microneedling?",
        answer:
          "Microneedling is a skin rejuvenation treatment that creates tiny channels in the skin to stimulate the body's natural collagen production. This process helps improve skin texture, tone, and overall appearance over time.",
      },
      {
        question: "What types of microneedling do you offer?",
        answer:
          "We offer three microneedling options at Rejuvenate Skin Spa:\n\n• Traditional Microneedling – Classic collagen induction therapy using ultra-fine needles\n• SQT Bio-Microneedling – Needle-free treatment using natural marine sponge spicules\n• Plasma Microneedling – Advanced treatment combining plasma technology with microneedling for enhanced results",
      },
      {
        question: "How do I know which microneedling option is right for me?",
        answer:
          "The best option depends on your skin concerns, sensitivity, and how much downtime you can accommodate. SQT Bio is ideal for sensitive skin or first-timers with minimal downtime. Traditional Microneedling is versatile for general rejuvenation. Plasma Microneedling offers the most intensive results for deeper concerns. We're happy to discuss your goals by phone or during a consultation.",
      },
    ],
  },
  {
    section: "Safety & Candidacy",
    faqs: [
      {
        question: "Is microneedling safe?",
        answer:
          "Yes, when performed by a trained professional, microneedling is safe and effective. We use medical-grade equipment and customize the treatment to your skin type and concerns. We'll review your medical history and skin condition before recommending a treatment.",
      },
      {
        question: "Who should avoid microneedling?",
        answer:
          "Microneedling may not be suitable for those with active skin infections, certain skin conditions, or who are pregnant. Those with a history of keloid scarring or blood clotting disorders should also consult with their provider. Your provider will review your history during a consultation to determine if the treatment is appropriate for you.",
      },
      {
        question: "Can microneedling help with texture and acne scarring?",
        answer:
          "Yes. Microneedling is commonly used to address uneven texture, enlarged pores, and the appearance of acne scars. Results depend on the severity of the concern and the treatment plan selected. Multiple sessions typically provide the best results for scarring.",
      },
    ],
  },
  {
    section: "The Treatment Process",
    faqs: [
      {
        question: "What happens during a microneedling treatment?",
        answer:
          "Your skin will be cleansed and a topical numbing cream is typically applied to minimize discomfort. The treatment device is then passed over the skin to create controlled micro-channels. A hydrating serum may be applied during or after treatment. The entire session typically takes 45–75 minutes depending on the treatment type.",
      },
      {
        question: "Is microneedling painful?",
        answer:
          "A topical numbing cream is typically applied before treatment to minimize discomfort. Most clients describe the sensation as mild pressure or a light prickling feeling. SQT Bio-Microneedling is generally the most comfortable option as it doesn't use traditional needles.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "Most clients see the best results from a series of 3–6 treatments, spaced 4–6 weeks apart. Your provider will recommend a plan based on your goals and the specific treatment type. Some concerns like deep scarring may require additional sessions.",
      },
    ],
  },
  {
    section: "Recovery & Aftercare",
    faqs: [
      {
        question: "What is the recovery time after microneedling?",
        answer:
          "Recovery varies by treatment type:\n\n• SQT Bio-Microneedling – Minimal downtime; mild redness for 24–48 hours\n• Traditional Microneedling – 1–3 days of redness and sensitivity\n• Plasma Microneedling – 2–5 days of redness, possible mild swelling\n\nMost clients return to normal activities within a few days.",
      },
      {
        question: "What aftercare is required after microneedling?",
        answer:
          "Post-treatment care typically includes:\n\n• Avoiding direct sun exposure and wearing SPF 30+ daily\n• Using gentle, hydrating cleansers and moisturizers\n• Avoiding retinoids, exfoliants, and active ingredients for 5–7 days\n• Not touching or picking at treated skin\n• Avoiding saunas, steam rooms, and intense exercise for 24–48 hours",
      },
      {
        question: "Can I wear makeup after microneedling?",
        answer:
          "We recommend waiting at least 24 hours before applying makeup after microneedling. For Traditional and Plasma Microneedling, waiting 48–72 hours is ideal to allow the micro-channels to close. When you do apply makeup, use clean brushes and mineral-based products.",
      },
    ],
  },
  {
    section: "Results & Expectations",
    faqs: [
      {
        question: "When will I see results from microneedling?",
        answer:
          "Initial improvements may be noticeable within 1–2 weeks as skin heals and begins to regenerate. However, collagen remodeling continues over several months. Full results are typically seen 2–3 months after completing a series of treatments.",
      },
      {
        question: "How long do microneedling results last?",
        answer:
          "Results can last 6 months to over a year depending on your skin concerns, treatment type, and skincare routine. Maintaining results requires sun protection, a good skincare regimen, and periodic maintenance treatments as recommended by your provider.",
      },
      {
        question: "Can I combine microneedling with other treatments?",
        answer:
          "Yes, microneedling can be combined with other treatments for enhanced results. Popular combinations include pairing microneedling with chemical peels, LED therapy, or PRP (platelet-rich plasma). Treatments are typically spaced appropriately to allow for proper healing. We'll create a customized plan based on your goals.",
      },
    ],
  },
]

export default function MicroneedlingHubFAQ() {
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
      <section className="py-16 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Microneedling FAQ's
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most commonly asked questions about microneedling treatments.
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
