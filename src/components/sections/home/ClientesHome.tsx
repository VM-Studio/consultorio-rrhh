'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/lib/useIsMobile'

const LOGOS = [
  { src: '/logos/2.png', size: 115 },
  { src: '/logos/3.png', size: 115 },
  { src: '/logos/4.png', size: 115 },
  { src: '/logos/5.png', size: 115 },
  { src: '/logos/6.png', size: 115 },
  { src: '/logos/8.png', size: 115 },
  { src: '/logos/9.png', size: 115 },
  { src: '/logos/10.png', size: 115 },
  { src: '/logos/12.png', size: 115 },
  { src: '/logos/14.png', size: 115 },
  { src: '/logos/16.png', size: 155 },
  { src: '/logos/17.png', size: 155 },
  { src: '/logos/18.png', size: 155 },
  { src: '/logos/19.png', size: 155 },
]

export default function ClientesHome() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <section
        style={{
          position: 'relative',
          backgroundColor: '#023e41',
          paddingTop: '0',
          paddingBottom: '40px',
          overflow: 'hidden',
        }}
      >
        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-60px' }}
          style={{
            width: '80%',
            height: '32px',
            background: 'linear-gradient(to right, #336061, #eae6d3)',
            borderRadius: '0 9999px 9999px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '28px',
            marginTop: '32px',
            marginBottom: '32px',
          }}
        >
          <span style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontWeight: 700, fontSize: '13px', color: '#033D40', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            CONFÍAN EN NOSOTROS
          </span>
        </motion.div>

        {/* Tira de logos — badge pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-60px' }}
          style={{
            width: '100%',
            backgroundColor: '#e0dcc9',
            height: '150px',
            borderRadius: '9999px 0 0 9999px',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <div
            className="marquee-track"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '48px',
              paddingLeft: '90px',
              width: 'max-content',
            }}
          >
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div key={i} style={{ flexShrink: 0, height: '115px', width: '115px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  src={logo.src}
                  alt={`cliente-${i}`}
                  height={logo.size}
                  width={logo.size}
                  style={{ height: `${logo.size}px`, width: `${logo.size}px`, objectFit: 'contain', opacity: 1, display: 'block' }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    )
  }

  // ── DESKTOP ──
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#023e41',
        minHeight: '380px',
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
        <span style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontWeight: 700, fontSize: '15px', color: '#033D40', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          CONFÍAN EN NOSOTROS
        </span>
      </motion.div>

      <div style={{ flex: 1, minHeight: '80px' }} />

      {/* Badge inferior pill con logos */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-60px' }}
        style={{
          alignSelf: 'flex-end',
          width: '88%',
          height: '164px',
          backgroundColor: '#e0dcc9',
          borderRadius: '9999px 0 0 9999px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '72px',
            paddingLeft: '72px',
            width: 'max-content',
          }}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} style={{ flexShrink: 0, height: '180px', width: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src={logo.src}
                alt={`cliente-${i}`}
                height={logo.size * 1.5}
                width={logo.size * 1.5}
                style={{ height: `${logo.size * 1.5}px`, width: `${logo.size * 1.5}px`, objectFit: 'contain', opacity: 0.75, display: 'block' }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
