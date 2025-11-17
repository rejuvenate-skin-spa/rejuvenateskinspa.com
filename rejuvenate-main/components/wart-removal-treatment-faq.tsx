"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    section: "Understanding the Treatment",
    questions: [
      {
        question: "What is Plexr wart removal?",
        answer:
          "Plexr wart removal is a non-invasive dermatological treatment that uses plasma energy to precisely ablate and dry out common warts without cutting or surgery. The plasma arc sublimates the affected tissue, allowing the wart to dry up and naturally slough off during the healing process.",
      },
      {
        question: "How does Plexr work to remove warts?",
        answer:
          "Plexr creates a focused plasma arc that interacts with the wart tissue at the surface. This energy causes thermal disruption and dehydrates the wart without damaging the surrounding healthy skin, initiating a controlled healing response.",
      },
      {
        question: "What types of warts can Plexr treat?",
        answer:
          "Plexr is commonly used to treat non-genital, benign skin warts such as common warts (verruca vulgaris), flat warts, and plantar warts. A consultation is required to ensure the lesion is non-cancerous and suitable for treatment.",
      },
      {
        question: "Is Plexr the same as freezing or burning off a wart?",
        answer:
          "No. Plexr is gentler and more precise. It doesn't freeze (like cryotherapy) or use harsh chemicals or electrocautery. It uses low-temperature plasma energy to achieve removal with reduced trauma and minimal downtime.",
      },
      {
        question: "Is Plexr better than over-the-counter wart treatments?",
        answer:
          "Yes. OTC wart treatments often require multiple applications and can damage surrounding tissue. Plexr offers faster, more targeted removal with fewer sessions and a lower risk of scarring or irritation.",
      },
    ],
  },
  {
    section: "Safety & Candidacy",
    questions: [
      {
        question: "Is Plexr safe for wart removal?",
        answer:
          "Yes. When performed by a trained provider, Plexr is safe and effective for removing benign warts. It minimizes the risk of bleeding and infection and offers precise control over the treatment area.",
      },
      {
        question: "Who is a good candidate for Plexr wart removal?",
        answer:
          "Most healthy adults and teens with stubborn or cosmetically undesirable warts are good candidates. Individuals with immune system disorders, active skin infections, or uncontrolled diabetes should discuss options with a provider.",
      },
      {
        question: "Can Plexr be used on all skin types?",
        answer:
          "Yes. Plexr is generally safe for all Fitzpatrick skin types. It does not rely on pigment, making it safer for individuals with darker skin compared to many laser treatments.",
      },
      {
        question: "Should a wart be diagnosed before it is removed?",
        answer:
          "Yes. A healthcare professional must evaluate any lesion before removal. Warts that are suspicious, changing in appearance, or located in sensitive areas should be examined to rule out malignancy.",
      },
    ],
  },
  {
    section: "The Procedure",
    questions: [
      {
        question: "What happens during a Plexr wart removal session?",
        answer:
          "The treatment area is cleaned and numbed with a topical anesthetic. The Plexr device is used to apply short bursts of plasma energy to the wart, causing it to desiccate (dry out). The procedure usually takes 5–20 minutes, depending on the number and size of warts.",
      },
      {
        question: "Is wart removal with Plexr painful?",
        answer:
          "Most clients experience minimal discomfort. A numbing cream is applied to reduce any sensation. Some describe the feeling as a warm or prickling sensation.",
      },
      {
        question: "How many treatments will I need?",
        answer:
          "Many warts resolve after one session, but more stubborn or larger warts may require two or more sessions spaced a few weeks apart. Your provider will assess progress and plan accordingly.",
      },
    ],
  },
  {
    section: "Recovery & Aftercare",
    questions: [
      {
        question: "What is the healing process like?",
        answer:
          "A small scab or crust will form at the treatment site and fall off naturally in 5–10 days. Mild redness or sensitivity may persist temporarily. Full skin normalization typically occurs within 2 to 4 weeks.",
      },
      {
        question: "What aftercare is required?",
        answer:
          "Keep the area clean and dry. Avoid picking at scabs, soaking the area, or exposing it to the sun until fully healed. Use any prescribed topical ointments and avoid irritants.",
      },
      {
        question: "Can I return to work or my daily activities?",
        answer:
          "Yes. There is minimal downtime after Plexr wart removal. Most people return to normal activities the same day or the next, although contact sports and swimming should be avoided for a few days.",
      },
    ],
  },
  {
    section: "Results & Expectations",
    questions: [
      {
        question: "Will the wart come back after Plexr removal?",
        answer:
          "Most warts are permanently removed. However, because warts are caused by viruses (HPV), there's always a possibility that new ones can form elsewhere or recur in the same location, especially if the virus remains in the skin.",
      },
      {
        question: "When will I see results?",
        answer:
          "Once the scab falls off, you'll begin to see clearer skin. Final results are usually visible within 2–4 weeks. Deeper warts may take slightly longer.",
      },
      {
        question: "Will there be a scar?",
        answer:
          "Plexr treatments are designed to minimize the risk of scarring. Following aftercare instructions carefully and avoiding sun exposure during healing significantly reduces the likelihood of any lasting marks.",
      },
    ],
  },
]

export default function WartRemovalTreatmentFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const allQuestions = faqData.flatMap((section) =>
    section.questions.map((q) => ({
      question: q.question,
      answer: q.answer,
    })),
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allQuestions.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Wart Removal Treatment FAQ's
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Plexr wart removal treatment.
            </p>
          </div>

          <div className="space-y-8">
            {faqData.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-semibold text-sage-600 mb-4">{section.section}</h3>
                <div className="space-y-2">
                  {section.questions.map((faq, faqIndex) => {
                    const itemId = `${sectionIndex}-${faqIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <div key={faqIndex} className="border border-gray-300 rounded-md">
                        <button
                          className="w-full text-left p-4 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200 rounded-md"
                          onClick={() => toggleItem(itemId)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${itemId}`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                            <ChevronDown
                              className={`h-4 w-4 text-gray-600 transition-transform duration-200 flex-shrink-0 ${
                                isOpen ? "transform rotate-180" : ""
                              }`}
                            />
                          </div>
                        </button>
                        {isOpen && (
                          <div id={`faq-answer-${itemId}`} className="border-t border-gray-200">
                            <div className="p-4">
                              <p className="text-gray-700 leading-relaxed pt-3">{faq.answer}</p>
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
