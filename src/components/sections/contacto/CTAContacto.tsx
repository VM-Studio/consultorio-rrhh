'use client'

import { motion } from 'framer-motion'
import { useIsMobile } from '@/lib/useIsMobile'

export default function CTAContacto() {
  const isMobile = useIsMobile()
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#eeead7',
        minHeight: isMobile ? '360px' : '420px',
        paddingTop: isMobile ? '60px' : '60px',
        paddingBottom: isMobile ? '60px' : '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Píldora izquierda */}
      <div
        style={{
          position: 'absolute',
          left: '-10%',
          top: '55%',
          transform: 'translateY(-50%)',
          width: isMobile ? '105%' : '92%',
          height: isMobile ? '200px' : '300px',
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
          right: '-10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: isMobile ? '105%' : '92%',
          height: isMobile ? '200px' : '300px',
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
          padding: isMobile ? '0 24px' : '0 40px',
        }}
      >
        <h2
          style={{
            fontFamily: '"Artegra Sans Extended", sans-serif',
            fontSize: isMobile ? '16px' : '26px',
            lineHeight: 1.2,
            color: '#033D40',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontWeight: 700,
            maxWidth: isMobile ? '300px' : '680px',
          }}
        >
          ¿CUÁL DESAFÍO TE GUSTARÍA<br />ACTIVAR EN TU EMPRESA HOY?
        </h2>
      </motion.div>
    </section>
  )
}
