import type { Metadata } from 'next'

export const siteConfig = {
  name: '[Nombre Empresa]',
  description:
    'Consultoría especializada en Recursos Humanos. Búsqueda y selección de talentos, headhunting ejecutivo y asesoramiento estratégico en gestión de personas. Buenos Aires, Argentina.',
  url: process.env.SITE_URL || 'https://www.tudominio.com.ar',
  ogImage: '/images/og-image.jpg',
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
}

export function constructMetadata({
  title,
  description,
  image,
  noIndex = false,
  canonical,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  canonical?: string
} = {}): Metadata {
  const metaTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Consultoría de Recursos Humanos`
  const metaDescription = description || siteConfig.description
  const metaImage = image || siteConfig.ogImage

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical ?? siteConfig.url,
    },
    openGraph: {
      type: 'website',
      locale: 'es_AR',
      url: siteConfig.url,
      title: title || siteConfig.name,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [{ url: metaImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: title || siteConfig.name,
      description: metaDescription,
      images: [metaImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
