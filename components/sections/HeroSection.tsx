"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Professionnel africain dans un bureau moderne"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,10,7,0.92) 0%, rgba(10,26,11,0.80) 50%, rgba(6,10,7,0.75) 100%)" }} />
      </div>
      {/* Green glow overlay */}
      <div
        className="absolute right-0 top-1/2 pointer-events-none"
        style={{
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,230,118,0.18) 0%, transparent 70%)",
          filter: "blur(40px)", transform: "translate(20%, -50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(0,230,118,0.08)",
              border: "1px solid rgba(0,230,118,0.20)",
              color: "#00e676",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#00e676" }}
            />
            Agence IA spécialiste Afrique — Abidjan
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-jakarta text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Devenez Pionniers —{" "}
            <br />
            <span style={{ color: "#00e676" }}>L&apos;IA accessible</span> pour
            les entreprises africaines
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Nous aidons les dirigeants de PME africaines à intégrer
            l&apos;intelligence artificielle de façon concrète, rentable et
            adaptée aux réalités du terrain : Mobile Money, WhatsApp, économie
            informelle.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #003d1a, #00e676)",
                color: "#000000",
              }}
            >
              Nos services
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/5"
              style={{
                border: "1px solid rgba(0,230,118,0.3)",
                color: "#ffffff",
              }}
            >
              Demander un devis gratuit
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 mt-12 text-sm"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            <span className="flex items-center gap-2">
              <span style={{ color: "#00e676" }}>✓</span> Zéro jargon technique
            </span>
            <span className="flex items-center gap-2">
              <span style={{ color: "#00e676" }}>✓</span> Approche ROI d&apos;abord
            </span>
            <span className="flex items-center gap-2">
              <span style={{ color: "#00e676" }}>✓</span> Garantie résultats
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: "rgba(0,230,118,0.4)" }}
      >
        <ChevronDown size={28} />
      </div>
    </section>
  )
}
