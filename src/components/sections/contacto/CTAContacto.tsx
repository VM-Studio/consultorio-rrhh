'use client'

import { motion } from 'framer-motion'

export default function CTAContacto() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#eeead7',
        minHeight: '320px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Píldora izquierda */}
      <div
        style={{
          position: 'absolute',
          left: '-20%',
          top: '55%',
          transform: 'translateY(-50%)',
          width: '92%',
          height: '300px',
          border: '2px solid #0e746c',
          borderRadius: '9999px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Píldora derecha */}
      <div
        style={{
          position: 'absolute',
          right: '-20%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '92%',
          height: '300px',
          border: '2px solid #0e746c',
          borderRadius: '9999px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Contenido central */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
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
            lineHeight: 1.2,
            color: '#033D40',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontWeight: 700,
            maxWidth: '680px',
          }}
        >
          ¿CUÁL DESAFÍO TE GUSTARÍA<br />ACTIVAR EN TU EMPRESA HOY?
        </h2>
      </motion.div>
    </section>
  )
}
