import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTA from '@/components/sections/home/CTA'

export const metadata: Metadata = {
  title: 'Equipo | [Nombre Empresa]',
  description:
    'Conocé a los socios y profesionales detrás de la consultora. Expertos en búsqueda ejecutiva y gestión del talento con trayectoria en el mercado argentino.',
  alternates: { canonical: '/equipo' },
}

const socios = [
  {
    nombre: 'María García',
    cargo: 'Socia Fundadora & Directora',
    bio: `María fundó la consultora en 2013 con la convicción de que el proceso de selección podía ser más humano y más efectivo. Con más de 15 años de trayectoria en Recursos Humanos, lideró áreas de RRHH en empresas multinacionales antes de orientarse hacia la consultoría.

Su especialidad son los sectores financiero, tecnológico y consumo masivo. Es reconocida por su capacidad para entender la cultura organizacional de sus clientes y traducirla en perfiles precisos.

Licenciada en Administración de Empresas (UBA), con Posgrado en Gestión del Talento (UTDT) y certificada en Assessment Center (SHL).`,
    antecedentes: [
      { empresa: 'Banco Galicia', cargo: 'Gerente de RRHH', periodo: '2008 – 2013' },
      { empresa: 'Unilever Argentina', cargo: 'HRBP Senior', periodo: '2005 – 2008' },
      { empresa: 'Accenture', cargo: 'Consultora de RRHH', periodo: '2003 – 2005' },
    ],
  },
  {
    nombre: 'Carlos Rodríguez',
    cargo: 'Socio & Director de Headhunting',
    bio: `Carlos se incorporó a la firma en 2015 tras una extensa carrera en búsqueda ejecutiva en una de las consultoras más reconocidas de la región. Su expertise es la identificación y atracción de líderes para posiciones C-level y gerencias senior.

Tiene un profundo conocimiento del mercado regional latinoamericano, con procesos ejecutados en Argentina, Chile, Uruguay, Colombia y México. Sus sectores de especialidad son agroindustria, energía, tecnología e infraestructura.

MBA en la Universidad de San Andrés, y formación ejecutiva en ESADE Barcelona y Kellogg School of Management.`,
    antecedentes: [
      { empresa: 'Spencer Stuart', cargo: 'Consultant', periodo: '2010 – 2015' },
      { empresa: 'Heidrick & Struggles', cargo: 'Associate', periodo: '2007 – 2010' },
      { empresa: 'PwC Argentina', cargo: 'Senior Advisor', periodo: '2004 – 2007' },
    ],
  },
]

export default function EquipoPage() {
  return (
    <>
      {/* Hero interno */}
      <section className="bg-gradient-hero min-h-[60vh] flex items-end pt-32 pb-20 section-padding">
        <div className="container-max w-full">
          <AnimatedSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-gold-400 mb-4">
              <Link href="/" className="hover:text-gold-300 transition-colors">Inicio</Link>
              <span className="mx-2 text-white/30">/</span>
              Equipo
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl text-cream-50 leading-tight max-w-2xl">
              El <em>equipo</em>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-6 font-sans text-lg text-cream-100/70 max-w-xl">
              Profesionales con trayectoria sólida, vocación de servicio y la pasión
              de conectar personas con oportunidades.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream-50 py-16 section-padding border-b border-cream-200">
        <div className="container-max">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-lg text-warm-gray leading-relaxed">
              Nuestro equipo es pequeño por convicción: creemos en la calidad por encima
              del volumen. Cada socio lidera personalmente los procesos que le asignan,
              asegurando dedicación y continuidad de principio a fin.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Socios */}
      <section className="bg-white">
        {socios.map((socio, i) => (
          <div
            key={socio.nombre}
            className={`section-padding border-b border-cream-200 ${
              i % 2 === 1 ? 'bg-cream-50' : 'bg-white'
            }`}
          >
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                {/* Foto placeholder */}
                <AnimatedSection
                  direction={i % 2 === 0 ? 'right' : 'left'}
                  className={i % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="relative aspect-[3/4] max-w-sm border border-gold-400/20">
                    <div className="absolute inset-0 bg-cream-200 flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-0.5 bg-gold-400/40" />
                      <span className="font-serif text-warm-gray/50 text-sm italic">Foto</span>
                      <div className="w-12 h-0.5 bg-gold-400/40" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/20 to-transparent" />
                    <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-400/50" />
                    <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-400/50" />
                  </div>
                </AnimatedSection>

                {/* Info */}
                <div className={`flex flex-col gap-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <AnimatedSection>
                    <h2 className="font-serif text-4xl text-charcoal-800">{socio.nombre}</h2>
                    <p className="mt-2 text-xs font-sans font-semibold tracking-widest uppercase text-gold-500">
                      {socio.cargo}
                    </p>
                  </AnimatedSection>

                  <AnimatedSection delay={0.1}>
                    <div className="flex flex-col gap-4">
                      {socio.bio.split('\n\n').map((para, pi) => (
                        <p key={pi} className="font-sans text-base leading-relaxed text-warm-gray">
                          {para}
                        </p>
                      ))}
                    </div>
                  </AnimatedSection>

                  {/* Antecedentes */}
                  <AnimatedSection delay={0.2}>
                    <div className="border-t border-cream-200 pt-8">
                      <h3 className="text-xs font-sans font-semibold tracking-widest uppercase text-charcoal-800 mb-6">
                        Trayectoria anterior
                      </h3>
                      <div className="flex flex-col gap-0">
                        {socio.antecedentes.map((ant) => (
                          <div
                            key={ant.empresa}
                            className="flex items-start gap-6 py-4 border-b border-cream-200 last:border-0"
                          >
                            <span className="font-sans text-xs text-warm-gray/60 w-28 flex-shrink-0 pt-0.5">
                              {ant.periodo}
                            </span>
                            <div>
                              <p className="font-sans text-sm font-medium text-charcoal-800">
                                {ant.cargo}
                              </p>
                              <p className="font-sans text-xs text-warm-gray mt-0.5">
                                {ant.empresa}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.3}>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-sans font-medium text-warm-gray hover:text-gold-500 transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      Ver perfil en LinkedIn
                    </a>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <CTA />
    </>
  )
}

