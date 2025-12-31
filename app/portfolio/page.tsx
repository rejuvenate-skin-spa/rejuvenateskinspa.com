import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Results Gallery | Rejuvenate Skin Spa | Queen Creek, Arizona",
  description:
    "View real client results and transformations at Rejuvenate Skin Spa in Queen Creek, Arizona. See before and after photos showcasing our advanced skincare treatments.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-sage-50">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Results Gallery
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Real treatments. Real results. See what's possible at Rejuvenate Skin Spa in Queen Creek, Arizona.
          </p>
          
          {/* Coming Soon Message */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <p className="text-2xl font-playfair font-semibold text-sage-600 mb-4">
              Coming Soon
            </p>
            <p className="text-gray-600">
              We're curating our best before and after results to share with you. 
              In the meantime, follow us on social media to see real client transformations.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.instagram.com/rejuvenateskinspa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium rounded-lg transition-all"
            >
              Follow on Instagram
            </a>
            <a
              href="https://www.facebook.com/people/Rejuvenate-Skin-Spa/100086475380527/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to schedule a consultation and discover what's possible for your skin.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-sage-600 hover:bg-gray-100 font-medium rounded-lg shadow-lg transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}

