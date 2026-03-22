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
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/90 via-[#111827]/70 to-[#111827]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 via-transparent to-[#111827]/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20"
          >
            <span className="w-2 h-2 bg-[#1F8A4C] rounded-full animate-pulse" />
            Agence IA spécialiste Afrique — Abidjan
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Devenez Pionniers —{" "}
            <span className="text-[#4ADE80]">L&apos;IA accessible</span> pour
            les entreprises africaines
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl"
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
              className="inline-flex items-center justify-center gap-2 bg-[#1F8A4C] hover:bg-[#166138] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#1F8A4C]/30 hover:-translate-y-0.5"
            >
              Nos services
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white hover:text-[#111827] px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 backdrop-blur-sm"
            >
              Demander un devis gratuit
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 mt-12 text-sm text-white/70"
          >
            <span className="flex items-center gap-2">
              <span className="text-[#4ADE80]">✓</span> Zéro jargon technique
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#4ADE80]">✓</span> Approche ROI d&apos;abord
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#4ADE80]">✓</span> Garantie résultats
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={28} />
      </div>
    </section>
  )
}
