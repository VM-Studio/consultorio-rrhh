import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'

const servicios = [
  {
    num: '01',
    title: 'Búsqueda & Selección',
    desc: 'Proceso integral de búsqueda y selección de profesionales para todos los niveles de la organización, con metodología estructurada y foco en cultura fit.',
  },
  {
    num: '02',
    title: 'Headhunting Ejecutivo',
    desc: 'Identificación y captación de líderes y perfiles senior para posiciones clave, con máxima confidencialidad y alcance regional.',
  },
  {
    num: '03',
    title: 'Asesoramiento en RRHH',
    desc: 'Consultoría estratégica en gestión de personas, procesos y cultura organizacional para empresas en crecimiento.',
  },
  {
    num: '04',
    title: 'Evaluación de Potencial',
    desc: 'Assessment y evaluación de competencias para identificar talentos dentro de la organización y planificar el desarrollo.',
  },
]

export default function Servicios() {
  return (
    <section className="bg-white section-padding border-t-2 border-gold-400/20">
      <div className="container-max">
        <div className="mb-16">
          <SectionTitle
            tag="Lo que hacemos"
            title="Nuestros *Servicios*"
            subtitle="Acompañamos cada etapa del proceso de talento con rigor, confidencialidad y un profundo conocimiento del mercado argentino."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream-200">
          {servicios.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.1}>
              <div className="bg-cream-50 p-10 border-t-2 border-transparent hover:border-gold-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group h-full flex flex-col gap-6">
                <span className="font-serif text-5xl font-semibold text-gold-400/30 group-hover:text-gold-400/50 transition-colors duration-300">
                  {s.num}
                </span>
                <h3 className="font-serif text-xl text-charcoal-800">{s.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-warm-gray flex-1">{s.desc}</p>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold tracking-wide uppercase text-gold-500 hover:text-gold-600 transition-colors duration-200 group/link"
                >
                  Ver más
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
