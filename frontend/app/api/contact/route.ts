import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

export const runtime = "nodejs"

const payloadSchema = z.object({
  fullName: z.string().min(2).max(200),
  workEmail: z.string().email().max(320),
  companyName: z.string().min(2).max(200),
  country: z.string().min(1).max(100),
  projectType: z.string().min(1).max(200),
  budgetRange: z.string().min(1).max(200),
  timeline: z.string().min(1).max(200),
  projectDescription: z.string().min(10).max(5000),
})

function requiredEnv(name: string): string {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env var: ${name}`)
  return v
}

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const payload = payloadSchema.parse(json)

    const host = requiredEnv("SMTP_HOST")
    const port = Number(process.env.SMTP_PORT ?? 587)
    const user = requiredEnv("SMTP_USER")
    const pass = requiredEnv("SMTP_PASS")
    const from = process.env.SMTP_FROM ?? `DDP Labs <${user}>`

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    await transporter.sendMail({
      from,
      to: "sales@ddplabs.org",
      replyTo: payload.workEmail,
      subject: `New project quote: ${payload.companyName} — ${payload.fullName}`,
      text: [
        "New project quote request",
        "",
        `Full name: ${payload.fullName}`,
        `Work email: ${payload.workEmail}`,
        `Company: ${payload.companyName}`,
        `Country: ${payload.country}`,
        `Project type: ${payload.projectType}`,
        `Budget: ${payload.budgetRange}`,
        `Timeline: ${payload.timeline}`,
        "",
        "Project description:",
        payload.projectDescription,
      ].join("\n"),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json({ ok: false, error: message }, { status: 400 })
  }
}

