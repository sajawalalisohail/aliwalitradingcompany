export const COMPANY_NAME = "ALI WALI TRADING COMPANY"
export const TAGLINE = "Real Buyers. Global Logistics. Fast Evaluation."

export const CONTACT = {
  email: {
    sales: "sales@aliwalitradingco.com",
    info: "info@aliwalitradingco.com",
  },
  phone: {
    usa: "+1 304 685 4016",
    pakistan: "+92 322 4001968",
  },
  whatsapp: {
    usa: "+1 304 685 4016",
    pakistan: "+92 322 4001968",
  },
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM (PKT)",
}

export const OFFICES = {
  usa: "United States Office",
  pakistan: "Pakistan Office",
}

export const SOCIAL = {
  whatsapp: {
    usa: `https://wa.me/${CONTACT.whatsapp.usa.replace(/\D/g, '')}`,
    pakistan: `https://wa.me/${CONTACT.whatsapp.pakistan.replace(/\D/g, '')}`,
  },
}

export const NAV_LINKS = [
  { href: "/what-we-buy", label: "What We Buy" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export const BELT_TYPES = {
  plied: "Plied Rubber (Fabric-Reinforced)",
  unknown: "Not Sure / Unknown",
}

export const PLY_COUNTS = ["3", "4", "5+", "Unknown"]

export const QUANTITY_UNITS = ["Tons", "Meters", "Feet", "Not Sure"]

export const WIDTH_UNITS = ["Inches", "Millimeters"]
