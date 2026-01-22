"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const GALLERY_IMAGES = [
  "/hero/pic (1).jpeg",
  "/hero/pic (2).jpeg",
  "/hero/pic (3).jpeg",
  "/hero/pic (4).jpeg",
  "/hero/pic (5).jpeg",
  "/hero/pic (6).jpeg",
  "/hero/pic (7).jpeg",
]

export function HeroGalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
    )
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
    setAutoPlay(false)
  }

  return (
    <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl group">
      {/* Main Image */}
      <Image
        src={GALLERY_IMAGES[currentIndex]}
        alt="Conveyor belts gallery"
        fill
        className="object-cover transition-opacity duration-500"
        priority
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {GALLERY_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setAutoPlay(false)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-6"
                : "bg-white/50 w-2 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-white text-sm font-medium">
          {currentIndex + 1} / {GALLERY_IMAGES.length}
        </span>
      </div>
    </div>
  )
}
