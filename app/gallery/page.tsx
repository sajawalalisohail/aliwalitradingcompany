"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionHeader } from "@/components/shared/section-header"

type GalleryItem = {
  id: number
  src: string
  category: "closeups" | "rolled" | "loading" | "bulk"
}

// Organized by category for filtered views
const galleryItems: GalleryItem[] = [
  // Close-Ups (10 photos)
  { id: 1, src: "/gallery/closeups/ (1).jpg", category: "closeups" },
  { id: 2, src: "/gallery/closeups/ (2).jpg", category: "closeups" },
  { id: 3, src: "/gallery/closeups/ (3).jpg", category: "closeups" },
  { id: 4, src: "/gallery/closeups/ (4).jpg", category: "closeups" },
  { id: 5, src: "/gallery/closeups/ (5).jpg", category: "closeups" },
  { id: 6, src: "/gallery/closeups/ (6).jpg", category: "closeups" },
  { id: 7, src: "/gallery/closeups/ (7).jpg", category: "closeups" },
  { id: 8, src: "/gallery/closeups/ (8).jpg", category: "closeups" },
  { id: 9, src: "/gallery/closeups/ (9).jpg", category: "closeups" },
  { id: 10, src: "/gallery/closeups/ (10).jpg", category: "closeups" },

  // Rolled Belts (7 photos)
  { id: 11, src: "/gallery/rolled/ (1).jpg", category: "rolled" },
  { id: 12, src: "/gallery/rolled/ (2).jpg", category: "rolled" },
  { id: 13, src: "/gallery/rolled/ (3).jpg", category: "rolled" },
  { id: 14, src: "/gallery/rolled/ (4).jpg", category: "rolled" },
  { id: 15, src: "/gallery/rolled/ (5).jpg", category: "rolled" },
  { id: 16, src: "/gallery/rolled/ (6).jpg", category: "rolled" },
  { id: 17, src: "/gallery/rolled/ (7).jpg", category: "rolled" },

  // Container Loading (7 photos)
  { id: 18, src: "/gallery/loading/ (1).jpg", category: "loading" },
  { id: 19, src: "/gallery/loading/ (2).jpg", category: "loading" },
  { id: 20, src: "/gallery/loading/ (3).jpg", category: "loading" },
  { id: 21, src: "/gallery/loading/ (4).jpg", category: "loading" },
  { id: 22, src: "/gallery/loading/ (5).jpg", category: "loading" },
  { id: 23, src: "/gallery/loading/ (6).jpg", category: "loading" },
  { id: 24, src: "/gallery/loading/ (7).jpg", category: "loading" },

  // Bulk Inventory (7 photos)
  { id: 25, src: "/gallery/bulk/ (1).jpg", category: "bulk" },
  { id: 26, src: "/gallery/bulk/ (2).jpg", category: "bulk" },
  { id: 27, src: "/gallery/bulk/ (3).jpg", category: "bulk" },
  { id: 28, src: "/gallery/bulk/ (4).jpg", category: "bulk" },
  { id: 29, src: "/gallery/bulk/ (5).jpg", category: "bulk" },
  { id: 30, src: "/gallery/bulk/ (6).jpg", category: "bulk" },
  { id: 31, src: "/gallery/bulk/ (7).jpg", category: "bulk" },
]

// Shuffled order for "All Photos" view - mixes categories together
const shuffledOrder = [
  25, 1, 18, 11, 3, 27, 14, 20, 6, 29, 12, 4, 22, 8, 30, 15,
  2, 24, 26, 7, 13, 19, 28, 5, 16, 21, 9, 31, 17, 10, 23
]

const filters = [
  { key: "all", label: "All Photos" },
  { key: "closeups", label: "Close-Ups" },
  { key: "rolled", label: "Rolled Belts" },
  { key: "loading", label: "Container Loading" },
  { key: "bulk", label: "Bulk Inventory" },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredItems =
    activeFilter === "all"
      ? shuffledOrder.map((id) => galleryItems.find((item) => item.id === id)!)
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900/5 via-slate-50 to-slate-100">
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader
          title="Gallery"
          subtitle="Yard clean-outs, bulk handling, container loading"
          centered
        />

        {/* Filter Tabs */}
        <div className="flex justify-center mt-10 mb-8">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                  activeFilter === filter.key
                    ? "bg-slate-800 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="aspect-[4/3] bg-slate-200 rounded overflow-hidden relative"
            >
              <Image
                src={item.src}
                alt="Conveyor belt"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          We handle pickup and logistics. Contact us to schedule a yard clean-out.
        </p>
      </div>
      </div>
    </div>
  )
}
