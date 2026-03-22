"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Star, Play, Users, Clock, Award, ArrowRight, MessageCircle } from "lucide-react"

const niveaux = [
  {
    name: "Essentiel",
    price: "39 000 FCFA",
    subtitle: "Pour démarrer sereinement",
    highlighted: false,
    features: [
      "5 modules vidéo (6h au total)",
      "PDF récapitulatifs téléchargeables",
      "Calculateurs Excel inclus",
      "Quiz de validation après chaque module",
      "Certificat de réussite Préo IA",
      "Accès à vie aux mises à jour",
    ],
    cta: "Commencer maintenant",
  },
  {
    name: "Premium",
    badge: "Le plus populaire ⭐",
    price: "125 000 FCFA",
    subtitle: "Pour aller plus loin avec du support",
    highlighted: true,
    features: [
      "Tout le contenu du niveau Essentiel",
      "Accès au groupe privé des membres",
      "3 sessions Q&A live par mois",
      "Support WhatsApp direct avec Seck",
      "Modèles de documents prêts à l'emploi",
      "Exemples 100% ivoiriens et africains",
      "Plan d'action 7 jours clé en main",
      "Accès prioritaire aux nouvelles formations",
    ],
    cta: "Choisir Premium",
  },
  {
    name: "VIP Coaching",
    price: "250 000 FCFA",
    subtitle: "Pour un accompagnement personnalisé",
    highlighted: false,
    features: [
      "Tout le contenu du niveau Premium",
      "3 sessions de coaching individuel (1h chacune)",
      "Audit express de votre entreprise inclus",
      "Plan IA personnalisé pour votre secteur",
      "Accès direct à Seck pendant 3 mois",
      "Revue de votre projet IA en cours",
      "Réseau exclusif entrepreneurs IA Afrique",
      "Garantie satisfaction ou remboursement",
    ],
    cta: "Accéder au VIP",
  },
]

const modules = [
  {
    num: "01",
    title: "L'IA démystifiée",
    desc: "Comprendre ce que l'IA peut et ne peut pas faire. Sans jargon, avec des exemples africains.",
  },
  {
    num: "02",
    title: "Identifier vos opportunités",
    desc: "Méthode pratique pour repérer les 3 processus de votre entreprise où l'IA apporte le plus de valeur.",
  },
  {
    num: "03",
    title: "Calculer le ROI",
    desc: "Outils et calculateurs pour chiffrer concrètement le retour sur investissement avant de dépenser.",
  },
  {
    num: "04",
    title: "Choisir les bons outils",
    desc: "Tour d'horizon des outils IA adaptés aux PME africaines : budget, simplicité, fiabilité.",
  },
  {
    num: "05",
    title: "Piloter votre projet IA",
    desc: "Comment sélectionner un prestataire, suivre un projet et mesurer les résultats obtenus.",
  },
]

export default function FormationPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-[#EBF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#1F8A4C] font-semibold text-sm uppercase tracking-wider">
              Formation en ligne
            </span>
            <h1 className="font-outfit text-4xl sm:text-5xl font-bold text-[#111827] mt-2 mb-4">
              Comprendre l&apos;IA en Entreprise
            </h1>
            <p className="text-[#374151] max-w-2xl mx-auto text-lg mb-8">
              La formation qui donne aux dirigeants africains les clés pour décider, évaluer
              et piloter un projet IA — sans être expert technique.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#374151]">
              <span className="flex items-center gap-2">
                <Play size={16} className="text-[#1F8A4C]" /> 5 modules vidéo
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-[#1F8A4C]" /> 6h de formation
              </span>
              <span className="flex items-center gap-2">
                <Users size={16} className="text-[#1F8A4C]" /> Pour dirigeants non-techniques
              </span>
              <span className="flex items-center gap-2">
                <Award size={16} className="text-[#1F8A4C]" /> Certificat inclus
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-[#111827] text-center mb-10">
            Programme de la formation
          </h2>
          <div className="space-y-4">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-4 bg-[#F3F4F6] rounded-xl hover:bg-[#EBF5F0] transition-colors"
              >
                <span className="font-outfit font-bold text-2xl text-[#1F8A4C] shrink-0 w-10">
                  {mod.num}
                </span>
                <div>
                  <h3 className="font-outfit font-bold text-[#111827]">{mod.title}</h3>
                  <p className="text-[#374151] text-sm mt-1">{mod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 bg-[#EBF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl font-bold text-[#111827] text-center mb-12">
            Choisissez votre niveau
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {niveaux.map((niveau, i) => (
              <motion.div
                key={niveau.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 border-2 transition-all ${
                  niveau.highlighted
                    ? "border-[#1F8A4C] bg-[#1F8A4C] shadow-xl"
                    : "border-gray-200 bg-white hover:border-[#1F8A4C]"
                }`}
              >
                {niveau.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 whitespace-nowrap">
                    <Star size={12} fill="currentColor" /> {niveau.badge}
                  </div>
                )}

                <h3
                  className={`font-outfit font-bold text-xl mb-1 ${
                    niveau.highlighted ? "text-white" : "text-[#111827]"
                  }`}
                >
                  {niveau.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    niveau.highlighted ? "text-white/75" : "text-[#9CA3AF]"
                  }`}
                >
                  {niveau.subtitle}
                </p>
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
                      <span
                        className={niveau.highlighted ? "text-white/90" : "text-[#374151]"}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-colors ${
                    niveau.highlighted
                      ? "bg-white text-[#1F8A4C] hover:bg-[#EBF5F0]"
                      : "bg-[#1F8A4C] text-white hover:bg-[#166138]"
                  }`}
                >
                  {niveau.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-outfit text-2xl font-bold text-[#111827] mb-4">
            Des questions sur la formation ?
          </h2>
          <p className="text-[#374151] mb-8">
            Contactez-nous directement sur WhatsApp pour un conseil personnalisé avant de vous inscrire.
          </p>
          <a
            href="https://wa.me/2250508063437"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe58] text-white px-8 py-4 rounded-xl font-bold transition-colors"
          >
            <MessageCircle size={18} /> Poser une question sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
