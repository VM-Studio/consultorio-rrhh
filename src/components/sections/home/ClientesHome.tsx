'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'

const logos = [
  { src: '/images/clientes/amazon.png', alt: 'Amazon' },
  { src: '/images/clientes/tiktok.png', alt: 'TikTok' },
  { src: '/images/clientes/reddit.png', alt: 'Reddit' },
  { src: '/images/clientes/tiktok.png', alt: 'TikTok' },
]

export default function ClientesHome() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#023e41',
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '0',
        paddingBottom: '60px',
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
          width: '48%',
          height: '32px',
          background: 'linear-gradient(to right, #336061, #eae6d3)',
          borderRadius: '0 9999px 9999px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingLeft: '40px',
          paddingRight: '28px',
          marginTop: '48px',
        }}
      >
        <span
          style={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontWeight: 700,
            fontSize: '13px',
            color: '#033D40',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          CONFÍAN EN NOSOTROS
        </span>
      </motion.div>

      {/* Espacio entre badges */}
      <div style={{ flex: 1, minHeight: '80px' }} />

      {/* Badge inferior con logos */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-60px' }}
        style={{
          alignSelf: 'flex-end',
          width: '88%',
          height: '115px',
          backgroundColor: '#e0dcc9',
          borderRadius: '9999px 0 0 9999px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '28px',
          paddingRight: '48px',
          marginBottom: '0',
          overflow: 'hidden',
          gap: '64px',
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
          <ChevronLeft size={52} style={{ color: '#b7c9b8' }} strokeWidth={1.5} />
        </div>

        {/* Logos en fila */}
        {logos.map((logo, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              height: '34px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              height={34}
              width={120}
              style={{
                objectFit: 'contain',
                filter: 'grayscale(30%) opacity(0.65)',
                height: '34px',
                width: 'auto',
              }}
            />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
