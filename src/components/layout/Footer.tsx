'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useIsMobile } from '@/lib/useIsMobile'

const navLinks = [
  { href: '/', label: 'INICIO' },
  { href: '/nosotros', label: 'NOSOTROS' },
  { href: '/servicios', label: 'SERVICIOS' },
  { href: '/contacto', label: 'CONTACTO' },
]

const iconCircleStyle: React.CSSProperties = {
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  backgroundColor: '#47c98c',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}

export default function Footer() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <footer
        style={{
          backgroundColor: '#023e41',
          padding: '40px 24px 0',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Logo */}
        <Image src="/motusfooter.png" alt="Motus" width={100} height={45} style={{ width: 'auto', marginBottom: '36px' }} />

        {/* Navegación */}
        <p style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontWeight: 700, fontSize: '11px', color: '#EEEAD6', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
          NAVEGACIÓN
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontWeight: 400, fontSize: '12px', color: 'rgba(238,234,214,0.70)', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contacto */}
        <p style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontWeight: 700, fontSize: '11px', color: '#EEEAD6', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
          CONTACTO
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <div style={iconCircleStyle}><Mail size={14} color="white" strokeWidth={2} /></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.75)', wordBreak: 'break-all' }}>lucia.carrera@motusconsultora.com</span>
              <span style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.75)', wordBreak: 'break-all' }}>federico.ambroggio@motusconsultora.com</span>
            </div>
          </div>
          {/* Teléfono */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <div style={iconCircleStyle}><Phone size={14} color="white" strokeWidth={2} /></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.75)' }}>+54 9 11 5717-4014</span>
              <span style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.75)' }}>+54 9 11 5057-1318</span>
            </div>
          </div>
          {/* Ubicación */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={iconCircleStyle}><MapPin size={14} color="white" strokeWidth={2} /></div>
            <span style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontSize: '11px', color: 'rgba(238,234,214,0.75)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>BUENOS AIRES, ARGENTINA.</span>
          </div>
          {/* LinkedIn */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="https://www.linkedin.com/company/lcconsultora/" target="_blank" rel="noopener noreferrer"
              style={{ width: '34px', height: '34px', borderRadius: '6px', backgroundColor: '#47c98c', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', flexShrink: 0 }}
              aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/lcconsultora/" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.75)', textDecoration: 'none', wordBreak: 'break-all' }}>
              linkedin.com/company/lcconsultora
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(238,234,214,0.15)', paddingTop: '16px', paddingBottom: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <p style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontSize: '9px', color: 'rgba(238,234,214,0.60)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}>
            © 2026 <strong style={{ fontWeight: 700 }}>MOTUS</strong>. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <p style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontSize: '9px', color: 'rgba(238,234,214,0.60)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}>
            DISEÑO WEB X <strong style={{ fontWeight: 700 }}>KOFI BRANDLAB</strong> - DESARROLLO X <strong style={{ fontWeight: 700 }}>VM ESTUDIO</strong>
          </p>
        </div>
      </footer>
    )
  }

  return (
    <footer
      style={{
        position: 'relative',
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
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '0',
          paddingBottom: '32px',
        }}
      >
        {/* COLUMNA 1 — Logo */}
        <div
          style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '280px',
          }}
        >
          <Image
            src="/motusfooter.png"
            alt="Motus"
            width={190}
            height={86}
            style={{ width: 'auto' }}
          />
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1, paddingLeft: '40px', minWidth: 0 }}>
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
                <Mail size={15} color="white" strokeWidth={2} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0, overflow: 'hidden' }}>
                <span style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'rgba(238,234,214,0.75)', overflowWrap: 'break-word', wordBreak: 'break-all' }}>
                  lucia.carrera@motusconsultora.com
                </span>
                <span style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'rgba(238,234,214,0.75)', overflowWrap: 'break-word', wordBreak: 'break-all' }}>
                  federico.ambroggio@motusconsultora.com
                </span>
              </div>
            </div>

            {/* TELÉFONO */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={iconCircleStyle}>
                <Phone size={15} color="white" strokeWidth={2} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'rgba(238,234,214,0.75)' }}>
                  +54 9 11 5717-4014
                </span>
                <span style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'rgba(238,234,214,0.75)' }}>
                  +54 9 11 5057-1318
                </span>
              </div>
            </div>

            {/* UBICACIÓN */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={iconCircleStyle}>
                <MapPin size={15} color="white" strokeWidth={2} />
              </div>
              <span style={{ fontFamily: '"Artegra Sans Extended", sans-serif', fontSize: '12px', color: 'rgba(238,234,214,0.75)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                BUENOS AIRES, ARGENTINA.
              </span>
            </div>

            {/* LINKEDIN */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a
                href="https://www.linkedin.com/company/lcconsultora/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '6px',
                  backgroundColor: '#47c98c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                  flexShrink: 0,
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                aria-label="LinkedIn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/lcconsultora/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'rgba(238,234,214,0.75)', textDecoration: 'none', transition: 'color 0.2s', wordBreak: 'break-all' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#47c98c')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(238,234,214,0.75)')}
              >
                linkedin.com/company/lcconsultora
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
          flexDirection: 'row',
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
