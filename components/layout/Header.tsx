"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/formation", label: "Formation" },
  { href: "/a-propos", label: "À propos" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,10,7,0.95)" : "rgba(6,10,7,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,230,118,0.08)",
        paddingTop: scrolled ? "12px" : "16px",
        paddingBottom: scrolled ? "12px" : "16px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.02em' }}>
              <span style={{ color: '#00e676' }}>Préo</span>
              <span style={{ color: '#ffffff' }}> IA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium transition-colors text-sm"
                style={{ color: "rgba(255,255,255,0.7)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00e676")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #003d1a, #00e676)",
                color: "#000000",
              }}
            >
              Devis gratuit
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2"
            style={{ color: "rgba(255,255,255,0.8)" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden mt-4 pb-4 rounded-2xl"
            style={{ borderTop: "1px solid rgba(0,230,118,0.10)" }}
          >
            <nav
              className="flex flex-col gap-3 pt-4 px-2"
              style={{ background: "#0a110b", borderRadius: "0 0 16px 16px" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium py-2 px-3 rounded-lg transition-colors"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00e676")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="px-5 py-3 rounded-full font-semibold text-center transition-all mt-2 mb-2 mx-1"
                style={{
                  background: "linear-gradient(135deg, #003d1a, #00e676)",
                  color: "#000000",
                }}
                onClick={() => setIsOpen(false)}
              >
                Devis gratuit
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
