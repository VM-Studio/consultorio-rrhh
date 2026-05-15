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
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: '#50c28c',
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
        paddingTop: '60px',
        paddingLeft: '64px',
        paddingRight: '80px',
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
          gap: '80px',
          paddingBottom: '60px',
        }}
      >
        {/* COLUMNA 1 — Logo + figura decorativa */}
        <div
          style={{
            position: 'relative',
            width: '320px',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '260px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: '-60px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '300px',
              height: '280px',
              backgroundColor: '#065954',
              borderRadius: '9999px 9999px 0 0',
              zIndex: 1,
            }}
          />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <Image
              src="/footer.png"
              alt="Motus"
              width={260}
              height={120}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* COLUMNA 2 — Navegación */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              color: '#EEEAD6',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            NAVEGACIÓN
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              color: '#EEEAD6',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            CONTACTO
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* EMAIL */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={iconCircleStyle}>
                <Mail size={15} color="white" strokeWidth={2} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', color: 'rgba(238,234,214,0.8)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  LUCIA@MOTUSCONSULTORA.COM
                </span>
                <span style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', color: 'rgba(238,234,214,0.8)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  FEDERICO@MOTUSCONSULTORA.COM
                </span>
              </div>
            </div>

            {/* TELÉFONO */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={iconCircleStyle}>
                <Phone size={15} color="white" strokeWidth={2} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', color: 'rgba(238,234,214,0.8)', letterSpacing: '0.08em' }}>
                  +54 9 11 5717 4014
                </span>
                <span style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', color: 'rgba(238,234,214,0.8)', letterSpacing: '0.08em' }}>
                  +54 9 11 5057 1318
                </span>
              </div>
            </div>

            {/* UBICACIÓN */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={iconCircleStyle}>
                <MapPin size={15} color="white" strokeWidth={2} />
              </div>
              <span style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', color: 'rgba(238,234,214,0.8)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                BUENOS AIRES, ARGENTINA.
              </span>
            </div>

            {/* LINKEDIN */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
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
        <p style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.60)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          © 2026 <strong style={{ fontWeight: 700 }}>MOTUS</strong>. TODOS LOS DERECHOS RESERVADOS.
        </p>
        <p style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.60)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          DISEÑO WEB X <strong style={{ fontWeight: 700, fontStyle: 'italic' }}>KOFI BRANDLAB</strong> - DESARROLLO X <strong style={{ fontWeight: 700, fontStyle: 'italic' }}>VM ESTUDIO</strong>
        </p>
      </div>
    </footer>
  )
}
