"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/shared/section-header"
import { Button } from "@/components/ui/button"

const galleryItems = [
  { title: "Rolled Belts Ready for Export", category: "loads" },
  { title: "Container Loading Operations", category: "containers" },
  { title: "Warehouse Inventory Stacks", category: "warehouse" },
  { title: "Rolling and Packing Process", category: "rolling" },
  { title: "Multiple Container Shipments", category: "containers" },
  { title: "Quality Inspection", category: "loads" },
]

export function GalleryPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="See Our Operations"
          subtitle="Real photos from our global buying and logistics operations"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-200 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                <p className="text-slate-600 text-sm text-center px-4">{item.title}</p>
              </div>
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">View Gallery</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline" asChild>
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
