'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'framer-motion'
import { z } from 'zod'
import { contactSchema, MOTIVOS } from '@/lib/schemas'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

type ContactData = z.infer<typeof contactSchema>

const inputClass =
  'w-full bg-white border border-cream-200 px-4 py-3 font-sans text-sm text-charcoal-800 placeholder-warm-gray/60 focus:outline-none focus:border-gold-400 transition-colors duration-200'
const errorClass = '!border-red-400'
const labelClass = 'block text-xs font-sans font-semibold tracking-widest uppercase text-warm-gray mb-2'
const errorMsgClass = 'mt-1.5 text-xs text-red-500 font-sans'

export default function ContactForm() {
  const [serverError, setServerError] = useState('')
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({ resolver: zodResolver(contactSchema) })

  async function onSubmit(data: ContactData) {
    setServerError('')
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error ?? 'Error inesperado')
      setSuccess(true)
      reset()
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : 'Error inesperado. Intentá de nuevo.')
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-cream-200 p-10 flex flex-col items-center text-center gap-6"
      >
        <div className="w-16 h-16 bg-gold-400/10 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-gold-500" />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-charcoal-800 mb-2">¡Mensaje recibido!</h3>
          <p className="text-sm font-sans text-warm-gray leading-relaxed">
            Te responderemos a la brevedad.<br />Revisá tu bandeja de entrada.
          </p>
        </div>
        <button
          onClick={() => setSuccess(false)}
          className="text-xs font-sans font-semibold tracking-widest uppercase text-gold-500 hover:text-gold-600 transition-colors underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white border border-cream-200 p-8 md:p-10 flex flex-col gap-6"
    >
      <h2 className="font-serif text-2xl text-charcoal-800">Envianos un mensaje</h2>

      {/* Nombre + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre <span className="text-gold-500">*</span>
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre completo"
            className={`${inputClass} ${errors.nombre ? errorClass : ''}`}
            {...register('nombre')}
          />
          {errors.nombre && <p className={errorMsgClass}>{errors.nombre.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-gold-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="tu@email.com"
            className={`${inputClass} ${errors.email ? errorClass : ''}`}
            {...register('email')}
          />
          {errors.email && <p className={errorMsgClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Teléfono + Empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="telefono" className={labelClass}>Teléfono</label>
          <input
            id="telefono"
            type="tel"
            placeholder="+54 9 11 ..."
            className={`${inputClass} ${errors.telefono ? errorClass : ''}`}
            {...register('telefono')}
          />
          {errors.telefono && <p className={errorMsgClass}>{errors.telefono.message}</p>}
        </div>
        <div>
          <label htmlFor="empresa" className={labelClass}>Empresa</label>
          <input
            id="empresa"
            type="text"
            placeholder="Nombre de tu empresa"
            className={`${inputClass} ${errors.empresa ? errorClass : ''}`}
            {...register('empresa')}
          />
          {errors.empresa && <p className={errorMsgClass}>{errors.empresa.message}</p>}
        </div>
      </div>

      {/* Motivo */}
      <div>
        <label htmlFor="motivo" className={labelClass}>
          Motivo de contacto <span className="text-gold-500">*</span>
        </label>
        <select
          id="motivo"
          className={`${inputClass} ${errors.motivo ? errorClass : ''} bg-white`}
          {...register('motivo')}
          defaultValue=""
        >
          <option value="" disabled>Seleccioná una opción</option>
          {MOTIVOS.map((m) => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
        {errors.motivo && <p className={errorMsgClass}>{errors.motivo.message}</p>}
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className={labelClass}>
          Mensaje <span className="text-gold-500">*</span>
        </label>
        <textarea
          id="mensaje"
          rows={5}
          placeholder="Contanos en qué podemos ayudarte..."
          className={`${inputClass} resize-none ${errors.mensaje ? errorClass : ''}`}
          {...register('mensaje')}
        />
        {errors.mensaje && <p className={errorMsgClass}>{errors.mensaje.message}</p>}
      </div>

      {/* Privacidad */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5 flex-shrink-0">
            <input
              type="checkbox"
              className="sr-only peer"
              {...register('privacidad')}
            />
            <div className={`w-4 h-4 border ${errors.privacidad ? 'border-red-400' : 'border-cream-200'} bg-white peer-checked:bg-gold-400 peer-checked:border-gold-400 transition-colors duration-200 flex items-center justify-center`}>
              <svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 12 10" fill="none">
                <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <span className="text-xs font-sans text-warm-gray leading-relaxed">
            Acepto la{' '}
            <a href="/privacidad" className="text-gold-500 underline hover:text-gold-600 transition-colors">
              Política de Privacidad
            </a>{' '}
            y el tratamiento de mis datos personales.{' '}
            <span className="text-gold-500">*</span>
          </span>
        </label>
        {errors.privacidad && (
          <p className={`${errorMsgClass} mt-2`}>{errors.privacidad.message}</p>
        )}
      </div>

      {/* Error de servidor */}
      <AnimatePresence>
        {serverError && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-start gap-3 bg-red-50 border border-red-200 p-4"
          >
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm font-sans text-red-700">{serverError}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          'Enviar mensaje'
        )}
      </button>
    </form>
  )
}
