import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'

const socios = [
  {
    nombre: 'María García',
    cargo: 'Socia Fundadora & Directora',
    bio: 'Más de 15 años de trayectoria en Recursos Humanos y búsqueda ejecutiva. Especialista en sectores financiero, tecnológico y consumo masivo. Licenciada en Administración (UBA), con posgrado en Gestión del Talento (UTDT).',
  },
  {
    nombre: 'Carlos Rodríguez',
    cargo: 'Socio & Director de Headhunting',
    bio: 'Experto en identificación y atracción de líderes para posiciones C-level y gerencias senior. 12 años de experiencia en el mercado regional latinoamericano. MBA Universidad de San Andrés.',
  },
]

export default function Equipo() {
  return (
    <section className="bg-charcoal-900 section-padding">
      <div className="container-max">
        <div className="mb-16 text-center">
          <SectionTitle
            tag="El Equipo"
            title="Los socios *detrás* de la consultora"
            light
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {socios.map((socio, i) => (
            <AnimatedSection key={socio.nombre} delay={i * 0.15}>
              <div className="group flex flex-col gap-6">
                {/* Photo placeholder */}
                <div className="relative aspect-[3/4] max-w-xs border border-gold-400/20 overflow-hidden">
                  <div className="absolute inset-0 bg-charcoal-800 flex flex-col items-center justify-center gap-3">
                    <div className="w-12 h-0.5 bg-gold-400/40" />
                    <span className="font-serif text-cream-100/30 text-sm italic">Foto</span>
                    <div className="w-12 h-0.5 bg-gold-400/40" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-serif text-2xl text-cream-50">{socio.nombre}</h3>
                  <p className="text-xs font-sans font-semibold tracking-widest uppercase text-gold-400">
                    {socio.cargo}
                  </p>
                  <p className="font-sans text-sm leading-relaxed text-cream-100/60">
                    {socio.bio}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
