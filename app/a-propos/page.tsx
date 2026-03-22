"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Target, Eye, Heart, ArrowRight } from "lucide-react"

const valeurs = [
  {
    icon: Target,
    title: "ROI avant tout",
    desc: "Chaque recommandation est justifiée par un retour sur investissement mesurable. Nous ne vendons pas de la technologie, nous vendons des résultats.",
  },
  {
    icon: Heart,
    title: "Honnêteté radicale",
    desc: "Nous disons clairement quand l'IA n'est pas la bonne solution. Notre réputation repose sur la confiance, pas sur les contrats signés.",
  },
  {
    icon: Eye,
    title: "Vision long terme",
    desc: "Nous construisons des partenariats durables, pas des projets one-shot. Votre succès dans la durée est notre meilleure publicité.",
  },
]

export default function AProposPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-[#EBF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-[#1F8A4C] font-semibold text-sm uppercase tracking-wider">
              Notre histoire
            </span>
            <h1 className="font-outfit text-4xl sm:text-5xl font-bold text-[#111827] mt-2 mb-6">
              L&apos;IA pour les PME africaines, par quelqu&apos;un qui comprend le terrain
            </h1>
            <p className="text-[#374151] text-lg leading-relaxed">
              Préo IA est née d&apos;une conviction simple : les dirigeants africains méritent
              d&apos;accéder aux mêmes outils d&apos;intelligence artificielle que leurs homologues
              du monde entier — mais adaptés à leur réalité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seck Loué */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#EBF5F0] to-[#1F8A4C]/10 rounded-2xl aspect-square flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-28 h-28 bg-[#1F8A4C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-outfit font-bold text-4xl text-white">SL</span>
                </div>
                <p className="font-outfit font-bold text-[#111827] text-xl">Seck Loué</p>
                <p className="text-[#1F8A4C] font-semibold">Fondateur, Préo IA</p>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-outfit text-3xl font-bold text-[#111827] mb-6">
                Seck Loué — Consultant IA & Fondateur
              </h2>

              <div className="space-y-4 text-[#374151] leading-relaxed">
                <p>
                  Après plusieurs années à accompagner des entreprises dans leur transformation
                  digitale en France et en Afrique, Seck Loué a fondé Préo IA avec une mission
                  claire : rendre l&apos;intelligence artificielle accessible et rentable pour
                  les PME africaines.
                </p>
                <p>
                  Ce qui différencie Seck, c&apos;est sa compréhension profonde des réalités
                  du terrain africain. Il sait que Mobile Money prime sur les cartes bancaires,
                  que WhatsApp est l&apos;outil de communication principal des entreprises,
                  que les connexions internet sont parfois instables.
                </p>
                <p>
                  Son approche : d&apos;abord écouter, comprendre vos contraintes spécifiques,
                  puis proposer des solutions IA qui fonctionnent dans votre contexte réel —
                  pas dans un contexte théorique importé d&apos;ailleurs.
                </p>
                <p>
                  <span className="font-semibold text-[#1F8A4C]">
                    « Je suis capable de vous dire honnêtement si l&apos;IA n&apos;est pas
                    la bonne solution pour vous maintenant. Cette honnêteté, c&apos;est notre
                    plus grande force. »
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-[#EBF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-outfit text-3xl font-bold text-[#111827] mb-4">
              Notre vision pour l&apos;Afrique
            </h2>
            <p className="text-[#374151] max-w-3xl mx-auto leading-relaxed">
              Nous croyons que l&apos;IA peut être un formidable levier de compétitivité pour
              les PME africaines — à condition qu&apos;elle soit adaptée, abordable et bien
              accompagnée. Notre mission : accélérer cette transition pour 1000 entreprises
              africaines d&apos;ici 2027.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valeurs.map((valeur, i) => {
              const Icon = valeur.icon
              return (
                <motion.div
                  key={valeur.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 text-center shadow-card"
                >
                  <div className="w-14 h-14 bg-[#EBF5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-[#1F8A4C]" />
                  </div>
                  <h3 className="font-outfit font-bold text-[#111827] mb-2">{valeur.title}</h3>
                  <p className="text-[#374151] text-sm leading-relaxed">{valeur.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-outfit text-2xl font-bold text-[#111827] mb-4">
            Prêt à travailler ensemble ?
          </h2>
          <p className="text-[#374151] mb-8">
            Contactez-nous pour un premier échange gratuit. Nous évaluons ensemble si nous sommes
            le bon partenaire pour votre transformation IA.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1F8A4C] hover:bg-[#166138] text-white px-8 py-4 rounded-xl font-bold transition-colors"
          >
            Prendre contact <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
