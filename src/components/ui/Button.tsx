'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'gold' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  children: ReactNode
  loading?: boolean
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  target?: '_blank' | '_self'
  rel?: string
  'aria-label'?: string
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-charcoal-800 text-cream-50 border border-charcoal-800 hover:bg-charcoal-900 hover:border-charcoal-900 active:scale-[0.98]',
  outline:
    'bg-transparent text-charcoal-800 border border-charcoal-800 hover:bg-charcoal-800 hover:text-cream-50 active:scale-[0.98]',
  gold:
    'bg-gold-500 text-white border border-gold-500 hover:bg-gold-600 hover:border-gold-600 active:scale-[0.98]',
  ghost:
    'bg-transparent text-charcoal-800 border border-transparent hover:border-cream-200 hover:bg-cream-100 active:scale-[0.98]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-xs tracking-widest',
  md: 'px-7 py-3.5 text-xs tracking-widest',
  lg: 'px-9 py-4.5 text-sm tracking-widest',
}

function Spinner() {
  return (
    <svg
      className="animate-spin w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

const baseClass =
  'inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-widest transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed select-none'

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  loading = false,
  disabled = false,
  className = '',
  type = 'button',
  target,
  rel,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = `${baseClass} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`
  const content = loading ? (
    <>
      <Spinner />
      {children}
    </>
  ) : (
    children
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//')
    return (
      <Link
        href={href}
        className={classes}
        target={target ?? (isExternal ? '_blank' : undefined)}
        rel={rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}
