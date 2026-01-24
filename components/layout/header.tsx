"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY_NAME, NAV_LINKS, CONTACT } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "bg-gradient-to-b from-slate-800 to-slate-900 border-b border-blue-500/20 shadow-lg"
      )}
    >
      {/* Light effect top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      {/* Light effect accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/awt icon.png"
              alt="ALI WALI TRADING COMPANY Icon"
              width={48}
              height={48}
              className="h-12 w-12 object-contain flex-shrink-0"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                {COMPANY_NAME}
              </span>
              <span className="text-xs text-slate-400 leading-tight group-hover:text-blue-300 transition-colors">
                Est. 1990 • Plied Rubber Conveyor Belting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs font-medium transition-all duration-200 relative",
                  pathname === link.href
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col items-end space-y-1">
              <a
                href={`https://wa.me/${CONTACT.whatsapp.usa.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 text-green-500" />
                <span>US: {CONTACT.phone.usa}</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp.pakistan.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 text-green-500" />
                <span>PK: {CONTACT.phone.pakistan}</span>
              </a>
            </div>
            <Button size="default" className="bg-blue-900 hover:bg-blue-950 text-white" asChild>
              <Link href="/sell">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-700/50 bg-slate-900"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors py-2 px-2 rounded-md",
                    pathname === link.href
                      ? "text-blue-400 bg-slate-800/50"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">WhatsApp</p>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.usa.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors py-1.5"
                >
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  <span>US: {CONTACT.phone.usa}</span>
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.pakistan.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors py-1.5"
                >
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  <span>PK: {CONTACT.phone.pakistan}</span>
                </a>
                <Button className="w-full bg-blue-900 hover:bg-blue-950 text-white mt-2" asChild>
                  <Link href="/sell">Get a Quote</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
