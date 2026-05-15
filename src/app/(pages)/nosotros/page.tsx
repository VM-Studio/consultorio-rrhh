import type { Metadata } from 'next'
import NosotrosPage from '@/components/sections/nosotros/NosotrosPage'

export const metadata: Metadata = {
  title: 'Nosotros | Motus',
  description:
    'Conocé a Lucía Carrera y Federico Ambroggio, los socios detrás de Motus. Profesionales con trayectoria sólida en Recursos Humanos y transformación organizacional.',
  alternates: { canonical: '/nosotros' },
}

export default function Page() {
  return <NosotrosPage />
}
