'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/lib/useIsMobile'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function QuienesSomos() {
  const isMobile = useIsMobile()
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#E1DCCB', paddingTop: isMobile ? '60px' : '90px', paddingBottom: isMobile ? '60px' : '120px' }}
    >
      {/* BADGE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
        style={{
          position: 'absolute',
          left: 0,
          top: '36px',
          width: isMobile ? '78%' : '46%',
          height: '36px',
          background: 'linear-gradient(to right, #83b1a7, #063f42)',
          borderRadius: '0 9999px 9999px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '32px',
          zIndex: 10,
        }}
      >
        <span
          style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontWeight: 700, fontSize: isMobile ? '12px' : '15px', color: '#EEEAD6', letterSpacing: '0.18em', textTransform: 'uppercase' }}
        >
          QUIENES SOMOS
        </span>
      </motion.div>

      {/* MOBILE: imagen superior + texto abajo */}
      {isMobile && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '40px', paddingLeft: '20px', paddingRight: '20px' }}>
          {/* Imagen móvil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ width: 'calc(100% + 20px)', height: '220px', borderRadius: '0 9999px 9999px 0', overflow: 'hidden', marginBottom: '32px', marginLeft: '-20px', outline: '2px solid #09756C', outlineOffset: '8px' }}
          >
            <Image
              src="/quienessomos.png"
              alt="Equipo Motus"
              width={400}
              height={220}
              style={{ objectFit: 'cover', objectPosition: 'center 15%', width: '100%', height: '100%' }}
            />
          </motion.div>

          {/* H2 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ color: '#033D40', lineHeight: 1.2, fontFamily: '"Libre Baskerville", serif', fontSize: '26px', marginBottom: '16px', width: '100%' }}
          >
            <span style={{ fontWeight: 400 }}>Mas de </span>
            <strong style={{ fontWeight: 700 }}>20 años</strong>
            <span style={{ fontWeight: 400 }}> de</span>
            <br />
            <span style={{ fontWeight: 400 }}>experiencia en corporaciones</span>
          </motion.h2>

          <div style={{ width: '48px', height: '2px', backgroundColor: '#09756C', marginBottom: '20px' }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            <p style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 400, fontSize: '15px', lineHeight: 1.7, color: 'rgba(3,61,64,0.65)' }}>
              Nacimos desde la vivencia real en el mundo corporativo y desde la convicción de que los procesos de transformación no se logran solo con metodologías, sino con presencia, escucha y trabajo conjunto.
            </p>
            <p style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 400, fontSize: '15px', lineHeight: 1.7, color: 'rgba(3,61,64,0.65)' }}>
              Nuestro enfoque combina conocimiento técnico, mirada estratégica y sensibilidad humana para acompañar a pequeñas y grandes empresas en momentos clave.
            </p>
          </motion.div>

          {/* Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '8px', marginTop: '32px', flexWrap: 'wrap' }}
          >
            {['COMPROMISO', 'ACOMPAÑAMIENTO', 'ENFOQUE HUMANO'].map((label) => (
              <span
                key={label}
                style={{ border: '1px solid #0d726a', borderRadius: '9999px', padding: '6px 12px', fontFamily: '"Artegra Sans Extended", sans-serif', fontWeight: 400, fontSize: '8px', color: '#0d726a', letterSpacing: '0.06em', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const }}
              >
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      )}

      {/* DESKTOP: layout original */}
      {!isMobile && (
        <>
          {/* LAYOUT FLEX — imagen izquierda centrada + texto derecha */}
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-80px' }}
              className="hidden lg:block flex-shrink-0"
              style={{ position: 'absolute', left: 0, top: '130px', width: '49%', height: '420px', borderRadius: '0 9999px 9999px 0', overflow: 'hidden', outline: '2px solid #09756C', outlineOffset: '10px', zIndex: 1 }}
            >
              <Image src="/quienessomos.png" alt="Equipo Motus" fill sizes="49vw" style={{ objectFit: 'cover', objectPosition: 'center 15%' }} />
            </motion.div>
            <div className="hidden lg:block flex-shrink-0" style={{ width: '49%' }} />
            <div className="w-full lg:w-[56%] flex flex-col relative z-10" style={{ paddingTop: '48px' }}>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, margin: '-80px' }}
                style={{ color: '#033D40', lineHeight: 1.15, fontFamily: '"Libre Baskerville", serif' }}
                className="text-3xl md:text-4xl lg:text-[40px] mb-5"
              >
                <span style={{ fontWeight: 400 }}>Mas de </span>
                <strong style={{ fontWeight: 700 }}>20 años</strong>
                <span style={{ fontWeight: 400 }}> de</span>
                <br />
                <span style={{ fontWeight: 400 }}>experiencia</span>
                <span style={{ fontWeight: 400 }}> en corporaciones</span>
              </motion.h2>
              <div style={{ width: '48px', height: '2px', backgroundColor: '#09756C', marginBottom: '28px' }} />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                viewport={{ once: true, margin: '-80px' }}
                className="space-y-5"
              >
                <p className="font-normal text-[15px] leading-[1.7]" style={{ fontFamily: 'Quicksand, sans-serif', color: 'rgba(3,61,64,0.65)', textAlign: 'justify' }}>
                  Nacimos desde la vivencia real en el mundo corporativo y desde la convicción de que los procesos de transformación no se logran solo con metodologías, sino con presencia, escucha y trabajo conjunto.
                </p>
                <p className="font-normal text-[15px] leading-[1.7]" style={{ fontFamily: 'Quicksand, sans-serif', color: 'rgba(3,61,64,0.65)', textAlign: 'justify' }}>
                  Nuestro enfoque combina conocimiento técnico, mirada estratégica y sensibilidad humana para acompañar a pequeñas y grandes empresas en momentos clave: crecimiento, reorganización, desarrollo de talento, incorporación de personas y evolución de sus equipos.
                </p>
                <p className="font-normal text-[15px] leading-[1.7]" style={{ fontFamily: 'Quicksand, sans-serif', color: 'rgba(3,61,64,0.65)', textAlign: 'justify' }}>
                  Nos involucramos, nos comprometemos y caminamos al lado de cada cliente, porque entendemos que cada organización es única y cada proceso merece una solución propia.
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '24px', marginTop: '80px', paddingBottom: '16px' }}
          >
            {['COMPROMISO', 'ACOMPAÑAMIENTO', 'ENFOQUE HUMANO'].map((label) => (
              <motion.span
                key={label}
                variants={itemVariants}
                style={{ border: '1px solid #0d726a', borderRadius: '9999px', padding: '8px 32px', fontFamily: '"Artegra Sans Extended", sans-serif', fontWeight: 400, fontSize: '11px', color: '#0d726a', letterSpacing: '0.12em', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const, cursor: 'default' }}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </>
      )}
    </section>
  )
}
