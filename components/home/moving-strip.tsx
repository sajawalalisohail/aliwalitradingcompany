"use client"

export function MovingStrip() {
  const industries = [
    "Mining",
    "Quarry",
    "Cement",
    "Ports",
    "Recycling",
    "Industrial Surplus",
    "Belt Service",
  ]

  const services = [
    "Pickup",
    "Rolling",
    "Packing",
    "Container Loading",
    "Export Docs",
    "Logistics Coordination",
  ]

  return (
    <div className="bg-slate-900 py-8 overflow-hidden">
      <div className="space-y-4">
        {/* Industries Strip */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...industries, ...industries, ...industries].map((item, idx) => (
              <div
                key={idx}
                className="mx-4 px-6 py-2 bg-white/10 rounded-full text-white text-sm font-medium"
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
                className="mx-4 px-6 py-2 bg-primary/80 rounded-full text-white text-sm font-medium"
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
