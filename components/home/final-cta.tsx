"use client"

import { motion } from "framer-motion"
import { CTAButtons } from "@/components/shared/cta-buttons"

export function FinalCTA() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-blue-100/60 to-slate-200/60 backdrop-blur-sm rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Tell us what you need, <span className="text-blue-700">we&apos;ll quote fast.</span>
            </h2>
            <div className="space-y-2">
              <p className="text-lg text-slate-600">
                Share your requirements and get a detailed quote within 24-48 hours.
              </p>
              <p className="text-lg text-slate-600">
                No obligation, no hidden fees.
              </p>
            </div>
            <div className="pt-4">
              <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:gap-3">
                Request a Quote
                <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
