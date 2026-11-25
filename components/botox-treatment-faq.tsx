"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { buildFAQPage } from "@/lib/schema"

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
    section: "Understanding Botox",
    items: [
      {
        question: "What is Botox?",
        answer:
          "Botox is a cosmetic neuromodulator used to temporarily relax the facial muscles that create expression lines. At Rejuvenate Skin Spa in Queen Creek, Arizona, it is used to soften forehead lines, frown lines between the brows, and crow's feet.",
      },
      {
        question: "Who performs Botox at Rejuvenate Skin Spa?",
        answer:
          "Botox treatments are performed by Amy Ball, PA-C. She has been working in dermatology for several years. Every visit begins with a consultation so the plan matches your features and goals.",
      },
      {
        question: "What areas can be treated?",
        answer:
          "The most common areas are the forehead, the frown lines between the eyebrows, and crow's feet at the outer corners of the eyes. Amy reviews which areas make sense for you during your consultation.",
      },
      {
        question: "Is Botox surgery?",
        answer:
          "No. Botox is a non-surgical injectable treatment. There are no incisions, and most clients return to their day afterward.",
      },
    ],
  },
  {
    section: "The Visit",
    items: [
      {
        question: "What happens during a Botox appointment?",
        answer:
          "Amy reviews your goals and facial movement, maps the treatment areas, and completes the injections. She also covers aftercare before you leave. Plan on a visit of about 30 to 45 minutes.",
      },
      {
        question: "Does Botox require downtime?",
        answer:
          "Most clients have little to no downtime. You may notice small bumps or mild redness at the injection sites that settle quickly. Avoid rubbing the treated areas and skip strenuous exercise for the rest of the day.",
      },
      {
        question: "When will I see results?",
        answer:
          "Softening often begins within a few days. The full effect is typically visible around two weeks. Results vary from person to person.",
      },
      {
        question: "How long does Botox last?",
        answer:
          "Cosmetic Botox results commonly last about three to four months. Amy can talk through a maintenance schedule once you see how your results settle.",
      },
    ],
  },
  {
    section: "Candidacy & Pricing",
    items: [
      {
        question: "Who may want to postpone Botox?",
        answer:
          "Tell Amy if you are pregnant or breastfeeding, have a neuromuscular condition, have an active skin infection in the treatment area, or have had a previous reaction to botulinum toxin. She reviews your history before recommending treatment.",
      },
      {
        question: "How much does Botox cost at Rejuvenate Skin Spa?",
        answer:
          "Botox starts at $13 per unit at Rejuvenate Skin Spa in Queen Creek. The total depends on the number of units in your treatment plan.",
      },
      {
        question: "Where is Botox offered?",
        answer:
          "Botox is offered at Rejuvenate Skin Spa, 20162 E. Sonoqui Blvd., Queen Creek, AZ 85142. The studio serves Queen Creek, San Tan Valley, Gilbert, Mesa, Chandler, and Apache Junction.",
      },
    ],
  },
]

export default function BotoxTreatmentFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const faqSchema = buildFAQPage(
    faqData.flatMap((section) =>
      section.items.map((item) => ({ question: item.question, answer: item.answer }))
    )
  )

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
            Botox Treatment FAQ&apos;s
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  )
}
