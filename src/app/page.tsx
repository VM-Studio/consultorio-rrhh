import type { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero'
import Nosotros from '@/components/sections/home/Nosotros'
import Servicios from '@/components/sections/home/Servicios'
import Equipo from '@/components/sections/home/Equipo'
import Clientes from '@/components/sections/home/Clientes'
import CTA from '@/components/sections/home/CTA'

export const metadata: Metadata = {
  title: '[Nombre Empresa] | Consultoría de Recursos Humanos en Buenos Aires',
  description:
    'Consultoría boutique especializada en búsqueda y selección de talentos, headhunting ejecutivo y asesoramiento estratégico en RRHH. Buenos Aires, Argentina.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Nosotros />
      <Servicios />
      <Equipo />
      <Clientes />
      <CTA />
    </>
  )
}
