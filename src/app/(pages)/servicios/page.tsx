import type { Metadata } from 'next'
import ServiciosPage from '@/components/sections/servicios/ServiciosPage'

export const metadata: Metadata = {
  title: 'Servicios | Motus',
  description:
    'Conocé nuestros servicios: headhunting ejecutivo, búsqueda y selección de talento, aprendizaje aplicado al negocio, transformación organizacional y gestión integral de RRHH.',
  alternates: { canonical: '/servicios' },
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ open?: string }>
}) {
  const { open } = await searchParams
  return <ServiciosPage openParam={open ?? null} />
}
