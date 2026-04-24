import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const MAX_SIZE = 5 * 1024 * 1024 // 5 MB
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]
const ALLOWED_EXTS = ['.pdf', '.doc', '.docx']

function escHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function buildCVEmailHtml(fields: Record<string, string>): string {
  const rows = [
    ['Nombre', fields.nombre],
    ['Email', fields.email],
    ['Teléfono', fields.telefono],
    ['LinkedIn', fields.linkedin || '—'],
    ['Áreas', fields.areas || '—'],
    ['Experiencia', fields.experiencia || '—'],
    ['Pretensión salarial', fields.pretension || '—'],
  ]
    .map(
      ([label, value]) => `
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid #eeebd8;width:160px;vertical-align:top;">
        <span style="font-size:12px;color:#8a8680;text-transform:uppercase;letter-spacing:1px;">${label}</span>
      </td>
      <td style="padding:8px 0 8px 16px;border-bottom:1px solid #eeebd8;vertical-align:top;">
        <span style="font-size:14px;color:#1c1c1c;">${escHtml(value ?? '')}</span>
      </td>
    </tr>`
    )
    .join('')

  const presentacion = fields.presentacion
    ? `<div style="margin:24px 0 0;padding:24px;background:#f5f4ef;border-left:3px solid #c9a96e;">
        <p style="margin:0 0 8px;font-size:11px;color:#8a8680;text-transform:uppercase;letter-spacing:1.5px;">Carta de presentación</p>
        <p style="margin:0;font-size:15px;color:#1c1c1c;line-height:1.7;white-space:pre-wrap;">${escHtml(fields.presentacion)}</p>
      </div>`
    : ''

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f5f4ef;font-family:'DM Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f4ef;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;max-width:600px;width:100%;">
        <tr>
          <td style="background:#1c1c1c;padding:32px 40px;">
            <p style="margin:0;font-family:Georgia,serif;font-size:22px;color:#fafaf7;">HR Consultora</p>
            <p style="margin:6px 0 0;font-size:12px;color:#c9a96e;letter-spacing:2px;text-transform:uppercase;">Nueva postulación espontánea</p>
          </td>
        </tr>
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 24px;font-size:16px;color:#1c1c1c;">
              Un candidato envió su CV desde el sitio web. El archivo se adjunta a este email.
            </p>
            <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
            ${presentacion}
          </td>
        </tr>
        <tr>
          <td style="padding:24px 40px;border-top:1px solid #eeebd8;">
            <p style="margin:0;font-size:12px;color:#8a8680;">Email generado automáticamente — HR Consultora Web</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  let formData: FormData
  try {
    formData = await req.formData()
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 })
  }

  // Extract fields
  const nombre = formData.get('nombre') as string
  const email = formData.get('email') as string
  const telefono = formData.get('telefono') as string
  const linkedin = (formData.get('linkedin') as string) || ''
  const areas = (formData.get('areas') as string) || ''
  const experiencia = (formData.get('experiencia') as string) || ''
  const pretension = (formData.get('pretension') as string) || ''
  const presentacion = (formData.get('presentacion') as string) || ''
  const file = formData.get('cv') as File | null

  // Basic validation
  if (!nombre || !email || !telefono) {
    return NextResponse.json(
      { error: 'Faltan campos requeridos.' },
      { status: 422 }
    )
  }
  if (!file) {
    return NextResponse.json(
      { error: 'El CV es requerido.' },
      { status: 422 }
    )
  }

  // File validation
  const ext = '.' + file.name.split('.').pop()?.toLowerCase()
  if (!ALLOWED_TYPES.includes(file.type) && !ALLOWED_EXTS.includes(ext)) {
    return NextResponse.json(
      { error: 'Formato de archivo no permitido. Solo PDF, DOC o DOCX.' },
      { status: 422 }
    )
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json(
      { error: 'El archivo supera el límite de 5 MB.' },
      { status: 422 }
    )
  }

  // Read file buffer
  const buffer = Buffer.from(await file.arrayBuffer())

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
      to: process.env.EMAIL_CV || process.env.EMAIL_DESTINO,
      replyTo: email,
      subject: `[CV] ${nombre} — ${areas} (${experiencia})`,
      html: buildCVEmailHtml({
        nombre,
        email,
        telefono,
        linkedin,
        areas,
        experiencia,
        pretension,
        presentacion,
      }),
      attachments: [
        {
          filename: file.name,
          content: buffer,
          contentType: file.type || 'application/octet-stream',
        },
      ],
    })
  } catch (err) {
    console.error('[cv/route] Error sending email:', err)
    return NextResponse.json(
      { error: 'No pudimos procesar tu postulación. Intentá de nuevo.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}

