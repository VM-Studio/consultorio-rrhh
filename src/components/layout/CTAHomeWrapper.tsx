'use client'

import { usePathname } from 'next/navigation'
import CTAHome from '@/components/sections/home/CTAHome'

export default function CTAHomeWrapper() {
  const pathname = usePathname()
  if (pathname === '/contacto') return null
  return <CTAHome />
}
