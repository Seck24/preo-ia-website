"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"

const PHONE = "0508063437"

export default function CtaFinal() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #003d1a 0%, #005a28 50%, #00a650 100%)",
      }}
    >
      {/* Decorative glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,230,118,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#00e676" }}
            />
            Premier échange gratuit et sans engagement
          </div>

          <h2 className="font-jakarta text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à intégrer l&apos;IA dans votre entreprise ?
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.80)" }}
          >
            Faites le premier pas. Un échange gratuit de 30 minutes pour évaluer
            votre potentiel IA et vous donner une feuille de route concrète.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
              style={{
                background: "#ffffff",
                color: "#003d1a",
              }}
            >
              Devis gratuit <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/225${PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:bg-white/10"
              style={{
                border: "2px solid rgba(255,255,255,0.5)",
                color: "#ffffff",
              }}
            >
              <MessageCircle size={18} /> WhatsApp direct
            </a>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            <span className="flex items-center gap-2">
              <span style={{ color: "#00e676" }}>✓</span> Réponse sous 24h
            </span>
            <span className="flex items-center gap-2">
              <span style={{ color: "#00e676" }}>✓</span> Aucun engagement
            </span>
            <span className="flex items-center gap-2">
              <span style={{ color: "#00e676" }}>✓</span> Premier audit offert
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
