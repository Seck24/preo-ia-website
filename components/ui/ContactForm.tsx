"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

const schema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  entreprise: z.string().min(2, "Nom de l'entreprise requis"),
  email: z.string().email("Adresse email invalide"),
  telephone: z.string().optional(),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  message: z.string().min(20, "Le message doit contenir au moins 20 caractères"),
})

type FormData = z.infer<typeof schema>

const services = [
  "Audit IA",
  "Intégration IA sur mesure",
  "Formation dirigeants",
  "Préparation des données",
  "Maintenance & Support",
  "Je ne sais pas encore",
]

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus("loading")
    setErrorMessage("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus("success")
        reset()
      } else {
        const err = await res.json()
        setErrorMessage(err.message || "Une erreur est survenue. Réessayez.")
        setStatus("error")
      }
    } catch {
      setStatus("error")
      setErrorMessage("Impossible d'envoyer le message. Vérifiez votre connexion.")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#EBF5F0] rounded-2xl p-10 text-center">
        <CheckCircle size={56} className="text-[#1F8A4C] mx-auto mb-4" />
        <h2 className="font-outfit font-bold text-2xl text-[#111827] mb-2">
          Message envoyé !
        </h2>
        <p className="text-[#374151] mb-6">
          Nous avons bien reçu votre demande. Notre équipe vous contactera sous 24h pour
          organiser un premier échange gratuit.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[#1F8A4C] font-semibold hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nom */}
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-1.5" htmlFor="nom">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            id="nom"
            type="text"
            {...register("nom")}
            placeholder="Votre nom"
            className={`w-full px-4 py-3 rounded-xl border text-[#374151] bg-white outline-none transition-colors focus:border-[#1F8A4C] focus:ring-2 focus:ring-[#1F8A4C]/20 ${
              errors.nom ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.nom && (
            <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>
          )}
        </div>

        {/* Entreprise */}
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-1.5" htmlFor="entreprise">
            Entreprise <span className="text-red-500">*</span>
          </label>
          <input
            id="entreprise"
            type="text"
            {...register("entreprise")}
            placeholder="Nom de votre entreprise"
            className={`w-full px-4 py-3 rounded-xl border text-[#374151] bg-white outline-none transition-colors focus:border-[#1F8A4C] focus:ring-2 focus:ring-[#1F8A4C]/20 ${
              errors.entreprise ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.entreprise && (
            <p className="text-red-500 text-xs mt-1">{errors.entreprise.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-1.5" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="votre@email.com"
            className={`w-full px-4 py-3 rounded-xl border text-[#374151] bg-white outline-none transition-colors focus:border-[#1F8A4C] focus:ring-2 focus:ring-[#1F8A4C]/20 ${
              errors.email ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Téléphone */}
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-1.5" htmlFor="telephone">
            Téléphone / WhatsApp
          </label>
          <input
            id="telephone"
            type="tel"
            {...register("telephone")}
            placeholder="+225 05 00 00 00 00"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#374151] bg-white outline-none transition-colors focus:border-[#1F8A4C] focus:ring-2 focus:ring-[#1F8A4C]/20"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-medium text-[#111827] mb-1.5" htmlFor="service">
          Service souhaité <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          {...register("service")}
          className={`w-full px-4 py-3 rounded-xl border text-[#374151] bg-white outline-none transition-colors focus:border-[#1F8A4C] focus:ring-2 focus:ring-[#1F8A4C]/20 ${
            errors.service ? "border-red-400" : "border-gray-200"
          }`}
        >
          <option value="">Sélectionnez un service...</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[#111827] mb-1.5" htmlFor="message">
          Décrivez votre projet <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          placeholder="Décrivez votre activité, vos défis actuels, et ce que vous espérez obtenir avec l'IA..."
          className={`w-full px-4 py-3 rounded-xl border text-[#374151] bg-white outline-none transition-colors focus:border-[#1F8A4C] focus:ring-2 focus:ring-[#1F8A4C]/20 resize-none ${
            errors.message ? "border-red-400" : "border-gray-200"
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          <AlertCircle size={16} className="shrink-0" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 w-full bg-[#1F8A4C] hover:bg-[#166138] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Envoi en cours...
          </>
        ) : (
          <>
            <Send size={18} /> Envoyer ma demande de devis
          </>
        )}
      </button>

      <p className="text-[#9CA3AF] text-xs text-center">
        En soumettant ce formulaire, vous acceptez d&apos;être contacté par Préo IA.
        Réponse sous 24h garantie.
      </p>
    </form>
  )
}
