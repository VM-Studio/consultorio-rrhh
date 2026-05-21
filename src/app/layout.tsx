import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const artegra = localFont({
  src: [
    { path: '../fonts/Fontspring-DEMO-artegra_sans-extended-400-regular.otf', weight: '400', style: 'normal' },
    { path: '../fonts/Fontspring-DEMO-artegra_sans-extended-400-regular-italic.otf', weight: '400', style: 'italic' },
    { path: '../fonts/Fontspring-DEMO-artegra_sans-extended-500-medium.otf', weight: '500', style: 'normal' },
    { path: '../fonts/Fontspring-DEMO-artegra_sans-extended-600-semibold.otf', weight: '600', style: 'normal' },
    { path: '../fonts/Fontspring-DEMO-artegra_sans-extended-700-bold.otf', weight: '700', style: 'normal' },
    { path: '../fonts/Fontspring-DEMO-artegra_sans-extended-700-bold-italic.otf', weight: '700', style: 'italic' },
  ],
  variable: '--font-artegra',
  display: 'swap',
})

const libreBaskerville = localFont({
  src: [
    { path: '../fonts/LibreBaskerville-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/LibreBaskerville-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../fonts/LibreBaskerville-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-libre-baskerville',
  display: 'swap',
})

const quicksand = localFont({
  src: [
    { path: '../fonts/Quicksand-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/Quicksand-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/Quicksand-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../fonts/Quicksand-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-quicksand',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import CTAHomeWrapper from '@/components/layout/CTAHomeWrapper'

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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
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
      <html lang="es" className={`h-full scroll-smooth ${artegra.variable} ${libreBaskerville.variable} ${quicksand.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-charcoal-800 bg-cream-50 antialiased overflow-x-hidden w-full">
        {/* Skip to content — accesibilidad */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-charcoal-800 focus:text-cream-50 focus:text-sm focus:font-sans focus:font-medium"
        >
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <CTAHomeWrapper />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}


