'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">

      {/* CAPA 1 — Imagen de fondo */}
      <div className="absolute inset-0 z-0 bg-verde-oscuro">
        <Image
          src="/images/hero/hero.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="z-0"
          onError={() => {/* fallback: bg-verde-oscuro ya aplicado al padre */}}
        />
      </div>

      {/* CAPA 2 — Overlay verde oscuro */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to right, rgba(3,61,64,0.88) 0%, rgba(3,61,64,0.88) 55%, rgba(3,61,64,0.65) 100%)',
        }}
        aria-hidden="true"
      />

      {/* CAPA 3 — Contenido */}
      <div className="relative z-20 w-full max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl">

          {/* Supertítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading tracking-widest uppercase text-tipo-clara text-sm mb-6"
          >
            <strong className="font-bold">CONSULTORA</strong>
            <span className="font-normal"> DE RECURSOS HUMANOS</span>
          </motion.p>

          {/* H1 con tipografía mixta */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-5xl md:text-6xl lg:text-7xl leading-tight text-tipo-clara mb-8"
          >
            <span className="font-serif font-normal">Acompañamos a </span>
            <em className="font-serif font-normal italic">organizaciones</em>
            <span className="font-serif font-normal"> en sus procesos de </span>
            <br />
            <strong className="font-serif font-bold">transformación</strong>
            <span className="font-serif font-normal">, poniendo</span>
            <br />
            <span className="font-serif font-normal">a las </span>
            <em className="font-serif font-normal italic">personas</em>
            <span className="font-serif font-normal"> en el centro.</span>
          </motion.h1>

          {/* Párrafo descriptivo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="font-sans font-medium text-base md:text-lg text-tipo-clara opacity-90 max-w-xl leading-relaxed mb-10"
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
              className="btn-pill-light hover:scale-[1.02] transition-transform duration-300"
            >
              CONOCÉ NUESTROS SERVICIOS
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}


