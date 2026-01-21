import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface TrustBadgeProps {
  icon: LucideIcon
  text: string
  className?: string
}

export function TrustBadge({ icon: Icon, text, className }: TrustBadgeProps) {
  return (
    <div className={cn("flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm", className)}>
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium text-slate-700">{text}</span>
    </div>
  )
}
