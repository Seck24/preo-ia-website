"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    image: "/images/audit-ia.jpg",
    title: "Audit IA",
    description:
      "Analyse complète de votre entreprise, identification des meilleures opportunités IA et roadmap priorisée sur 6 mois.",
    href: "/services#audit",
  },
  {
    image: "/images/integration-ia.jpg",
    title: "Intégration IA sur mesure",
    description:
      "Automatisation de vos workflows, chatbot WhatsApp, applications métier adaptées aux réalités africaines.",
    href: "/services#integration",
  },
  {
    image: "/images/formation.jpg",
    title: "Formation dirigeants",
    description:
      "Formation 100% en ligne pour comprendre, décider et piloter un projet IA sans être expert technique.",
    href: "/formation",
  },
  {
    image: "/images/data-prep.jpg",
    title: "Préparation des données",
    description:
      "Structuration et mise en forme de vos données d'entreprise pour les rendre exploitables par l'IA.",
    href: "/services#donnees",
  },
  {
    image: "/images/maintenance.jpg",
    title: "Maintenance & Support",
    description:
      "Contrats mensuels de suivi, monitoring et support pour toutes les solutions IA déployées.",
    href: "/services#maintenance",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24" style={{ background: "#060a07" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Ce que nous faisons
          </span>
          <h2 className="font-jakarta text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Nos 5 services
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: "#8a9e8c" }}>
            De l&apos;audit initial au support continu, nous vous accompagnons à chaque étape
            de votre transformation par l&apos;IA.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "#0d1a0f",
                border: "1px solid rgba(0,230,118,0.10)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid rgba(0,230,118,0.25)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid rgba(0,230,118,0.10)"
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(13,26,15,0.95) 100%)" }} />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon circle - hidden, replaced by image */}
                <div
                  className="hidden w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,230,118,0.08)" }}
                >
                  <span className="text-xl">{service.emoji}</span>
                </div>
                <h3 className="font-jakarta font-bold text-lg text-white mb-2 transition-colors group-hover:opacity-90">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#8a9e8c" }}>
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 font-semibold text-sm hover:gap-2 transition-all"
                  style={{ color: "#00e676" }}
                >
                  En savoir plus <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 flex flex-col justify-center items-start"
            style={{
              background: "linear-gradient(135deg, #003d1a, #005a28)",
              border: "1px solid rgba(0,230,118,0.3)",
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-jakarta font-bold text-xl text-white mb-3">
              Pas sûr de quel service vous avez besoin ?
            </h3>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              Discutons ensemble de vos enjeux. Le premier échange est gratuit et sans engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: "#00e676", color: "#000000" }}
            >
              Devis gratuit <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
