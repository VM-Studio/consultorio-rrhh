'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#E1DCCB', paddingTop: '120px', paddingBottom: '80px' }}
    >
      {/* BADGE — arranca desde el borde izquierdo absoluto */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
        style={{
          position: 'absolute',
          left: 0,
          top: '36px',
          width: '50%',
          height: '44px',
          background: 'linear-gradient(to right, #47C98C, #033D40)',
          borderRadius: '0 9999px 9999px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '32px',
          zIndex: 10,
        }}
      >
        <span
          className="font-heading font-bold uppercase"
          style={{ fontSize: '13px', color: '#EEEAD6', letterSpacing: '0.15em' }}
        >
          QUIENES SOMOS
        </span>
      </motion.div>

      {/* LAYOUT FLEX — imagen izquierda centrada + texto derecha */}
      <div className="flex flex-col lg:flex-row items-center gap-16 max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">

        {/* COLUMNA IZQUIERDA — imagen con forma "D" pegada al borde izquierdo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
          className="hidden lg:block flex-shrink-0"
          style={{
            position: 'absolute',
            left: 0,
            top: '130px',
            width: '44%',
            height: '520px',
            borderRadius: '0 9999px 9999px 0',
            overflow: 'hidden',
            outline: '2px solid #09756C',
            outlineOffset: '10px',
            zIndex: 1,
          }}
        >
          <Image
            src="/quienessomos.png"
            alt="Equipo Motus"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
          />
        </motion.div>

        {/* Spacer invisible en desktop para empujar el texto a la derecha */}
        <div className="hidden lg:block flex-shrink-0" style={{ width: '44%' }} />

        {/* COLUMNA DERECHA — texto */}
        <div className="w-full lg:w-[56%] flex flex-col relative z-10">

          {/* Título H2 */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: '-80px' }}
            style={{ color: '#033D40', lineHeight: 1.15 }}
            className="text-4xl md:text-5xl lg:text-[52px] mb-6"
          >
            <span className="font-serif font-normal">Mas de </span>
            <strong className="font-serif font-bold">20 años</strong>
            <span className="font-serif font-normal"> de</span>
            <br />
            <em className="font-serif italic font-normal">experiencia</em>
            <span className="font-serif font-normal"> en corporaciones</span>
          </motion.h2>

          {/* Línea decorativa */}
          <div style={{ width: '48px', height: '2px', backgroundColor: '#09756C', marginBottom: '28px' }} />

          {/* Párrafos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-5"
          >
            <p
              className="font-sans font-normal text-[15px] leading-[1.75]"
              style={{ color: 'rgba(3,61,64,0.65)', textAlign: 'justify' }}
            >
              Nacimos desde la vivencia real en el mundo corporativo y desde la convicción de que los procesos de transformación no se logran solo con metodologías, sino con presencia, escucha y trabajo conjunto.
            </p>
            <p
              className="font-sans font-normal text-[15px] leading-[1.75]"
              style={{ color: 'rgba(3,61,64,0.65)', textAlign: 'justify' }}
            >
              Nuestro enfoque combina conocimiento técnico, mirada estratégica y sensibilidad humana para acompañar a pequeñas y grandes empresas en momentos clave: crecimiento, reorganización, desarrollo de talento, incorporación de personas y evolución de sus equipos.
            </p>
            <p
              className="font-sans font-normal text-[15px] leading-[1.75]"
              style={{ color: 'rgba(3,61,64,0.65)', textAlign: 'justify' }}
            >
              Nos involucramos, nos comprometemos y caminamos al lado de cada cliente, porque entendemos que cada organización es única y cada proceso merece una solución propia.
            </p>
          </motion.div>

          {/* PILLS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-14 flex flex-row flex-nowrap gap-3 justify-center w-full"
          >
            {['COMPROMISO', 'ACOMPAÑAMIENTO', 'ENFOQUE HUMANO'].map((label) => (
              <motion.span
                key={label}
                variants={itemVariants}
                className="font-heading font-bold uppercase cursor-default"
                style={{
                  border: '1.5px solid #033D40',
                  borderRadius: '9999px',
                  padding: '7px 18px',
                  fontSize: '11px',
                  color: '#033D40',
                  letterSpacing: '0.10em',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
