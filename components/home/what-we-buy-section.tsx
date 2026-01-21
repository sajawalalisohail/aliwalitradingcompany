"use client"

import { motion } from "framer-motion"
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/shared/section-header"
import { Button } from "@/components/ui/button"

export function WhatWeBuySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What We Buy"
          subtitle="We purchase plied rubber conveyor belts from industrial operations worldwide"
          centered
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* What We Want */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-2 border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CheckCircle2 className="h-5 w-5" />
                  What We Accept
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Plied Rubber Belts (3–4+ ply)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Prefer 4+ ply fabric-reinforced</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Serviceable used belts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Bulk lots from operations worldwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Industrial surplus inventory</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* What We Don't Want */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-2 border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <XCircle className="h-5 w-5" />
                  Not Accepted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Steel cord / steel-reinforced belts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Belts with exposed steel wires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Heavily torn or damaged belts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Contaminated material</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>PVC or lightweight belts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Not Sure? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <HelpCircle className="h-5 w-5" />
                  Not Sure?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-700">
                  Send us photos and specifications. We&apos;ll quickly confirm if your belt meets our requirements.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/sell">Send Photos for Evaluation</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <Link href="/what-we-buy" className="text-primary hover:underline font-medium">
            View detailed specifications →
          </Link>
        </div>
      </div>
    </section>
  )
}
