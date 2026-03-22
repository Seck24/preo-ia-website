import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const schema = z.object({
  nom: z.string().min(2),
  entreprise: z.string().min(2),
  email: z.string().email(),
  telephone: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(20),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><style>
  body { font-family: Arial, sans-serif; color: #374151; margin: 0; padding: 0; }
  .header { background: #1F8A4C; padding: 24px; text-align: center; }
  .header h1 { color: white; margin: 0; font-size: 22px; }
  .body { padding: 24px; }
  .field { margin-bottom: 16px; }
  .label { font-size: 11px; text-transform: uppercase; color: #9CA3AF; margin-bottom: 4px; }
  .value { font-size: 15px; color: #111827; font-weight: 600; }
  .message-box { background: #EBF5F0; border-left: 4px solid #1F8A4C; padding: 16px; border-radius: 8px; margin-top: 20px; }
  .footer { background: #F3F4F6; padding: 16px 24px; font-size: 12px; color: #9CA3AF; }
</style></head>
<body>
  <div class="header">
    <h1>Nouvelle demande de devis — Préo IA</h1>
  </div>
  <div class="body">
    <div class="field">
      <div class="label">Nom complet</div>
      <div class="value">${data.nom}</div>
    </div>
    <div class="field">
      <div class="label">Entreprise</div>
      <div class="value">${data.entreprise}</div>
    </div>
    <div class="field">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
    </div>
    ${data.telephone ? `
    <div class="field">
      <div class="label">Téléphone / WhatsApp</div>
      <div class="value">${data.telephone}</div>
    </div>` : ""}
    <div class="field">
      <div class="label">Service souhaité</div>
      <div class="value">${data.service}</div>
    </div>
    <div class="message-box">
      <div class="label">Message</div>
      <p style="margin: 8px 0 0; white-space: pre-wrap;">${data.message}</p>
    </div>
  </div>
  <div class="footer">
    Reçu le ${new Date().toLocaleString("fr-FR")} • preo-ia.info
  </div>
</body>
</html>`

    await transporter.sendMail({
      from: `"Préo IA Site Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "contact@preo-ia.info",
      replyTo: data.email,
      subject: `[Devis] ${data.service} — ${data.nom} (${data.entreprise})`,
      html: htmlContent,
      text: `
Nouvelle demande de devis — Préo IA
====================================
Nom : ${data.nom}
Entreprise : ${data.entreprise}
Email : ${data.email}
${data.telephone ? `Téléphone : ${data.telephone}` : ""}
Service : ${data.service}

Message :
${data.message}

Reçu le ${new Date().toLocaleString("fr-FR")}
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Données invalides. Vérifiez le formulaire." },
        { status: 400 }
      )
    }
    console.error("Email send error:", err)
    return NextResponse.json(
      { message: "Erreur lors de l'envoi. Réessayez ou contactez-nous directement." },
      { status: 500 }
    )
  }
}
