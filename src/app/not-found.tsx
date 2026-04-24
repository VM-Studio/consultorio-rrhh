'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream-50 section-padding">
      <div className="text-center flex flex-col items-center gap-8 max-w-lg">
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span
            className="font-serif font-bold leading-none select-none text-gradient-gold"
            style={{ fontSize: 'clamp(6rem, 20vw, 12rem)' }}
            aria-hidden="true"
          >
            404
          </span>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-4"
        >
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal-800">
            Página no encontrada
          </h1>
          <p className="font-sans text-base text-warm-gray leading-relaxed">
            La página que buscás no existe o fue movida.<br />
            Podés volver al inicio o explorar nuestros servicios.
          </p>
        </motion.div>

        {/* Divider decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-16 h-0.5 bg-gold-400"
        />

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Volver al inicio
          </Link>
          <Link href="/contacto" className="btn-outline">
            Contactanos
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
