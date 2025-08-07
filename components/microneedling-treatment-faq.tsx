'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is microneedling and how does it work?",
    answer: "Microneedling, also known as collagen induction therapy, uses fine needles to create controlled micro-injuries in the skin. This process triggers your body's natural healing response, stimulating the production of collagen and elastin for firmer, smoother skin."
  },
  {
    question: "Is microneedling painful?",
    answer: "Most patients experience minimal discomfort during microneedling. We apply a topical numbing cream before treatment to ensure your comfort. You may feel a slight tingling or scratching sensation, but the procedure is generally well-tolerated."
  },
  {
    question: "How many microneedling sessions do I need?",
    answer: "The number of sessions varies depending on your skin concerns and goals. Most patients see optimal results with 3-6 treatments spaced 4-6 weeks apart. Your skincare professional will create a personalized treatment plan during your consultation."
  },
  {
    question: "What should I expect after microneedling treatment?",
    answer: "After treatment, you may experience mild redness and sensitivity similar to a sunburn for 24-48 hours. Your skin may feel tight and appear slightly swollen. These effects are normal and indicate that the healing process has begun."
  },
  {
    question: "When will I see results from microneedling?",
    answer: "Initial improvements may be visible within a few days as your skin heals. However, the most significant results appear 4-6 weeks after treatment as new collagen forms. Results continue to improve for up to 6 months following your treatment series."
  },
  {
    question: "Can microneedling be combined with other treatments?",
    answer: "Yes, microneedling can be enhanced with serums, PRP (platelet-rich plasma), or other skincare treatments. We'll discuss combination options during your consultation to maximize your results based on your specific skin needs."
  },
  {
    question: "Who is a good candidate for microneedling?",
    answer: "Microneedling is suitable for most skin types and concerns, including fine lines, acne scars, large pores, and uneven skin texture. However, it may not be recommended for those with active acne, certain skin conditions, or those who are pregnant."
  },
  {
    question: "How should I prepare for my microneedling treatment?",
    answer: "Avoid sun exposure, retinoids, and exfoliating products for 3-7 days before treatment. Don't use blood-thinning medications unless medically necessary. Arrive with clean skin, free of makeup and skincare products."
  }
]

export default function MicroneedlingTreatmentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq-section" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about microneedling treatment.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-sage-600 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-sage-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-sage-600 flex-shrink-0" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  )
}
