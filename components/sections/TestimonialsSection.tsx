"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Aïssatou Koné",
    role: "Directrice, Cabinet RH — Abidjan",
    quote:
      "Préo IA a automatisé notre processus de pré-sélection des CV. Ce qui prenait 3 jours prend maintenant 2 heures. Le ROI a été immédiat dès le premier mois.",
    roi: "3 jours → 2h",
    initials: "AK",
    color: "from-[#003d1a] to-[#00a650]",
  },
  {
    name: "Ibrahim Diallo",
    role: "Gérant, Boutique de distribution — Dakar",
    quote:
      "J'étais sceptique sur l'IA pour mon commerce. Seck m'a expliqué concrètement ce que ça pouvait faire. Mon chatbot WhatsApp gère maintenant 80% des demandes clients seul.",
    roi: "80% requêtes automatisées",
    initials: "ID",
    color: "from-[#2563EB] to-[#1D4ED8]",
  },
  {
    name: "Marie-Claire Ekra",
    role: "Fondatrice, École de formation — Abidjan",
    quote:
      "La formation niveau Premium m'a ouvert les yeux. J'ai maintenant un vrai plan IA pour mon école, avec des chiffres réels. Seck connaît vraiment notre marché.",
    roi: "Plan IA structuré en 3 semaines",
    initials: "ME",
    color: "from-[#F59E0B] to-[#D97706]",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24" style={{ background: "#060a07" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="font-semibold text-sm uppercase tracking-wider"
            style={{ color: "#00e676" }}
          >
            Ils nous font confiance
          </span>
          <h2 className="font-jakarta text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Ce que disent nos clients
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-sm ml-2" style={{ color: "#8a9e8c" }}>4.9/5 satisfaction client</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 transition-all duration-500 relative group"
              style={{
                background: "#0d1a0f",
                border: "1px solid rgba(0,230,118,0.10)",
              }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #003d1a, #00e676)" }}
                >
                  <Quote size={14} className="text-black" />
                </div>
              </div>

              {/* Quote text */}
              <p className="leading-relaxed mb-6 mt-2" style={{ color: "#8a9e8c" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* ROI badge */}
              <div className="mb-6">
                <span
                  className="px-4 py-1.5 rounded-full text-xs font-bold"
                  style={{
                    background: "rgba(0,230,118,0.10)",
                    color: "#00e676",
                  }}
                >
                  {t.roi}
                </span>
              </div>

              {/* Author */}
              <div
                className="pt-4 flex items-center gap-3"
                style={{ borderTop: "1px solid rgba(0,230,118,0.08)" }}
              >
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-jakarta font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs" style={{ color: "#8a9e8c" }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
