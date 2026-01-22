import type { Metadata } from "next"
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react"
import { SectionHeader } from "@/components/shared/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { CONTACT, OFFICES } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ALI WALI TRADING COMPANY. Multiple contact options including email, phone, and WhatsApp. Fast response to all inquiries.",
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-slate-100">
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader
          title="Contact Us"
          subtitle="Multiple ways to reach our team for quotes, questions, or general inquiries"
          centered
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-slate-600 mb-4">Fast response for urgent inquiries</p>
              <a
                href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                {CONTACT.whatsapp}
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-sm text-slate-600 mb-4">For detailed inquiries and quotes</p>
              <div className="space-y-1">
                <a
                  href={`mailto:${CONTACT.email.sales}`}
                  className="block text-primary hover:underline text-sm"
                >
                  {CONTACT.email.sales}
                </a>
                <a
                  href={`mailto:${CONTACT.email.info}`}
                  className="block text-primary hover:underline text-sm"
                >
                  {CONTACT.email.info}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
              <p className="text-sm text-slate-600 mb-4">Speak with our team directly</p>
              <div className="space-y-1 text-sm">
                <a href={`tel:${CONTACT.phone.usa}`} className="block text-primary hover:underline">
                  USA: {CONTACT.phone.usa}
                </a>
                <a href={`tel:${CONTACT.phone.pakistan}`} className="block text-primary hover:underline">
                  Pakistan: {CONTACT.phone.pakistan}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900">{OFFICES.usa}</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Primary contact point for North American suppliers
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900">{OFFICES.pakistan}</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Main operations and logistics hub
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900">Business Hours</h3>
                <p className="text-sm text-slate-600 mt-1">{CONTACT.businessHours}</p>
                <p className="text-xs text-slate-500 mt-2">
                  WhatsApp inquiries are often answered outside business hours for urgent matters
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Send Us a Message</h2>
          <p className="text-slate-600 text-center mb-8">
            Have a question? Fill out the form and we&apos;ll get back to you within 24-48 hours.
          </p>
          <ContactForm />
        </div>
      </div>
      </div>
    </div>
  )
}
