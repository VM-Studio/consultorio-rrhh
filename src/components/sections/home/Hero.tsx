'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { Transition } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay } as Transition,
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Decorative arc — z-0, el contenido va en z-10 */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ border: '1px solid rgba(201, 169, 110, 0.25)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none z-0"
        style={{ border: '1px solid rgba(201, 169, 110, 0.18)' }}
        aria-hidden="true"
      />
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/hero/noise.png')] pointer-events-none" style={{ zIndex: -1 }} aria-hidden="true" />

      <div className="relative z-10 container-max section-padding w-full pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Text */}
          <div className="flex flex-col gap-8">
            <motion.span
              {...fadeUp(0.1)}
              className="text-xs font-sans font-semibold tracking-widest uppercase text-gold-400"
            >
              Consultoría de Recursos Humanos
            </motion.span>

            <motion.h1
              {...fadeUp(0.25)}
              className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-cream-50"
            >
              Conectamos{' '}
              <em className="text-gold-400">el talento</em>
              <br />
              con las{' '}
              <em>oportunidades</em>
            </motion.h1>

            <motion.p {...fadeUp(0.4)} className="font-sans text-lg leading-relaxed text-cream-100/70 max-w-lg">
              Somos una consultora boutique especializada en búsqueda y selección de
              talentos, headhunting ejecutivo y asesoramiento estratégico en gestión
              de personas. Buenos Aires, Argentina.
            </motion.p>

            <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4">
              <Link href="/servicios" className="btn-gold">
                Conocé nuestros servicios
              </Link>
              <a
                href="https://wa.me/5491100000000?text=Hola%2C%20me%20contacto%20desde%20su%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-cream-50/40 text-cream-50 font-sans font-medium text-sm tracking-wide rounded-none transition-all duration-300 hover:border-cream-50 hover:bg-cream-50/10"
              >
                Hablanos por WhatsApp
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto border border-gold-400/30">
              <div className="absolute inset-0 bg-charcoal-800/40 flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-0.5 bg-gold-400/60" />
                <span className="font-serif text-cream-100/50 text-sm italic">Tu foto aquí</span>
                <div className="w-12 h-0.5 bg-gold-400/60" />
              </div>
              {/* Gold corner accents */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-400/60" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-400/60" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cream-100/40"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-xs font-sans tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
