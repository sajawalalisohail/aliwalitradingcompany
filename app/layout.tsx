import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { COMPANY_NAME, TAGLINE } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | ${TAGLINE}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: "Global buyers of used plied rubber conveyor belting. 35+ years experience. We handle pickup, export documentation, and container shipping worldwide. Fast, clear evaluation from real buyers.",
  keywords: [
    "used conveyor belt buyers",
    "plied rubber conveyor belt",
    "conveyor belt export",
    "industrial conveyor belt",
    "fabric reinforced conveyor belt",
    "conveyor belt recycling",
    "global conveyor belt buyers",
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  metadataBase: new URL("https://aliwalitradingco.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aliwalitradingco.com",
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | ${TAGLINE}`,
    description: "Global buyers of used plied rubber conveyor belting. 35+ years experience. Pickup + container shipping handled end-to-end.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: COMPANY_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | ${TAGLINE}`,
    description: "Global buyers of used plied rubber conveyor belting. 35+ years experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: COMPANY_NAME,
              description: "Global buyers of used plied rubber conveyor belting with 35+ years of experience",
              url: "https://aliwalitradingco.com",
              logo: "https://aliwalitradingco.com/logo.png",
              foundingDate: "1990",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "Sales",
                  email: "sales@aliwalitradingco.com",
                  availableLanguage: ["English", "Urdu"],
                },
              ],
              areaServed: "Worldwide",
              service: {
                "@type": "Service",
                name: "Used Conveyor Belt Buying and Export Services",
                description: "We purchase used plied rubber conveyor belts worldwide and handle all logistics including pickup, export documentation, and container shipping to Pakistan.",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
