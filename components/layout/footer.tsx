import Link from "next/link"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { COMPANY_NAME, CONTACT, OFFICES, NAV_LINKS } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{COMPANY_NAME}</h3>
            <p className="text-sm mb-4">
              Global buyers of used plied rubber conveyor belting. 35+ years of experience in international trade and logistics.
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{OFFICES.usa}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{OFFICES.pakistan}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sell" className="hover:text-primary transition-colors">
                  Sell Your Belt
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email.sales}`}
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>{CONTACT.email.sales}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.usa.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  <span>{CONTACT.phone.usa}</span>
                  <span className="text-xs text-green-500">(WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.pakistan.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  <span>{CONTACT.phone.pakistan}</span>
                  <span className="text-xs text-green-500">(WhatsApp)</span>
                </a>
              </li>
            </ul>
            <p className="text-xs mt-4 text-slate-400">{CONTACT.businessHours}</p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-slate-400">
            © {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="text-slate-400 mt-2 md:mt-0">
            Built for industrial suppliers worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
