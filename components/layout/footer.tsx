import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { COMPANY_NAME, CONTACT, OFFICES, NAV_LINKS } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/awt icon.png"
                alt="ALI WALI TRADING COMPANY Icon"
                width={40}
                height={40}
                className="h-10 w-10 object-contain flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold text-white leading-tight group-hover:text-blue-400 transition-colors whitespace-nowrap">
                  {COMPANY_NAME}
                </span>
                <span className="text-xs text-slate-400 leading-tight group-hover:text-blue-300 transition-colors">
                  Est. 1990 • Plied Rubber Conveyor Belting
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Global buyers of used plied rubber conveyor belting. 35+ years of experience in international trade and logistics.
            </p>
            <div className="flex flex-col space-y-3 pt-2">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">{OFFICES.usa}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">{OFFICES.pakistan}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5 lg:ml-16">
            <h4 className="text-white font-semibold text-base">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h4 className="text-white font-semibold text-base">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/sell" className="text-sm text-slate-400 hover:text-primary transition-colors inline-block">
                  Sell Your Belt
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-slate-400 hover:text-primary transition-colors inline-block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-slate-400 hover:text-primary transition-colors inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-400 hover:text-primary transition-colors inline-block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-white font-semibold text-base">Contact Us</h4>
            <div className="space-y-4">
              <a
                href={`mailto:${CONTACT.email.sales}`}
                className="flex items-start space-x-2 text-sm text-slate-400 hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                <span className="break-all">{CONTACT.email.sales}</span>
              </a>
              <div className="flex flex-col space-y-2">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.usa.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <MessageCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>US: {CONTACT.phone.usa}</span>
                  <span className="text-xs text-green-500">(WhatsApp)</span>
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.pakistan.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <MessageCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>PK: {CONTACT.phone.pakistan}</span>
                  <span className="text-xs text-green-500">(WhatsApp)</span>
                </a>
              </div>
              <p className="text-xs text-slate-500 pt-2">{CONTACT.businessHours}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Built for industrial suppliers worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
