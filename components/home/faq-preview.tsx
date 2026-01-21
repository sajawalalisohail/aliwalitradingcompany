"use client"

import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeader } from "@/components/shared/section-header"

const faqs = [
  {
    question: "What's the difference between plied rubber and steel cord belts?",
    answer: "Plied rubber belts are fabric-reinforced (typically 3-5 layers of fabric). Steel cord belts have steel wires running through them. We ONLY buy plied rubber belts—no steel cord or steel-reinforced belts.",
  },
  {
    question: "What quantities do you buy?",
    answer: "We purchase various quantities from bulk lots to smaller surplus batches. Container-load quantities are preferred, but we evaluate all serious offers.",
  },
  {
    question: "Do you handle international pickup?",
    answer: "Yes. We coordinate pickup, freight, export documentation, and container shipping end-to-end from your location to Pakistan.",
  },
  {
    question: "How fast do you respond?",
    answer: "We typically respond to quote requests within 24-48 hours. For urgent inquiries, contact us via WhatsApp for faster response.",
  },
]

export function FAQPreview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeader
          title="Common Questions"
          subtitle="Quick answers to help you understand our buying process"
          centered
        />

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <Link href="/faq" className="text-primary hover:underline font-medium">
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  )
}
