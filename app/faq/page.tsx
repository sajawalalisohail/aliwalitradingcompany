import type { Metadata } from "next"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeader } from "@/components/shared/section-header"
import { CTAButtons } from "@/components/shared/cta-buttons"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Common questions about selling used plied rubber conveyor belts, our buying process, logistics, pricing, and international shipping.",
}

const faqs = [
  {
    question: "What's the difference between plied rubber and steel cord belts?",
    answer: "Plied rubber belts are fabric-reinforced conveyor belts with multiple layers (plies) of fabric material bonded together with rubber. Steel cord belts contain steel wires or cables running through them for extra strength. We ONLY purchase plied rubber belts. We do not accept steel cord or steel-reinforced belts under any circumstances.",
  },
  {
    question: "What ply counts do you accept?",
    answer: "We accept 3-ply, 4-ply, 5-ply, and higher ply count belts. We prefer 4+ ply belts as they typically offer better durability and market value. If you're unsure of your belt's ply count, send us photos and we can help identify it.",
  },
  {
    question: "What quantities do you buy?",
    answer: "We purchase various quantities from container-load volumes to smaller bulk lots. While larger quantities are preferred for logistics efficiency, we evaluate all serious offers. Even if you have a smaller quantity, we encourage you to submit it for evaluation.",
  },
  {
    question: "Do you handle international pickup?",
    answer: "Yes. We coordinate pickup, freight, export documentation, and container shipping from anywhere worldwide to Pakistan. You don't need to arrange any logistics. We handle everything end-to-end.",
  },
  {
    question: "How fast do you respond to quote requests?",
    answer: "We typically respond within 24-48 hours during business days. For urgent inquiries or faster response, contact us directly via WhatsApp. Our team reviews submissions carefully to provide accurate evaluations.",
  },
  {
    question: "What condition must the belts be in?",
    answer: "We accept used belts in serviceable condition. Minor wear is acceptable, but we cannot accept severely torn, shredded, heavily contaminated, or belts with major structural damage or exposed steel. When in doubt, send photos and we'll assess the condition.",
  },
  {
    question: "Do you charge for pickup or freight?",
    answer: "Logistics costs are factored into our overall evaluation. We handle coordination and costs as part of the transaction. Specific terms are discussed during the evaluation process based on your location and quantity.",
  },
  {
    question: "Can you buy from my country?",
    answer: "Yes. We buy from suppliers worldwide including North America, Europe, Australia, Asia, South America, and Africa. Our global logistics network and export experience allow us to handle shipments from most countries.",
  },
  {
    question: "What information do you need for an evaluation?",
    answer: "For the most accurate evaluation, provide: belt type (plied rubber), ply count, width, estimated quantity, current location, photos (multiple angles showing overall condition and any damage), and condition notes. The more information you provide, the faster and more accurate our evaluation will be.",
  },
  {
    question: "Why do you only buy plied rubber belts?",
    answer: "We specialize in plied rubber (fabric-reinforced) belts because that's where our market expertise and demand are strongest. This specialization allows us to provide better evaluations, faster responses, and more competitive offers than if we tried to handle all belt types.",
  },
  {
    question: "What happens after I submit a quote request?",
    answer: "After submission: (1) Our team reviews your information and photos within 24-48 hours. (2) If your belt meets our requirements, we provide an evaluation and offer. (3) Upon agreement, we coordinate all pickup and logistics. (4) We handle export documentation and container shipping to Pakistan. You're updated throughout the process.",
  },
  {
    question: "Are you brokers or direct buyers?",
    answer: "We are direct buyers, not brokers or middlemen. We purchase belts for our own operations and have the infrastructure, financing, and logistics capability to handle transactions independently. This means faster decisions and more reliable transactions.",
  },
  {
    question: "What types of sellers do you work with?",
    answer: "We work with mines, quarries, cement plants, ports, recycling operations, industrial surplus dealers, belt service companies, and decommissioned industrial facilities. Basically, any legitimate supplier with plied rubber conveyor belts to sell.",
  },
  {
    question: "Do you require exclusive agreements or contracts?",
    answer: "No. Each transaction is evaluated independently. You're free to get quotes from other buyers and make the decision that's best for your business. We believe in earning your business through competitive offers and professional service, not contractual obligations.",
  },
]

export default function FAQPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50/40 via-slate-50 to-blue-50/30">
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Clear answers to common questions about selling used conveyor belts"
          centered
        />

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 bg-blue-50/50 rounded-xl p-8 text-center border border-blue-100">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Still Have Questions?</h3>
          <p className="text-slate-600 mb-6">
            Contact us directly and we&apos;ll be happy to answer any specific questions about your belt or our process.
          </p>
          <CTAButtons className="justify-center" />
        </div>
      </div>
      </div>
    </div>
  )
}
