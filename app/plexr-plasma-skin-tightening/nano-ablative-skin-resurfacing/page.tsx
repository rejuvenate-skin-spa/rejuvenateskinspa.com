import { Metadata } from "next"
import NanoAblativeSkinResurfacingHero from "@/components/nano-ablative-skin-resurfacing-hero"
import NanoAblativeSkinResurfacingFAQ from "@/components/nano-ablative-skin-resurfacing-faq"

export const metadata: Metadata = {
  title: "Nano-Ablative Skin Resurfacing | Plexr Plasma Treatment | Queen Creek, AZ",
  description: "Experience gentle nano-ablative skin resurfacing with Plexr plasma technology. Improve skin texture and tone with zero downtime at Rejuvenate Skin Spa in Queen Creek, Arizona.",
  keywords: "nano-ablative skin resurfacing, plexr plasma, skin texture, Queen Creek, Arizona, gentle resurfacing, no downtime",
}

export default function NanoAblativeSkinResurfacingPage() {
  return (
    <main>
      <NanoAblativeSkinResurfacingHero />
      
      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-sage-600 mb-2">15-30</div>
              <div className="text-gray-600">Minutes per session</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-sage-600 mb-2">Zero</div>
              <div className="text-gray-600">Downtime required</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-sage-600 mb-2">All</div>
              <div className="text-gray-600">Skin types safe</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Nano-Ablative */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              What is Nano-Ablative Plexr Shower?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The gentlest form of plasma skin resurfacing available
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Nano-Ablative (non-ablative) Plexr Shower represents the most gentle approach to plasma skin resurfacing. 
              Using a specialized triangle-tip handpiece, this treatment delivers controlled, low-energy plasma to only 
              the outermost layers of your skin.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Unlike traditional resurfacing methods, nano-ablative treatment requires no needles, no anesthesia, and 
              creates no visible wounds or crusting. This makes it the perfect "lunch break" treatment for clients 
              seeking subtle skin improvement without any social downtime.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              The treatment works through CAT (Controlled Aesthetic Touch) technology, creating a light plasma shower 
              effect that gently exfoliates and resurfaces the skin while enhancing the absorption of skincare products.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Benefits of Nano-Ablative Treatment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gentle rejuvenation with immediate results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-sage-600 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Zero Downtime</h3>
                  <p className="text-gray-600">Resume normal activities immediately after treatment with no visible side effects.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-sage-600 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Immediate Glow</h3>
                  <p className="text-gray-600">Notice brighter, smoother skin texture right after your first session.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-sage-600 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Product Absorption</h3>
                  <p className="text-gray-600">Optimizes your skincare routine by improving product penetration and effectiveness.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-sage-600 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe for All Skin Types</h3>
                  <p className="text-gray-600">Suitable for Fitzpatrick skin types I-VI without risk of pigmentation changes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-sage-600 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Year-Round Treatment</h3>
                  <p className="text-gray-600">Can be performed safely even during summer months with basic sun protection.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-sage-600 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Comfortable Experience</h3>
                  <p className="text-gray-600">Most clients describe only a mild warmth or light tingling sensation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              What Can Nano-Ablative Treat?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for addressing early signs of aging and skin texture concerns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dull Skin</h3>
              <p className="text-gray-600">Restore natural radiance and luminosity to tired-looking skin.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Enlarged Pores</h3>
              <p className="text-gray-600">Refine pore appearance for smoother, more even skin texture.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mild Texture Issues</h3>
              <p className="text-gray-600">Smooth minor textural irregularities and rough patches.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Early Aging Signs</h3>
              <p className="text-gray-600">Address fine lines and early signs of photoaging.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pre-Treatment Prep</h3>
              <p className="text-gray-600">Prepare skin for optimal results from other aesthetic treatments.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Maintenance Care</h3>
              <p className="text-gray-600">Maintain results from previous treatments and prevent aging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Investment in Your Skin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable luxury for regular skin maintenance
            </p>
          </div>
          
          <div className="bg-sage-50 rounded-lg p-8 text-center">
            <div className="mb-6">
              <div className="text-4xl font-bold text-sage-600 mb-2">$250 - $500</div>
              <div className="text-gray-600">Per session</div>
            </div>
            
            <p className="text-gray-700 mb-6">
              Treatment cost varies based on the area treated and whether it's combined with other protocols 
              such as GlassLIFT or LumiLIFT. A consultation will determine the best approach for your goals.
            </p>
            
            <div className="text-sm text-gray-600">
              <p className="mb-2">• Series of 3-5 treatments recommended for optimal results</p>
              <p className="mb-2">• Treatments spaced 2-4 weeks apart</p>
              <p>• Package pricing available for multiple sessions</p>
            </div>
          </div>
        </div>
      </section>

      <NanoAblativeSkinResurfacingFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-4">
            Experience Gentle Skin Rejuvenation
          </h2>
          <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
            Discover the benefits of nano-ablative plasma technology. Schedule your consultation today 
            to learn how this gentle treatment can enhance your skin's natural radiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-sage-600 px-8 py-3 rounded-md font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
