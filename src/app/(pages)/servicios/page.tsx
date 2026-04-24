import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import CTA from '@/components/sections/home/CTA'

export const metadata: Metadata = {
  title: 'Servicios | [Nombre Empresa]',
  description:
    'Búsqueda y selección de personal, headhunting ejecutivo, asesoramiento en RRHH y evaluación de potencial. Consultoría de RR.HH. en Buenos Aires.',
  alternates: { canonical: '/servicios' },
}

const servicios = [
  {
    num: '01',
    title: 'Búsqueda & Selección',
    desc: 'Nuestro proceso de búsqueda y selección está diseñado para identificar a los mejores talentos del mercado para cada nivel de la organización. Desde posiciones operativas hasta mandos medios y gerencias, acompañamos cada etapa con una metodología rigurosa y personalizada.',
    bullets: [
      'Relevamiento profundo del perfil y la cultura organizacional',
      'Búsqueda activa y pasiva en el mercado',
      'Entrevistas por competencias y evaluaciones técnicas',
      'Presentación de terna finalista con informes detallados',
      'Acompañamiento en la negociación y proceso de ingreso',
      'Garantía de reposición en caso necesario',
    ],
  },
  {
    num: '02',
    title: 'Headhunting Ejecutivo',
    desc: 'Para posiciones C-level, gerenciales y roles senior que requieren máxima confidencialidad y acceso a talentos que no están en búsqueda activa. Nuestra red y metodología de búsqueda directa nos permite llegar a perfiles que otras consultoras no pueden.',
    bullets: [
      'Proceso 100% confidencial para cliente y candidatos',
      'Mapeo exhaustivo del mercado y la competencia',
      'Alcance regional: Argentina, Chile, Uruguay, México',
      'Acceso a ejecutivos de primer nivel fuera del mercado activo',
      'Evaluación de liderazgo y fit cultural profundo',
      'Informe ejecutivo completo por cada candidato presentado',
    ],
  },
  {
    num: '03',
    title: 'Asesoramiento en RRHH',
    desc: 'Más allá de la selección, acompañamos a empresas en el diseño y mejora de sus procesos de gestión de personas. Desde la estructuración del área de RRHH hasta el diseño de políticas de retención, somos un socio estratégico del negocio.',
    bullets: [
      'Diagnóstico del área de Recursos Humanos',
      'Diseño de estructuras organizacionales',
      'Definición de perfiles y descripciones de puestos',
      'Políticas de atracción, retención y desarrollo',
      'Consultoría en cultura organizacional y clima laboral',
      'Acompañamiento en procesos de transformación organizacional',
    ],
  },
  {
    num: '04',
    title: 'Evaluación de Potencial',
    desc: 'Identificar y desarrollar el talento interno es tan importante como atraer talento externo. Nuestros procesos de assessment permiten conocer en profundidad las competencias, el potencial y las áreas de desarrollo de las personas dentro de la organización.',
    bullets: [
      'Assessment center diseñado a medida',
      'Evaluaciones psicotécnicas y de competencias',
      'Identificación de high potentials y planes de sucesión',
      'Feedback individual para cada evaluado',
      'Informes consolidados para la toma de decisiones',
      'Recomendaciones de desarrollo y plan de acción',
    ],
  },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Hero interno */}
      <section className="bg-gradient-hero min-h-[60vh] flex items-end pt-32 pb-20 section-padding">
        <div className="container-max w-full">
          <AnimatedSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-gold-400 mb-4">
              <Link href="/" className="hover:text-gold-300 transition-colors">Inicio</Link>
              <span className="mx-2 text-white/30">/</span>
              Servicios
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl text-cream-50 leading-tight max-w-2xl">
              Nuestros <em>Servicios</em>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-6 font-sans text-lg text-cream-100/70 max-w-xl">
              Soluciones integrales en gestión del talento para empresas que buscan
              crecer con las personas correctas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream-50 py-16 section-padding border-b border-cream-200">
        <div className="container-max">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-lg text-warm-gray leading-relaxed">
              Cada servicio está diseñado para adaptarse a la realidad y los objetivos
              de cada organización. No hay dos procesos iguales: trabajamos a medida,
              siempre.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Servicios expandidos */}
      <section className="bg-white">
        {servicios.map((s, i) => (
          <div
            key={s.num}
            className={`section-padding border-b border-cream-200 ${
              i % 2 === 1 ? 'bg-cream-50' : 'bg-white'
            }`}
          >
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                {/* Text side */}
                <div className={`flex flex-col gap-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <AnimatedSection>
                    <span className="font-serif text-7xl font-semibold text-gold-400/20 leading-none">
                      {s.num}
                    </span>
                  </AnimatedSection>
                  <SectionTitle title={s.title} />
                  <AnimatedSection delay={0.1}>
                    <p className="font-sans text-base leading-relaxed text-warm-gray">
                      {s.desc}
                    </p>
                  </AnimatedSection>
                  <AnimatedSection delay={0.2}>
                    <ul className="flex flex-col gap-3">
                      {s.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span className="font-sans text-sm text-warm-gray leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                  <AnimatedSection delay={0.3}>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-2 text-sm font-sans font-medium text-charcoal-800 hover:text-gold-500 transition-colors duration-200 border-b border-charcoal-800/20 hover:border-gold-400 pb-0.5"
                    >
                      ¿Este servicio es lo que necesitás? Hablemos →
                    </Link>
                  </AnimatedSection>
                </div>

                {/* Image placeholder side */}
                <AnimatedSection
                  direction={i % 2 === 1 ? 'right' : 'left'}
                  className={i % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <div className="relative aspect-[4/3] border border-gold-400/20">
                    <div className="absolute inset-0 bg-cream-200 flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-0.5 bg-gold-400/40" />
                      <span className="font-serif text-warm-gray/50 text-sm italic">Imagen servicio</span>
                      <div className="w-12 h-0.5 bg-gold-400/40" />
                    </div>
                    <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-400/40" />
                    <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-400/40" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        ))}
      </section>

      <CTA />
    </>
  )
}

