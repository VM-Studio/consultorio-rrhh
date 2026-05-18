import type { Metadata } from 'next'
import ContactoPage from '@/components/sections/contacto/ContactoPage'

export const metadata: Metadata = {
  title: 'Contacto | Motus',
  description:
    'Contactanos para iniciar un proceso de búsqueda o asesoramiento en Recursos Humanos. Buenos Aires, Argentina.',
  alternates: { canonical: '/contacto' },
}

export default function Page() {
  return <ContactoPage />
}
