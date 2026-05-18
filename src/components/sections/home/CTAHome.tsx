'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTAHome() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#eeead7',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Píldora izquierda — sale desde el borde izq */}
      <div
        style={{
          position: 'absolute',
          left: '-20%',
          top: '53%',
          transform: 'translateY(-50%)',
          width: '92%',
          height: '300px',
          border: '2px solid #46645e',
          borderRadius: '9999px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Píldora derecha — sale desde el borde der */}
      <div
        style={{
          position: 'absolute',
          right: '-20%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '92%',
          height: '300px',
          border: '2px solid #46645e',
          borderRadius: '9999px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Contenido central */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 40px',
        }}
      >
        <h2
          style={{
            fontFamily: '"Artegra Sans Extended", sans-serif',
            fontSize: '26px',
            lineHeight: 1.15,
            color: '#033D40',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '32px',
            maxWidth: '680px',
          }}
        >
          <span style={{ fontStyle: 'italic', fontWeight: 400 }}>¿PENSANDO</span>
          <span style={{ fontWeight: 400 }}> EN LOS </span>
          <strong style={{ fontWeight: 700 }}>PRÓXIMOS</strong>
          <br />
          <strong style={{ fontWeight: 700 }}>DESAFÍOS</strong>
          <span style={{ fontWeight: 400 }}> DE TU ORGANIZACIÓN?</span>
        </h2>

        <Link
          href="/contacto"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px 80px',
            backgroundColor: '#105257',
            color: '#EEEAD6',
            borderRadius: '9999px',
            fontFamily: '"Artegra Sans Extended", sans-serif',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            minWidth: '380px',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '0.85'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          CONTACTANOS
        </Link>
      </motion.div>
    </section>
  )
}
