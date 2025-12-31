import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Privacy Policy for Rejuvenate Skin Spa in Queen Creek, Arizona. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Effective Date: January 2025
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Introduction
            </h2>
            <p>
              Rejuvenate Skin Spa ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services at our Queen Creek, Arizona
              location.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, and mailing address when you contact us, schedule
                an appointment, or fill out a form.
              </li>
              <li>
                <strong>Health Information:</strong> Skin concerns, treatment
                history, and health-related information you provide during
                consultations to ensure safe and appropriate treatments.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access
                and use our website, including your IP address, browser type,
                and pages visited.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Schedule and manage appointments</li>
              <li>Communicate with you about treatments, promotions, and updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>With service providers who assist in our operations</li>
              <li>To comply with legal requirements or respond to lawful requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information. However, no method of
              transmission over the Internet or electronic storage is 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information by contacting us. We will respond to your
              request in accordance with applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact
              us:
            </p>
            <address className="not-italic mt-4 text-gray-600">
              <strong>Rejuvenate Skin Spa</strong>
              <br />
              20162 E. Sonoqui Blvd.
              <br />
              Queen Creek, AZ 85142
              <br />
              Email:{" "}
              <a
                href="mailto:info@rejuvenateskinspa.com"
                className="text-sage-600 hover:text-sage-700"
              >
                info@rejuvenateskinspa.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:4802049366"
                className="text-sage-600 hover:text-sage-700"
              >
                (480) 204-9366
              </a>
            </address>
          </section>
        </div>
      </div>
    </div>
  )
}

