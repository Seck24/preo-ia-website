"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Star, ArrowRight } from "lucide-react"

const niveaux = [
  {
    name: "Essentiel",
    price: "39 000 FCFA",
    features: ["5 modules vidéo", "PDF téléchargeables", "Quiz de validation", "Certificat de réussite"],
    highlighted: false,
  },
  {
    name: "Premium",
    badge: "Le plus populaire",
    price: "125 000 FCFA",
    features: ["Tout le niveau Essentiel", "Groupe privé membres", "Sessions Q&A live", "Support WhatsApp direct"],
    highlighted: true,
  },
  {
    name: "VIP Coaching",
    price: "250 000 FCFA",
    features: ["Tout le niveau Premium", "3 sessions coaching 1h", "Audit express de votre entreprise", "Plan IA personnalisé"],
    highlighted: false,
  },
]

export default function FormationPreview() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner image + header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-16 h-64 sm:h-80"
        >
          <Image
            src="/images/formation-banner.jpg"
            alt="Formation en ligne - professionnels africains apprenant ensemble"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F8A4C]/90 to-[#1F8A4C]/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-2">
              Formation en ligne
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Comprendre l&apos;IA en Entreprise
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto text-lg">
              3 niveaux de formation pour passer de débutant à stratège IA. 100% en ligne,
              100% en français, 100% adapté aux réalités africaines.
            </p>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {niveaux.map((niveau, i) => (
            <motion.div
              key={niveau.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                niveau.highlighted
                  ? "border-[#1F8A4C] bg-[#1F8A4C] text-white shadow-2xl shadow-[#1F8A4C]/20 scale-105 z-10"
                  : "border-gray-200 bg-white hover:border-[#1F8A4C] hover:shadow-lg"
              }`}
            >
              {niveau.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                  <Star size={10} fill="currentColor" /> {niveau.badge}
                </div>
              )}

              <h3
                className={`font-outfit font-bold text-lg mb-1 ${
                  niveau.highlighted ? "text-white" : "text-[#111827]"
                }`}
              >
                {niveau.name}
              </h3>
              <p
                className={`font-outfit font-bold text-3xl mb-6 ${
                  niveau.highlighted ? "text-white" : "text-[#1F8A4C]"
                }`}
              >
                {niveau.price}
              </p>

              <ul className="space-y-3 mb-8">
                {niveau.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        niveau.highlighted ? "text-white" : "text-[#1F8A4C]"
                      }`}
                    />
                    <span className={niveau.highlighted ? "text-white/90" : "text-[#374151]"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/formation"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  niveau.highlighted
                    ? "bg-white text-[#1F8A4C] hover:bg-[#EBF5F0] hover:shadow-lg"
                    : "bg-[#EBF5F0] text-[#1F8A4C] hover:bg-[#1F8A4C] hover:text-white"
                }`}
              >
                Voir cette formation
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/formation"
            className="inline-flex items-center gap-2 text-[#1F8A4C] font-semibold hover:gap-3 transition-all"
          >
            Voir tous les détails de la formation <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
