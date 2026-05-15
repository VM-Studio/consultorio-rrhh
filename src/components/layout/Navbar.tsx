'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'INICIO' },
  { href: '/nosotros', label: 'NOSOTROS' },
  { href: '/servicios', label: 'SERVICIOS' },
]

function LogoImage() {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div className="flex flex-col">
        <span style={{ fontFamily: '"Libre Baskerville", Georgia, serif', color: '#09756C', fontSize: '28px', fontWeight: 400, lineHeight: 1 }}>
          motus
        </span>
        <p style={{ fontFamily: 'Quicksand, system-ui, sans-serif', color: '#09756C', fontSize: '12px', fontStyle: 'italic', margin: 0 }}>
          conexiones con impulso
        </p>
      </div>
    )
  }

  return (
    <Image
      src="/motuslogo.png"
      width={140}
      height={60}
      alt="Motus"
      className="object-contain"
      onError={() => setImgError(true)}
      priority
    />
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-fondo-claro">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-2 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={() => setMenuOpen(false)}>
            <LogoImage />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 ml-auto mr-6" role="navigation" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-heading font-semibold text-sm uppercase tracking-widest transition-colors duration-200 ${
                    isActive
                      ? 'text-verde-matus border-b-2 border-verde-matus pb-0.5'
                      : 'text-verde-oscuro hover:text-verde-matus'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Botón Contacto — desktop */}
          <Link href="/contacto" className="btn-pill-dark hidden md:inline-flex">
            CONTACTO
          </Link>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-verde-oscuro"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-current origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-6 h-0.5 bg-current"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-current origin-center"
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-fondo-claro flex flex-col md:hidden"
          >
            {/* Botón cerrar */}
            <div className="flex justify-end px-8 py-5">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
                className="text-verde-oscuro text-3xl leading-none font-light"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-6" role="navigation" aria-label="Menú móvil">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`font-heading font-semibold text-3xl uppercase tracking-widest transition-colors duration-200 ${
                        isActive ? 'text-verde-matus' : 'text-verde-oscuro hover:text-verde-matus'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* Botón contacto */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex justify-center pb-12"
            >
              <Link href="/contacto" className="btn-pill-dark" onClick={() => setMenuOpen(false)}>
                CONTACTO
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
