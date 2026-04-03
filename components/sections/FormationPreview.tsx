"use client"

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
    <section className="py-24 overflow-hidden" style={{ background: "#0a110b" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark gradient header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-16 h-64 sm:h-80 flex flex-col items-center justify-center text-center px-4"
          style={{
            background: "linear-gradient(135deg, #003d1a 0%, #005a28 50%, #0a1a0b 100%)",
            border: "1px solid rgba(0,230,118,0.15)",
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: "400px",
              height: "200px",
              background: "radial-gradient(ellipse, rgba(0,230,118,0.15) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <div className="relative">
            <span
              className="font-semibold text-sm uppercase tracking-wider mb-2 block"
              style={{ color: "rgba(0,230,118,0.8)" }}
            >
              Formation en ligne
            </span>
            <h2 className="font-jakarta text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Comprendre l&apos;IA en Entreprise
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
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
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                niveau.highlighted ? "scale-105 z-10" : ""
              }`}
              style={
                niveau.highlighted
                  ? {
                      background: "linear-gradient(145deg, #003d1a, #00561e)",
                      border: "1px solid rgba(0,230,118,0.4)",
                      boxShadow: "0 0 40px rgba(0,230,118,0.15)",
                    }
                  : {
                      background: "#0d1a0f",
                      border: "1px solid rgba(0,230,118,0.10)",
                    }
              }
            >
              {niveau.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                  <Star size={10} fill="currentColor" /> {niveau.badge}
                </div>
              )}

              <h3 className="font-jakarta font-bold text-lg mb-1 text-white">
                {niveau.name}
              </h3>
              <p
                className="font-jakarta font-bold text-3xl mb-6"
                style={{ color: "#00e676" }}
              >
                {niveau.price}
              </p>

              <ul className="space-y-3 mb-8">
                {niveau.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0"
                      style={{ color: "#00e676" }}
                    />
                    <span style={{ color: niveau.highlighted ? "rgba(255,255,255,0.9)" : "#8a9e8c" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/formation"
                className="block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                style={
                  niveau.highlighted
                    ? {
                        background: "linear-gradient(135deg, #003d1a, #00e676)",
                        color: "#000000",
                      }
                    : {
                        border: "1px solid rgba(0,230,118,0.30)",
                        color: "#00e676",
                        background: "transparent",
                      }
                }
              >
                Voir cette formation
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/formation"
            className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
            style={{ color: "#00e676" }}
          >
            Voir tous les détails de la formation <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
