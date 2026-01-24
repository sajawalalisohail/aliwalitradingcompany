"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { SectionHeader } from "@/components/shared/section-header"
import { Button } from "@/components/ui/button"

const operationsPhotos = [
  {
    src: "/gallery/bulk/ (1).jpg",
    caption: "Bulk yard inventory"
  },
  {
    src: "/gallery/rolled/ (1).jpg",
    caption: "Rolled belts staged for transport"
  },
  {
    src: "/gallery/loading/ (1).jpg",
    caption: "Container loading in progress"
  },
  {
    src: "/gallery/loading/ (3).jpg",
    caption: "Multiple containers loaded"
  },
]

export function GalleryPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="See Our Operations"
          subtitle="Real photos from our buying and logistics work"
          centered
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          {operationsPhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="default" className="bg-blue-900 hover:bg-blue-950 text-white" asChild>
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
