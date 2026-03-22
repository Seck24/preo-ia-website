import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const services = [
  { href: "/services#audit", label: "Audit IA" },
  { href: "/services#integration", label: "Intégration sur mesure" },
  { href: "/services#formation", label: "Formation entreprise" },
  { href: "/services#donnees", label: "Préparation données" },
  { href: "/services#maintenance", label: "Maintenance & Support" },
]

const pages = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/formation", label: "Formation" },
  { href: "/a-propos", label: "À propos" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/contact", label: "Contact" },
]

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Préo IA"
              width={130}
              height={50}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Agence d&apos;intégration IA basée à Abidjan. Nous aidons les PME africaines à
              tirer parti de l&apos;intelligence artificielle.
            </p>
            <p className="text-[#1F8A4C] font-outfit font-semibold text-sm italic">
              « Devenez Pionniers — L&apos;IA accessible pour les entreprises africaines »
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-outfit font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-gray-400 hover:text-[#1F8A4C] text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-outfit font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-gray-400 hover:text-[#1F8A4C] text-sm transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-outfit font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-[#1F8A4C] shrink-0" />
                Abidjan, Côte d&apos;Ivoire
              </li>
              <li>
                <a
                  href="mailto:contact@preo-ia.info"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#1F8A4C] text-sm transition-colors"
                >
                  <Mail size={16} className="text-[#1F8A4C] shrink-0" />
                  contact@preo-ia.info
                </a>
              </li>
              <li>
                <a
                  href="tel:+2250508063437"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#1F8A4C] text-sm transition-colors"
                >
                  <Phone size={16} className="text-[#1F8A4C] shrink-0" />
                  05 08 06 34 37
                </a>
              </li>
              <li>
                <a
                  href="tel:+2250711660442"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#1F8A4C] text-sm transition-colors"
                >
                  <Phone size={16} className="text-[#1F8A4C] shrink-0" />
                  07 11 66 04 42
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Préo IA — Tous droits réservés
          </p>
          <p className="text-gray-500 text-sm">
            Fondé par{" "}
            <span className="text-[#1F8A4C] font-semibold">Seck Loué</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
