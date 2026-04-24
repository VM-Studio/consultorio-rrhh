/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.tudominio.com.ar',
  generateRobotsTxt: false, // robots.ts nativo de Next.js se encarga
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  transform: async (config, path) => {
    const pageConfig = {
      '/': { priority: 1.0, changefreq: 'weekly' },
      '/servicios': { priority: 0.9, changefreq: 'monthly' },
      '/nosotros': { priority: 0.8, changefreq: 'monthly' },
      '/trabaja-con-nosotros': { priority: 0.8, changefreq: 'weekly' },
      '/contacto': { priority: 0.8, changefreq: 'monthly' },
      '/equipo': { priority: 0.7, changefreq: 'monthly' },
    }
    const override = pageConfig[path] ?? {}
    return {
      loc: path,
      changefreq: override.changefreq ?? config.changefreq,
      priority: override.priority ?? config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
