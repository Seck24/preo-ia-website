"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Search, Cpu, GraduationCap, Database, HeadphonesIcon,
  CheckCircle, ArrowRight, Clock, Users
} from "lucide-react"

const services = [
  {
    id: "audit",
    icon: Search,
    title: "Audit IA",
    tagline: "Votre feuille de route IA en 2 semaines",
    description:
      "Avant d'investir dans l'IA, comprenez exactement où elle peut vous apporter de la valeur. Notre audit complet analyse vos processus, identifie les 3 meilleures opportunités et calcule le ROI potentiel de chaque action.",
    inclus: [
      "Cartographie de vos processus métier",
      "Identification des 3 meilleures opportunités IA",
      "Calcul du ROI potentiel chiffré pour chaque opportunité",
      "Roadmap priorisée livrée en document structuré",
      "Restitution orale de 2h avec questions/réponses",
    ],
    tarif: "200 000 – 500 000 FCFA",
    duree: "1 à 2 semaines",
    pour: "Dirigeants qui veulent démarrer avec les bonnes bases",
  },
  {
    id: "integration",
    icon: Cpu,
    title: "Intégration IA sur mesure",
    tagline: "Des solutions IA qui s'adaptent à votre réalité africaine",
    description:
      "Développement et déploiement de solutions IA complètes, pensées pour le contexte africain : Mobile Money, WhatsApp dominant, connexions variables. Chaque solution est testée dans votre environnement réel.",
    inclus: [
      "Automatisation de workflows métier (n8n)",
      "Chatbot WhatsApp Business intelligent",
      "Application métier sur mesure (web/mobile)",
      "Intégration dans vos outils existants",
      "Formation de votre équipe à l'utilisation",
      "Documentation complète livrée",
    ],
    tarif: "1 000 000 – 3 000 000 FCFA",
    duree: "1 à 3 mois",
    pour: "Entreprises prêtes à transformer un processus clé",
  },
  {
    id: "formation",
    icon: GraduationCap,
    title: "Formation entreprise",
    tagline: "Formez votre équipe à l'IA sans jargon",
    description:
      "Formation sur mesure pour votre équipe, adaptée à votre secteur et vos outils. Objectif : que vos collaborateurs comprennent et utilisent l'IA au quotidien, sans dépendre d'un expert externe.",
    inclus: [
      "Programme adapté à votre secteur d'activité",
      "Sessions en présentiel ou en ligne",
      "Cas pratiques avec vos propres données",
      "Support WhatsApp pendant 30 jours post-formation",
      "Évaluation finale et attestation",
    ],
    tarif: "Sur devis selon la taille de l'équipe",
    duree: "2 jours à 2 semaines",
    pour: "Équipes de 3 à 50 personnes",
  },
  {
    id: "donnees",
    icon: Database,
    title: "Nettoyage & Préparation des données",
    tagline: "Des données propres = une IA qui fonctionne vraiment",
    description:
      "L'IA ne peut être performante qu'avec des données de qualité. Nous structurons, nettoyons et organisons vos données d'entreprise pour les rendre immédiatement exploitables.",
    inclus: [
      "Audit de la qualité de vos données existantes",
      "Nettoyage et déduplication des données",
      "Structuration dans un format standard",
      "Mise en place d'un processus de collecte propre",
      "Formation à la maintenance des données",
    ],
    tarif: "150 000 – 800 000 FCFA",
    duree: "1 à 4 semaines",
    pour: "Entreprises avec des données éparpillées ou incohérentes",
  },
  {
    id: "maintenance",
    icon: HeadphonesIcon,
    title: "Maintenance & Support",
    tagline: "Votre IA reste performante dans la durée",
    description:
      "Les solutions IA évoluent et nécessitent un suivi. Nos contrats de maintenance garantissent que vos outils restent performants, à jour et adaptés à vos besoins qui changent.",
    inclus: [
      "Monitoring mensuel des performances",
      "Mises à jour des modèles IA",
      "Support prioritaire WhatsApp et email",
      "Rapport mensuel de performance",
      "Ajustements et optimisations inclus",
    ],
    tarif: "Sur devis mensuel",
    duree: "Contrat mensuel reconductible",
    pour: "Toute entreprise ayant une solution IA en production",
  },
]

export default function ServicesPage() {
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
              Nos services
            </span>
            <h1 className="font-outfit text-4xl sm:text-5xl font-bold text-[#111827] mt-2 mb-4">
              5 services pour transformer votre entreprise
            </h1>
            <p className="text-[#374151] max-w-2xl mx-auto text-lg">
              De l&apos;audit initial à la maintenance long terme, nous couvrons tout le spectre
              de l&apos;intégration IA pour les PME africaines. Les tarifs sont sur devis,
              adaptés à votre taille et vos besoins réels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start py-10 ${
                  i < services.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#EBF5F0] rounded-xl flex items-center justify-center">
                      <Icon size={22} className="text-[#1F8A4C]" />
                    </div>
                    <div>
                      <h2 className="font-outfit font-bold text-2xl text-[#111827]">
                        {service.title}
                      </h2>
                      <p className="text-[#1F8A4C] font-semibold text-sm">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="text-[#374151] leading-relaxed mb-6">{service.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-[#374151]">
                      <Clock size={16} className="text-[#1F8A4C]" />
                      {service.duree}
                    </div>
                    <div className="flex items-center gap-2 text-[#374151]">
                      <Users size={16} className="text-[#1F8A4C]" />
                      {service.pour}
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="bg-[#F3F4F6] rounded-xl p-6">
                  <h3 className="font-outfit font-bold text-[#111827] mb-4">Ce qui est inclus :</h3>
                  <ul className="space-y-2 mb-6">
                    {service.inclus.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#374151]">
                        <CheckCircle size={16} className="text-[#1F8A4C] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs text-[#9CA3AF] mb-1">Tarif indicatif</p>
                    <p className="font-outfit font-bold text-[#1F8A4C] text-lg">{service.tarif}</p>
                    <p className="text-xs text-[#9CA3AF] mt-1">
                      Tarif définitif établi après analyse de vos besoins
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-[#1F8A4C] hover:bg-[#166138] text-white py-3 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Demander un devis <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1F8A4C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-outfit text-3xl font-bold text-white mb-4">
            Pas encore sûr de ce dont vous avez besoin ?
          </h2>
          <p className="text-white/85 mb-8">
            Discutons ensemble. En 30 minutes, nous identifions la meilleure approche pour votre situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1F8A4C] px-8 py-4 rounded-xl font-bold hover:bg-[#EBF5F0] transition-colors"
          >
            Échange gratuit <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
