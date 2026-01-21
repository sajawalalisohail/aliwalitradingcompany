import { Hero } from "@/components/home/hero"
import { MovingStrip } from "@/components/home/moving-strip"
import { WhatWeBuySection } from "@/components/home/what-we-buy-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { GalleryPreview } from "@/components/home/gallery-preview"
import { FAQPreview } from "@/components/home/faq-preview"
import { FinalCTA } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <MovingStrip />
      <WhatWeBuySection />
      <HowItWorksSection />
      <GalleryPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  )
}
