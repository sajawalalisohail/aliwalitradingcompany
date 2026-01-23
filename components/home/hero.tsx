"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Globe, TruckIcon, Zap } from "lucide-react"
import { CTAButtons } from "@/components/shared/cta-buttons"
import { TrustBadge } from "@/components/shared/trust-badge"
import { HeroGalleryCarousel } from "./hero-gallery-carousel"

export function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/gallery/downloaded/ (8).jpeg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/60" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-sm">
                We Buy Used Plied Rubber Conveyor Belting Worldwide.
              </h1>
              <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-xl">
                Real buyers with 35+ years experience. We handle everything from global pickup coordination to container shipping end-to-end.
              </p>
            </div>

            <CTAButtons />

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <TrustBadge icon={Globe} text="Global Pickup Coordination" />
              <TrustBadge icon={TruckIcon} text="Export + Container Shipping" />
              <TrustBadge icon={Zap} text="Fast, Clear Evaluation" />
            </div>
          </motion.div>

          {/* Right - Product Gallery Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeroGalleryCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
