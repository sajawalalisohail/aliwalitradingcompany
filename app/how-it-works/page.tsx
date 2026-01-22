import type { Metadata } from "next"
import { Camera, MessageSquare, TruckIcon, Ship, FileCheck, Package } from "lucide-react"
import { SectionHeader } from "@/components/shared/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { CTAButtons } from "@/components/shared/cta-buttons"

export const metadata: Metadata = {
  title: "How It Works",
  description: "Our simple process for buying used plied rubber conveyor belts: evaluation, pickup coordination, export documentation, and container shipping worldwide.",
}

const detailedSteps = [
  {
    icon: Camera,
    title: "Submit Your Belt Information",
    description: "Fill out our simple quote form with belt specifications, location, and photos. The more details you provide, the faster we can evaluate.",
    details: [
      "Upload multiple photos showing overall condition",
      "Provide ply count, width, and estimated quantity",
      "Share location for logistics planning",
      "Describe any special conditions or concerns",
    ],
  },
  {
    icon: MessageSquare,
    title: "Fast Evaluation & Response",
    description: "Our team reviews your submission within 24-48 hours. We provide clear, honest feedback on whether your belt meets our requirements.",
    details: [
      "Quick initial assessment from experienced buyers",
      "Clear communication on acceptance criteria",
      "Fair evaluation based on condition and market",
      "No hidden terms or surprises",
    ],
  },
  {
    icon: TruckIcon,
    title: "Pickup & Freight Coordination",
    description: "We handle all logistics coordination. You don't need to arrange freight or worry about complicated export procedures.",
    details: [
      "We coordinate local pickup at your site",
      "Professional rolling and packing if needed",
      "Freight arrangement to port",
      "All logistics handled by our experienced team",
    ],
  },
  {
    icon: FileCheck,
    title: "Export Documentation",
    description: "Our team manages all export paperwork and customs documentation, ensuring smooth international shipping.",
    details: [
      "Complete export documentation preparation",
      "Customs clearance coordination",
      "Compliance with international trade regulations",
      "Transparent process at every step",
    ],
  },
  {
    icon: Package,
    title: "Container Loading",
    description: "Proper containerization ensures your belt arrives safely. We coordinate efficient loading and securing of materials.",
    details: [
      "Professional container loading",
      "Proper securing and protection",
      "Maximized container utilization",
      "Quality control before shipping",
    ],
  },
  {
    icon: Ship,
    title: "Shipping to Pakistan",
    description: "Container shipping managed end-to-end. Your belt is on its way to Pakistan where it will be put to continued use.",
    details: [
      "Ocean freight to Pakistan",
      "Tracking and updates provided",
      "Destination handling coordinated",
      "Smooth delivery to our facilities",
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-50/30 via-slate-50 to-blue-50/20">
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader
          title="How It Works"
          subtitle="A transparent, professional process from initial contact to container shipping"
          centered
        />

        <div className="mt-12 space-y-8">
          {detailedSteps.map((step, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[auto_1fr] gap-6 p-8">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-slate-200">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {step.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-start gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">35+</div>
              <p className="text-sm text-slate-600">Years of Experience in the Industry</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-slate-600">Real Buyers, Not Brokers or Middlemen</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Global</div>
              <p className="text-sm text-slate-600">Logistics Network & Export Capability</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-slate-600 mb-8">
            Submit your belt specifications and let us handle the rest.
          </p>
          <CTAButtons className="justify-center" />
        </div>
      </div>
      </div>
    </div>
  )
}
