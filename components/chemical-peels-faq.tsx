"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { buildFAQPage } from "@/lib/schema"

interface FAQ {
  question: string
  answer: string
}

interface FAQSection {
  section: string
  faqs: FAQ[]
}

const faqData: FAQSection[] = [
  {
    section: "Understanding Chemical Peels",
    faqs: [
      {
        question: "What is a chemical peel?",
        answer:
          "A chemical peel is a skin resurfacing treatment that uses a chemical solution to exfoliate the outer layers of the skin. This process removes dead skin cells, stimulates cell turnover, and reveals smoother, more radiant skin underneath. Chemical peels can address various skin concerns including fine lines, uneven tone, acne, and sun damage.",
      },
      {
        question: "How do chemical peels differ from other skin treatments?",
        answer:
          "Chemical peels use acid-based solutions to exfoliate and resurface the skin, while enzyme peels rely on fruit enzymes for a gentler, more superficial refresh. Microneedling stimulates collagen through controlled micro-channels rather than chemical exfoliation, and plasma treatments use ionized gas for targeted tightening and resurfacing. Peel depth and formula determine intensity, downtime, and which concerns respond best.",
      },
      {
        question: "What types of chemical peels do you offer?",
        answer:
          "We offer three main types of chemical peels:\n\n• TCA 25% Peel – A deep penetrating peel for significant skin rejuvenation and resurfacing\n• Glycolic 20-40% Peel – A medium-depth peel for improving skin clarity and reducing signs of aging\n• BioRePeel – An advanced bio-stimulating peel with TCA and amino acids that offers rejuvenation with minimal recovery",
      },
      {
        question: "How do I know which chemical peel is right for me?",
        answer:
          "The best peel for you depends on your skin type, concerns, and desired downtime. TCA peels are ideal for deeper concerns like wrinkles and acne scars. Glycolic peels work well for general rejuvenation and brightening. BioRePeel is perfect for those wanting results with minimal recovery time. During your consultation, we'll assess your skin and recommend the most suitable option.",
      },
    ],
  },
  {
    section: "Safety & Candidacy",
    faqs: [
      {
        question: "Are chemical peels safe?",
        answer:
          "Yes, when performed by a trained professional, chemical peels are safe and effective. We use medical-grade products and customize the treatment to your skin type and concerns. We'll review your medical history and skin condition before recommending a peel to ensure it's appropriate for you.",
      },
      {
        question: "Who is a good candidate for a chemical peel?",
        answer:
          "Good candidates for chemical peels include those looking to improve skin texture, reduce fine lines, address acne or acne scars, even out skin tone, or brighten a dull complexion. You should avoid chemical peels if you have active skin infections, open wounds, or certain skin conditions. Pregnant or breastfeeding individuals should consult with their provider first.",
      },
      {
        question: "Can chemical peels be done on all skin types?",
        answer:
          "Most chemical peels can be safely performed on various skin types, though the type and strength of peel may vary. Some peels, like BioRePeel, are specifically formulated to be safe for all skin tones including darker complexions. During your consultation, we'll recommend the best option for your specific skin type.",
      },
      {
        question: "Is an in-person consultation required for chemical peels?",
        answer:
          "Yes. An in-person consultation is required before a chemical peel. During this visit, we evaluate your skin type, concerns, and medical history, then determine the most appropriate peel strength and formula based on safety, candidacy, and expected downtime.",
      },
    ],
  },
  {
    section: "The Treatment Process",
    faqs: [
      {
        question: "What happens during a chemical peel treatment?",
        answer:
          "Your skin will be thoroughly cleansed, and the appropriate chemical solution will be applied to your skin. You may feel a mild tingling or warming sensation. The solution is left on for a specific amount of time depending on the peel type, then neutralized or removed. The entire treatment typically takes 30–90 minutes depending on the peel.",
      },
      {
        question: "Does a chemical peel hurt?",
        answer:
          "Most clients experience mild tingling, warmth, or a slight stinging sensation during the treatment. Deeper peels may cause more intense sensations, but discomfort is generally manageable and temporary. We take steps to ensure your comfort throughout the procedure.",
      },
      {
        question: "How many treatments will I need?",
        answer:
          "The number of treatments depends on your skin concerns and the type of peel. Light peels may be done in a series of 4–6 treatments spaced 2–4 weeks apart. Medium-depth peels typically require 2–3 sessions. Some clients achieve their goals with a single treatment, while others benefit from maintenance sessions every few months.",
      },
    ],
  },
  {
    section: "Recovery & Aftercare",
    faqs: [
      {
        question: "What is the recovery time after a chemical peel?",
        answer:
          "Recovery varies by peel type:\n\n• BioRePeel – Minimal to no downtime; you can return to normal activities immediately\n• Glycolic Peel – 3–7 days of mild peeling and redness\n• TCA Peel – 3–5 days of more noticeable peeling and redness\n\nWe'll provide detailed aftercare instructions specific to your treatment.",
      },
      {
        question: "What aftercare is required after a chemical peel?",
        answer:
          "Post-treatment care typically includes:\n\n• Avoiding direct sun exposure and wearing SPF 30+ daily\n• Using gentle, hydrating cleansers and moisturizers\n• Avoiding retinoids, exfoliants, and active ingredients for 5–7 days\n• Not picking at peeling skin\n• Avoiding saunas, steam rooms, and intense exercise for 48–72 hours",
      },
      {
        question: "Can I wear makeup after a chemical peel?",
        answer:
          "For lighter peels like BioRePeel, you may apply mineral-based makeup the next day. For deeper peels, we recommend waiting until active peeling has subsided, typically 3–5 days. Using gentle, non-comedogenic products helps support the healing process.",
      },
    ],
  },
  {
    section: "Results & Expectations",
    faqs: [
      {
        question: "When will I see results from a chemical peel?",
        answer:
          "You may notice an immediate glow after lighter peels. For deeper peels, once peeling is complete (typically 5–7 days), you'll see smoother, more radiant skin. Full results, including improvements in tone, texture, and fine lines, develop over the following weeks as collagen production increases.",
      },
      {
        question: "How long do chemical peel results last?",
        answer:
          "Results can last several months to over a year depending on the peel depth and your skincare routine. Maintaining results requires sun protection, a good skincare regimen, and periodic maintenance treatments as recommended by your provider.",
      },
      {
        question: "Can I combine a chemical peel with other treatments?",
        answer:
          "Yes, chemical peels can be combined with other treatments for enhanced results. Popular combinations include pairing peels with microneedling, LED therapy, or facials. We'll create a customized treatment plan based on your goals during your consultation.",
      },
    ],
  },
]

export default function ChemicalPeelsFAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (sectionIndex: number, faqIndex: number) => {
    const key = `${sectionIndex}-${faqIndex}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const faqSchema = buildFAQPage(
    faqData.flatMap((section) =>
      section.faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))
    )
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Chemical Peel FAQ's
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most commonly asked questions about chemical peel treatments.
            </p>
          </div>

          <div className="space-y-8">
            {faqData.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-semibold text-sage-600 mb-4">{section.section}</h3>
                <div className="space-y-4 mb-8">
                  {section.faqs.map((faq, faqIndex) => {
                    const key = `${sectionIndex}-${faqIndex}`
                    const isOpen = openItems[key]

                    return (
                      <div key={faqIndex} className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          onClick={() => toggleItem(sectionIndex, faqIndex)}
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
                            <div className="text-gray-600 leading-relaxed whitespace-pre-line">{faq.answer}</div>
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

