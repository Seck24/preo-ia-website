# SETUP.md — Guide de gestion du site Préo IA

> Document de référence pour toute modification future. Mis à jour : Mars 2026.

---

## ⚡ Lancement local

```bash
cd preo-ia-website
npm install
npm run dev
# → http://localhost:3000
```

---

## 🚀 Déploiement (automatique)

```bash
git add .
git commit -m "update: description des changements"
git push origin main
# → Coolify redéploie automatiquement en 2-3 minutes
```

---

## 📁 Fichiers à modifier par page

| Page           | Fichier                          |
|----------------|----------------------------------|
| Accueil        | `app/page.tsx`                   |
| Services       | `app/services/page.tsx`          |
| Formation      | `app/formation/page.tsx`         |
| À propos       | `app/a-propos/page.tsx`          |
| Témoignages    | `app/temoignages/page.tsx`       |
| Contact        | `app/contact/page.tsx`           |
| Header/Nav     | `components/layout/Header.tsx`   |
| Footer         | `components/layout/Footer.tsx`   |
| Bouton WA      | `components/ui/WhatsAppButton.tsx` |
| Formulaire     | `components/ui/ContactForm.tsx`  |

### Sections de la page d'accueil

| Section          | Fichier                                       |
|------------------|-----------------------------------------------|
| Hero             | `components/sections/HeroSection.tsx`         |
| Statistiques     | `components/sections/StatsSection.tsx`        |
| Services aperçu  | `components/sections/ServicesPreview.tsx`     |
| Différenciateurs | `components/sections/DifferentiatorsSection.tsx` |
| Témoignages      | `components/sections/TestimonialsSection.tsx` |
| Formation aperçu | `components/sections/FormationPreview.tsx`    |
| CTA final        | `components/sections/CtaFinal.tsx`            |

---

## 🎨 Modifier les couleurs

→ `tailwind.config.ts` → section `colors`

```
Vert principal  : #1F8A4C
Vert foncé      : #166138
Vert clair      : #EBF5F0
Gris titres     : #111827
Gris corps      : #374151
```

---

## 📧 Modifier l'email de réception des devis

→ Coolify > `preo-ia-website` > **Environment Variables**
→ Changer `CONTACT_EMAIL`

---

## 📞 Modifier les numéros de téléphone

→ Coolify > Environment Variables
→ Changer `NEXT_PUBLIC_PHONE_1` et `NEXT_PUBLIC_PHONE_2`

---

## 🔑 Accès services

| Service     | URL / Info                                         |
|-------------|----------------------------------------------------|
| GitHub Repo | https://github.com/Seck24/preo-ia-website          |
| Coolify     | http://161.97.181.171:8000                         |
| VPS SSH     | `ssh root@161.97.181.171`                          |
| Site live   | https://preo-ia.info                               |

---

## 🛠️ Stack technique

```
Next.js 14    App Router + TypeScript
Tailwind CSS  v3 — Design system Préo IA
Framer Motion Animations scroll
React Hook Form + Zod  Formulaire contact
Nodemailer    Envoi email SMTP
Docker        Image standalone multi-stage
Coolify       Déploiement + SSL automatique
```

---

## 🧪 Tests locaux recommandés

Avant chaque déploiement :

```bash
npm run build          # Vérifier qu'il n'y a pas d'erreurs
npm run start          # Tester la version de production
```

Lighthouse : tester sur https://pagespeed.web.dev → score > 90

---

## 📞 Contacts Préo IA

| Contact | Info |
|---------|------|
| Email   | contact@preo-ia.info |
| Tél 1   | 05 08 06 34 37 |
| Tél 2   | 07 11 66 04 42 |
| Adresse | Abidjan, Côte d'Ivoire |
| WhatsApp | +225 05 08 06 34 37 |

---

*Préo IA · contact@preo-ia.info · Abidjan, Côte d'Ivoire*
