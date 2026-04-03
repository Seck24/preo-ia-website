"use client"

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
    <footer style={{ background: "#030706", borderTop: "1px solid rgba(0,230,118,0.08)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo_transparent.png"
              alt="Préo IA"
              width={130}
              height={50}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4a5e4c" }}>
              Agence d&apos;intégration IA basée à Abidjan. Nous aidons les PME africaines à
              tirer parti de l&apos;intelligence artificielle.
            </p>
            <p className="font-jakarta font-semibold text-sm italic" style={{ color: "#00e676" }}>
              « Devenez Pionniers — L&apos;IA accessible pour les entreprises africaines »
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-jakarta font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors"
                    style={{ color: "#4a5e4c" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00e676")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5e4c")}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-jakarta font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm transition-colors"
                    style={{ color: "#4a5e4c" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00e676")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5e4c")}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-jakarta font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm" style={{ color: "#4a5e4c" }}>
                <MapPin size={16} className="shrink-0" style={{ color: "#00e676" }} />
                Abidjan, Côte d&apos;Ivoire
              </li>
              <li>
                <a
                  href="mailto:contact@preo-ia.info"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "#4a5e4c" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00e676")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5e4c")}
                >
                  <Mail size={16} className="shrink-0" style={{ color: "#00e676" }} />
                  contact@preo-ia.info
                </a>
              </li>
              <li>
                <a
                  href="tel:+2250508063437"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "#4a5e4c" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00e676")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5e4c")}
                >
                  <Phone size={16} className="shrink-0" style={{ color: "#00e676" }} />
                  05 08 06 34 37
                </a>
              </li>
              <li>
                <a
                  href="tel:+2250711660442"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "#4a5e4c" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00e676")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5e4c")}
                >
                  <Phone size={16} className="shrink-0" style={{ color: "#00e676" }} />
                  07 11 66 04 42
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(0,230,118,0.06)" }}
        >
          <p className="text-sm" style={{ color: "#4a5e4c" }}>
            © {new Date().getFullYear()} Préo IA — Tous droits réservés
          </p>
          <p className="text-sm" style={{ color: "#4a5e4c" }}>
            Fondé par{" "}
            <span className="font-semibold" style={{ color: "#00e676" }}>Seck Loué</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
