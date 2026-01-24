"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-blue-100/60 to-slate-200/60 backdrop-blur-sm rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-slate-900"
            >
              Tell us what you have, <span className="text-blue-700">we&apos;ll quote fast.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="space-y-2"
            >
              <p className="text-lg text-slate-600">
                Share your belt details and get a clear evaluation within 24-48 hours.
              </p>
              <p className="text-lg text-slate-600">
                No obligation, no hidden fees.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="pt-4"
            >
              <Button size="default" className="bg-blue-900 hover:bg-blue-950 text-white" asChild>
                <Link href="/sell">Request a Quote</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
