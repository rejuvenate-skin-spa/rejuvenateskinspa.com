import type { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Terms & Conditions | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Terms and Conditions for Rejuvenate Skin Spa in Queen Creek, Arizona. Please review our policies regarding services, appointments, and use of our website.",
  alternates: { canonical: "/terms-and-conditions" },
}

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-8">
          Terms &amp; Conditions
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Effective Date: January 2025
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Agreement to Terms
            </h2>
            <p>
              By accessing or using the Rejuvenate Skin Spa website or services,
              you agree to be bound by these Terms and Conditions. If you do not
              agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Services
            </h2>
            <p>
              Rejuvenate Skin Spa provides non-surgical aesthetic skincare
              treatments at our Queen Creek, Arizona location. All services are
              provided by trained, licensed professionals. Results may vary by
              individual, and we do not guarantee specific outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Appointments and Cancellations
            </h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Appointments are scheduled on a first-come, first-served basis.
              </li>
              <li>
                We request at least 24 hours' notice for cancellations or
                rescheduling.
              </li>
              <li>
                Late arrivals may result in shortened treatment time or
                rescheduling.
              </li>
              <li>
                Repeated no-shows or late cancellations may result in a
                cancellation fee or prepayment requirement.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Consultation and Consent
            </h2>
            <p>
              Prior to receiving treatment, clients must complete a consultation
              and provide informed consent. You agree to provide accurate health
              information and to disclose any conditions, medications, or
              allergies that may affect your treatment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Plasma Treatment Consultation Requirement
            </h2>
            <p>
              Due to the advanced nature of plasma skin treatments, an in-person
              consultation is required before any plasma treatment can be
              scheduled. This consultation allows us to assess your skin,
              discuss your goals, and determine whether plasma treatment is
              appropriate for you.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                The consultation fee for plasma treatments is $100, payable at
                the time of the consultation appointment.
              </li>
              <li>
                If you choose to proceed with a plasma treatment, the $100
                consultation fee will be applied as a credit toward your
                treatment cost.
              </li>
              <li>
                If you decide not to proceed with treatment, the consultation
                fee is non-refundable.
              </li>
              <li>
                Treatment eligibility is determined at the provider's discretion
                based on clinical assessment and safety considerations. Not all
                clients may be candidates for plasma treatments.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Payment
            </h2>
            <p>
              Payment is due at the time of service unless otherwise arranged.
              We accept major credit cards and other payment methods as
              displayed at our location. Prices are subject to change without
              notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Refunds and Returns
            </h2>
            <p>
              Due to the nature of our services, refunds are generally not
              provided for completed treatments. If you have concerns about a
              treatment, please contact us so we can address them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Website Use
            </h2>
            <p>
              The content on this website is for informational purposes only and
              does not constitute medical advice. You may not reproduce,
              distribute, or use any content from this website without our
              written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Limitation of Liability
            </h2>
            <p>
              Rejuvenate Skin Spa shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your
              use of our services or website. Our total liability shall not
              exceed the amount paid for the specific service in question.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any
              time. Changes will be effective when posted on this page.
              Continued use of our services constitutes acceptance of the
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Governing Law
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of the State of Arizona, without regard
              to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about these Terms and Conditions, please
              contact us:
            </p>
            <address className="not-italic mt-4 text-gray-600">
              <strong>Rejuvenate Skin Spa</strong>
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              <br />
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email Rejuvenate Skin Spa"
                className="text-sage-600 hover:text-sage-700"
              >
                {siteConfig.email}
              </a>
              <br />
              Phone:{" "}
              <a
                href={`tel:${siteConfig.phoneTel}`}
                aria-label="Call Rejuvenate Skin Spa"
                className="text-sage-600 hover:text-sage-700"
              >
                {siteConfig.phoneDisplay}
              </a>
            </address>
          </section>
        </div>
      </div>
    </div>
  )
}

