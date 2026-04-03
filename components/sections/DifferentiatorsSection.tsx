"use client"

import { motion } from "framer-motion"
import { Globe, MessageSquare, TrendingUp, Heart, Handshake, Shield } from "lucide-react"

const differentiators = [
  {
    icon: Globe,
    title: "Spécialiste Afrique",
    description:
      "Nous comprenons les contraintes terrain réelles : Mobile Money, WhatsApp dominant, connexions instables, économie informelle.",
  },
  {
    icon: MessageSquare,
    title: "Zéro jargon",
    description:
      "Tout s'explique en français simple, accessible à tout dirigeant, même sans formation technique.",
  },
  {
    icon: TrendingUp,
    title: "Approche ROI d'abord",
    description:
      "Le retour sur investissement prime sur la technologie. Chaque recommandation est justifiée par des chiffres.",
  },
  {
    icon: Heart,
    title: "Honnêteté radicale",
    description:
      "Nous sommes capables de dire « L'IA n'est pas pour vous maintenant » si ce n'est pas le bon moment.",
  },
  {
    icon: Handshake,
    title: "Accompagnement complet",
    description:
      "Pas d'abandon après la mise en service. Nous restons à vos côtés pour garantir l'adoption.",
  },
  {
    icon: Shield,
    title: "Garantie résultats",
    description:
      "Ajustements gratuits si les objectifs convenus ne sont pas atteints dans les délais prévus.",
  },
]

export default function DifferentiatorsSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#0a110b" }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Notre différence
          </span>
          <h2 className="font-jakarta text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Pourquoi choisir Préo IA ?
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: "#8a9e8c" }}>
            6 engagements concrets qui font toute la différence dans votre parcours vers l&apos;IA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 transition-all duration-300 group cursor-default"
                style={{
                  background: "rgba(0,230,118,0.04)",
                  border: "1px solid rgba(0,230,118,0.10)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,230,118,0.08)"
                  e.currentTarget.style.border = "1px solid rgba(0,230,118,0.18)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0,230,118,0.04)"
                  e.currentTarget.style.border = "1px solid rgba(0,230,118,0.10)"
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,230,118,0.10)" }}
                >
                  <Icon size={22} style={{ color: "#00e676" }} />
                </div>
                <h3 className="font-jakarta font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8a9e8c" }}>
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
