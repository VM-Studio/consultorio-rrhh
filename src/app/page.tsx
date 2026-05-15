import type { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero'
import QuienesSomos from '@/components/sections/home/QuienesSomos'
import ServiciosHome from '@/components/sections/home/ServiciosHome'
import NosotrosHome from '@/components/sections/home/NosotrosHome'
import ClientesHome from '@/components/sections/home/ClientesHome'
import CTAHome from '@/components/sections/home/CTAHome'

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
      <QuienesSomos />
      <ServiciosHome />
      <NosotrosHome />
      <ClientesHome />
      <CTAHome />
    </>
  )
}
