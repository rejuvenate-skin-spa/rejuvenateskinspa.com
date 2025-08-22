"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PlexrSalesClientPage() {
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleGetInTouch = () => {
    const now = new Date()
    const currentHour = now.getHours()
    const isBusinessHours = currentHour >= 9 && currentHour < 17

    if (isMobile && isBusinessHours) {
      window.location.href = "tel:1-480-225-9549"
    } else {
      router.push("/about-us/contact-us")
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-playfair">Plexr Sales</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional Plexr plasma devices and comprehensive training programs for medical professionals and spa
              owners.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">Professional Plexr Equipment</h2>

            <div className="bg-sage-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-sage-600 mb-4">Why Choose Plexr Technology?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Revolutionary plasma technology for non-invasive skin treatments
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Versatile applications for skin tightening, resurfacing, and lesion removal
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Minimal downtime and excellent patient satisfaction
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Proven results with FDA-approved technology
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6">What We Offer</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-sage-600 mb-4">Equipment Sales</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Latest Plexr plasma devices</li>
                  <li>• Complete starter packages</li>
                  <li>• Replacement parts and accessories</li>
                  <li>• Warranty and technical support</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-sage-600 mb-4">Training Programs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprehensive hands-on training</li>
                  <li>• Certification programs</li>
                  <li>• Advanced technique workshops</li>
                  <li>• Ongoing education support</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Training & Certification</h3>
            <p className="text-gray-700 mb-6">
              Our comprehensive training programs ensure you and your staff are fully prepared to deliver exceptional
              Plexr treatments. We provide both theoretical knowledge and practical hands-on experience to help you
              achieve the best possible results for your clients.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Training Includes:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• Device operation and safety protocols</li>
                  <li>• Treatment planning and client consultation</li>
                  <li>• Hands-on practice sessions</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Post-treatment care instructions</li>
                  <li>• Business integration strategies</li>
                  <li>• Certification upon completion</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get Started Today</h3>
            <p className="text-gray-700 mb-8">
              Ready to add Plexr plasma technology to your practice? Contact us to learn more about our equipment
              packages, training programs, and how we can help you successfully integrate this revolutionary technology
              into your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-sage-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-playfair">Ready to Expand Your Practice?</h2>
          <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about Plexr equipment sales and training opportunities.
          </p>
          <button
            onClick={handleGetInTouch}
            className="bg-white text-sage-600 px-4 py-1.5 text-base rounded-md font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-sm"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  )
}
