# HR Consultora — Sitio Web Corporativo

Sitio web de consultoría de Recursos Humanos construido con **Next.js 16 App Router**, TypeScript y Tailwind CSS.

---

## 🛠 Stack tecnológico

| Tecnología                  | Uso                                  |
| --------------------------- | ------------------------------------ |
| **Next.js 16** (App Router) | Framework React con SSG/SSR          |
| **TypeScript**              | Tipado estático                      |
| **Tailwind CSS v3**         | Estilos utilitarios                  |
| **Framer Motion**           | Animaciones de scroll y transiciones |
| **React Hook Form + Zod**   | Formularios con validación           |
| **Nodemailer**              | Envío de emails desde las API routes |
| **Lucide React**            | Íconos                               |

**Fuentes:** Playfair Display (titulares) + DM Sans (cuerpo) vía Google Fonts

---

## 🚀 Instalación local

### Prerrequisitos

- Node.js 18 o superior
- npm 9 o superior

### Pasos

\`\`\`bash

# 1. Clonar el repositorio

git clone https://github.com/tu-usuario/hr-consultora.git
cd hr-consultora

# 2. Instalar dependencias

npm install

# 3. Configurar variables de entorno

cp .env.local.example .env.local

# Editá .env.local con tus datos reales

# 4. Correr en desarrollo

npm run dev
\`\`\`

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

---

## ⚙️ Variables de entorno

Copiá `.env.local.example` a `.env.local` y completá:

| Variable          | Descripción                                | Ejemplo                        |
| ----------------- | ------------------------------------------ | ------------------------------ |
| `SITE_URL`        | URL completa en producción                 | `https://www.tudominio.com.ar` |
| `SMTP_HOST`       | Servidor SMTP                              | `smtp.gmail.com`               |
| `SMTP_PORT`       | Puerto SMTP                                | `587`                          |
| `SMTP_USER`       | Usuario SMTP                               | `tu@gmail.com`                 |
| `SMTP_PASS`       | Contraseña de aplicación SMTP              | `xxxx xxxx xxxx xxxx`          |
| `EMAIL_DESTINO`   | Email que recibe el formulario de contacto | `info@empresa.com`             |
| `EMAIL_CV`        | Email que recibe los CVs                   | `rrhh@empresa.com`             |
| `WHATSAPP_NUMBER` | Número WhatsApp sin `+` ni espacios        | `5491100000000`                |

### Configurar Gmail con contraseña de aplicación

1. Cuenta Google → Seguridad → Verificación en dos pasos (activarla)
2. Buscá "Contraseñas de aplicación" y generá una
3. Usá esa clave de 16 caracteres en `SMTP_PASS`

---

## 📁 Estructura de carpetas

\`\`\`
hr-consultora/
├── public/
│ └── images/
│ ├── logo/ ← Logo (logo.png)
│ ├── hero/ ← Imagen del hero
│ ├── team/ ← Fotos del equipo
│ └── og-image.jpg ← Imagen OG para redes (1200×630)
├── src/
│ ├── app/
│ │ ├── (pages)/
│ │ │ ├── contacto/
│ │ │ ├── equipo/
│ │ │ ├── nosotros/
│ │ │ ├── servicios/
│ │ │ └── trabaja-con-nosotros/
│ │ ├── api/
│ │ │ ├── contacto/route.ts
│ │ │ └── cv/route.ts
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ ├── not-found.tsx
│ │ ├── loading.tsx
│ │ ├── sitemap.ts
│ │ └── robots.ts
│ ├── components/
│ │ ├── layout/ ← Navbar, Footer
│ │ ├── sections/home/ ← Secciones de la home
│ │ └── ui/ ← AnimatedSection, Button, SectionTitle, WhatsAppButton
│ └── lib/
│ ├── metadata.ts ← Helper constructMetadata()
│ └── schemas.ts ← Schemas Zod
├── .env.local.example
├── next.config.ts
├── next-sitemap.config.js
└── tailwind.config.ts
\`\`\`

---

## ✏️ Personalización

### Cambiar el logo

Reemplazá `/public/images/logo/logo.png` (PNG transparente, max altura 40px).
El fallback de texto está en `src/components/layout/Navbar.tsx` → `LogoImage`.

### Cambiar el nombre de la empresa

Buscá y reemplazá `[Nombre Empresa]` en:

- `src/lib/metadata.ts` → `siteConfig.name`
- `src/app/layout.tsx`
- `src/components/layout/Footer.tsx`

### Cambiar imágenes

| Qué      | Dónde                                            |
| -------- | ------------------------------------------------ |
| Hero     | `/public/images/hero/hero.jpg`                   |
| Equipo   | `/public/images/team/socio-1.jpg`, `socio-2.jpg` |
| OG image | `/public/images/og-image.jpg` (1200×630px)       |

### Actualizar número de WhatsApp

En `.env.local`: `WHATSAPP_NUMBER=5491XXXXXXXXX`

### Actualizar textos

- Servicios → `src/app/(pages)/servicios/page.tsx`
- Equipo → `src/app/(pages)/equipo/page.tsx`
- Nosotros → `src/app/(pages)/nosotros/page.tsx`
- Home → `src/components/sections/home/`

### Configurar dominio en sitemap

En `next-sitemap.config.js` y `.env.local`: `SITE_URL=https://www.tudominio.com.ar`

---

## 🌐 Deploy en Vercel (recomendado)

### Desde GitHub

1. Subí el proyecto a GitHub
2. [vercel.com](https://vercel.com) → "Add New Project" → importar repo
3. Antes del deploy, configurar variables de entorno (Settings → Environment Variables)
4. Deploy ✓

### Variables de entorno en Vercel

Settings → Environment Variables → agregá cada variable de `.env.local.example` marcada como **Production**.

### Dominio propio

Vercel → Settings → Domains → agregá tu dominio → seguí las instrucciones DNS.
Actualizá `SITE_URL` en las variables de Vercel y redeploy.

---

## 🔍 Google Search Console

1. [search.google.com/search-console](https://search.google.com/search-console) → Agregar propiedad
2. Verificá vía tag HTML (agregalo en `layout.tsx` como `verification.google` en metadata)
3. Sitemaps → `https://www.tudominio.com.ar/sitemap.xml` → Enviar

---

## 📝 Scripts

\`\`\`bash
npm run dev # Desarrollo (localhost:3000)
npm run build # Build de producción
npm run start # Servidor de producción local
npm run lint # Linting
\`\`\`

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
