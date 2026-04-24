import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { contactSchema, MOTIVOS } from '@/lib/schemas'

// Basic in-memory rate limiting (per deployment instance)
const rateMap = new Map<string, { count: number; reset: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60 * 60 * 1000 // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + RATE_WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

function getMotivoLabel(value: string): string {
  const found = MOTIVOS.find((m) => m.value === value)
  return found ? found.label : value
}

function buildEmailHtml(data: {
  nombre: string
  email: string
  telefono?: string
  empresa?: string
  motivo: string
  mensaje: string
}): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f4ef;font-family:'DM Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f4ef;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;max-width:600px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="background:#1c1c1c;padding:32px 40px;">
            <p style="margin:0;font-family:Georgia,serif;font-size:22px;color:#fafaf7;letter-spacing:0.5px;">
              HR Consultora
            </p>
            <p style="margin:6px 0 0;font-size:12px;color:#c9a96e;letter-spacing:2px;text-transform:uppercase;">
              Nuevo mensaje de contacto
            </p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 24px;font-size:16px;color:#1c1c1c;">
              Recibiste un nuevo mensaje desde el formulario de contacto del sitio web.
            </p>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row('Nombre', data.nombre)}
              ${row('Email', `<a href="mailto:${data.email}" style="color:#b8924a;">${data.email}</a>`)}
              ${data.telefono ? row('Teléfono', data.telefono) : ''}
              ${data.empresa ? row('Empresa', data.empresa) : ''}
              ${row('Motivo', getMotivoLabel(data.motivo))}
            </table>
            <div style="margin:24px 0 0;padding:24px;background:#f5f4ef;border-left:3px solid #c9a96e;">
              <p style="margin:0 0 8px;font-size:11px;color:#8a8680;text-transform:uppercase;letter-spacing:1.5px;">Mensaje</p>
              <p style="margin:0;font-size:15px;color:#1c1c1c;line-height:1.7;white-space:pre-wrap;">${escHtml(data.mensaje)}</p>
            </div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;border-top:1px solid #eeebd8;">
            <p style="margin:0;font-size:12px;color:#8a8680;">
              Este email fue generado automáticamente desde el sitio web de HR Consultora.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 0;border-bottom:1px solid #eeebd8;width:140px;vertical-align:top;">
      <span style="font-size:12px;color:#8a8680;text-transform:uppercase;letter-spacing:1px;">${label}</span>
    </td>
    <td style="padding:8px 0 8px 16px;border-bottom:1px solid #eeebd8;vertical-align:top;">
      <span style="font-size:14px;color:#1c1c1c;">${value}</span>
    </td>
  </tr>`
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Demasiados intentos. Intentá de nuevo más tarde.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 })
  }

  // Server-side validation
  const result = contactSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Datos inválidos.', issues: result.error.issues },
      { status: 422 }
    )
  }

  const data = result.data

  // Send email
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"HR Consultora Web" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_DESTINO,
      replyTo: data.email,
      subject: `[Web] Nuevo contacto de ${data.nombre} — ${getMotivoLabel(data.motivo)}`,
      html: buildEmailHtml(data),
    })
  } catch (err) {
    console.error('[contacto/route] Error sending email:', err)
    return NextResponse.json(
      { error: 'No pudimos enviar tu mensaje. Intentá de nuevo o contactanos por WhatsApp.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}

