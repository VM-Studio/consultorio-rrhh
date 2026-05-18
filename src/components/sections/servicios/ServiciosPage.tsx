'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useIsMobile } from '@/lib/useIsMobile'

interface Servicio {
  numero: string
  titulo: string
  descripcion: string[]
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
    descripcion: [
      'Para empresas que necesitan ordenar y acompañar la gestión de personas sin armar una estructura interna.',
      'Nos integramos como parte del equipo, dando soporte tanto en lo operativo como en decisiones más estratégicas. Buscamos que la gestión de personas sea clara, consistente y alineada al momento que está atravesando la organización.',
      'Incluye gestión de procesos, acompañamiento a líderes y seguimiento continuo.',
    ],
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
    descripcion: [
      'Trabajamos en búsquedas que requieren criterio, confidencialidad y acceso a perfiles que no están activamente en el mercado. Nos involucramos de manera directa, entendiendo el contexto del negocio y el tipo de liderazgo que realmente necesita la organización.',
      'Identificamos y contactamos ejecutivos de forma personalizada, evaluando no solo su experiencia, sino también su manera de liderar y su match con la cultura.',
      'Incluye mapeo de mercado, proceso confidencial y presentación de candidatos con una mirada integral para la toma de decisión.',
    ],
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
    descripcion: [
      'Acompañamos todo el proceso de selección, desde la definición del perfil hasta el seguimiento después del ingreso. Nos tomamos el tiempo para entender qué necesita el negocio y cómo es el equipo que va a recibir a esa persona.',
      'Entrevistamos en profundidad, evaluamos competencias y cuidamos cada instancia del proceso, tanto para el cliente como para los candidatos.',
      'Incluye publicación de la búsqueda, entrevistas, evaluaciones y presentación de candidatos con información clara y relevante.',
    ],
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
    descripcion: [
      'Generamos espacios donde se pueden poner en palabras situaciones reales del día a día y trabajar sobre ellas. Nos enfocamos en liderazgo, comunicación, gestión de equipos y acompañamiento en contextos de cambio.',
      'No trabajamos con contenidos enlatados: cada proceso se adapta a lo que está pasando en la organización.',
      'Incluye programas a medida, talleres y procesos de coaching orientados a situaciones concretas.',
    ],
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
    descripcion: [
      'Acompañamos procesos de cambio desde adentro, trabajando junto a los equipos y líderes para alinear prácticas, formas de liderazgo y dinámicas de trabajo con los objetivos del negocio.',
      'Partimos de entender la cultura actual y avanzamos con acciones concretas que puedan sostenerse en el tiempo.',
      'Incluye diagnóstico, definición de focos de trabajo, comunicación y acompañamiento en la implementación de la Cultura.',
    ],
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

function MobileCard({ servicio, index }: { servicio: Servicio; index: number }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div
        onClick={() => setExpanded(v => !v)}
        style={{ backgroundColor: servicio.color, borderRadius: '16px', padding: '20px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
          <span style={{ fontFamily: '"Libre Baskerville", serif', fontStyle: 'italic', fontSize: '36px', fontWeight: 400, color: expanded ? 'transparent' : servicio.colorNumero, WebkitTextStroke: expanded ? `1.5px ${servicio.colorNumero}` : undefined, opacity: servicio.opacidadNumero, lineHeight: 1, transition: 'color 0.25s' }}>
            {servicio.numero}
          </span>
          <h3 style={{ fontFamily: '"Libre Baskerville", Georgia, serif', fontWeight: 700, fontSize: '13px', color: servicio.colorTitulo, textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'pre-line', lineHeight: 1.4, margin: 0 }}>
            {servicio.titulo}
          </h3>
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {servicio.descripcion.map((p, i) => (
                <p key={i} style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '13px', color: servicio.colorTexto, lineHeight: 1.65, margin: 0 }}>{p}</p>
              ))}
              <Link href="/contacto" style={{ alignSelf: 'flex-start', backgroundColor: servicio.colorBoton, color: servicio.colorBotonTexto, fontFamily: '"Artegra Sans Extended", sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: '9999px', padding: '8px 22px', textDecoration: 'none' }}>
                VER MÁS
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

function FiguraLateral({ servicio, index }: { servicio: Servicio; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -120 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: 'relative',
        zIndex: hovered ? 20 : 10 + index,
        cursor: 'pointer',
        marginTop: index === 0 ? 0 : '0px',
        overflow: 'visible',
      }}
    >
      {/* Figura: cápsula abierta a la izquierda (sale del borde) */}
      <motion.div
        animate={{ width: hovered ? 1000 : 580, height: hovered ? 340 : 140 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          backgroundColor: servicio.color,
          borderRadius: '0 9999px 9999px 0',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <Link
          href="/contacto"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            width: '100%',
            height: '100%',
            textDecoration: 'none',
            padding: hovered ? '36px 60px 36px 56px' : '0 32px 0 56px',
            gap: '28px',
          }}
        >
          {/* Columna izquierda: número + título */}
          <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0, minWidth: '160px', paddingTop: hovered ? '0' : '0', justifyContent: hovered ? 'flex-start' : 'center', height: hovered ? 'auto' : '140px' }}>
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
                transition: 'color 0.25s',
              }}
            >
              {servicio.numero}
            </span>
            <h3
              style={{
                fontFamily: '"Libre Baskerville", Georgia, serif',
                fontWeight: 700,
                fontSize: '15px',
                color: servicio.colorTitulo,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                whiteSpace: 'pre-line',
                lineHeight: 1.4,
                marginTop: '12px',
              }}
            >
              {servicio.titulo}
            </h3>
          </div>

          {/* Contenido expandido */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25, delay: 0.15 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  paddingLeft: '28px',
                  borderLeft: `1.5px solid ${servicio.colorTexto}50`,
                  paddingTop: '4px',
                }}
              >
                {servicio.descripcion.map((parrafo, i) => (
                  <p
                    key={i}
                    style={{
                    fontFamily: 'Quicksand, sans-serif',
                    fontSize: '15px',
                      color: servicio.colorTexto,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {parrafo}
                  </p>
                ))}
                <span
                  style={{
                    display: 'inline-block',
                    alignSelf: 'flex-start',
                    marginTop: '8px',
                    backgroundColor: servicio.colorBoton,
                    color: servicio.colorBotonTexto,
                    fontFamily: '"Artegra Sans Extended", sans-serif',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    borderRadius: '9999px',
                    padding: '8px 22px',
                  }}
                >
                  VER MÁS
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default function ServiciosPage() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          background: `
            radial-gradient(ellipse at 80% 20%, #94a8a5 0%, transparent 45%),
            radial-gradient(ellipse at 20% 70%, #94a8a5 0%, transparent 35%),
            #024041
          `,
          paddingTop: '120px',
          paddingBottom: '60px',
        }}
      >
        {/* BADGE */}
        <div
          style={{
            marginLeft: 'auto',
            width: '80%',
            height: '36px',
            background: 'linear-gradient(to left, #033d40, #033d40)',
            borderRadius: '9999px 0 0 9999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '24px',
            marginBottom: '40px',
          }}
        >
          <span style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontWeight: 700, fontSize: '13px', color: '#EEEAD6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            NUESTROS SERVICIOS
          </span>
        </div>

        {/* Tarjetas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0 16px' }}>
          {servicios.map((servicio, index) => (
            <MobileCard key={servicio.numero} servicio={servicio} index={index} />
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
        minHeight: '100vh',
        background: `
          radial-gradient(ellipse at 80% 20%, #94a8a5 0%, transparent 45%),
          radial-gradient(ellipse at 20% 70%, #94a8a5 0%, transparent 35%),
          radial-gradient(ellipse at 60% 90%, #3a6a68 0%, transparent 40%),
          #024041
        `,
        paddingTop: '100px',
        paddingBottom: '80px',
      }}
    >
      {/* BADGE — borde derecho */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '120px',
          right: 0,
          width: '42%',
          height: '36px',
          background: 'linear-gradient(to left, #033d40, #033d40)',
          borderRadius: '9999px 0 0 9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '32px',
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: '"Artegra Sans Extended", sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            color: '#EEEAD6',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          NUESTROS SERVICIOS
        </span>
      </motion.div>

      {/* FIGURAS LATERALES */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingTop: '60px',
          paddingLeft: 0,
        }}
      >
        {servicios.map((servicio, index) => (
          <FiguraLateral key={servicio.numero} servicio={servicio} index={index} />
        ))}
      </div>
    </section>
  )
}
