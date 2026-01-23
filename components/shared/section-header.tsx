"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeader({ title, subtitle, centered = false, light = false, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("space-y-2", centered && "text-center", className)}
    >
      <h2 className={cn("text-3xl md:text-4xl font-bold", light ? "text-white" : "text-slate-900")}>{title}</h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className={cn("text-lg max-w-2xl mx-auto", light ? "text-slate-300" : "text-slate-600")}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
