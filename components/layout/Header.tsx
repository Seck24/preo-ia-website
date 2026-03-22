"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Préo IA"
              width={120}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#374151] hover:text-[#1F8A4C] font-medium transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#1F8A4C] hover:bg-[#166138] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              Devis gratuit
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-[#374151]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#374151] hover:text-[#1F8A4C] font-medium py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#1F8A4C] hover:bg-[#166138] text-white px-5 py-3 rounded-lg font-semibold text-center transition-colors mt-2"
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
