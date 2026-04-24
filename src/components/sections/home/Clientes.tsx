import AnimatedSection from '@/components/ui/AnimatedSection'

const logos = [
  'Cliente A', 'Cliente B', 'Cliente C', 'Cliente D',
  'Cliente E', 'Cliente F', 'Cliente G', 'Cliente H',
]

function LogoStrip({ reverse = false }: { reverse?: boolean }) {
  const items = [...logos, ...logos] // duplicate for seamless loop

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-6 w-max ${
          reverse ? 'animate-[marquee_30s_linear_infinite_reverse]' : 'animate-marquee'
        }`}
      >
        {items.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex-shrink-0 w-40 h-20 bg-cream-200 flex items-center justify-center group cursor-default hover:bg-cream-100 transition-colors duration-300"
          >
            <span className="text-xs font-sans font-medium tracking-wide text-warm-gray/50 group-hover:text-warm-gray transition-colors duration-300">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Clientes() {
  return (
    <section className="bg-cream-100 section-padding overflow-hidden">
      <div className="container-max mb-12">
        <AnimatedSection className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800">
            Empresas que <em>confían</em> en nosotros
          </h2>
        </AnimatedSection>
      </div>

      <div className="flex flex-col gap-6">
        <LogoStrip />
        <LogoStrip reverse />
      </div>
    </section>
  )
}
