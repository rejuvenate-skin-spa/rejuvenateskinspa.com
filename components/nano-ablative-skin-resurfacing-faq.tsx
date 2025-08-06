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

const faqSections: FAQSection[] = [
  {
    title: "Understanding the Treatment",
    items: [
      {
        question: "What is Nano-Ablative Plexr Shower?",
        answer:
          "Nano-Ablative (non-ablative) Plexr Shower is a precision plasma skin treatment that uses a specialized triangle-tip handpiece to deliver low-energy plasma to the outermost layers of the skin. It gently exfoliates and resurfaces the skin without the need for needles or anesthesia. This Treatment is designed for clients seeking surface-level rejuvenation with minimal downtime and without needles or anesthesia.",
      },
      {
        question: "How does Nano-Ablative Plexr differ from other Plexr treatments?",
        answer:
          'Unlike semi-ablative or ablative Plexr, Nan-Ablative treatments target only the superficial layers of the skin. It is ideal for clients seeking subtle surface rejuvenation with virtually no downtime. It doesn\'t involve crusting, scabbing, or visible wounds, making it a more "socially friendly" option.',
      },
      {
        question: "What does 'CAT Resurfacing' mean in this context?",
        answer:
          "CAT stands for Controlled Aesthetic Touch, referring to the light plasma shower effect that delivers uniform resurfacing across the skin's surface. It's designed to refine texture, brighten tone, and enhance the absorption of skincare products.",
      },
      {
        question: "What skin concerns can Nano-Ablative Plexr treat?",
        answer:
          "This treatment is ideal for dull skin, enlarged pores, mild textural irregularities, early signs of aging, and clients seeking to refresh and prepare the skin for optimal cosmetic product penetration.",
      },
      {
        question: "Is Nano-Ablative Plexr considered a laser or chemical peel?",
        answer:
          "No, it's not a laser or peel. Nano-Ablative Plexr utilizes plasma energy, rather than light or acids, to interact with the epidermis. It offers a unique method of gentle resurfacing that avoids the risks associated with heat-based, chemical, or any treatments that can potentially burn the skin.",
      },
    ],
  },
  {
    title: "Candidate Assessment & Safety",
    items: [
      {
        question: "Who is a good candidate for Nano-Ablative Plexr Shower treatment?",
        answer:
          "This treatment is suitable for all skin types and tones, including sensitive skin. It's ideal for individuals seeking gentle skin refreshment, enhanced glow, or those looking to prep the skin before more intensive procedures.",
      },
      {
        question: "Is Nano-Ablative Plexr safe for darker skin tones?",
        answer:
          "Yes. Because it targets only the superficial layers and involves no thermal damage or pigmentation-triggering chemicals, it is considered safe for Fitzpatrick skin types I through VI.",
      },
      {
        question: "Can Nano-Ablative Plexr be used year-round?",
        answer:
          "Yes. Due to its superficial nature and minimal risk of photosensitivity, it is safe to use even during summer months with basic sun protection.",
      },
    ],
  },
  {
    title: "Cost & Treatment Planning",
    items: [
      {
        question: "How much does Nano-Ablative Plexr Shower cost?",
        answer:
          "Treatment costs typically range from $250 to $500 per session, depending on the treatment area and whether it is combined with other protocols, such as GlassLIFT or LumiLIFT. A consultation will determine the best approach for your goals.",
      },
      {
        question: "How many sessions are recommended?",
        answer:
          "While results may be visible after one session, a series of 3–5 treatments spaced 2–4 weeks apart can maximize skin texture improvement and radiance.",
      },
    ],
  },
  {
    title: "Pre-Treatment Preparation",
    items: [
      {
        question: "How should I prepare for my Nano-Ablative treatment?",
        answer:
          "Avoid using active skincare ingredients (such as retinoids, AHAs, and BHAs) for 3 days before treatment. Ensure your skin is clean, hydrated, and free of sunburn or irritation on the day of your appointment.",
      },
      {
        question: "Can Nano-Ablative be combined with other treatments?",
        answer:
          "Yes. It's often used as a primer for other aesthetic treatments, such as microneedling, dermaplaning, exosomes, serums, collagen boosters, enzyme peels, biorepeels, and hyaluronic masks. It enhances product absorption and results.",
      },
    ],
  },
  {
    title: "During the Procedure",
    items: [
      {
        question: "What happens during the Nano-Ablative Plexr session?",
        answer:
          "The provider uses a triangular-tipped Plexr handpiece to gently glide over the skin, delivering controlled plasma energy. You may experience a mild warmth or tingling sensation. The session usually takes 15–30 minutes.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Not at all. Nano-Ablative Plexr requires no numbing or anesthesia. Most clients describe the sensation as a warm feeling on the face or a light tingling.",
      },
    ],
  },
  {
    title: "Recovery & Aftercare",
    items: [
      {
        question: "Is there any downtime after Nano-Ablative Plexr?",
        answer:
          "Downtime is minimal. Some clients may experience light redness or dryness for 1–2 days. You can resume makeup and everyday skincare the next day.",
      },
      {
        question: "What should I avoid after treatment?",
        answer:
          "Avoid exfoliants, saunas, and intense exercise for 24 to 48 hours after treatment. Use gentle, hydrating products and wear SPF daily to protect the freshly resurfaced skin.",
      },
      {
        question: "Can I wear makeup after a Nano-Ablative Plexr treatment?",
        answer:
          "Yes, usually within 24 hours. Many clients notice that their makeup applies more smoothly and evenly due to the refined texture of their skin.",
      },
    ],
  },
  {
    title: "Results & Maintenance",
    items: [
      {
        question: "When can I expect to see results from Nano-Ablative Plexr?",
        answer:
          "Most clients notice an immediate glow and smoother skin texture. Results continue to improve over the following days as the skin renews.",
      },
      {
        question: "How long do the results last?",
        answer:
          "Results can last several weeks to months, depending on skincare habits and environmental exposure. Periodic maintenance sessions help sustain radiance.",
      },
      {
        question: "Can this be part of a regular skincare routine?",
        answer:
          "Absolutely. Nano-Ablative Plexr is ideal for use as a monthly or seasonal maintenance treatment, or as a prep before special events and high-end facials.",
      },
    ],
  },
]

export default function NanoAblativeSkinResurfacingFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const generateFAQSchema = () => {
    const faqItems = faqSections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    )

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems,
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Nano-Ablative Skin Resurfacing FAQ's
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most commonly asked questions about nano-ablative plasma skin resurfacing treatments.
            </p>
          </div>

          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-semibold text-sage-600 mb-4">{section.title}</h3>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => {
                    const itemId = `${sectionIndex}-${itemIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <div key={itemIndex} className="bg-white border border-gray-300 rounded">
                        <button
                          className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 rounded transition-colors duration-200"
                          onClick={() => toggleItem(itemId)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${itemId}`}
                        >
                          <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                          <ChevronDown
                            className={`h-4 w-4 text-gray-600 transition-transform duration-200 flex-shrink-0 ${
                              isOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div id={`faq-answer-${itemId}`} className="px-4 pb-4 border-t border-gray-200">
                            <div className="text-gray-700 leading-relaxed pt-3">{item.answer}</div>
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
