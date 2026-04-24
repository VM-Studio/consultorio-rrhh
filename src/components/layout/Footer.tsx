import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/trabaja-con-nosotros', label: 'Trabaja con Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-900 text-cream-100">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Columna 1 — Logo + descripción */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold text-cream-50">
                HR Consultora
              </span>
            </Link>

            <p className="font-serif italic text-gold-400 text-sm tracking-wide">
              Conectando talento con oportunidades
            </p>

            <p className="text-sm leading-relaxed text-warm-gray">
              Somos una consultora boutique especializada en Recursos Humanos.
              Acompañamos a empresas y profesionales en cada etapa del proceso
              de talento, con foco en resultados y relaciones de largo plazo.
            </p>
          </div>

          {/* Columna 2 — Navegación rápida */}
          <div>
            <h3 className="text-xs font-sans font-semibold tracking-widest uppercase text-cream-200 mb-6">
              Navegación
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-gray hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Contacto + Redes */}
          <div>
            <h3 className="text-xs font-sans font-semibold tracking-widest uppercase text-cream-200 mb-6">
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:contacto@tudominio.com.ar"
                  className="flex items-center gap-3 text-sm text-warm-gray hover:text-gold-400 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-gold-400" />
                  contacto@tudominio.com.ar
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5491100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-warm-gray hover:text-gold-400 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-gold-400" />
                  +54 9 11 0000-0000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-warm-gray">
                <MapPin className="w-4 h-4 flex-shrink-0 text-gold-400" />
                Buenos Aires, Argentina
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-warm-gray hover:text-gold-400 transition-colors duration-200"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-warm-gray hover:text-gold-400 transition-colors duration-200"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-gray">
            © {currentYear} [Nombre Empresa]. Todos los derechos reservados.
          </p>
          <p className="text-xs text-warm-gray/60">
            Diseño &amp; Desarrollo con ♥ — Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  )
}
