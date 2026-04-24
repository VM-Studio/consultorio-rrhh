import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contacto | [Nombre Empresa]',
  description:
    'Contactanos para iniciar un proceso de búsqueda o asesoramiento en Recursos Humanos. Buenos Aires, Argentina.',
  alternates: { canonical: '/contacto' },
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

export default function ContactoPage() {
  const waUrl = `https://wa.me/${process.env.WHATSAPP_NUMBER ?? '5491100000000'}?text=Hola%2C%20me%20contacto%20desde%20su%20web`

  return (
    <>
      {/* Hero interno */}
      <section className="bg-gradient-hero min-h-[50vh] flex items-end pt-32 pb-20 section-padding">
        <div className="container-max w-full">
          <AnimatedSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-gold-400 mb-4">
              <Link href="/" className="hover:text-gold-300 transition-colors">Inicio</Link>
              <span className="mx-2 text-white/30">/</span>
              Contacto
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl text-cream-50 leading-tight">
              <em>Hablemos</em>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-6 font-sans text-lg text-cream-100/70 max-w-xl">
              Contanos qué necesitás y te respondemos a la brevedad.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-cream-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">

            {/* Left — Info de contacto */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <AnimatedSection>
                <h2 className="font-serif text-2xl text-charcoal-800">
                  ¿Cómo contactarnos?
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <ul className="flex flex-col gap-6">
                  <li>
                    <a
                      href="mailto:contacto@tudominio.com.ar"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-charcoal-800 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-gold-400" />
                      </div>
                      <div>
                        <p className="text-xs font-sans font-semibold tracking-widest uppercase text-warm-gray mb-1">Email</p>
                        <p className="text-sm font-sans text-charcoal-800 group-hover:text-gold-500 transition-colors">
                          contacto@tudominio.com.ar
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-[#25D366] flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-sans font-semibold tracking-widest uppercase text-warm-gray mb-1">WhatsApp</p>
                        <p className="text-sm font-sans text-charcoal-800 group-hover:text-gold-500 transition-colors">
                          +54 9 11 0000-0000
                        </p>
                        <p className="text-xs text-warm-gray mt-0.5">Abrí el chat directo →</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cream-200 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-gold-500" />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold tracking-widest uppercase text-warm-gray mb-1">Ubicación</p>
                      <p className="text-sm font-sans text-charcoal-800">Buenos Aires, Argentina</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cream-200 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-gold-500" />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold tracking-widest uppercase text-warm-gray mb-1">Horario</p>
                      <p className="text-sm font-sans text-charcoal-800">Lunes a viernes</p>
                      <p className="text-sm font-sans text-warm-gray">9:00 a 18:00 hs</p>
                    </div>
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="pt-6 border-t border-cream-200">
                  <p className="text-xs font-sans font-semibold tracking-widest uppercase text-warm-gray mb-4">
                    Seguinos
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 border border-cream-200 flex items-center justify-center text-warm-gray hover:text-gold-500 hover:border-gold-400 transition-colors duration-200"
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-10 h-10 border border-cream-200 flex items-center justify-center text-warm-gray hover:text-gold-500 hover:border-gold-400 transition-colors duration-200"
                    >
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Formulario */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

