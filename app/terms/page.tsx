import type { Metadata } from "next"
import { SectionHeader } from "@/components/shared/section-header"
import { COMPANY_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for ALI WALI TRADING COMPANY website and services.",
}

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader title="Terms of Service" centered />

        <div className="mt-12 prose prose-slate max-w-none">
          <p className="text-sm text-slate-600 mb-8">Last updated: January 2025</p>

          <div className="space-y-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using the {COMPANY_NAME} website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Use of Services</h2>
              <p>Our services include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Evaluation of used plied rubber conveyor belts</li>
                <li>Purchase and logistics coordination</li>
                <li>Information and communication through our website</li>
              </ul>
              <p className="mt-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Quote Submissions</h2>
              <p>
                When you submit a quote request:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>You represent that all information provided is accurate and truthful</li>
                <li>Photos and specifications submitted become part of our evaluation record</li>
                <li>Quote submissions do not constitute a binding offer until explicitly accepted by both parties</li>
                <li>We reserve the right to accept or decline any quote request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of {COMPANY_NAME} or its licensors and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {COMPANY_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimers</h2>
              <p>
                Our website and services are provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
              <p>
                For questions about these Terms, please contact us at info@aliwalitradingco.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
