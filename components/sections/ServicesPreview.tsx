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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#1F8A4C] font-semibold text-sm uppercase tracking-wider">
            Ce que nous faisons
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-[#111827] mt-2 mb-4">
            Nos 5 services
          </h2>
          <p className="text-[#374151] max-w-2xl mx-auto">
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
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-outfit font-bold text-lg text-[#111827] mb-2 group-hover:text-[#1F8A4C] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-[#1F8A4C] font-semibold text-sm hover:gap-2 transition-all"
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
            className="bg-gradient-to-br from-[#1F8A4C] to-[#166138] rounded-2xl p-8 flex flex-col justify-center items-start shadow-xl"
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-outfit font-bold text-xl text-white mb-3">
              Pas sûr de quel service vous avez besoin ?
            </h3>
            <p className="text-white/80 text-sm mb-8 leading-relaxed">
              Discutons ensemble de vos enjeux. Le premier échange est gratuit et sans engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1F8A4C] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#EBF5F0] transition-colors hover:shadow-lg"
            >
              Devis gratuit <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
