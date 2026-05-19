'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/lib/useIsMobile'

const LOGOS = [2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(n => `/logos/${n}.png`)

export default function ClientesHome() {
  const isMobile = useIsMobile()
  const logoH = isMobile ? 130 : 180

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#023e41',
        minHeight: isMobile ? '340px' : '380px',
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
            fontFamily: '"Artegra Sans Extended", sans-serif',
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

      {/* Badge inferior con logos en marquee */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-60px' }}
        style={{
          alignSelf: 'flex-end',
          width: isMobile ? '96%' : '88%',
          height: isMobile ? '142px' : '164px',
          backgroundColor: '#e0dcc9',
          borderRadius: '9999px 0 0 9999px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Track animado — duplicado para loop seamless */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '40px' : '72px',
            paddingLeft: isMobile ? '40px' : '72px',
            willChange: 'transform',
            width: 'max-content',
          }}
        >
          {[...LOGOS, ...LOGOS].map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                height: `${logoH}px`,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                src={src}
                alt={`cliente-${i}`}
                height={logoH}
                width={logoH * 3}
                style={{ height: `${logoH}px`, width: 'auto', maxWidth: `${logoH * 3}px`, objectFit: 'contain', opacity: 0.75, display: 'block' }}
                unoptimized
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
