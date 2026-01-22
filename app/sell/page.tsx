import type { Metadata } from "next"
import { QuoteForm } from "@/components/forms/quote-form"
import { SectionHeader } from "@/components/shared/section-header"

export const metadata: Metadata = {
  title: "Sell Your Belt - Get a Quote",
  description: "Submit your used plied rubber conveyor belt for evaluation. Fast response, clear pricing, and end-to-end logistics from real buyers with 35+ years experience.",
}

export default function SellPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900/5 via-blue-900/10 to-slate-50">
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          title="Sell Your Used Conveyor Belt"
          subtitle="Get a fast, clear evaluation from real buyers. We handle all logistics from pickup to container shipping."
          centered
        />

        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 md:p-12">
          <QuoteForm />
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-slate-900 mb-2">What happens after you submit?</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">1.</span>
              <span>We review your specifications and photos within 24-48 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">2.</span>
              <span>If your belt meets our requirements, we&apos;ll send you an evaluation and offer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">3.</span>
              <span>We coordinate all pickup, freight, export documentation, and container shipping</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">4.</span>
              <span>For urgent inquiries, contact us directly via WhatsApp for faster response</span>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}
