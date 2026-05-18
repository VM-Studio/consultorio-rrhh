'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CTAContacto from './CTAContacto'
import { useIsMobile } from '@/lib/useIsMobile'

export default function ContactoPage() {
  const isMobile = useIsMobile()
  const [formData, setFormData] = useState({
    nombre: '', apellido: '', empresa: '',
    provincia: '', tel: '', mail: '', mensaje: '',
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: `${formData.nombre} ${formData.apellido}`,
          email: formData.mail,
          telefono: formData.tel,
          empresa: formData.empresa,
          motivo: 'contacto',
          mensaje: formData.mensaje || '(sin mensaje)',
          privacidad: true,
        }),
      })
      if (!res.ok) throw new Error('Error al enviar')
      setSent(true)
    } catch {
      setError('Ocurrió un error. Intentá de nuevo.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* ─── SECCIÓN 1: Badge + CTA ─── */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#eeead7',
          paddingTop: isMobile ? '100px' : '140px',
          paddingBottom: '0',
        }}
      >
        {/* Badge CONTACTO — izquierda, llega hasta la mitad */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: isMobile ? '72%' : '50%',
            height: '32px',
            paddingLeft: '40px',
            paddingRight: '36px',
            background: 'linear-gradient(to right, #81ada4, #063f42)',
            borderRadius: '0 9999px 9999px 0',
            marginBottom: '28px',
          }}
        >
          <span
            style={{
              fontFamily: '"Artegra Sans Extended", sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              color: '#EEEAD6',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            CONTACTANOS
          </span>
        </motion.div>

        {/* CTA con las píldoras */}
        <CTAContacto />
      </section>

      {/* ─── SECCIÓN 2: Frase motivacional ─── */}
      <section
        style={{
          background: 'linear-gradient(to right, #79938a, #104649)',
          padding: isMobile ? '36px 24px' : '48px 40px',
          marginTop: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-60px' }}
          style={{
            fontFamily: '"Libre Baskerville", Georgia, serif',
            fontSize: isMobile ? '18px' : 'clamp(20px, 2.2vw, 30px)',
            lineHeight: 1.6,
            color: '#EEEAD6',
            maxWidth: '680px',
          }}
        >
          Queremos <em>escucharte</em>,<br />
          <strong>juntos</strong> podemos idear un <strong>plan</strong><br />
          <em>pensado</em> para <strong>vos</strong> y <strong>tu equipo</strong>.
        </motion.p>
      </section>

      {/* ─── SECCIÓN 3: Formulario sobre imagen ─── */}
      <section
        style={{
          position: 'relative',
          minHeight: '700px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        {/* Imagen de fondo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/nosotros.png"
            alt="Equipo Motus"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Overlay oscuro suave */}
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(4,40,42,0.45)' }} />
        </div>

        {/* Contenido sobre imagen */}
        <div style={{ position: 'relative', zIndex: 1, padding: isMobile ? '40px 20px 60px' : '60px 60px 80px' }}>

          {/* Título alineado con el formulario */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'Quicksand, sans-serif',
              fontWeight: 500,
              fontSize: '20px',
              color: '#EEEAD6',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '680px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Completá el siguiente formulario y<br />
            <strong style={{ fontWeight: 700 }}>nos pondremos en contacto a la brevedad.</strong>
          </motion.p>

          {/* Formulario */}
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                maxWidth: '680px',
                margin: '0 auto',
                backgroundColor: 'rgba(41,115,114,0.28)',
                backdropFilter: 'blur(6px)',
                borderRadius: '0',
                padding: '60px 40px',
                textAlign: 'center',
              }}
            >
              <p style={{ fontFamily: '"Libre Baskerville", serif', fontSize: '22px', color: '#EEEAD6' }}>
                ¡Mensaje recibido!
              </p>
              <p style={{ fontFamily: 'Quicksand, sans-serif', color: '#c5d0c8', marginTop: '12px' }}>
                Te responderemos a la brevedad.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              noValidate
              style={{
                maxWidth: '680px',
                margin: '0 auto',
                backgroundColor: 'rgba(41,115,114,0.28)',
                backdropFilter: 'blur(4px)',
                borderRadius: '0',
                padding: '40px 40px 36px',
              }}
            >
              {/* Fila 1: Nombre + Provincia */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '0' : '0 40px', marginBottom: '24px' }}>
                <Field label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                <Field label="Provincia" name="provincia" value={formData.provincia} onChange={handleChange} />
              </div>

              {/* Fila 2: Apellido + Tel */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '0' : '0 40px', marginBottom: '24px' }}>
                <Field label="Apellido" name="apellido" value={formData.apellido} onChange={handleChange} />
                <Field label="Tel" name="tel" value={formData.tel} onChange={handleChange} type="tel" />
              </div>

              {/* Fila 3: Empresa + Mail */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '0' : '0 40px', marginBottom: '24px' }}>
                <Field label="Empresa" name="empresa" value={formData.empresa} onChange={handleChange} />
                <Field label="Mail" name="mail" value={formData.mail} onChange={handleChange} type="email" required />
              </div>

              {/* Mensaje — ancho completo */}
              <div style={{ marginBottom: '28px' }}>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Mensaje"
                  rows={4}
                  className="contact-field"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.4)',
                    fontFamily: 'Quicksand, sans-serif',
                    fontSize: '14px',
                    padding: '8px 0',
                    outline: 'none',
                    resize: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {error && (
                <p style={{ color: '#ffaaaa', fontFamily: 'Quicksand, sans-serif', fontSize: '13px', marginBottom: '12px' }}>
                  {error}
                </p>
              )}

              {/* Botón enviar */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    padding: '12px 64px',
                    backgroundColor: '#063f42',
                    color: '#EEEAD6',
                    border: 'none',
                    borderRadius: '9999px',
                    fontFamily: '"Artegra Sans Extended", sans-serif',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: sending ? 'not-allowed' : 'pointer',
                    opacity: sending ? 0.7 : 1,
                    transition: 'opacity 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => { if (!sending) e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = sending ? '0.7' : '1' }}
                >
                  {sending ? 'ENVIANDO...' : 'ENVIAR'}
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* ─── Línea degradé entre formulario y footer ─── */}
      <div
        style={{
          width: '100%',
          height: '2px',
          background: 'linear-gradient(to right, transparent 0%, #EEEAD6 30%, #EEEAD6 70%, transparent 100%)',
          opacity: 0.6,
        }}
      />
    </>
  )
}

/* ── Campo de input reutilizable ── */
function Field({
  label, name, value, onChange, type = 'text', required = false,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        required={required}
        className="contact-field"
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.4)',
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '14px',
          padding: '8px 0',
          outline: 'none',
          boxSizing: 'border-box',
        }}
      />
    </div>
  )
}
