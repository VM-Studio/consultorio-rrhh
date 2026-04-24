import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Star, Heart, Users, Target, Clock } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import CTA from '@/components/sections/home/CTA'

export const metadata: Metadata = {
  title: 'Nosotros | [Nombre Empresa]',
  description:
    'Conocé la historia, filosofía y valores de nuestra consultora de Recursos Humanos. Más de 10 años conectando talento con oportunidades en Argentina.',
  alternates: { canonical: '/nosotros' },
}

const valores = [
  {
    icon: Shield,
    title: 'Confidencialidad',
    desc: 'Cada proceso es tratado con absoluta discreción. Protegemos la información de nuestros clientes y candidatos en todo momento.',
  },
  {
    icon: Star,
    title: 'Excelencia',
    desc: 'Nos comprometemos a entregar resultados de la más alta calidad, con rigor metodológico en cada búsqueda.',
  },
  {
    icon: Heart,
    title: 'Compromiso',
    desc: 'Nos involucramos profundamente en cada proceso, como si fuera nuestro propio equipo el que estuviéramos construyendo.',
  },
  {
    icon: Users,
    title: 'Enfoque Humano',
    desc: 'Detrás de cada posición hay personas. Tratamos a cada candidato y cliente con empatía y respeto.',
  },
  {
    icon: Target,
    title: 'Precisión',
    desc: 'Metodología estructurada de evaluación para asegurar el mejor match entre candidato y organización.',
  },
  {
    icon: Clock,
    title: 'Agilidad',
    desc: 'Entendemos la urgencia del negocio. Actuamos con rapidez sin resignar calidad en el proceso.',
  },
]

const timeline = [
  { year: '2013', hito: 'Fundación de la consultora con foco en búsquedas ejecutivas.' },
  { year: '2016', hito: 'Expansión hacia servicios de assessment y evaluación de talento.' },
  { year: '2018', hito: 'Apertura de la práctica de Headhunting regional latinoamericano.' },
  { year: '2021', hito: 'Incorporación de metodologías de selección remota y tech-enhanced.' },
  { year: '2024', hito: 'Superamos las 500 posiciones cubiertas con más de 200 clientes activos.' },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Hero interno */}
      <section className="bg-gradient-hero min-h-[60vh] flex items-end pt-32 pb-20 section-padding">
        <div className="container-max w-full">
          <AnimatedSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-gold-400 mb-4">
              <Link href="/" className="hover:text-gold-300 transition-colors">Inicio</Link>
              <span className="mx-2 text-white/30">/</span>
              Nosotros
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl text-cream-50 leading-tight max-w-2xl">
              Quiénes <em>somos</em>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-6 font-sans text-lg text-cream-100/70 max-w-xl">
              Una consultora boutique con alma argentina, enfoque personalizado y
              más de una década de experiencia en el mercado del talento.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Historia y filosofía */}
      <section className="bg-cream-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex flex-col gap-8">
              <SectionTitle
                tag="Historia & Filosofía"
                title="Nacimos para *transformar* la búsqueda de talento"
              />
              <AnimatedSection delay={0.15}>
                <div className="flex flex-col gap-4 text-warm-gray font-sans text-base leading-relaxed">
                  <p>
                    Fundada en 2013, nuestra consultora nació de la convicción de que el
                    proceso de búsqueda y selección puede ser más humano, más preciso y
                    más efectivo. Desde el primer día apostamos por construir relaciones
                    de largo plazo con nuestros clientes y candidatos.
                  </p>
                  <p>
                    A lo largo de los años, desarrollamos una metodología propia que
                    combina rigor técnico con una profunda comprensión de la cultura
                    organizacional. No somos un proveedor: somos un socio estratégico
                    en la construcción de equipos.
                  </p>
                  <p>
                    Hoy somos referentes en el mercado argentino con presencia en los
                    principales sectores de la economía: banca, tecnología, consumo
                    masivo, salud, agroindustria y servicios profesionales.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="left" className="relative">
              <div className="relative aspect-[4/5] max-w-sm border border-gold-400/20">
                <div className="absolute inset-0 bg-cream-200 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-0.5 bg-gold-400/40" />
                  <span className="font-serif text-warm-gray/60 text-sm italic">Foto oficina</span>
                  <div className="w-12 h-0.5 bg-gold-400/40" />
                </div>
                <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-400/50" />
                <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-400/50" />
                <div className="absolute -bottom-4 -left-4 w-full h-full border border-gold-400/15 -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white section-padding border-t border-cream-200">
        <div className="container-max">
          <div className="mb-14">
            <SectionTitle
              tag="Nuestros Valores"
              title="Los principios que *guían* cada decisión"
              centered
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="flex flex-col gap-4 p-8 bg-cream-50 border-t-2 border-gold-400/30 hover:border-gold-400 transition-colors duration-300">
                  <v.icon className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-charcoal-800">{v.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-warm-gray">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream-50 section-padding border-t border-cream-200">
        <div className="container-max">
          <div className="mb-14">
            <SectionTitle
              tag="Trayectoria"
              title="Nuestra *historia* en números"
            />
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gold-400/20 hidden md:block" />
            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.1}>
                  <div className="relative flex items-start gap-10 md:pl-20 py-8 border-b border-cream-200 last:border-0 group">
                    {/* Circle on line */}
                    <div className="hidden md:flex absolute left-[27px] top-10 w-3 h-3 rounded-full border-2 border-gold-400 bg-cream-50 group-hover:bg-gold-400 transition-colors duration-300" />
                    <span className="font-serif text-3xl font-semibold text-gold-400/60 flex-shrink-0 w-16">
                      {item.year}
                    </span>
                    <p className="font-sans text-base text-warm-gray leading-relaxed pt-2">
                      {item.hito}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA interno */}
      <section className="bg-white section-padding border-t border-cream-200">
        <div className="container-max text-center">
          <AnimatedSection>
            <p className="font-sans text-sm font-semibold tracking-widest uppercase text-gold-500 mb-4">
              ¿Querés saber más?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 mb-8">
              Conocé nuestros <em>servicios</em>
            </h2>
            <Link href="/servicios" className="btn-primary inline-flex items-center gap-2">
              Ver servicios
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  )
}

