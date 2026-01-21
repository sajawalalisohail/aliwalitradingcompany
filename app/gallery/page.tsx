"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeader } from "@/components/shared/section-header"

const galleryCategories = {
  all: [
    { id: 1, title: "Rolled Belt Bundle Ready for Export", category: "loads" },
    { id: 2, title: "Container Loading Process", category: "containers" },
    { id: 3, title: "Warehouse Inventory Stack", category: "warehouse" },
    { id: 4, title: "Belt Rolling Operation", category: "rolling" },
    { id: 5, title: "Multiple Container Shipment", category: "containers" },
    { id: 6, title: "Quality Inspection", category: "loads" },
    { id: 7, title: "Packing and Securing", category: "rolling" },
    { id: 8, title: "Storage Facility Overview", category: "warehouse" },
    { id: 9, title: "Bulk Load Preparation", category: "loads" },
    { id: 10, title: "Container Stuffing", category: "containers" },
    { id: 11, title: "Rolling Equipment", category: "rolling" },
    { id: 12, title: "Organized Warehouse Stock", category: "warehouse" },
  ],
  loads: [] as any[],
  rolling: [] as any[],
  containers: [] as any[],
  warehouse: [] as any[],
}

galleryCategories.loads = galleryCategories.all.filter((item) => item.category === "loads")
galleryCategories.rolling = galleryCategories.all.filter((item) => item.category === "rolling")
galleryCategories.containers = galleryCategories.all.filter((item) => item.category === "containers")
galleryCategories.warehouse = galleryCategories.all.filter((item) => item.category === "warehouse")

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          title="Gallery"
          subtitle="Real photos from our global buying operations and logistics network"
          centered
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12">
          <div className="flex justify-center mb-8">
            <TabsList className="inline-flex">
              <TabsTrigger value="all">All Photos</TabsTrigger>
              <TabsTrigger value="loads">Loads</TabsTrigger>
              <TabsTrigger value="rolling">Rolling/Packing</TabsTrigger>
              <TabsTrigger value="containers">Containers</TabsTrigger>
              <TabsTrigger value="warehouse">Warehouse</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(galleryCategories).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-200 hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center p-6">
                      <p className="text-slate-600 text-sm text-center">{item.title}</p>
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white font-medium">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <p className="text-sm text-slate-700 text-center">
            <strong>Note:</strong> This gallery showcases our operations including belt evaluation, rolling, packing, container loading, and warehouse management. All photos represent actual operations from our global network.
          </p>
        </div>
      </div>
    </div>
  )
}
