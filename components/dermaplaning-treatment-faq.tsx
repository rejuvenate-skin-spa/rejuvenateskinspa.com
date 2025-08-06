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
        question: "What is dermaplaning?",
        answer:
          "Dermaplaning is a non-invasive exfoliation treatment that uses a sterile surgical blade to gently remove dead skin cells and fine vellus hair (peach fuzz) from the skin's surface.",
      },
      {
        question: "What are the benefits of dermaplaning?",
        answer:
          "- Instantly smoother, brighter skin\n- Enhanced absorption of skincare products\n- Flawless makeup application\n- Reduced appearance of fine lines and acne scars",
      },
      {
        question: "Is dermaplaning the same as shaving?",
        answer:
          "While both remove hair, dermaplaning also exfoliates the top layer of dead skin, which shaving does not. It uses a professional surgical blade and should be performed by trained providers.",
      },
      {
        question: "Can dermaplaning help alleviate acne or reduce the appearance of acne scars?",
        answer:
          "Yes. It can improve the appearance of superficial acne scars and prevent clogged pores by removing debris and dead skin. However, it is not recommended for active, inflamed acne.",
      },
      {
        question: "Is dermaplaning safe?",
        answer:
          "Yes. When performed by a trained professional, dermaplaning is a very safe and low-risk treatment suitable for most skin types.",
      },
    ],
  },
  {
    section: "Safety & Candidacy",
    items: [
      {
        question: "Who is a good candidate for dermaplaning?",
        answer:
          "Most people can benefit, especially those with dry, rough, or dull skin. It's also great for people sensitive to acids or other exfoliants. Not suitable for those with active acne or open wounds.",
      },
      {
        question: "Is dermaplaning safe for pregnant or breastfeeding individuals?",
        answer:
          "Yes! Dermaplaning is an excellent alternative to chemical exfoliation for clients who want to avoid chemicals during pregnancy or breastfeeding.",
      },
      {
        question: "Are there any side effects or risks?",
        answer:
          "Side effects are minimal. You may experience slight redness or sensitivity for a few hours after treatment. Rarely, nicks or irritation can occur.",
      },
      {
        question: "Will dermaplaning make my facial hair grow back thicker or darker?",
        answer:
          "No. Dermaplaning does not alter the structure of the hair follicle. Hair will grow back at the same rate, thickness, and color.",
      },
      {
        question: "Can dermaplaning be combined with other treatments?",
        answer:
          "Absolutely. It enhances the effectiveness of facials, enzyme peels, LED therapy, and other skin treatments. Many clients use it as a prep step.",
      },
    ],
  },
  {
    section: "The Procedure",
    items: [
      {
        question: "What should I expect during a dermaplaning session?",
        answer:
          "Your skin will be cleansed, and then a sterile blade is used to scrape away dead skin and peach fuzz gently. The treatment is painless and typically takes 30–45 minutes.",
      },
      {
        question: "How often should I get dermaplaning?",
        answer: "Most clients benefit from treatments every 4–6 weeks, depending on skin type and goals.",
      },
      {
        question: "Does dermaplaning hurt?",
        answer: "Not at all. It's a painless treatment with no downtime, and most clients find it relaxing.",
      },
      {
        question: "Is there any prep needed before dermaplaning?",
        answer:
          "Avoid using exfoliating products (such as retinols, AHAs, and BHAs) for 3–5 days prior. Please inform your provider if you experience any skin irritation or have undergone recent cosmetic procedures.",
      },
    ],
  },
  {
    section: "Recovery & Results",
    items: [
      {
        question: "Is there downtime after dermaplaning?",
        answer:
          "There is little to no downtime. You may experience mild redness or sensitivity, but most people return to normal activities immediately.",
      },
      {
        question: "What should I avoid after dermaplaning?",
        answer:
          "- Avoid direct sun exposure for 48 hours\n- Wear SPF daily\n- Avoid active ingredients for 2–3 days\n- Refrain from using exfoliants or scrubs",
      },
      {
        question: "When will I see results?",
        answer:
          "Immediately! Your skin will look and feel smoother, brighter, and more refined immediately after your treatment.",
      },
      {
        question: "How long do the results last?",
        answer:
          "Results typically last 3–4 weeks. Regular treatments can maintain your glow and support long-term skin health.",
      },
      {
        question: "How much does dermaplaning cost at Rejuvenate Skin Spa?",
        answer:
          "Dermaplaning treatments typically start at $95. It can also be added to facials or peels for enhanced results.",
      },
    ],
  },
]

export default function DermaplaningTreatmentFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
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
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Dermaplaning Treatment Services FAQ's
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
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
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
                          <p className="text-gray-600 leading-relaxed">{formatAnswer(item.answer)}</p>
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

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </section>
  )
}
