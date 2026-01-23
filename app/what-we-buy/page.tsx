import type { Metadata } from "next"
import { CheckCircle2, XCircle, Info } from "lucide-react"
import { SectionHeader } from "@/components/shared/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CTAButtons } from "@/components/shared/cta-buttons"

export const metadata: Metadata = {
  title: "What We Buy",
  description: "Detailed specifications for plied rubber conveyor belts we purchase. Learn about acceptable belt types, ply counts, conditions, and what we don't accept.",
}

export default function WhatWeBuyPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-green-50/20 to-slate-100">
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader
          title="What We Buy"
          subtitle="Clear specifications for the conveyor belts we purchase worldwide"
          centered
        />

        <div className="mt-12 bg-slate-50 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Primary Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Plied Rubber Only</h3>
                <p className="text-slate-600 text-sm">
                  Fabric-reinforced conveyor belts with 3-5 ply construction. We prefer 4+ ply for better durability and value.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Serviceable Condition</h3>
                <p className="text-slate-600 text-sm">
                  Used belts in serviceable condition. Minor wear is acceptable, but no major structural damage.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Bulk Quantities Preferred</h3>
                <p className="text-slate-600 text-sm">
                  Container-load quantities are ideal, but we evaluate all serious offers from global suppliers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Global Sourcing</h3>
                <p className="text-slate-600 text-sm">
                  We buy from mines, quarries, cement plants, ports, recycling yards, and industrial surplus dealers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="border-2 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <CheckCircle2 className="h-5 w-5" />
                What We Accept
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>3-ply, 4-ply, 5+ ply rubber conveyor belts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>PVC and lightweight conveyor belts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Fabric-reinforced construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Various widths (all standard widths accepted)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Surplus from decommissioned operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Mining, quarry, cement plant belts</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <XCircle className="h-5 w-5" />
                Not Accepted
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Steel cord or steel-reinforced belts</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Belts with visible exposed steel wires</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Severely torn or shredded belts</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Heavy contamination (oil, chemicals)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Belts with major structural failures</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
          <div className="flex items-start gap-3 mb-6">
            <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Specification Checklist
              </h3>
              <p className="text-slate-600">
                When submitting a quote request, please provide as much of this information as possible:
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-slate-700">Ply count (3, 4, 5+, or Unknown)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-slate-700">Belt width (inches or millimeters)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-slate-700">Approximate thickness</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-slate-700">Estimated quantity (tons/meters/feet)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-slate-700">Current location (country, city)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-slate-700">Photos (multiple angles recommended)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-slate-700">Condition notes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-slate-700">Previous application (if known)</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Have plied rubber belts to sell?
          </h3>
          <p className="text-lg text-slate-600 mb-8">
            Submit your specifications and photos for a fast evaluation.
          </p>
          <CTAButtons className="justify-center" />
        </div>
      </div>
      </div>
    </div>
  )
}
