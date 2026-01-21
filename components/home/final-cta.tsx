"use client"

import { motion } from "framer-motion"
import { CTAButtons } from "@/components/shared/cta-buttons"

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Sell Your Used Belting?
          </h2>
          <p className="text-xl text-blue-100">
            Get a fast, clear evaluation from real buyers with 35+ years of experience. We handle everything from pickup to container shipping.
          </p>
          <CTAButtons
            primaryText="Get Your Quote Now"
            secondaryText="WhatsApp (Fast Response)"
            className="justify-center"
          />
        </motion.div>
      </div>
    </section>
  )
}
