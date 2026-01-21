"use client"

import { motion } from "framer-motion"
import { Camera, CheckSquare, TruckIcon, Ship } from "lucide-react"
import { SectionHeader } from "@/components/shared/section-header"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    icon: Camera,
    number: "01",
    title: "Send Specs + Photos",
    description: "Share belt specifications, location, photos, and condition details through our simple form.",
  },
  {
    icon: CheckSquare,
    number: "02",
    title: "Fast Evaluation",
    description: "Receive our assessment and offer quickly. Clear communication, no delays.",
  },
  {
    icon: TruckIcon,
    number: "03",
    title: "Pickup Coordination",
    description: "We handle freight coordination and export documentation. You focus on operations.",
  },
  {
    icon: Ship,
    number: "04",
    title: "Container Shipping",
    description: "End-to-end logistics managed. Your belt is on its way to Pakistan.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="How It Works"
          subtitle="A simple, transparent process from evaluation to shipping"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="relative h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="absolute top-4 right-4 text-5xl font-bold text-slate-100">
                    {step.number}
                  </div>
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
