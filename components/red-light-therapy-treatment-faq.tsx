"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqSections = [
  {
    title: "Understanding the Treatment",
    faqs: [
      {
        question: "What is red light therapy?",
        answer:
          "Red light therapy (also known as low-level light therapy or photobiomodulation) uses specific wavelengths of red and near-infrared light to penetrate the skin and stimulate cellular energy production, promoting healing and rejuvenation.",
      },
      {
        question: "How does red light therapy work?",
        answer:
          "The red and near-infrared light stimulates the mitochondria in your cells to produce more ATP (cellular energy), which enhances tissue repair, reduces inflammation, and boosts skin renewal.",
      },
      {
        question: "What are the benefits of red light therapy?",
        answer:
          "- Improves skin tone and texture\n- Reduces fine lines and wrinkles\n- Stimulates collagen and elastin production\n- Speeds wound and acne healing\n- Reduces inflammation and joint pain",
      },
      {
        question: "Is red light therapy safe?",
        answer:
          "Yes. Red light therapy is a non-invasive, pain-free, and UV radiation-free treatment. It is FDA-cleared and backed by clinical research.",
      },
      {
        question: "Is it the same as an infrared sauna or tanning beds?",
        answer:
          "No. Red light therapy utilizes non-heating, non-UV wavelengths and does not cause tanning or sweating, unlike infrared saunas or UV tanning beds.",
      },
    ],
  },
  {
    title: "Treatment Experience",
    faqs: [
      {
        question: "What should I expect during a red light therapy session?",
        answer:
          "You'll relax under a panel or dome of red LED lights for 10–30 minutes. The treatment is completely painless, and many clients find it calming and meditative.",
      },
      {
        question: "Does red light therapy hurt?",
        answer:
          "Not at all. It is a gentle and comfortable treatment. Most clients feel relaxed and refreshed after a session.",
      },
      {
        question: "How many sessions are required to see results?",
        answer:
          "Visible improvements often appear after 6–8 sessions. For optimal results, a series of treatments, 2–3 times per week, is recommended initially.",
      },
      {
        question: "Can I combine red light therapy with other treatments?",
        answer:
          "Yes. It's a perfect complement to facials, microneedling, laser treatments, and aftercare recovery. It helps calm inflammation and accelerate healing.",
      },
      {
        question: "What areas can be treated with red light therapy?",
        answer:
          "Red light can be used on the face, neck, chest, scalp, joints, and other areas of the body, depending on your goals.",
      },
    ],
  },
  {
    title: "Safety & Results",
    faqs: [
      {
        question: "Is there downtime after red light therapy?",
        answer:
          "No. There is no downtime or recovery required. You can return to normal activities immediately after your session.",
      },
      {
        question: "Are there any side effects?",
        answer:
          "Side effects are rare and minimal. Some clients may experience mild, temporary redness or warmth, but this typically resolves quickly.",
      },
      {
        question: "Is red light therapy safe for all skin tones?",
        answer: "Yes. It is safe and effective for all Fitzpatrick skin types.",
      },
      {
        question: "When will I see results?",
        answer:
          "Most people notice brighter, more radiant skin within a few sessions. Long-term collagen production and anti-aging results build over time.",
      },
      {
        question: "How much does red light therapy cost at Rejuvenate Skin Spa?",
        answer:
          "Red light therapy starts at $25 per session. Packages and add-on pricing are available when combined with other services.",
      },
    ],
  },
]

export default function RedLightTherapyTreatmentFAQ() {
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
              Red Light Therapy Services FAQ's
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our red light therapy treatments</p>
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
