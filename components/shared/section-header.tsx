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
    <div className={cn("space-y-2", centered && "text-center", className)}>
      <h2 className={cn("text-3xl md:text-4xl font-bold", light ? "text-white" : "text-slate-900")}>{title}</h2>
      {subtitle && (
        <p className={cn("text-lg max-w-2xl mx-auto", light ? "text-slate-300" : "text-slate-600")}>{subtitle}</p>
      )}
    </div>
  )
}
