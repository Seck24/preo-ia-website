import type { Metadata } from "next"
import ContactForm from "@/components/ui/ContactForm"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact & Devis gratuit",
  description:
    "Contactez Préo IA pour un devis gratuit. Premier échange de 30 minutes offert pour évaluer votre potentiel IA.",
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-14 bg-[#EBF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#1F8A4C] font-semibold text-sm uppercase tracking-wider">
            Devis gratuit
          </span>
          <h1 className="font-outfit text-4xl sm:text-5xl font-bold text-[#111827] mt-2 mb-4">
            Parlons de votre projet
          </h1>
          <p className="text-[#374151] max-w-xl mx-auto">
            Remplissez ce formulaire et nous vous contactons sous 24h pour un premier
            échange gratuit de 30 minutes.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Formulaire - 3/5 */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Infos contact - 2/5 */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-outfit font-bold text-xl text-[#111827] mb-6">
                  Nos coordonnées
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#EBF5F0] rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-[#1F8A4C]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#9CA3AF] mb-0.5">Email</p>
                      <a
                        href="mailto:contact@preo-ia.info"
                        className="text-[#374151] hover:text-[#1F8A4C] font-medium transition-colors"
                      >
                        contact@preo-ia.info
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#EBF5F0] rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-[#1F8A4C]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#9CA3AF] mb-0.5">Téléphone</p>
                      <a
                        href="tel:+2250508063437"
                        className="text-[#374151] hover:text-[#1F8A4C] font-medium transition-colors block"
                      >
                        05 08 06 34 37
                      </a>
                      <a
                        href="tel:+2250711660442"
                        className="text-[#374151] hover:text-[#1F8A4C] font-medium transition-colors block"
                      >
                        07 11 66 04 42
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#EBF5F0] rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-[#1F8A4C]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#9CA3AF] mb-0.5">Localisation</p>
                      <p className="text-[#374151] font-medium">Abidjan, Côte d&apos;Ivoire</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#EBF5F0] rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-[#1F8A4C]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#9CA3AF] mb-0.5">Horaires</p>
                      <p className="text-[#374151] font-medium">Lun–Ven : 8h–18h</p>
                      <p className="text-[#374151] font-medium">Sam : 9h–13h</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp direct */}
              <div className="bg-[#EBF5F0] rounded-xl p-6">
                <h3 className="font-outfit font-bold text-[#111827] mb-2">
                  Préférez WhatsApp ?
                </h3>
                <p className="text-[#374151] text-sm mb-4">
                  Contactez-nous directement sur WhatsApp pour une réponse rapide.
                </p>
                <a
                  href="https://wa.me/2250508063437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe58] text-white py-3 rounded-lg font-semibold text-sm transition-colors"
                >
                  <MessageCircle size={16} /> Écrire sur WhatsApp
                </a>
              </div>

              {/* Garanties */}
              <div className="space-y-3">
                {[
                  "Réponse sous 24h garantie",
                  "Premier échange de 30min offert",
                  "Aucun engagement après l'échange",
                  "Devis détaillé et transparent",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#374151]">
                    <span className="w-5 h-5 bg-[#EBF5F0] rounded-full flex items-center justify-center text-[#1F8A4C] text-xs font-bold">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
