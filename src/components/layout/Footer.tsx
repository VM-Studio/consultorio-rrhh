'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'INICIO' },
  { href: '/nosotros', label: 'NOSOTROS' },
  { href: '/servicios', label: 'SERVICIOS' },
  { href: '/contacto', label: 'CONTACTO' },
]

const iconCircleStyle: React.CSSProperties = {
  width: '28px',
  height: '28px',
  borderRadius: '6px',
  backgroundColor: '#51c18c',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#023e41',
        paddingTop: '36px',
        paddingLeft: '48px',
        paddingRight: '56px',
        paddingBottom: '0',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Fila principal — tres columnas */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingBottom: '32px',
        }}
      >
        {/* COLUMNA 1 — Logo + figura decorativa */}
        <div
          style={{
            position: 'relative',
            width: '280px',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '220px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '260px',
              height: '220px',
              backgroundColor: '#065954',
              borderRadius: '9999px 9999px 0 0',
              zIndex: 1,
            }}
          />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <Image
              src="/footer.png"
              alt="Motus"
              width={220}
              height={100}
            />
          </div>
        </div>

        {/* COLUMNA 2 — Navegación */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <p
            style={{
              fontFamily: '"Artegra Sans Extended", sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              color: '#EEEAD6',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            NAVEGACIÓN
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: '"Artegra Sans Extended", sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: 'rgba(238, 234, 214, 0.70)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#47C98C')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(238, 234, 214, 0.70)')}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* COLUMNA 3 — Contacto */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1, paddingLeft: '40px' }}>
          <p
            style={{
              fontFamily: '"Artegra Sans Extended", sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              color: '#EEEAD6',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            CONTACTO
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            {/* EMAIL */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={iconCircleStyle}>
                <Mail size={13} color="#51c18c" strokeWidth={2} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.75)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  LUCIA@MOTUSCONSULTORA.COM
                </span>
                <span style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.75)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  FEDERICO@MOTUSCONSULTORA.COM
                </span>
              </div>
            </div>

            {/* TELÉFONO */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={iconCircleStyle}>
                <Phone size={13} color="#51c18c" strokeWidth={2} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.75)', letterSpacing: '0.08em' }}>
                  +54 9 11 5717 4014
                </span>
                <span style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.75)', letterSpacing: '0.08em' }}>
                  +54 9 11 5057 1318
                </span>
              </div>
            </div>

            {/* UBICACIÓN */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={iconCircleStyle}>
                <MapPin size={13} color="#51c18c" strokeWidth={2} />
              </div>
              <span style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.75)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                BUENOS AIRES, ARGENTINA.
              </span>
            </div>

            {/* LINKEDIN */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '6px',
                  backgroundColor: '#50c28c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior — copyright */}
      <div
        style={{
          borderTop: '1px solid rgba(238,234,214,0.15)',
          paddingTop: '20px',
          paddingBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <p style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.60)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          © 2026 <strong style={{ fontWeight: 700 }}>MOTUS</strong>. TODOS LOS DERECHOS RESERVADOS.
        </p>
        <p style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.60)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          DISEÑO WEB X <strong style={{ fontWeight: 700, fontStyle: 'italic' }}>KOFI BRANDLAB</strong> - DESARROLLO X <strong style={{ fontWeight: 700, fontStyle: 'italic' }}>VM ESTUDIO</strong>
        </p>
      </div>
    </footer>
  )
}
