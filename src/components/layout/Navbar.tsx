'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/trabaja-con-nosotros', label: 'Trabaja con Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

function LogoImage({ scrolled, menuOpen }: { scrolled: boolean; menuOpen: boolean }) {
  const [imgError, setImgError] = useState(false)
  const textColor = scrolled || menuOpen ? 'text-charcoal-800' : 'text-cream-50'

  if (imgError) {
    return (
      <span className={`font-serif text-xl font-semibold tracking-tight ${textColor}`}>
        HR Consultora
      </span>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo/logo.png"
      alt="Logo"
      className="h-10 w-auto object-contain"
      onError={() => setImgError(true)}
    />
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => setMenuOpen(false), 0)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <LogoImage scrolled={scrolled} menuOpen={menuOpen} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Navegación principal">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                      scrolled
                        ? isActive
                          ? 'text-charcoal-800'
                          : 'text-charcoal-800/70 hover:text-charcoal-800'
                        : isActive
                        ? 'text-cream-50'
                        : 'text-cream-50/80 hover:text-cream-50'
                    }`}
                  >
                    {link.label}
                    {/* Gold dot / underline for active */}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gold-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contacto"
                className={`hidden lg:inline-flex btn-primary text-xs ${
                  !scrolled ? 'bg-cream-50 !text-charcoal-800 hover:bg-cream-100' : ''
                }`}
              >
                Contactanos
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className={`lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 ${
                  scrolled || menuOpen ? 'text-charcoal-800' : 'text-cream-50'
                }`}
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
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-cream-50 flex flex-col pt-24 pb-10 px-8 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-2 flex-1 justify-center" role="navigation" aria-label="Menú móvil">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-3xl font-serif text-center py-3 transition-colors duration-200 ${
                        isActive
                          ? 'text-charcoal-800'
                          : 'text-charcoal-800/60 hover:text-charcoal-800'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="block w-6 h-0.5 bg-gold-400 mx-auto mt-1" />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex justify-center"
            >
              <Link href="/contacto" className="btn-primary">
                Contactanos
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
