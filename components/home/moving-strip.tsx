"use client"

export function MovingStrip() {
  const beltTypes = [
    "Plied Rubber Belts",
    "3-Ply Conveyor",
    "4-Ply Conveyor",
    "5-Ply Conveyor",
    "Used Conveyor Belts",
    "Industrial Belting",
    "Fabric-Reinforced Belts",
  ]

  const services = [
    "Global Pickup",
    "Professional Packing",
    "Container Shipping",
    "Export Documentation",
    "Logistics Coordination",
    "Fast Evaluation",
    "Fair Pricing",
  ]

  return (
    <div className="relative py-8 overflow-hidden">
      <div className="space-y-5">
        {/* Belt Types Strip */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...beltTypes, ...beltTypes, ...beltTypes].map((item, idx) => (
              <div
                key={idx}
                className="mx-2 px-5 py-2 bg-blue-600/80 backdrop-blur-md rounded-lg text-white text-xs font-semibold shadow-md hover:bg-blue-500/90 transition-all duration-300 flex-shrink-0 border border-blue-400/30"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Services Strip */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap" style={{ animationDirection: "reverse" }}>
            {[...services, ...services, ...services].map((item, idx) => (
              <div
                key={idx}
                className="mx-2 px-5 py-2 bg-slate-600/60 backdrop-blur-md rounded-lg text-white text-xs font-semibold shadow-md hover:bg-slate-500/80 transition-all duration-300 flex-shrink-0 border border-slate-400/20"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
