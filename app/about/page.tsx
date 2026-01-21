import type { Metadata } from "next"
import { Shield, Zap, TrendingUp, Globe } from "lucide-react"
import { SectionHeader } from "@/components/shared/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { CTAButtons } from "@/components/shared/cta-buttons"
import { COMPANY_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about ALI WALI TRADING COMPANY. 35+ years of experience buying used plied rubber conveyor belts worldwide with offices in USA and Pakistan.",
}

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Clear communication, honest evaluations, and no hidden terms. You always know where you stand.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Fast responses, efficient processes, and quick decision-making. Your time is valuable.",
  },
  {
    icon: TrendingUp,
    title: "Reliability",
    description: "Consistent performance, dependable logistics, and follow-through on commitments.",
  },
  {
    icon: Globe,
    title: "Global Capability",
    description: "Worldwide buying network with end-to-end logistics from pickup to container shipping.",
  },
]

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader
          title={`About ${COMPANY_NAME}`}
          subtitle="Real buyers with decades of experience in the global conveyor belt trade"
          centered
        />

        <div className="mt-12 prose prose-slate max-w-none">
          <div className="bg-slate-50 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                For over 35 years, {COMPANY_NAME} has been a trusted name in the global trade of used plied rubber conveyor belts. We are not brokers or middlemen—we are direct buyers with the experience, logistics infrastructure, and market knowledge to handle complex international transactions.
              </p>
              <p>
                Our business was built on a simple principle: provide industrial suppliers with a reliable, professional buyer who handles everything from evaluation to container shipping. We understand that sellers need speed, clarity, and dependability. That's exactly what we deliver.
              </p>
              <p>
                With offices in the United States and Pakistan, we maintain a global presence that allows us to coordinate pickups worldwide and manage export logistics efficiently. Our team has handled thousands of shipments, working with mines, quarries, cement plants, recycling operations, and industrial surplus dealers across multiple continents.
              </p>
              <p>
                We focus exclusively on plied rubber (fabric-reinforced) conveyor belts because that's where our expertise and market demand align. This specialization allows us to provide better evaluations, faster responses, and more competitive offers than generalist buyers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                      <p className="text-sm text-slate-600">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-primary/5 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Global Sourcing Network</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <span>Active buying relationships across North America, Europe, Australia, and Asia</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <span>Experience with diverse regulatory environments and export procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <span>Established logistics partners in major industrial regions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Export & Logistics Expertise</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <span>Complete export documentation and customs clearance management</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <span>Container loading, securing, and ocean freight coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <span>End-to-end tracking and communication throughout shipping process</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Market Knowledge</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <span>Deep understanding of conveyor belt specifications and quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <span>Current market conditions and demand trends</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <span>Fair pricing based on real market data, not speculation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Operational Scale</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <span>Capacity to handle both container loads and smaller bulk lots</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <span>Warehousing and processing facilities in Pakistan</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <span>Financial stability to support ongoing operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Work With Experienced Buyers
          </h3>
          <p className="text-lg text-slate-600 mb-8">
            Get a professional evaluation from a team that's been in the business for 35+ years.
          </p>
          <CTAButtons className="justify-center" />
        </div>
      </div>
    </div>
  )
}
