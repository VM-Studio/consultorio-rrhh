'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/lib/useIsMobile'

const LOGOS = [2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(n => `/logos/${n}.png`)

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

        {/* Tira de logos — full width, sin pill, overflow hidden en section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-60px' }}
          style={{
            width: '100%',
            backgroundColor: '#e0dcc9',
            height: '120px',
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
              gap: '40px',
              paddingLeft: '24px',
              paddingRight: '24px',
              width: 'max-content',
            }}
          >
            {[...LOGOS, ...LOGOS].map((src, i) => (
              <div key={i} style={{ flexShrink: 0, height: '90px', display: 'flex', alignItems: 'center' }}>
                <Image
                  src={src}
                  alt={`cliente-${i}`}
                  height={90}
                  width={270}
                  style={{ height: '90px', width: 'auto', maxWidth: '270px', objectFit: 'contain', opacity: 1, display: 'block' }}
                  unoptimized
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
          {[...LOGOS, ...LOGOS].map((src, i) => (
            <div key={i} style={{ flexShrink: 0, height: '180px', display: 'flex', alignItems: 'center' }}>
              <Image
                src={src}
                alt={`cliente-${i}`}
                height={180}
                width={540}
                style={{ height: '180px', width: 'auto', maxWidth: '540px', objectFit: 'contain', opacity: 0.75, display: 'block' }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
