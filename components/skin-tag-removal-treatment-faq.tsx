"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSection {
  title: string
  items: FAQItem[]
}

const faqData: FAQSection[] = [
  {
    title: "Understanding the Treatment",
    items: [
      {
        question: "What is Plexr skin tag removal?",
        answer:
          "Plexr skin tag removal is a non-surgical cosmetic procedure that utilizes plasma energy to safely and precisely remove benign skin tags without the need for cutting, sutures, or bleeding. The treatment vaporizes the unwanted tissue using a focused plasma arc, resulting in minimal trauma to the surrounding skin.",
      },
      {
        question: "How does Plexr remove skin tags?",
        answer:
          "The Plexr device ionizes gas in the air to produce a controlled microplasma arc. This arc creates a pinpoint energy discharge that sublimates (evaporates) the skin tag at the surface, causing it to dry up and fall away as the area heals.",
      },
      {
        question: "What areas can be treated with Plexr for skin tags?",
        answer:
          "Plexr can safely remove skin tags from the face, neck, underarms, chest, groin, eyelids, and other delicate or hard-to-reach areas. Its precision makes it ideal for treating sensitive skin zones.",
      },
      {
        question: "Is Plexr a laser treatment?",
        answer:
          "No. Plexr is a plasma-based treatment, not a laser. It does not rely on light or heat but instead delivers a precise plasma arc to treat the targeted lesion, with lower risk to surrounding tissue.",
      },
      {
        question: "How is Plexr different from freezing or cutting skin tags?",
        answer:
          "Unlike cryotherapy (freezing) or excision (cutting), Plexr is a minimally invasive procedure that does not require stitches or the use of a scalpel. It causes less irritation, heals quickly, and reduces the risk of scarring.",
      },
    ],
  },
  {
    title: "Safety & Candidacy",
    items: [
      {
        question: "Is Plexr safe for removing skin tags?",
        answer:
          "Yes. When performed by a trained provider, Plexr is a safe and effective method for removing benign skin tags. It offers low risk of infection or scarring when proper technique and aftercare are followed.",
      },
      {
        question: "Who is a good candidate for Plexr skin tag removal?",
        answer:
          "Most healthy adults with non-cancerous, cosmetic skin tags are good candidates. People with bleeding disorders, uncontrolled diabetes, or active skin infections should be evaluated on a case-by-case basis.",
      },
      {
        question: "Can Plexr be used on all skin types?",
        answer:
          "Yes. Plexr is generally safe for all Fitzpatrick skin types (I–VI). However, post-inflammatory pigmentation (PIH) can occasionally occur and will be discussed during your consultation.",
      },
      {
        question: "Does the skin tag require a diagnosis before treatment?",
        answer:
          "Yes. A medical provider should examine any suspicious growths before cosmetic removal. Plexr should only be used on confirmed benign lesions.",
      },
    ],
  },
  {
    title: "The Procedure",
    items: [
      {
        question: "What happens during a Plexr skin tag removal session?",
        answer:
          "The treatment area is cleaned, and a topical anesthetic is applied for comfort. The provider uses the Plexr device to apply a small arc of plasma directly to the skin tag, which quickly dries and begins the removal process. The session takes 5–15 minutes, depending on the number and size of tags.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Most clients report only mild discomfort, typically characterized by a warm or stinging sensation. Numbing cream significantly reduces any pain during treatment.",
      },
      {
        question: "How many skin tags can be treated at once?",
        answer:
          "Multiple tags can be treated in a single session, depending on their location and size. Your provider will advise you on what is safe to address in one visit.",
      },
    ],
  },
  {
    title: "Recovery & Aftercare",
    items: [
      {
        question: "What is the healing process like after Plexr skin tag removal?",
        answer:
          "The treated area may appear red or slightly swollen, and a small scab or crust will form where the tag was removed. Healing typically takes 5–10 days, during which the crust will naturally fall off.",
      },
      {
        question: "What aftercare is recommended?",
        answer:
          "Keep the area clean and dry. Avoid sun exposure, harsh skincare products, or picking at the scab. Apply any post-care ointments as directed and use sunscreen on exposed areas once the wound has healed.",
      },
      {
        question: "Can I wear makeup after treatment?",
        answer:
          "Avoid applying makeup directly to the treated area until the scab has fully healed and new skin has formed, which usually takes 7–10 days.",
      },
    ],
  },
  {
    title: "Results & Expectations",
    items: [
      {
        question: "Will the skin tag grow back?",
        answer:
          "Most skin tags do not return after removal. However, new tags may appear in the same area over time if you are prone to developing them. Follow-up sessions may be scheduled if needed.",
      },
      {
        question: "When will I see the final results?",
        answer:
          "Once the scab falls away and the pink or light skin beneath has fully matured, typically within 2–4 weeks, you'll see your final result. Skin tone continues to normalize over the following weeks.",
      },
      {
        question: "Will there be a scar after Plexr skin tag removal?",
        answer:
          "Plexr minimizes trauma to the skin, resulting in rare scarring. Following aftercare instructions and avoiding sun exposure is essential to ensure smooth healing.",
      },
    ],
  },
]

export default function SkinTagRemovalTreatmentFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const structuredData = {
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
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Skin Tag Removal Treatment FAQ's
            </h2>
          </div>

          <div className="space-y-8">
            {faqData.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-semibold text-sage-600 mb-4">{section.title}</h3>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => {
                    const itemId = `${sectionIndex}-${itemIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <div key={itemIndex} className="border border-gray-300 rounded-md">
                        <button
                          className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 rounded-md"
                          onClick={() => toggleItem(itemId)}
                          aria-expanded={isOpen}
                          aria-controls={`answer-${itemId}`}
                        >
                          <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                          <ChevronDown
                            className={`h-4 w-4 text-gray-600 transition-transform duration-200 flex-shrink-0 ${
                              isOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div id={`answer-${itemId}`} className="border-t border-gray-200 p-4">
                            <p className="text-gray-700 leading-relaxed pt-3">{item.answer}</p>
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
