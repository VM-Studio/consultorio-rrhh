import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Users, Search, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CVForm from './CVForm'

export const metadata: Metadata = {
  title: 'Trabajá con Nosotros | [Nombre Empresa]',
  description:
    'Sumáte a nuestra base de talentos. Envianos tu CV y te contactaremos cuando surja una oportunidad acorde a tu perfil.',
  alternates: { canonical: '/trabaja-con-nosotros' },
}

const pasos = [
  {
    icon: FileText,
    title: 'Enviás tu CV',
    desc: 'Completá el formulario y adjuntá tu currículum en PDF o Word.',
  },
  {
    icon: Search,
    title: 'Analizamos tu perfil',
    desc: 'Evaluamos tu experiencia y lo alineamos con búsquedas activas o futuras.',
  },
  {
    icon: Users,
    title: 'Te contactamos',
    desc: 'Si hay una oportunidad que encaje con tu perfil, nos comunicamos con vos.',
  },
  {
    icon: CheckCircle2,
    title: 'Proceso personalizado',
    desc: 'Acompañamos cada etapa con feedback honesto y comunicación constante.',
  },
]

export default function TrabajaCon() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-200 min-h-[50vh] flex items-end pt-32 pb-20 section-padding">
        <div className="container-max w-full">
          <AnimatedSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-gold-500 mb-4">
              <Link href="/" className="hover:text-gold-600 transition-colors">Inicio</Link>
              <span className="mx-2 text-charcoal-800/30">/</span>
              Trabajá con nosotros
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl text-charcoal-800 leading-tight">
              Sumáte a nuestra<br /><em>base de talentos</em>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-6 font-sans text-lg text-charcoal-800/60 max-w-xl">
              Envianos tu CV y te tenemos en cuenta para las búsquedas que mejor se adapten a tu perfil.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-cream-50 section-padding">
        <div className="container-max">
          <AnimatedSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-gold-500 mb-3">
              El proceso
            </p>
            <h2 className="font-serif text-3xl text-charcoal-800 mb-12">
              ¿Cómo <em>funciona</em>?
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pasos.map((paso, i) => (
              <AnimatedSection key={paso.title} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-charcoal-800 flex items-center justify-center flex-shrink-0">
                    <paso.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal-800 mb-1">{paso.title}</h3>
                    <p className="text-sm font-sans text-warm-gray leading-relaxed">{paso.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="bg-cream-100 section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="text-xs font-sans font-semibold tracking-widest uppercase text-gold-500 mb-3">
                Postulación
              </p>
              <h2 className="font-serif text-3xl text-charcoal-800 mb-10">
                Envianos tu <em>CV</em>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <CVForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

