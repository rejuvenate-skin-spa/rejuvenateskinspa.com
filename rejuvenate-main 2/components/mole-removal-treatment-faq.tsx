"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqSections = [
  {
    title: "Understanding the Treatment",
    faqs: [
      {
        question: "What is Plexr mole removal?",
        answer:
          "Plexr mole removal is a non-surgical, non-invasive technique that utilizes plasma energy to precisely vaporize benign skin lesions, including moles, skin tags, and seborrheic keratoses. The device generates a focused plasma arc that sublimates the mole tissue without cutting or stitches.",
      },
      {
        question: "How does Plexr work to remove moles?",
        answer:
          "The Plexr device ionizes atmospheric gas to create a microplasma arc that gently targets and breaks down the mole tissue at the surface. The treated tissue forms a scab and naturally falls away during the healing process, revealing clearer skin beneath.",
      },
      {
        question: "Is Plexr mole removal a laser treatment?",
        answer:
          "No. Plexr is not a laser—it uses plasma, not light or heat, to treat skin. Unlike lasers, Plexr does not rely on pigment, which allows for more precision and makes it safer for a broader range of skin types and tones.",
      },
      {
        question: "What types of moles or lesions can Plexr treat?",
        answer:
          "Plexr is effective for removing flat or raised benign moles, skin tags, cherry angiomas, and other non-cancerous skin growths. A professional consultation is required to confirm that the lesion is safe to treat.",
      },
      {
        question: "Can Plexr be used to remove facial moles?",
        answer:
          "Yes. Plexr is especially suited for sensitive areas, such as the face, due to its precision and minimal risk of scarring. It's commonly used for mole removal around the eyes, nose, lips, and cheeks.",
      },
    ],
  },
  {
    title: "Safety & Suitability",
    faqs: [
      {
        question: "Is Plexr mole removal safe?",
        answer:
          "Yes, when performed by a trained professional. The treatment is non-invasive and typically has minimal risk of infection or scarring. However, not all lesions are suitable for plasma treatment—malignant or suspicious moles must be examined by a dermatologist first.",
      },
      {
        question: "Who is a good candidate for Plexr mole removal?",
        answer:
          "Most healthy adults with benign, cosmetically undesirable moles or skin tags are good candidates. Individuals with active skin infections, certain medical conditions, or a history of keloid scarring may not be eligible for this treatment.",
      },
      {
        question: "Is Plexr safe for all skin types?",
        answer:
          "Yes. Because it doesn't rely on heat diffusion or chromophores like lasers, Plexr is generally considered safe for Fitzpatrick skin types I through VI. However, post-inflammatory pigmentation changes can still occur and will be discussed during your consultation.",
      },
      {
        question: "Does the mole need to be biopsied first?",
        answer:
          "If there's any concern about the nature of the lesion (e.g., irregular borders, color variation, growth), a biopsy or dermatologist referral is recommended before removal. Plexr should only be used on clearly benign lesions.",
      },
    ],
  },
  {
    title: "The Procedure",
    faqs: [
      {
        question: "What happens during the Plexr mole removal procedure?",
        answer:
          "The area is cleansed and numbed with a topical anesthetic. The Plexr handpiece is then used to apply a plasma arc directly to the mole, gradually vaporizing the tissue. The process usually takes 5–15 minutes, depending on the size and number of moles.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Most clients experience only mild discomfort, often described as a warm or tingling sensation. Numbing cream significantly reduces pain during the procedure.",
      },
      {
        question: "How many moles can be treated in one session?",
        answer:
          "Multiple lesions can typically be treated during a single session, depending on their size and location. Your provider will guide you on safe limits for one appointment.",
      },
    ],
  },
  {
    title: "Recovery & Aftercare",
    faqs: [
      {
        question: "What is the recovery like after Plexr mole removal?",
        answer:
          "You may experience redness, slight swelling, and scabbing at the treatment site. The carbon crust usually falls off within 5–10 days. It's important not to pick or scratch the area to avoid scarring.",
      },
      {
        question: "What aftercare is required?",
        answer:
          "Keep the area clean and dry, avoid direct sun exposure, and apply any recommended healing ointments as directed. High-SPF sunscreen should be used once the area has healed to prevent pigmentation.",
      },
      {
        question: "Can I wear makeup after having a mole removed?",
        answer:
          "Avoid makeup on the treated area until the scab has fallen off and the skin is fully healed. Applying makeup too soon may interfere with healing or increase the risk of infection.",
      },
    ],
  },
  {
    title: "Results & Expectations",
    faqs: [
      {
        question: "When can I expect to see results after Plexr mole removal?",
        answer:
          "Once the crust falls off, the area may appear slightly pink or lighter in color but will continue to blend with the surrounding skin over the next several weeks. Final results typically appear within 4 to 6 weeks.",
      },
      {
        question: "Will the mole come back?",
        answer:
          "In most cases, the mole does not return. However, if it does regrow or if removal was partial, a follow-up treatment may be required.",
      },
      {
        question: "Will there be a scar?",
        answer:
          "When performed correctly, Plexr mole removal leaves minimal to no scarring. Following aftercare instructions and avoiding sun exposure is key to optimal healing.",
      },
    ],
  },
]

export function MoleRemovalTreatmentFAQ() {
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
              Mole Removal Treatment FAQ's
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our Plexr mole removal treatments</p>
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
