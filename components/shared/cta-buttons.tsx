import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT } from "@/lib/constants"

interface CTAButtonsProps {
  primaryText?: string
  secondaryText?: string
  className?: string
}

export function CTAButtons({
  primaryText = "Get a Quote",
  secondaryText = "WhatsApp",
  className
}: CTAButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Button size="lg" asChild>
        <Link href="/sell">{primaryText}</Link>
      </Button>
      <Button size="lg" variant="outline" asChild>
        <a
          href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-5 w-5" />
          {secondaryText}
        </a>
      </Button>
    </div>
  )
}
