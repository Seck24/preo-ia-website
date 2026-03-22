"use client"

import { MessageCircle } from "lucide-react"

const PHONE = process.env.NEXT_PUBLIC_PHONE_1 || "0508063437"

export default function WhatsAppButton() {
  const waLink = `https://wa.me/225${PHONE.replace(/\s/g, "")}`

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe58] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <MessageCircle size={28} className="text-white fill-white" />
    </a>
  )
}
