"use client"

import { motion } from "framer-motion"
import { Globe, TruckIcon, Zap } from "lucide-react"
import { CTAButtons } from "@/components/shared/cta-buttons"
import { TrustBadge } from "@/components/shared/trust-badge"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                We Buy Used Plied Rubber Conveyor Belting Worldwide.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Real buyers. 35+ years experience. Pickup + container shipping handled end-to-end.
              </p>
            </div>

            <CTAButtons />

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <TrustBadge icon={Globe} text="Global Pickup Coordination" />
              <TrustBadge icon={TruckIcon} text="Export + Container Shipping" />
              <TrustBadge icon={Zap} text="Fast, Clear Evaluation" />
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-slate-900/20" />
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
              <p className="text-slate-500 text-sm">Hero Image: Industrial warehouse with rolled conveyor belts</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
