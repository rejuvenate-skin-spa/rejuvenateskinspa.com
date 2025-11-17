"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

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
    section: "Overview of Other Services",
    items: [
      {
        question: "Other than plasma and peels, what other services does Rejuvenate offer?",
        answer:
          "Rejuvenate offers a range of advanced aesthetic treatments that complement our core services. These services include dermaplaning, microblading, eyebrow lamination, microneedling, bio microneedling, plasma microneedling, and red light therapy.",
      },
      {
        question: "How do I choose the right service for my skin goals?",
        answer:
          "Our experienced team will conduct a personalized consultation to understand your skin concerns and goals, then recommend the most appropriate treatment or combination of services.",
      },
      {
        question: "Are these services safe for all skin types?",
        answer:
          "Yes, many of our services, including microneedling and red light therapy, are safe for all Fitzpatrick skin types. We'll assess your individual needs to ensure a safe, customized approach.",
      },
      {
        question: "Can these services be combined?",
        answer:
          "Absolutely. Services like dermaplaning, microneedling, and red light therapy are often combined for enhanced results. Rejuvenate can create a treatment plan that effectively stacks services.",
      },
      {
        question: "Do these services require downtime?",
        answer:
          "Most of our services are non-invasive or minimally invasive with little to no downtime. Recovery time will depend on the type and intensity of the treatment.",
      },
    ],
  },
  {
    section: "Popular Treatments Explained",
    items: [
      {
        question: "What is dermaplaning?",
        answer:
          "Dermaplaning is a physical exfoliation treatment that removes dead skin cells and fine vellus hair ('peach fuzz') for instantly smoother, brighter skin.",
      },
      {
        question: "What is the difference between microneedling and biomicroneedling?",
        answer:
          "Microneedling uses fine needles to create microchannels in the skin, while biomicroneedling uses natural spicules from freshwater sponges to stimulate skin renewal without puncturing. Both stimulate collagen but use different methods.",
      },
      {
        question: "What is plasma microneedling?",
        answer:
          "Plasma microneedling combines microneedling with plasma energy to enhance collagen production, reduce inflammation, and accelerate healing, resulting in superior skin rejuvenation.",
      },
      {
        question: "How does eyebrow lamination work?",
        answer:
          "Eyebrow lamination restructures brow hairs to keep them in a fuller, lifted position. It's a needle-free way to create a bold, polished brow shape.",
      },
      {
        question: "What are the benefits of red light therapy?",
        answer:
          "Red light therapy utilizes LED wavelengths to promote cellular regeneration, reduce inflammation, and stimulate collagen production, making it an ideal treatment for skin rejuvenation, acne, and post-recovery support.",
      },
    ],
  },
  {
    section: "Appointments and Results",
    items: [
      {
        question: "How many sessions will I need?",
        answer:
          "Some services provide noticeable improvements after one session, while others (like microneedling or red light therapy) are best in a series. Rejuvenate will recommend a personalized plan.",
      },
      {
        question: "Are these services painful?",
        answer:
          "Most treatments are gentle and well-tolerated. Numbing cream may be used for microneedling services to ensure comfort.",
      },
      {
        question: "What should I do before my appointment?",
        answer:
          "Pre-treatment instructions will vary by service. In general, avoid sun exposure, discontinue retinoids or exfoliants, and arrive with clean skin. You'll receive detailed instructions when you book.",
      },
      {
        question: "What aftercare is required?",
        answer:
          "You may be advised to avoid makeup, direct sun, and active ingredients for a short period. Gentle skincare and hydration are essential for achieving optimal results.",
      },
      {
        question: "How much do these services cost at Rejuvenate Skin Spa?",
        answer:
          "Prices vary depending on the service. Treatments typically range from $25 for red light therapy to over $350 for advanced microneedling. Packages and add-ons are available.",
      },
    ],
  },
]

export default function SpaServicesFAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const jsonLd = {
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
    <section className="py-16 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 text-center mb-12">
          Other Services at Rejuvenate Skin Spa FAQ's
        </h2>

        <div className="space-y-8">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-xl font-semibold text-sage-600 mb-4">{section.section}</h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const key = `${sectionIndex}-${itemIndex}`
                  const isOpen = openItems[key]

                  return (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg">
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-inset"
                        onClick={() => toggleItem(sectionIndex, itemIndex)}
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
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
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
