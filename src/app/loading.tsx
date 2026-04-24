export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cream-50"
      role="status"
      aria-label="Cargando..."
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo mark */}
        <div className="relative w-12 h-12">
          <span
            className="absolute inset-0 rounded-full border-2 border-cream-200"
            aria-hidden="true"
          />
          <span
            className="absolute inset-0 rounded-full border-2 border-t-gold-400 animate-spin"
            style={{ animationDuration: '900ms' }}
            aria-hidden="true"
          />
        </div>
        <p className="text-xs font-sans font-semibold tracking-widest uppercase text-warm-gray">
          Cargando...
        </p>
      </div>
    </div>
  )
}
