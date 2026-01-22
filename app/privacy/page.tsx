import type { Metadata } from "next"
import { SectionHeader } from "@/components/shared/section-header"
import { COMPANY_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for ALI WALI TRADING COMPANY website and services.",
}

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/10 to-slate-100">
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader title="Privacy Policy" centered />

        <div className="mt-12 prose prose-slate max-w-none">
          <p className="text-sm text-slate-600 mb-8">Last updated: January 2025</p>

          <div className="space-y-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
              <p>
                {COMPANY_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Company information (company name, location)</li>
                <li>Belt specifications and photos you upload through our quote form</li>
                <li>Communication content when you contact us</li>
                <li>Technical information (IP address, browser type, device information)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Evaluate quote requests and provide belt assessments</li>
                <li>Communicate with you about your inquiries and transactions</li>
                <li>Coordinate logistics, pickup, and shipping services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Logistics partners to coordinate pickup and shipping</li>
                <li>Service providers who assist with our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us at info@aliwalitradingco.com.
              </p>
            </section>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
