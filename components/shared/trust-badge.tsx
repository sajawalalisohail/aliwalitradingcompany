import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface TrustBadgeProps {
  icon: LucideIcon
  text: string
  className?: string
}

export function TrustBadge({ icon: Icon, text, className }: TrustBadgeProps) {
  return (
    <div className={cn("flex items-center space-x-2 bg-slate-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-white shadow-md", className)}>
      <Icon className="h-4 w-4 text-white" />
      <span className="text-sm font-semibold text-white">{text}</span>
    </div>
  )
}
