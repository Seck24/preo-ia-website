import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import WhatsAppButton from "@/components/ui/WhatsAppButton"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Préo IA — Agence d'intégration IA pour PME africaines",
    template: "%s | Préo IA",
  },
  description:
    "Préo IA aide les dirigeants de PME africaines à intégrer l'intelligence artificielle de façon concrète, rentable et adaptée aux réalités du terrain.",
  keywords: ["intelligence artificielle", "IA", "PME", "Afrique", "Abidjan", "Côte d'Ivoire", "automatisation", "formation IA"],
  authors: [{ name: "Préo IA", url: "https://preo-ia.info" }],
  creator: "Préo IA",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://preo-ia.info"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://preo-ia.info",
    siteName: "Préo IA",
    title: "Préo IA — Agence d'intégration IA pour PME africaines",
    description:
      "Aidons vos entreprises à intégrer l'IA de façon concrète, rentable et adaptée aux réalités africaines.",
    images: [{ url: "/banniere.png", width: 1200, height: 630, alt: "Préo IA" }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-inter text-gray-body bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
