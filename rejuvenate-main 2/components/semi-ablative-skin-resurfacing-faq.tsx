"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    section: "Understanding the Treatment",
    questions: [
      {
        question: "What is Semi-Ablative PLEXR CAT Resurfacing?",
        answer:
          "Semi-Ablative CAT Resurfacing is a controlled plasma-based skin treatment that uses fractional energy to remove superficial to mid-depth layers of the skin. It creates precise microthermal zones to promote collagen induction, tissue regeneration, improved skin texture, and a tighter skin appearance in target-treated areas.",
      },
      {
        question: "What does 'CAT' stand for in CAT Resurfacing?",
        answer:
          "CAT stands for Controlled Aesthetic Touch, a semi-ablative technique that delivers fractional plasma energy in a patterned grid to rejuvenate the skin while minimizing trauma and recovery time.",
      },
      {
        question: "How does Semi-Ablative PLEXR differ from non-ablative and ablative treatments?",
        answer:
          "Semi-ablative treatment strikes a balance between gentle stimulation and visible resurfacing. It penetrates deeper than non-ablative treatments but is less aggressive than full ablative protocols, offering noticeable results with reduced downtime.",
      },
      {
        question: "What skin concerns does CAT Resurfacing address?",
        answer:
          "This treatment is ideal for mild to moderate wrinkles, textural irregularities, sun damage, pigmentation, skin laxity, and areas requiring gentle rejuvenation, such as the underarms, neck, or hands.",
      },
      {
        question: "Is Semi-Ablative PLEXR considered a laser treatment?",
        answer:
          "No. It uses plasma—not laser light—to create micro-injuries in the skin. This method is non-thermal and non-chromophore-dependent, making it safer for a broader range of skin types and sensitive areas.",
      },
    ],
  },
  {
    section: "Candidate Assessment & Safety",
    questions: [
      {
        question: "Who is a good candidate for CAT Resurfacing?",
        answer:
          "This treatment is suitable for most skin types and tones. It's beneficial for clients seeking targeted rejuvenation with minimal downtime in delicate or visible areas.",
      },
      {
        question: "Is CAT Resurfacing safe for darker skin tones?",
        answer:
          "Yes. Because it utilizes fractional plasma energy rather than light or heat, CAT Resurfacing is safe for all skin tones, making it an inclusive treatment option for all skin types.",
      },
      {
        question: "Can CAT Resurfacing be performed on sensitive areas?",
        answer:
          "Yes. It is often used on the face, neck, underarms, hands, and intimate areas. The precision of the fractional plasma makes it ideal for use on thin or sensitive skin.",
      },
    ],
  },
  {
    section: "Cost & Treatment Planning",
    questions: [
      {
        question: "How much does Semi-Ablative CAT Resurfacing cost?",
        answer:
          "Prices typically range from $400 to $900, depending on the size of the treatment area and the number of sessions required. A consultation is the best way to determine a personalized plan.",
      },
      {
        question: "How many sessions are needed for the best results?",
        answer:
          "Most clients benefit from 1 to 3 sessions spaced 4–6 weeks apart, though results are often visible after just one treatment.",
      },
    ],
  },
  {
    section: "Pre-Treatment Preparation",
    questions: [
      {
        question: "How should I prepare for CAT Resurfacing?",
        answer:
          "Avoid using retinoids, AHAs, exfoliants, and sun exposure for 5–7 days before your appointment. Stay hydrated and inform your provider of any active skin conditions or recent procedures.",
      },
      {
        question: "Can CAT Resurfacing be combined with other aesthetic treatments?",
        answer:
          "Yes. It may be layered with other skin therapies such as microneedling, biostimulators, or topical serums, depending on your goals and skin condition.",
      },
    ],
  },
  {
    section: "During the Procedure",
    questions: [
      {
        question: "What should I expect during a CAT Resurfacing session?",
        answer:
          "After cleansing and numbing, your provider will apply fractional plasma energy in a grid-like pattern to the treatment area. You may feel a warm or tingling sensation. The procedure typically takes 20–45 minutes, depending on the specific area being treated.",
      },
      {
        question: "Is CAT Resurfacing painful?",
        answer:
          "Most clients tolerate the procedure well. Numbing cream is used to ensure comfort, and the fractional energy delivery minimizes overall discomfort and inflammation.",
      },
    ],
  },
  {
    section: "Recovery & Aftercare",
    questions: [
      {
        question: "What is the downtime after CAT Resurfacing?",
        answer:
          "Downtime is typically 3–7 days. You may experience redness, mild swelling, and tiny grid-like scabs or crusts as the skin heals. These will naturally shed without peeling or picking.",
      },
      {
        question: "What should I avoid after treatment?",
        answer:
          "Avoid sun exposure, hot environments (such as saunas), and exfoliating products until you are fully healed. Follow your provider's aftercare routine for cleansing, hydration, and sun protection.",
      },
      {
        question: "Can I wear makeup after a CAT Resurfacing Procedure?",
        answer:
          "Wait at least 48–72 hours or until crusting has subsided and your provider confirms it's safe. Mineral or medical-grade makeup is usually recommended during recovery.",
      },
    ],
  },
  {
    section: "Results & Maintenance",
    questions: [
      {
        question: "When can I expect to see results from CAT Resurfacing?",
        answer:
          "Some clients see improvement in skin tone and texture within a week, with full collagen stimulation effects becoming visible after 4–6 weeks.",
      },
      {
        question: "How long do the results last?",
        answer:
          "Results can last 6–12 months or longer, depending on your skin care routine, sun protection habits, and lifestyle. Maintenance treatments are often recommended every 6 to 12 months.",
      },
      {
        question: "Can CAT Resurfacing be part of a regular skincare regimen?",
        answer:
          "Yes. It's an excellent semi-annual or quarterly treatment to keep the skin smooth, firm, and refreshed, especially in areas where aging or discoloration is more noticeable.",
      },
    ],
  },
]

export default function SemiAblativeSkinResurfacingFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  // Generate FAQ schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.flatMap((section) =>
      section.questions.map((faq) => ({
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
    <section className="py-16 bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Semi-Ablative Skin Resurfacing FAQ's
          </h2>
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
                    <div key={faqIndex} className="bg-white rounded-lg border border-gray-300">
                      <button
                        className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => toggleItem(itemId)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${itemId}`}
                      >
                        <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`h-4 w-4 text-gray-600 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? "transform rotate-180" : ""
                          }`}
                        />
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
  )
}
