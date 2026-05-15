'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Imagen — ancho completo, altura natural, sin recorte */}
      <Image
        src="/hero.png"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 z-10 flex items-center pt-10">
        <div className="w-full max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16">
          <div style={{ maxWidth: '700px' }}>

          {/* Supertítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: '"Barlow Condensed", sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#EEEAD6', fontSize: '12px', marginBottom: '20px' }}
          >
            <strong style={{ fontWeight: 700 }}>CONSULTORA</strong>
            <span style={{ fontWeight: 400 }}> DE RECURSOS HUMANOS</span>
          </motion.p>

          {/* H1 con tipografía mixta */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ fontFamily: '"Libre Baskerville", Georgia, serif', fontSize: 'clamp(24px, 2.8vw, 40px)', lineHeight: 1.3, color: '#EEEAD6', marginBottom: '24px', whiteSpace: 'nowrap' }}
          >
            <span style={{ fontWeight: 400 }}>Acompañamos a</span>
            <br />
            <em style={{ fontWeight: 400, fontStyle: 'italic' }}>organizaciones</em>
            <span style={{ fontWeight: 400 }}> en sus procesos</span>
            <br />
            <span style={{ fontWeight: 400 }}>de </span>
            <strong style={{ fontWeight: 700 }}>transformación</strong>
            <span style={{ fontWeight: 400 }}>, poniendo</span>
            <br />
            <span style={{ fontWeight: 400 }}>a las </span>
            <em style={{ fontWeight: 400, fontStyle: 'italic' }}>personas</em>
            <span style={{ fontWeight: 400 }}> en el centro.</span>
          </motion.h1>

          {/* Párrafo descriptivo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ fontFamily: 'Quicksand, system-ui, sans-serif', fontWeight: 500, fontSize: '14px', color: '#EEEAD6', opacity: 0.9, maxWidth: '520px', lineHeight: 1.7, marginBottom: '32px' }}
          >
            Trabajamos como socios estratégicos de nuestros clientes, entendiendo su realidad, conociendo sus problemáticas y co-creando soluciones a medida. Creemos en una forma de hacer consultoría más humana, más cercana y profundamente comprometida con cada proceso.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              href="/servicios"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 36px',
                backgroundColor: '#EEEAD6',
                color: '#033D40',
                borderRadius: '9999px',
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              CONOCÉ NUESTROS SERVICIOS
            </Link>
          </motion.div>

        </div>
        </div>
      </div>
    </section>
  )
}


