import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-gold section-padding">
      {/* Decorative shapes */}
      <div
        className="absolute -left-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 bottom-0 w-56 h-56 rounded-full border border-white/10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-32 top-8 w-24 h-24 border border-white/10 rotate-12 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-8">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl text-cream-50 leading-tight">
              ¿Buscás el talento <em>ideal</em> para tu empresa?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="font-sans text-lg text-cream-50/80 leading-relaxed">
              Contamos con la metodología, la red y la experiencia para encontrar
              exactamente el perfil que necesitás. Hablemos.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal-900 text-cream-50 font-sans font-medium text-sm tracking-wide rounded-none transition-all duration-300 hover:bg-charcoal-800"
            >
              Contactanos
            </Link>
            <Link
              href="/trabaja-con-nosotros"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-cream-50/60 text-cream-50 font-sans font-medium text-sm tracking-wide rounded-none transition-all duration-300 hover:border-cream-50 hover:bg-cream-50/10"
            >
              Cargar CV
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
