"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSection {
  title: string
  faqs: FAQItem[]
}

const faqSections: FAQSection[] = [
  {
    title: "Understanding the Treatment",
    faqs: [
      {
        question: "What is Plexr sun spot removal?",
        answer:
          "Plexr sun spot removal is a non-invasive cosmetic procedure that uses plasma energy to precisely target and remove areas of sun-induced pigmentation (also known as solar lentigines or age spots). The treatment safely sublimates the pigmented skin cells, encouraging renewal and a more even complexion.",
      },
      {
        question: "How does Plexr work to remove sun spots?",
        answer:
          "Plexr generates a focused arc of plasma energy that gently heats and vaporizes the pigmented surface layer of the skin without affecting surrounding tissue. This controlled microtrauma stimulates natural skin regeneration, encouraging new, clearer skin to replace the treated area.",
      },
      {
        question: "What skin issues can Plexr treat besides sun spots?",
        answer:
          "In addition to sun spots, Plexr can also address age spots, freckles, melasma (in some cases), skin tags, moles (benign), fine lines, wrinkles, and general skin laxity. Its versatility makes it a popular option in aesthetic dermatology.",
      },
      {
        question: "Is Plexr sun spot removal a laser treatment?",
        answer:
          "No. Plexr is a plasma-based treatment, not a laser. It does not use heat or light but ionizes atmospheric gas to create a plasma arc. This makes it a safe alternative for skin types that are more prone to pigmentation changes after traditional laser therapy.",
      },
      {
        question: "Can Plexr be used on all areas of the body?",
        answer:
          "Yes. Plexr can treat sun spots on the face, neck, chest, hands, shoulders, arms, and other areas that are commonly affected by sun exposure.",
      },
    ],
  },
  {
    title: "Safety & Candidacy",
    faqs: [
      {
        question: "Is Plexr safe for sun spot removal?",
        answer:
          "Yes, when administered by a qualified provider. Plexr offers precise targeting with minimal damage to surrounding skin, resulting in a lower risk of scarring or post-inflammatory hyperpigmentation compared to some other treatments.",
      },
      {
        question: "Who is a good candidate for Plexr sun spot removal?",
        answer:
          "Adults with clearly defined sun spots or hyperpigmentation and good overall skin health are typically ideal candidates. Individuals with darker skin tones, active skin infections, or a tendency toward keloid scarring should consult a practitioner for a personalized evaluation.",
      },
      {
        question: "Is Plexr safe for all skin tones?",
        answer:
          "While Plexr is generally safe for Fitzpatrick skin types I–IV, darker skin types (V–VI) may have a slightly higher risk of post-inflammatory pigmentation. A provider experienced in treating diverse skin tones can help assess risk and plan your treatment safely.",
      },
      {
        question: "Will I need a consultation before treatment?",
        answer:
          "Yes. A pre-treatment consultation is required to confirm that your pigmentation is benign and that you are a good candidate for plasma resurfacing.",
      },
    ],
  },
  {
    title: "The Procedure",
    faqs: [
      {
        question: "What happens during a Plexr sun spot removal session?",
        answer:
          "The provider will clean and numb the area before applying the Plexr device to each sun spot individually. Plasma arc sublimates the pigmented tissue, forming small carbon crusts over the treated area. Sessions typically last 15–30 minutes, depending on the number of spots.",
      },
      {
        question: "Is the procedure painful?",
        answer:
          "Most clients report only mild discomfort, often described as a light stinging or tingling sensation. A topical anesthetic is used to enhance comfort during the session.",
      },
      {
        question: "How many treatments will I need?",
        answer:
          "Many sun spots can be removed with a single session. However, depending on their size, depth, and number, some patients may require 2–3 treatments spaced several weeks apart for optimal results.",
      },
    ],
  },
  {
    title: "Recovery & Aftercare",
    faqs: [
      {
        question: "What is the recovery process like?",
        answer:
          "Treated areas will develop small scabs or crusts that fall off naturally over 5–10 days. Mild redness or pinkness may remain as the skin continues to heal. Most clients return to normal activities within 1–3 days, avoiding sun exposure and harsh products during recovery.",
      },
      {
        question: "What aftercare is required?",
        answer:
          "Keep the area clean and dry, avoid picking at the scabs, and apply any prescribed soothing ointments as directed. Once healed, apply a broad-spectrum sunscreen daily to protect the new skin and prevent future pigmentation.",
      },
      {
        question: "Can I wear makeup after the procedure?",
        answer:
          "You should avoid applying makeup to the treated area until after the scabs have fallen off and the skin is fully healed. Mineral makeup may be recommended once the skin has closed.",
      },
    ],
  },
  {
    title: "Results & Expectations",
    faqs: [
      {
        question: "When can I expect to see results from the Plexr sun spot removal?",
        answer:
          "Initial improvements are usually visible within 1–2 weeks once the scabs have cleared. Full results continue to improve over 4–6 weeks as the skin regenerates.",
      },
      {
        question: "Are the results permanent?",
        answer:
          "Plexr removes existing sun spots, but it cannot prevent new ones from forming. Proper sun protection is crucial for maintaining results and preventing the recurrence of pigmentation.",
      },
      {
        question: "Will there be a scar?",
        answer:
          "When aftercare instructions are followed carefully, Plexr has a very low risk of scarring. Avoiding sun exposure and refraining from picking at the treated area is crucial to a smooth recovery.",
      },
    ],
  },
]

export default function SunSpotRemovalTreatmentFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const allFAQs = faqSections.flatMap((section) =>
    section.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  )

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFAQs,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Sun Spot Removal Treatment FAQ's
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Plexr sun spot removal treatment.
            </p>
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
                      <div key={faqIndex} className="border border-gray-300 rounded-md">
                        <button
                          className="w-full text-left p-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-inset rounded-md"
                          onClick={() => toggleItem(itemId)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${itemId}`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                            <ChevronDown
                              className={`h-4 w-4 text-gray-600 transform transition-transform duration-200 flex-shrink-0 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </button>
                        {isOpen && (
                          <div id={`faq-answer-${itemId}`} className="border-t border-gray-200 p-4">
                            <p className="text-gray-700 leading-relaxed pt-3">{faq.answer}</p>
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
