'use client'

import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import { useIsMobile } from '@/lib/useIsMobile'

const logos = [
  { alt: 'Amazon' },
  { alt: 'TikTok' },
  { alt: 'Reddit' },
  { alt: 'Mercado Libre' },
]

export default function ClientesHome() {
  const isMobile = useIsMobile()
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#023e41',
        minHeight: isMobile ? '220px' : '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '0',
        paddingBottom: isMobile ? '40px' : '60px',
      }}
    >
      {/* Badge superior izquierdo */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-60px' }}
        style={{
          alignSelf: 'flex-start',
          width: isMobile ? '80%' : '48%',
          height: '32px',
          background: 'linear-gradient(to right, #336061, #eae6d3)',
          borderRadius: '0 9999px 9999px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingLeft: '40px',
          paddingRight: '28px',
          marginTop: isMobile ? '32px' : '48px',
        }}
      >
        <span
          style={{
            fontFamily: '"Libre Baskerville", Georgia, serif',
            fontWeight: 700,
            fontSize: '15px',
            color: '#033D40',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          CONFÍAN EN NOSOTROS
        </span>
      </motion.div>

      {/* Espacio entre badges */}
      <div style={{ flex: 1, minHeight: isMobile ? '40px' : '80px' }} />

      {/* Badge inferior con logos */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-60px' }}
        style={{
          alignSelf: 'flex-end',
          width: isMobile ? '96%' : '88%',
          height: isMobile ? '76px' : '115px',
          backgroundColor: '#e0dcc9',
          borderRadius: '9999px 0 0 9999px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: isMobile ? '16px' : '28px',
          paddingRight: isMobile ? '24px' : '48px',
          marginBottom: '0',
          overflow: 'hidden',
          gap: isMobile ? '28px' : '64px',
        }}
      >
        {/* Flecha izquierda */}
        <div
          style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '8px',
          }}
        >
          <ChevronLeft size={isMobile ? 32 : 52} style={{ color: '#b7c9b8' }} strokeWidth={1.5} />
        </div>

        {/* Logos en fila */}
        {logos.map((logo, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              height: '34px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: '"Artegra Sans Extended", sans-serif',
                fontWeight: 700,
                fontSize: isMobile ? '13px' : '20px',
                letterSpacing: '0.08em',
                color: '#4a5e52',
                opacity: 0.7,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {logo.alt}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
