"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeader } from "@/components/shared/section-header"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What's the difference between plied rubber and steel cord belts?",
    answer: "Plied rubber belts are fabric-reinforced (typically 3-5 layers of fabric). Steel cord belts have steel wires running through them. We ONLY buy plied rubber belts. No steel cord or steel-reinforced belts.",
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
    <section className="py-20 bg-gradient-to-b from-blue-50/40 to-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeader
          title="Common Questions"
          subtitle="Quick answers to help you understand our buying process"
          centered
        />

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
            >
              <AccordionItem value={`item-${idx}`} className="border-blue-100 bg-white/60 rounded-lg px-4 mb-3">
                <AccordionTrigger className="text-left text-slate-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          className="text-center mt-8"
        >
          <Button size="default" className="bg-blue-900 hover:bg-blue-950 text-white" asChild>
            <Link href="/faq">View all FAQs</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
