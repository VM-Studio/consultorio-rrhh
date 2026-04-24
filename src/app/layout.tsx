import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const siteUrl = process.env.SITE_URL || 'https://www.tudominio.com.ar'

export const metadata: Metadata = {
  title: {
    default: '[Nombre Empresa] | Consultoría de Recursos Humanos',
    template: '%s | [Nombre Empresa]',
  },
  description:
    'Consultoría especializada en Recursos Humanos. Búsqueda y selección de talentos, headhunting ejecutivo y asesoramiento estratégico en gestión de personas. Buenos Aires, Argentina.',
  keywords: [
    'consultoría recursos humanos',
    'headhunting Argentina',
    'selección de personal Buenos Aires',
    'búsqueda ejecutiva',
    'RRHH Argentina',
    'gestión del talento',
    'reclutamiento profesional',
    'consultora RRHH Buenos Aires',
    'búsqueda y selección de personal',
    'assessment ejecutivo',
  ],
  authors: [{ name: '[Nombre Empresa]' }],
  creator: '[Nombre Empresa]',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    title: '[Nombre Empresa] | Consultoría de Recursos Humanos',
    description:
      'Consultoría especializada en Recursos Humanos. Búsqueda y selección de talentos, headhunting ejecutivo y asesoramiento estratégico en gestión de personas. Buenos Aires, Argentina.',
    url: siteUrl,
    siteName: '[Nombre Empresa]',
    locale: 'es_AR',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: '[Nombre Empresa] — Consultoría de Recursos Humanos' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Nombre Empresa] | Consultoría de Recursos Humanos',
    description: 'Consultoría especializada en Recursos Humanos. Buenos Aires, Argentina.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: '[Nombre Empresa]',
  description:
    'Consultoría especializada en Recursos Humanos. Búsqueda y selección de talentos, headhunting ejecutivo y asesoramiento estratégico en gestión de personas.',
  url: siteUrl,
  telephone: '+5491100000000',
  email: 'contacto@tudominio.com.ar',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Buenos Aires',
    addressRegion: 'CABA',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.6037,
    longitude: -58.3816,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  serviceType: 'Consultoría de Recursos Humanos',
  areaServed: {
    '@type': 'Country',
    name: 'Argentina',
  },
  sameAs: [
    'https://www.linkedin.com/company/nombre-empresa',
    'https://www.instagram.com/nombre-empresa',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-charcoal-800 bg-cream-50 antialiased">
        {/* Skip to content — accesibilidad */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-charcoal-800 focus:text-cream-50 focus:text-sm focus:font-sans focus:font-medium"
        >
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}


