'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useIsMobile, useScreenSize } from '@/lib/useIsMobile'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const figuraVariants = {
  hidden: { opacity: 0, y: -80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
}

interface Servicio {
  numero: string
  titulo: string
  descripcion: string
  color: string
  colorNumero: string
  colorTitulo: string
  colorTexto: string
  opacidadNumero: number
  numeroOutline: boolean
  colorBoton: string
  colorBotonTexto: string
}

const servicios: Servicio[] = [
  {
    numero: '01.',
    titulo: 'GESTIÓN INTEGRAL\nDE RECURSOS\nHUMANOS',
    descripcion:
      'Para empresas que necesitan ordenar y acompañar la gestión de personas sin armar una estructura interna. Nos integramos como parte del equipo, dando soporte en lo operativo y en decisiones estratégicas [...]',
    color: '#05373b',
    colorNumero: '#EEEAD6',
    colorTitulo: '#EEEAD6',
    colorTexto: '#c5c0aa',
    opacidadNumero: 0.45,
    numeroOutline: false,
    colorBoton: '#47C98C',
    colorBotonTexto: '#033D40',
  },
  {
    numero: '02.',
    titulo: 'HEADHUNTING\nEJECUTIVO',
    descripcion:
      'Trabajamos en búsquedas que requieren criterio, confidencialidad y acceso a perfiles que no están activamente en el mercado. Nos involucramos de manera directa, entendiendo el contexto del negocio [...]',
    color: '#105056',
    colorNumero: '#EEEAD6',
    colorTitulo: '#EEEAD6',
    colorTexto: '#c5c0aa',
    opacidadNumero: 0.45,
    numeroOutline: false,
    colorBoton: '#47C98C',
    colorBotonTexto: '#033D40',
  },
  {
    numero: '03.',
    titulo: 'BÚSQUEDA Y\nSELECCIÓN DE\nTALENTO',
    descripcion:
      'Acompañamos todo el proceso de selección, desde la definición del perfil hasta el seguimiento después del ingreso. Entendemos qué necesita el negocio y cómo es el equipo que va a recibir a esa persona [...]',
    color: '#0b756a',
    colorNumero: '#EEEAD6',
    colorTitulo: '#EEEAD6',
    colorTexto: '#d0ece7',
    opacidadNumero: 0.45,
    numeroOutline: false,
    colorBoton: '#EEEAD6',
    colorBotonTexto: '#033D40',
  },
  {
    numero: '04.',
    titulo: 'APRENDIZAJE\nAPLICADO AL\nNEGOCIO',
    descripcion:
      'Generamos espacios para trabajar situaciones reales del día a día. Nos enfocamos en liderazgo, comunicación, gestión de equipos y acompañamiento en contextos de cambio [...]',
    color: '#47ca8b',
    colorNumero: '#033D40',
    colorTitulo: '#033D40',
    colorTexto: '#1a5a4a',
    opacidadNumero: 1,
    numeroOutline: false,
    colorBoton: '#033D40',
    colorBotonTexto: '#EEEAD6',
  },
  {
    numero: '05.',
    titulo: 'TRANSFORMACIÓN\nORGANIZACIONAL',
    descripcion:
      'Acompañamos procesos de cambio desde adentro, trabajando junto a los equipos y líderes para alinear prácticas y formas de liderazgo con los objetivos del negocio [...]',
    color: '#eeead7',
    colorNumero: '#09756C',
    colorTitulo: '#09756C',
    colorTexto: '#3a6060',
    opacidadNumero: 1,
    numeroOutline: false,
    colorBoton: '#09756C',
    colorBotonTexto: '#EEEAD6',
  },
]

function Figura({ servicio, index, width = 240, heightDefault = 310, heightHover = 420 }: { servicio: Servicio; index: number; width?: number; heightDefault?: number; heightHover?: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={figuraVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ height: hovered ? heightHover : heightDefault }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        width,
        backgroundColor: servicio.color,
        borderRadius: '0 0 9999px 9999px',
        overflow: 'hidden',
        flexShrink: 0,
        position: 'relative',
        zIndex: hovered ? 20 : 10,
        marginLeft: index === 0 ? '-30px' : '-10px',
        cursor: 'pointer',
      }}
    >
      <Link
        href={`/servicios?open=${servicio.numero.replace('.', '')}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          textDecoration: 'none',
          padding: '36px 20px 32px',
        }}
      >
        {/* Número */}
        <span
          style={{
            fontFamily: '"Libre Baskerville", serif',
            fontStyle: 'italic',
            fontSize: '52px',
            fontWeight: 400,
            color: hovered ? 'transparent' : servicio.colorNumero,
            WebkitTextStroke: hovered ? `1.5px ${servicio.colorNumero}` : undefined,
            opacity: servicio.opacidadNumero,
            lineHeight: 1,
            display: 'block',
            textAlign: 'center',
            transition: 'color 0.25s',
          }}
        >
          {servicio.numero}
        </span>

        {/* Título */}
        <h3
          style={{
            fontFamily: '"Artegra Sans Extended", sans-serif',
            fontWeight: 700,
            fontSize: '13px',
            color: servicio.colorTitulo,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            textAlign: 'center',
            whiteSpace: 'pre-line',
            marginTop: '20px',
            lineHeight: 1.4,
          }}
        >
          {servicio.titulo}
        </h3>

        {/* Contenido que aparece en hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.22, delay: 0.08 }}
              style={{
                marginTop: '18px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                paddingTop: '130px',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: servicio.colorBoton,
                  color: servicio.colorBotonTexto,
                  fontFamily: '"Artegra Sans Extended", sans-serif',
                  fontWeight: 700,
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  borderRadius: '9999px',
                  padding: '8px 28px',
                }}
              >
                VER MÁS
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  )
}

export default function ServiciosHome() {
  const isMobile = useIsMobile()
  const screenSize = useScreenSize()
  const figuraWidth = screenSize === 'tablet' ? 160 : 240
  const figuraHeightDefault = screenSize === 'tablet' ? 240 : 310
  const figuraHeightHover = screenSize === 'tablet' ? 340 : 420

  if (isMobile) {
    return (
      <section
        style={{
          position: 'relative',
          width: '100%',
          background: 'radial-gradient(ellipse at 30% 60%, #688382 0%, #456e6f 25%, #054042 70%)',
          paddingTop: '60px',
          paddingBottom: '40px',
        }}
      >
        {/* BADGE */}
        <div
          style={{
            marginRight: 'auto',
            width: '80%',
            height: '36px',
            background: 'linear-gradient(to right, #eae5d3, #3f6965)',
            borderRadius: '0 9999px 9999px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '24px',
            marginBottom: '32px',
          }}
        >
          <span style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontWeight: 700, fontSize: '13px', color: '#033D40', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            NUESTROS SERVICIOS
          </span>
        </div>

        {/* Tarjetas verticales */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', paddingLeft: '0', paddingRight: '16px' }}>
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.numero}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/servicios?open=${servicio.numero.replace('.', '')}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  backgroundColor: servicio.color,
                  borderRadius: '0 9999px 9999px 0',
                  padding: '18px 28px 18px 24px',
                  textDecoration: 'none',
                  marginBottom: '8px',
                }}
              >
                <span style={{ fontFamily: '"Libre Baskerville", serif', fontStyle: 'italic', fontSize: '32px', fontWeight: 400, color: servicio.numeroOutline ? 'transparent' : servicio.colorNumero, WebkitTextStroke: servicio.numeroOutline ? `1.5px ${servicio.colorNumero}` : undefined, opacity: servicio.opacidadNumero, lineHeight: 1, flexShrink: 0 }}>
                  {servicio.numero}
                </span>
                <h3 style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontWeight: 700, fontSize: '12px', color: servicio.colorTitulo, textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'pre-line', lineHeight: 1.4, margin: 0 }}>
                  {servicio.titulo}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        minHeight: '620px',
        paddingBottom: '130px',
        background: 'radial-gradient(ellipse at 30% 60%, #688382 0%, #456e6f 25%, #054042 70%)',
      }}
    >
      {/* FIGURAS — colgando desde arriba */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '460px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        {servicios.map((servicio, index) => (
          <Figura key={servicio.numero} servicio={servicio} index={index} width={figuraWidth} heightDefault={figuraHeightDefault} heightHover={figuraHeightHover} />
        ))}
      </motion.div>

      {/* BADGE + TEXTO — abajo a la izquierda, en flujo */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
          style={{
            width: '42%',
            height: '36px',
            background: 'linear-gradient(to right, #3f6965, #eae5d3)',
            borderRadius: '0 9999px 9999px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingLeft: '32px',
            paddingRight: '32px',
            zIndex: 10,
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
            NUESTROS SERVICIOS
          </span>
        </motion.div>

        {/* TEXTO INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-80px' }}
          style={{
            fontFamily: 'Quicksand, sans-serif',
            fontSize: '18px',
            color: '#EEEAD6',
            lineHeight: 1.7,
            paddingLeft: '32px',
            paddingRight: '32px',
            width: '42%',
            textAlign: 'right',
            margin: 0,
          }}
        >
          <strong style={{ fontWeight: 700 }}>Diseñamos soluciones</strong>{' '}a medida,<br />
          adaptadas a la realidad de cada<br />
          organización, combinando <strong style={{ fontWeight: 700 }}>experiencia</strong>,<br />
          <strong style={{ fontWeight: 700 }}>sensibilidad</strong>{' '}y foco en <strong style={{ fontWeight: 700 }}>resultados</strong>.
        </motion.p>
      </div>
    </section>
  )
}
