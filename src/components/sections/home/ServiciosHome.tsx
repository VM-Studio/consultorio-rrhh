'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const figuraVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
}

interface Servicio {
  numero: string
  titulo: string
  descripcion: string | null
  color: string
  colorNumero: string
  colorTitulo: string
  opacidadNumero: number
  numeroOutline: boolean
  activo: boolean
  ancho: number
  alto: number
  zIndex: number
}

const servicios: Servicio[] = [
  {
    numero: '01.',
    titulo: 'GESTIÓN INTEGRAL\nDE RECURSOS\nHUMANOS',
    descripcion: null,
    color: '#05373b',
    colorNumero: '#EEEAD6',
    colorTitulo: '#EEEAD6',
    opacidadNumero: 0.45,
    numeroOutline: false,
    activo: false,
    ancho: 240,
    alto: 390,
    zIndex: 10,
  },
  {
    numero: '02.',
    titulo: 'HEADHUNTING\nEJECUTIVO',
    descripcion:
      'Trabajamos en búsquedas que requieren criterio, confidencialidad y acceso a perfiles que no están activamente en el mercado. Nos involucramos de manera directa, entendiendo el contexto del negocio y el tipo de liderazgo que realmente necesita la organización.',
    color: '#105056',
    colorNumero: '#EEEAD6',
    colorTitulo: '#EEEAD6',
    opacidadNumero: 1,
    numeroOutline: true,
    activo: true,
    ancho: 280,
    alto: 530,
    zIndex: 20,
  },
  {
    numero: '03.',
    titulo: 'BÚSQUEDA Y\nSELECCIÓN DE\nTALENTO',
    descripcion: null,
    color: '#0b756a',
    colorNumero: '#EEEAD6',
    colorTitulo: '#EEEAD6',
    opacidadNumero: 0.45,
    numeroOutline: false,
    activo: false,
    ancho: 240,
    alto: 390,
    zIndex: 10,
  },
  {
    numero: '04.',
    titulo: 'APRENDIZAJE\nAPLICADO AL\nNEGOCIO',
    descripcion: null,
    color: '#47ca8b',
    colorNumero: '#033D40',
    colorTitulo: '#033D40',
    opacidadNumero: 1,
    numeroOutline: false,
    activo: false,
    ancho: 240,
    alto: 390,
    zIndex: 10,
  },
  {
    numero: '05.',
    titulo: 'TRANSFORMACIÓN\nORGANIZACIONAL',
    descripcion: null,
    color: '#eeead7',
    colorNumero: '#09756C',
    colorTitulo: '#09756C',
    opacidadNumero: 1,
    numeroOutline: false,
    activo: false,
    ancho: 240,
    alto: 390,
    zIndex: 10,
  },
]

function FiguraActiva({ servicio }: { servicio: Servicio }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 24px 32px',
        justifyContent: 'flex-start',
      }}
    >
      <span
        style={{
          fontFamily: '"Libre Baskerville", serif',
          fontStyle: 'italic',
          fontSize: '68px',
          fontWeight: 400,
          color: 'transparent',
          WebkitTextStroke: '1.5px #EEEAD6',
          lineHeight: 1,
          marginBottom: '16px',
          display: 'block',
        }}
      >
        {servicio.numero}
      </span>

      <h3
        style={{
          fontFamily: '"Barlow Condensed", sans-serif',
          fontWeight: 700,
          fontSize: '15px',
          color: '#EEEAD6',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textAlign: 'center',
          whiteSpace: 'pre-line',
          marginBottom: '20px',
        }}
      >
        {servicio.titulo}
      </h3>

      <div
        style={{
          width: '32px',
          height: '1px',
          background: 'rgba(238,234,214,0.4)',
          marginBottom: '20px',
          flexShrink: 0,
        }}
      />

      <p
        style={{
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '13px',
          color: '#EEEAD6',
          opacity: 0.85,
          lineHeight: 1.65,
          textAlign: 'left',
          marginBottom: '28px',
          flexGrow: 1,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 8,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {servicio.descripcion}
      </p>

      <Link
        href="/servicios"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px 28px',
          background: '#47ca8b',
          color: '#033D40',
          borderRadius: '9999px',
          fontFamily: '"Barlow Condensed", sans-serif',
          fontWeight: 700,
          fontSize: '13px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          marginTop: 'auto',
          flexShrink: 0,
        }}
      >
        VER MAS
      </Link>
    </div>
  )
}

function FiguraInactiva({ servicio }: { servicio: Servicio }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 16px 32px',
      }}
    >
      <span
        style={{
          fontFamily: '"Libre Baskerville", serif',
          fontStyle: 'italic',
          fontSize: '56px',
          fontWeight: 400,
          color: servicio.numeroOutline ? 'transparent' : servicio.colorNumero,
          WebkitTextStroke: servicio.numeroOutline ? `1.5px ${servicio.colorNumero}` : undefined,
          opacity: servicio.opacidadNumero,
          lineHeight: 1,
          marginBottom: 'auto',
          marginTop: '48px',
          display: 'block',
          alignSelf: 'center',
        }}
      >
        {servicio.numero}
      </span>

      <h3
        style={{
          fontFamily: '"Barlow Condensed", sans-serif',
          fontWeight: 700,
          fontSize: '13px',
          color: servicio.colorTitulo,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textAlign: 'center',
          whiteSpace: 'pre-line',
          marginTop: '16px',
        }}
      >
        {servicio.titulo}
      </h3>
    </div>
  )
}

export default function ServiciosHome() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        minHeight: '700px',
        paddingTop: '80px',
        background: 'radial-gradient(ellipse at 30% 60%, #688382 0%, #456e6f 25%, #054042 70%)',
      }}
    >
      {/* BADGE — borde derecho */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
        style={{
          position: 'absolute',
          top: '60px',
          right: 0,
          width: '38%',
          height: '44px',
          background: 'linear-gradient(to left, #3f6965, #eae5d3)',
          borderRadius: '9999px 0 0 9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: '32px',
          paddingRight: '32px',
          zIndex: 10,
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
          NUESTROS SERVICIOS
        </span>
      </motion.div>

      {/* TEXTO INTRO — alineado a la derecha */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: '-80px' }}
        style={{
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '17px',
          color: '#EEEAD6',
          lineHeight: 1.65,
          marginTop: '80px',
          maxWidth: '420px',
          marginLeft: 'auto',
          paddingRight: '96px',
        }}
      >
        <strong style={{ fontWeight: 700 }}>Diseñamos soluciones</strong>
        {' '}a medida, adaptadas a la realidad de cada organización, combinando{' '}
        <strong style={{ fontWeight: 700 }}>experiencia</strong>
        {', '}
        <strong style={{ fontWeight: 700 }}>sensibilidad</strong>
        {' '}y foco en{' '}
        <strong style={{ fontWeight: 700 }}>resultados</strong>.
      </motion.p>

      {/* FIGURAS — pegadas al bottom */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '540px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        {servicios.map((servicio, index) => (
          <motion.div
            key={servicio.numero}
            variants={figuraVariants}
            style={{
              width: servicio.ancho,
              height: servicio.alto,
              backgroundColor: servicio.color,
              borderRadius: '9999px 9999px 0 0',
              overflow: 'hidden',
              flexShrink: 0,
              position: 'relative',
              zIndex: servicio.zIndex,
              marginLeft: index === 0 ? '-30px' : '-10px',
            }}
          >
            {servicio.activo ? (
              <FiguraActiva servicio={servicio} />
            ) : (
              <FiguraInactiva servicio={servicio} />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
