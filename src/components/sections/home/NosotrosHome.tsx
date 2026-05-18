'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const socios = [
  {
    nombre: 'Lucía',
    apellido: 'Carrera',
    titulo: 'Lic.',
    cita: [
      { texto: '"Ser uno mismo', bold: true },
      { texto: ' en un mundo que constantemente intenta que seas otra cosa, ', bold: false },
      { texto: 'es el mayor logro"', bold: true },
    ],
    aclaracion: null as string | null,
    autor: 'Ralph Waldo Emerson.',
  },
  {
    nombre: 'Federico',
    apellido: 'Ambroggio',
    titulo: 'Lic.',
    cita: [
      { texto: '"No es que tengamos poco', bold: true },
      { texto: ' tiempo, es que ', bold: false },
      { texto: 'perdemos mucho"', bold: true },
    ],
    aclaracion: '(sobre la importancia de aprovechar el tiempo para aprender)' as string | null,
    autor: 'Séneca',
  },
]

export default function NosotrosHome() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#E1DCCB',
        paddingTop: '90px',
        paddingBottom: '70px',
      }}
    >
      {/* BLOQUE 1 — Badge "NOSOTROS" borde izquierdo */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
        style={{
          position: 'absolute',
          top: '36px',
          left: 0,
          width: '50%',
          height: '32px',
          background: 'linear-gradient(to right, #7da89e, #043f42)',
          borderRadius: '0 9999px 9999px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '28px',
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: '"Libre Baskerville", Georgia, serif',
            fontWeight: 700,
            fontSize: '15px',
            color: '#EEEAD6',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          NOSOTROS
        </span>
      </motion.div>

      {/* BLOQUE 2 — Franja de imagen */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-60px' }}
        style={{
          width: '100%',
          height: '290px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Imagen de fondo */}
        <Image
          src="/nosotros.png"
          alt="Nosotros Motus"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 1 }}
          priority
        />

        {/* Título centrado */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
            style={{
              fontFamily: '"Libre Baskerville", serif',
              fontSize: '40px',
              lineHeight: 1.2,
              color: '#EEEAD6',
              textAlign: 'center',
            }}
          >
            <span style={{ fontWeight: 400 }}>Los </span>
            <strong style={{ fontWeight: 700 }}>socios</strong>
            <span style={{ fontWeight: 400 }}> detrás de </span>
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Motus</em>
          </motion.h2>
        </div>
      </motion.div>

      {/* BLOQUE 3 — Dos columnas socios */}
      <div
        style={{
          marginTop: '80px',
          display: 'flex',
          justifyContent: 'center',
          gap: '80px',
          flexWrap: 'wrap',
          paddingLeft: '40px',
          paddingRight: '40px',
        }}
      >
        {socios.map((socio, index) => (
          <motion.div
            key={socio.nombre}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, margin: '-80px' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '320px',
            }}
          >
            {/* Pill con borde degradé */}
            <div
              style={{
                borderRadius: '9999px',
                padding: '4px 16px',
                background:
                  'linear-gradient(#E1DCCB, #E1DCCB) padding-box, linear-gradient(to right, #2d4245, #adc2b9, #2d4245) border-box',
                border: '1.5px solid transparent',
                marginBottom: '24px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: '"Libre Baskerville", serif',
                  fontSize: '18px',
                  color: '#033D40',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ fontWeight: 400 }}>{socio.titulo} </span>
                <strong style={{ fontWeight: 700 }}>{socio.nombre}</strong>
                <span style={{ fontWeight: 400 }}> {socio.apellido}</span>
              </span>
            </div>

            {/* Cita con tipografía mixta */}
            <p
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontSize: '15px',
                color: '#033D40',
                textAlign: 'center',
                lineHeight: 1.65,
                maxWidth: '280px',
                marginBottom: '12px',
              }}
            >
              {socio.cita.map((fragment, i) =>
                fragment.bold ? (
                  <strong key={i} style={{ fontWeight: 700 }}>
                    {fragment.texto}
                  </strong>
                ) : (
                  <span key={i} style={{ fontWeight: 400 }}>
                    {fragment.texto}
                  </span>
                )
              )}
            </p>

            {/* Aclaración */}
            {socio.aclaracion && (
              <p
                style={{
                  fontFamily: 'Quicksand, sans-serif',
                  fontSize: '12px',
                  color: '#033D40',
                  opacity: 0.6,
                  textAlign: 'center',
                  fontStyle: 'italic',
                  marginBottom: '12px',
                  maxWidth: '240px',
                }}
              >
                {socio.aclaracion}
              </p>
            )}

            {/* Autor */}
            <p
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                color: '#033D40',
                textAlign: 'center',
                marginTop: '8px',
              }}
            >
              {socio.autor}
            </p>
          </motion.div>
        ))}
      </div>

      {/* BLOQUE 4 — Botón centrado inferior */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, margin: '-80px' }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '64px',
        }}
      >
        <Link
          href="/nosotros"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '11px 36px',
            backgroundColor: '#0e746c',
            color: '#EEEAD6',
            borderRadius: '9999px',
            fontFamily: '"Artegra Sans Extended", sans-serif',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.85'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          CONOCÉ MÁS SOBRE NOSOTROS
        </Link>
      </motion.div>
    </section>
  )
}
