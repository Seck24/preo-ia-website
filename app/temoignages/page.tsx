"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Quote, TrendingUp, ArrowRight } from "lucide-react"

const casClients = [
  {
    name: "Aïssatou Koné",
    role: "Directrice — Cabinet RH, Abidjan",
    secteur: "Ressources Humaines",
    probleme: "Traitement des candidatures — 3 jours par recrutement, équipe épuisée",
    solution: "Automatisation du tri de CV et de la pré-sélection par IA (n8n + Claude)",
    resultat: "Temps de pré-sélection réduit de 3 jours à 2 heures",
    roi: "-93% de temps",
    quote:
      "Préo IA a automatisé notre processus de pré-sélection des CV. Ce qui prenait 3 jours prend maintenant 2 heures. Le ROI a été immédiat dès le premier mois. Je recommande sans hésiter.",
    color: "from-blue-50 to-blue-100/50",
  },
  {
    name: "Ibrahim Diallo",
    role: "Gérant — Boutique de distribution, Dakar",
    secteur: "Commerce & Distribution",
    probleme: "Saturation du service client WhatsApp — impossible de répondre à tout le monde",
    solution: "Chatbot WhatsApp Business intelligent pour les demandes courantes",
    resultat: "80% des demandes traitées automatiquement, disponible 24h/24",
    roi: "80% automatisé",
    quote:
      "J'étais sceptique sur l'IA pour mon commerce. Seck m'a expliqué concrètement ce que ça pouvait faire. Mon chatbot WhatsApp gère maintenant 80% des demandes clients seul. Mes équipes se concentrent sur les vrais cas complexes.",
    color: "from-green-50 to-green-100/50",
  },
  {
    name: "Marie-Claire Ekra",
    role: "Fondatrice — École de formation, Abidjan",
    secteur: "Formation & Éducation",
    probleme: "Aucune stratégie IA — ne savait pas par où commencer ni combien ça coûterait",
    solution: "Formation Premium + Audit express personnalisé",
    resultat: "Plan IA complet avec ROI estimé, 2 projets lancés en 6 semaines",
    roi: "2 projets en 6 semaines",
    quote:
      "La formation niveau Premium m'a ouvert les yeux. J'ai maintenant un vrai plan IA pour mon école, avec des chiffres réels. Seck connaît vraiment notre marché et parle notre langue. Pas de blabla technique inutile.",
    color: "from-purple-50 to-purple-100/50",
  },
  {
    name: "Mamadou Traoré",
    role: "Directeur — Agence immobilière, Abidjan",
    secteur: "Immobilier",
    probleme: "Gestion manuelle des demandes de visites — beaucoup de no-show",
    solution: "Automatisation des confirmations et rappels de rendez-vous via WhatsApp",
    resultat: "Taux de no-show réduit de 45% à 12% en 2 mois",
    roi: "-73% de no-show",
    quote:
      "Le système de rappels automatiques a changé notre façon de travailler. Nos agents passent moins de temps à relancer les clients et plus de temps à vendre. Simple et efficace.",
    color: "from-orange-50 to-orange-100/50",
  },
  {
    name: "Fatou Camara",
    role: "Gérante — Restaurant, Abidjan Plateau",
    secteur: "Restauration & Food",
    probleme: "Gestion des commandes et stocks entièrement manuelle, pertes fréquentes",
    solution: "Tableau de bord IA pour la prédiction des stocks et commandes fournisseurs",
    resultat: "Réduction des pertes alimentaires de 35%, économies mensuelles de 180 000 FCFA",
    roi: "180k FCFA/mois économisés",
    quote:
      "Je ne savais même pas que l'IA pouvait s'appliquer à un restaurant. Maintenant je sais exactement combien commander chaque semaine. Les pertes ont drastiquement diminué.",
    color: "from-red-50 to-red-100/50",
  },
  {
    name: "Kouassi Brou",
    role: "PDG — Cabinet comptable, Yamoussoukro",
    secteur: "Comptabilité & Finance",
    probleme: "Saisie manuelle des écritures comptables — 60% du temps des comptables",
    solution: "OCR et automatisation de la saisie comptable avec vérification IA",
    resultat: "60% du temps de saisie économisé, 0 erreur de double saisie",
    roi: "60% de temps récupéré",
    quote:
      "Mes comptables passaient la moitié de leur temps à saisir des chiffres. Maintenant ils font de l'analyse et du conseil. La valeur ajoutée de notre cabinet a littéralement doublé.",
    color: "from-teal-50 to-teal-100/50",
  },
]

export default function TemoignagesPage() {
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
              Cas clients
            </span>
            <h1 className="font-outfit text-4xl sm:text-5xl font-bold text-[#111827] mt-2 mb-4">
              Des résultats concrets, des chiffres réels
            </h1>
            <p className="text-[#374151] max-w-2xl mx-auto text-lg">
              Pas de promesses vagues. Voici ce que des dirigeants africains ont obtenu
              en travaillant avec Préo IA — avec les chiffres pour le prouver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cas clients */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {casClients.map((cas, i) => (
            <motion.div
              key={cas.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F3F4F6] rounded-2xl p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Infos */}
                <div className="lg:col-span-2">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-[#EBF5F0] text-[#1F8A4C] px-3 py-1 rounded-full text-xs font-semibold">
                      {cas.secteur}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
                    <div>
                      <p className="text-[#9CA3AF] mb-1 font-medium uppercase text-xs">Problème</p>
                      <p className="text-[#374151]">{cas.probleme}</p>
                    </div>
                    <div>
                      <p className="text-[#9CA3AF] mb-1 font-medium uppercase text-xs">Solution</p>
                      <p className="text-[#374151]">{cas.solution}</p>
                    </div>
                    <div>
                      <p className="text-[#9CA3AF] mb-1 font-medium uppercase text-xs">Résultat</p>
                      <p className="text-[#374151]">{cas.resultat}</p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#1F8A4C] pl-4 italic text-[#374151] text-sm leading-relaxed">
                    <Quote size={16} className="text-[#1F8A4C] mb-1" />
                    {cas.quote}
                  </blockquote>

                  <div className="mt-4">
                    <p className="font-outfit font-bold text-[#111827] text-sm">{cas.name}</p>
                    <p className="text-[#9CA3AF] text-xs">{cas.role}</p>
                  </div>
                </div>

                {/* ROI badge */}
                <div className="flex items-center justify-center">
                  <div className="bg-[#1F8A4C] rounded-2xl p-6 text-center text-white w-full max-w-[200px]">
                    <TrendingUp size={32} className="mx-auto mb-2 text-white/70" />
                    <p className="font-outfit font-bold text-3xl mb-1">{cas.roi}</p>
                    <p className="text-white/75 text-xs">Impact mesuré</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1F8A4C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-outfit text-3xl font-bold text-white mb-4">
            Votre success story commence ici
          </h2>
          <p className="text-white/85 mb-8">
            Rejoignez les dirigeants qui ont déjà transformé leur entreprise grâce à l&apos;IA.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1F8A4C] px-8 py-4 rounded-xl font-bold hover:bg-[#EBF5F0] transition-colors"
          >
            Obtenir mon devis gratuit <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
