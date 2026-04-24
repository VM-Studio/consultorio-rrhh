import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'

const stats = [
  { value: '+500', label: 'Posiciones cubiertas' },
  { value: '+10', label: 'Años de experiencia' },
  { value: '+200', label: 'Empresas clientes' },
  { value: '98%', label: 'Satisfacción' },
]

const valores = ['Confidencialidad', 'Excelencia', 'Compromiso']

export default function Nosotros() {
  return (
    <section className="bg-cream-50 section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT — Image placeholder */}
          <AnimatedSection direction="right" className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-sm border border-gold-400/20">
              <div className="absolute inset-0 bg-cream-200 flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-0.5 bg-gold-400/40" />
                <span className="font-serif text-warm-gray/60 text-sm italic">Tu foto aquí</span>
                <div className="w-12 h-0.5 bg-gold-400/40" />
              </div>
              <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-400/50" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-400/50" />
              {/* Offset shadow box */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-400/15 -z-10" />
            </div>
          </AnimatedSection>

          {/* RIGHT — Text */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <SectionTitle
              tag="Quiénes somos"
              title="Más de X años conectando *personas* y *empresas*"
            />

            <AnimatedSection delay={0.15}>
              <div className="flex flex-col gap-4 text-warm-gray font-sans text-base leading-relaxed">
                <p>
                  Somos una consultora boutique con más de una década de experiencia en el
                  mercado argentino. Nos especializamos en conectar talento excepcional con
                  organizaciones que buscan crecer y consolidarse.
                </p>
                <p>
                  Nuestro enfoque es personalizado y confidencial. Cada proceso de búsqueda
                  es único, y lo abordamos con rigor metodológico y profundo conocimiento
                  del mercado local e internacional.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="flex flex-wrap gap-3">
                {valores.map((v) => (
                  <span
                    key={v}
                    className="px-4 py-2 border border-gold-400/30 text-xs font-sans font-medium tracking-widest uppercase text-gold-600"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 text-sm font-sans font-medium text-charcoal-800 hover:text-gold-500 transition-colors duration-200 group"
              >
                Conocé más sobre nosotros
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-16 border-t border-cream-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-gradient-gold font-semibold">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-sans font-medium tracking-wide uppercase text-warm-gray">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
