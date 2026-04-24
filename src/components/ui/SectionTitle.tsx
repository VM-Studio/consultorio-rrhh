import AnimatedSection from './AnimatedSection'

interface SectionTitleProps {
  tag?: string
  title: string // Supports *italic* markdown-style via custom render
  subtitle?: string
  centered?: boolean
  light?: boolean // For dark backgrounds
}

function renderTitle(text: string) {
  const parts = text.split(/\*([^*]+)\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? <em key={i}>{part}</em> : part
  )
}

export default function SectionTitle({
  tag,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) {
  const align = centered ? 'text-center items-center' : 'text-left items-start'

  return (
    <AnimatedSection className={`flex flex-col gap-4 ${align}`}>
      {tag && (
        <span
          className={`text-xs font-sans font-semibold tracking-widest uppercase ${
            light ? 'text-gold-400' : 'text-gold-500'
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-serif text-4xl md:text-5xl leading-tight ${
          light ? 'text-cream-50' : 'text-charcoal-800'
        }`}
      >
        {renderTitle(title)}
      </h2>
      {subtitle && (
        <p
          className={`font-sans text-lg leading-relaxed max-w-2xl ${
            light ? 'text-cream-100/70' : 'text-warm-gray'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
