"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"

const PHONE = "0508063437"

export default function CtaFinal() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-handshake.jpg"
          alt="Partenariat professionnel"
          fill
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F8A4C]/90 to-[#166138]/85" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white/90 font-medium mb-8 border border-white/20">
            <span className="w-2 h-2 bg-[#4ADE80] rounded-full animate-pulse" />
            Premier échange gratuit et sans engagement
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à intégrer l&apos;IA dans votre entreprise ?
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Faites le premier pas. Un échange gratuit de 30 minutes pour évaluer
            votre potentiel IA et vous donner une feuille de route concrète.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1F8A4C] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#EBF5F0] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Devis gratuit <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/225${PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white hover:text-[#1F8A4C] transition-all duration-300 backdrop-blur-sm"
            >
              <MessageCircle size={18} /> WhatsApp direct
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <span className="text-[#4ADE80]">✓</span> Réponse sous 24h
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#4ADE80]">✓</span> Aucun engagement
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#4ADE80]">✓</span> Premier audit offert
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
