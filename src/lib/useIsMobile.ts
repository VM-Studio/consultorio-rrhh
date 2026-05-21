'use client'
import { useState, useEffect } from 'react'

export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') return window.innerWidth < breakpoint
    return false
  })

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])

  return isMobile
}

export function useScreenSize(): 'mobile' | 'tablet' | 'desktop' {
  const [size, setSize] = useState<'mobile' | 'tablet' | 'desktop'>(() => {
    if (typeof window === 'undefined') return 'desktop'
    if (window.innerWidth < 768) return 'mobile'
    if (window.innerWidth < 1100) return 'tablet'
    return 'desktop'
  })

  useEffect(() => {
    const check = () => {
      if (window.innerWidth < 768) setSize('mobile')
      else if (window.innerWidth < 1100) setSize('tablet')
      else setSize('desktop')
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return size
}
