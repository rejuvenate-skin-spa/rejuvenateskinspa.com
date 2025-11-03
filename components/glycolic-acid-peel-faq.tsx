"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSection {
  section: string
  faqs: FAQItem[]
}

const faqData: FAQSection[] = [
  {
    section: "Understanding the Treatment",
    faqs: [
      {
        question: "What is a glycolic acid peel?",
        answer:
          "A glycolic acid peel is a superficial chemical exfoliation treatment that uses glycolic acid, a type of alpha hydroxy acid (AHA), to gently remove dead skin cells, improve skin texture, and stimulate cellular renewal.",
      },
      {
        question: "What skin concerns can glycolic acid peels address?",
        answer:
          "- Dull, uneven skin tone\n- Fine lines and mild wrinkles\n- Mild acne and post-acne marks\n- Rough or textured skin\n- Early signs of aging",
      },
      {
        question: "How does glycolic acid work on the skin?",
        answer:
          "Glycolic acid has the smallest molecular size among AHAs, allowing it to penetrate deeply. It breaks down the bonds that hold dead skin cells together, promoting exfoliation and improving skin clarity and texture.",
      },
      {
        question: "Is a glycolic peel considered mild or aggressive?",
        answer:
          "Glycolic acid peels are considered mild to moderate, depending on the concentration of the acid. They are great for first-time peel clients or as part of a routine maintenance regimen.",
      },
      {
        question: "What glycolic acid strengths are used at Rejuvenate Skin Spa?",
        answer:
          "We use glycolic peels ranging from 20% to 50% based on skin type, goals, and prior peel experience. Higher strengths may be used in a progressive treatment plan.",
      },
    ],
  },
  {
    section: "Safety & Candidacy",
    faqs: [
      {
        question: "Who is a good candidate for a glycolic acid peel?",
        answer:
          "Anyone looking to improve skin brightness, smoothness, and concerns related to early aging is a candidate. It's ideal for sensitive or lighter skin types and works well as a seasonal or maintenance treatment.",
      },
      {
        question: "Are glycolic acid peels safe for all skin tones?",
        answer:
          "Yes, glycolic acid peels can be used safely on most skin tones; however, deeper skin tones may require more conservative approaches and pre-treatment guidance.",
      },
      {
        question: "Are there any contraindications for this treatment?",
        answer:
          "Avoid if you:\n- Are using retinoids or exfoliants without a break period\n- Have active skin infections or open wounds\n- Are allergic to AHAs\n- Are pregnant or breastfeeding (without provider approval)",
      },
      {
        question: "Can glycolic acid peels be combined with other treatments?",
        answer:
          "Yes, glycolic peels can complement treatments like facials, dermaplaning, or microneedling (with appropriate timing). Your provider will create a customized treatment plan tailored to your specific needs.",
      },
    ],
  },
  {
    section: "The Procedure",
    faqs: [
      {
        question: "What happens during a glycolic acid peel appointment?",
        answer:
          "After cleansing the skin, glycolic acid is applied and left on for a few minutes. You may feel tingling or warmth. It is then neutralized and followed by soothing and hydrating products.",
      },
      {
        question: "Does it hurt?",
        answer:
          "Most clients feel mild tingling or heat, but discomfort is minimal. Glycolic peels are known for being well-tolerated and gentle.",
      },
      {
        question: "How long does the treatment take?",
        answer:
          'The session typically lasts 30 minutes. It\'s often considered a "lunchtime peel" due to minimal disruption to daily routine.',
      },
      {
        question: "How often should I get a glycolic acid peel?",
        answer:
          "Depending on your skin goals, peels can be done every 2–4 weeks in a series of 4–6 for optimal results. Monthly treatments are great for maintenance.",
      },
    ],
  },
  {
    section: "Recovery & Results",
    faqs: [
      {
        question: "Will I peel after treatment?",
        answer:
          "You may experience some dryness or flaking for 1–3 days, but significant visible peeling is uncommon. The skin will feel smoother and look brighter.",
      },
      {
        question: "What should I avoid after a glycolic peel?",
        answer:
          "- Exfoliants or active ingredients for 3–5 days\n- Direct sun exposure or heat\n- Picking or rubbing the skin\n\nAlways follow your provider's aftercare instructions.",
      },
      {
        question: "When will I see results?",
        answer:
          "Improvements in skin texture and radiance may appear within a few days. Continued results develop over several treatments.",
      },
      {
        question: "How long do results last?",
        answer:
          "Results can last for several weeks with proper skincare. Regular treatments and sun protection extend the benefits.",
      },
      {
        question: "How much does a glycolic acid peel cost at Rejuvenate Skin Spa?",
        answer:
          "Sessions typically start at $125. Package pricing and combination treatments may be available to achieve enhanced results and added value.",
      },
    ],
  },
]

export function GlycolicAcidPeelFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const formatAnswer = (answer: string) => {
    return answer.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < answer.split("\n").length - 1 && <br />}
      </span>
    ))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Glycolic Acid Peel Treatment Services FAQ's
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our glycolic acid peel treatments.
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
                      <div key={faqIndex} className="border border-gray-200 rounded-lg">
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-inset"
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
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{formatAnswer(faq.answer)}</p>
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
