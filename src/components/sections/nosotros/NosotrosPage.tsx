'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/lib/useIsMobile'

const luciaData = {
  nombre: 'Lucía',
  apellido: 'Carrera',
  rol: 'Facilitadora estratégica',
  descripcion: [
    'con más de 20 años de trayectoria acompañando a líderes, equipos y organizaciones en procesos de transformación, integración y desarrollo cultural.',
    'Combina experiencia en grandes compañías y consultoría con una mirada cercana y humana, creando espacios de trabajo donde las personas puedan desarrollar su potencial, fortalecer vínculos y generar cambios sostenibles en contextos de evolución y crecimiento.',
  ],
  bullets: [
    { bold: 'Licenciada en Relaciones Laborales', plain: ' - Universidad de Buenos Aires' },
    { bold: 'Posgrado de Coaching & PNL', plain: ' - Universidad Austral' },
  ],
  linkedin: 'https://www.linkedin.com/in/lucia-carrera',
  foto: '/lucia.png',
}

const federicoData = {
  nombre: 'Federico',
  apellido: 'Ambroggio',
  rol: 'Consultor organizacional',
  descripcion: [
    'con más de 20 años de trayectoria en Recursos Humanos, Supply Chain y consultoría. Acompaña a líderes, equipos y empresas en procesos de cambio, diseño organizacional y evolución cultural.',
    'Combina su recorrido en multinacionales, consultoría y docencia universitaria con un enfoque cercano, orientado a generar valor real a través de vínculos sólidos, equipos comprometidos y decisiones con impacto.',
  ],
  bullets: [
    { bold: 'Master en Coaching y Cambio Organizacional', plain: ' - Universidad del Salvador' },
    { bold: 'Posgrado en Conducción de Recursos Humanos', plain: ' - Universidad Católica Argentina' },
    { bold: 'Licenciado en Administración de Empresas', plain: ' - Universidad Católica Argentina' },
  ],
  linkedin: 'https://www.linkedin.com/in/federico-ambroggio',
  foto: '/federico.png',
}

function LinkedInButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: '#c9ddc8',
        borderRadius: '4px',
        padding: '9px 22px',
        textDecoration: 'none',
        position: 'relative',
      }}
    >
      {/* Gradient border — esquinas blancas, centro oscuro */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '4px',
          padding: '1.5px',
          background: 'linear-gradient(135deg, #ffffff 0%, #3a6f6b 40%, #3a6f6b 60%, #ffffff 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          pointerEvents: 'none',
        }}
      />
      <svg width="15" height="15" viewBox="0 0 24 24" fill="#033D40" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
      <span
        style={{
          fontFamily: '"Artegra Sans Extended", sans-serif',
          fontWeight: 600,
          fontSize: '12px',
          color: '#033D40',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        Ver perfil en LinkedIn
      </span>
    </a>
  )
}

function CirclePhoto({ src, alt, size = 420 }: { src: string; alt: string; size?: number }) {
  const gradId = `grad-${alt.replace(/\s/g, '')}`
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: 'absolute', inset: 0, zIndex: 2 }}
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a403e" />
            <stop offset="100%" stopColor="#c8d0bb" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 7}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="14"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: '14px',
          borderRadius: '50%',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>
    </div>
  )
}

export default function NosotrosPage() {
  const isMobile = useIsMobile()
  return (
    <div style={{ width: '100%' }}>

      {/* ── HEADER ── */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(to right, #c5cdb8 0%, #3a6f6b 60%, #054042 100%)',
          paddingTop: isMobile ? '100px' : '160px',
          paddingBottom: '52px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: isMobile ? '80px' : '110px',
            left: 0,
            width: isMobile ? '72%' : '50%',
            height: '32px',
            background: 'linear-gradient(to right, #3a6f6b, #054042)',
            borderRadius: '0 9999px 9999px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '32px',
          }}
        >
          <span
            style={{
              fontFamily: '"Artegra Sans Extended", sans-serif',
              fontWeight: 700,
              fontSize: isMobile ? '12px' : '15px',
              color: '#EEEAD6',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            NOSOTROS
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ textAlign: 'center', maxWidth: '500px', padding: '0 24px' }}
        >
          <p
            style={{
              fontFamily: 'Quicksand, sans-serif',
              fontSize: isMobile ? '16px' : '21px',
              color: '#EEEAD6',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Profesionales con{' '}
            <strong style={{ fontWeight: 700, color: '#EEEAD6' }}>trayectoria sólida,</strong>
            <br />
            <strong style={{ fontWeight: 700, color: '#EEEAD6' }}>vocación de servicio</strong>{' '}
            y la{' '}
            <strong style={{ fontWeight: 700, color: '#EEEAD6' }}>pasión de conectar</strong>
            <br />
            personas con oportunidades.
          </p>
        </motion.div>
      </section>

      {/* ── LUCÍA ── */}
      <section
        style={{
          background: 'linear-gradient(to right, #c5cdb8 0%, #3a6f6b 55%, #054042 100%)',
          padding: isMobile ? '48px 0 40px' : '72px 0 64px',
          overflow: 'hidden',
        }}
      >
        {/* Fila principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'center',
            justifyContent: isMobile ? 'flex-start' : 'space-between',
            gap: isMobile ? '32px' : '48px',
            paddingRight: isMobile ? '0' : '80px',
          }}
        >
          {/* Card */}
          <div
            style={{
              width: isMobile ? '100%' : '52%',
              backgroundColor: '#cfd5c2',
              borderRadius: isMobile ? '0' : '0 9999px 9999px 0',
              padding: isMobile ? '32px 24px' : '80px 100px 80px 72px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              flexShrink: 0,
            }}
          >
            <h2
              style={{
                fontFamily: '"Libre Baskerville", serif',
                fontSize: isMobile ? '26px' : '38px',
                color: '#033D40',
                fontWeight: 400,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {luciaData.nombre} {luciaData.apellido}
            </h2>
            <p
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontSize: isMobile ? '13px' : '14px',
                color: '#033D40',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong style={{ fontWeight: 700 }}>{luciaData.rol}</strong>{' '}
              {luciaData.descripcion[0]}
            </p>
            <p
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontSize: isMobile ? '13px' : '14px',
                color: '#033D40',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {luciaData.descripcion[1]}
            </p>
          </div>

          {/* Foto */}
          <CirclePhoto src={luciaData.foto} alt="Lucía Carrera" size={isMobile ? 240 : 500} />
        </motion.div>

        {/* Fila inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'flex-start' : 'space-between',
            alignItems: isMobile ? 'flex-start' : 'flex-end',
            gap: isMobile ? '20px' : '0',
            marginTop: '36px',
            padding: isMobile ? '0 24px' : '0 80px 0 72px',
          }}
        >
          <LinkedInButton href={luciaData.linkedin} />
          <div style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: '6px 8px' }}>
            {luciaData.bullets.map((b, i) => (
              <div key={i} style={{ display: 'contents' }}>
                <div style={{ color: '#EEEAD6', fontSize: '18px', lineHeight: 1.6 }}>•</div>
                <div style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '13px', color: '#EEEAD6', margin: 0, lineHeight: 1.6 }}>
                  <strong style={{ fontWeight: 700 }}>{b.bold}</strong>
                  <span style={{ opacity: 0.85 }}>{b.plain}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FEDERICO ── */}
      <section
        style={{
          background: 'linear-gradient(to left, #c5cdb8 0%, #3a6f6b 55%, #054042 100%)',
          padding: isMobile ? '48px 0 40px' : '72px 0 64px',
          overflow: 'hidden',
        }}
      >
        {/* Fila principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'center',
            justifyContent: isMobile ? 'flex-start' : 'space-between',
            gap: isMobile ? '32px' : '48px',
            paddingLeft: isMobile ? '0' : '80px',
          }}
        >
          {/* En mobile: foto arriba; en desktop: foto a la izquierda */}
          <CirclePhoto src={federicoData.foto} alt="Federico Ambroggio" size={isMobile ? 240 : 500} />

          {/* Card */}
          <div
            style={{
              width: isMobile ? '100%' : '52%',
              backgroundColor: '#cfd5c2',
              borderRadius: isMobile ? '0' : '9999px 0 0 9999px',
              padding: isMobile ? '32px 24px' : '80px 72px 80px 100px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              flexShrink: 0,
            }}
          >
            <h2
              style={{
                fontFamily: '"Libre Baskerville", serif',
                fontSize: isMobile ? '26px' : '38px',
                color: '#033D40',
                fontWeight: 400,
                lineHeight: 1.1,
                margin: 0,
                textAlign: isMobile ? 'left' : 'right',
              }}
            >
              {federicoData.nombre} {federicoData.apellido}
            </h2>
            <p
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontSize: isMobile ? '13px' : '14px',
                color: '#033D40',
                lineHeight: 1.75,
                margin: 0,
                textAlign: isMobile ? 'left' : 'right',
              }}
            >
              <strong style={{ fontWeight: 700 }}>{federicoData.rol}</strong>{' '}
              {federicoData.descripcion[0]}
            </p>
            <p
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontSize: isMobile ? '13px' : '14px',
                color: '#033D40',
                lineHeight: 1.75,
                margin: 0,
                textAlign: isMobile ? 'left' : 'right',
              }}
            >
              {federicoData.descripcion[1]}
            </p>
          </div>
        </motion.div>

        {/* Fila inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'flex-start' : 'space-between',
            alignItems: isMobile ? 'flex-start' : 'flex-end',
            gap: isMobile ? '20px' : '0',
            marginTop: '36px',
            padding: isMobile ? '0 24px' : '0 72px 0 80px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: '6px' }}>
            {federicoData.bullets.map((b, i) => (
              <div key={i} style={{ display: 'contents' }}>
                <div style={{ color: '#EEEAD6', fontSize: '18px', lineHeight: 1.6 }}>•</div>
                <div style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '13px', color: '#EEEAD6', margin: 0, lineHeight: 1.6 }}>
                  <strong style={{ fontWeight: 700 }}>{b.bold}</strong>
                  <span style={{ opacity: 0.85 }}>{b.plain}</span>
                </div>
              </div>
            ))}
          </div>
          <LinkedInButton href={federicoData.linkedin} />
        </motion.div>
      </section>

    </div>
  )
}
