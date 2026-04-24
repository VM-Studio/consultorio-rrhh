'use client'

import { useState, useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'framer-motion'
import { z } from 'zod'
import { cvSchema, AREAS, EXPERIENCIA } from '@/lib/schemas'
import { CheckCircle2, AlertCircle, Loader2, UploadCloud, X, FileText } from 'lucide-react'

type CVData = z.infer<typeof cvSchema>

const inputClass =
  'w-full bg-white border border-cream-200 px-4 py-3 font-sans text-sm text-charcoal-800 placeholder-warm-gray/60 focus:outline-none focus:border-gold-400 transition-colors duration-200'
const errorClass = '!border-red-400'
const labelClass = 'block text-xs font-sans font-semibold tracking-widest uppercase text-warm-gray mb-2'
const errorMsgClass = 'mt-1.5 text-xs text-red-500 font-sans'

export default function CVForm() {
  const [serverError, setServerError] = useState('')
  const [success, setSuccess] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const inputFileRef = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CVData>({ resolver: zodResolver(cvSchema) })

  const validateFile = (f: File) => {
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowed.includes(f.type)) {
      setFileError('Solo se aceptan archivos PDF o Word (.doc / .docx)')
      return false
    }
    if (f.size > 5 * 1024 * 1024) {
      setFileError('El archivo no puede superar los 5 MB')
      return false
    }
    setFileError('')
    return true
  }

  const handleFile = (f: File) => {
    if (validateFile(f)) setFile(f)
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const dropped = e.dataTransfer.files[0]
    if (dropped) {
      if (validateFile(dropped)) setFile(dropped)
    }
  }

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const onDragLeave = () => setIsDragging(false)

  async function onSubmit(data: CVData) {
    if (!file) { setFileError('El CV es obligatorio'); return }
    setServerError('')
    const fd = new FormData()
    Object.entries(data).forEach(([key, val]) => {
      if (Array.isArray(val)) val.forEach((v) => fd.append(key, v))
      else if (val !== undefined && val !== null) fd.append(key, String(val))
    })
    fd.append('cv', file)
    try {
      const res = await fetch('/api/cv', { method: 'POST', body: fd })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error ?? 'Error inesperado')
      setSuccess(true)
      reset()
      setFile(null)
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
          <h3 className="font-serif text-2xl text-charcoal-800 mb-2">¡CV recibido!</h3>
          <p className="text-sm font-sans text-warm-gray leading-relaxed">
            Gracias por tu postulación. Lo revisaremos y<br />te contactaremos si hay una oportunidad para vos.
          </p>
        </div>
        <button
          onClick={() => setSuccess(false)}
          className="text-xs font-sans font-semibold tracking-widest uppercase text-gold-500 hover:text-gold-600 transition-colors underline underline-offset-4"
        >
          Enviar otra postulación
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
      {/* Datos personales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cv-nombre" className={labelClass}>
            Nombre completo <span className="text-gold-500">*</span>
          </label>
          <input
            id="cv-nombre"
            type="text"
            placeholder="Tu nombre"
            className={`${inputClass} ${errors.nombre ? errorClass : ''}`}
            {...register('nombre')}
          />
          {errors.nombre && <p className={errorMsgClass}>{errors.nombre.message}</p>}
        </div>
        <div>
          <label htmlFor="cv-email" className={labelClass}>
            Email <span className="text-gold-500">*</span>
          </label>
          <input
            id="cv-email"
            type="email"
            placeholder="tu@email.com"
            className={`${inputClass} ${errors.email ? errorClass : ''}`}
            {...register('email')}
          />
          {errors.email && <p className={errorMsgClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cv-telefono" className={labelClass}>
            Teléfono <span className="text-gold-500">*</span>
          </label>
          <input
            id="cv-telefono"
            type="tel"
            placeholder="+54 9 11 ..."
            className={`${inputClass} ${errors.telefono ? errorClass : ''}`}
            {...register('telefono')}
          />
          {errors.telefono && <p className={errorMsgClass}>{errors.telefono.message}</p>}
        </div>
        <div>
          <label htmlFor="cv-linkedin" className={labelClass}>LinkedIn</label>
          <input
            id="cv-linkedin"
            type="url"
            placeholder="linkedin.com/in/tu-perfil"
            className={`${inputClass} ${errors.linkedin ? errorClass : ''}`}
            {...register('linkedin')}
          />
          {errors.linkedin && <p className={errorMsgClass}>{errors.linkedin.message}</p>}
        </div>
      </div>

      {/* Áreas de interés */}
      <div>
        <label className={labelClass}>
          Áreas de interés <span className="text-gold-500">*</span>
        </label>
        <Controller
          control={control}
          name="areas"
          defaultValue={[]}
          render={({ field }) => (
            <div className="flex flex-wrap gap-2">
              {AREAS.map((area) => {
                const selected = (field.value ?? []).includes(area)
                return (
                  <button
                    key={area}
                    type="button"
                    onClick={() => {
                      const current = field.value ?? []
                      field.onChange(
                        selected
                          ? current.filter((v) => v !== area)
                          : [...current, area]
                      )
                    }}
                    className={`px-4 py-2 text-xs font-sans font-semibold tracking-wide border transition-colors duration-150 ${
                      selected
                        ? 'bg-charcoal-800 border-charcoal-800 text-cream-50'
                        : 'bg-white border-cream-200 text-warm-gray hover:border-gold-400 hover:text-gold-500'
                    }`}
                  >
                    {area}
                  </button>
                )
              })}
            </div>
          )}
        />
        {errors.areas && <p className={errorMsgClass}>{errors.areas.message}</p>}
      </div>

      {/* Experiencia + Pretensión */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cv-experiencia" className={labelClass}>
            Años de experiencia <span className="text-gold-500">*</span>
          </label>
          <select
            id="cv-experiencia"
            className={`${inputClass} bg-white ${errors.experiencia ? errorClass : ''}`}
            {...register('experiencia')}
            defaultValue=""
          >
            <option value="" disabled>Seleccioná</option>
            {EXPERIENCIA.map((e) => (
              <option key={e.value} value={e.value}>{e.label}</option>
            ))}
          </select>
          {errors.experiencia && <p className={errorMsgClass}>{errors.experiencia.message}</p>}
        </div>
        <div>
          <label htmlFor="cv-pretension" className={labelClass}>
            Pretensión salarial (bruta / mensual)
          </label>
          <input
            id="cv-pretension"
            type="text"
            placeholder="Ej: $800.000"
            className={`${inputClass} ${errors.pretension ? errorClass : ''}`}
            {...register('pretension')}
          />
          {errors.pretension && <p className={errorMsgClass}>{errors.pretension.message}</p>}
        </div>
      </div>

      {/* Presentación */}
      <div>
        <label htmlFor="cv-presentacion" className={labelClass}>
          Breve presentación
        </label>
        <textarea
          id="cv-presentacion"
          rows={4}
          placeholder="Contanos algo sobre vos, tu experiencia y qué tipo de rol estás buscando..."
          className={`${inputClass} resize-none ${errors.presentacion ? errorClass : ''}`}
          {...register('presentacion')}
        />
        {errors.presentacion && <p className={errorMsgClass}>{errors.presentacion.message}</p>}
      </div>

      {/* Drag & drop CV */}
      <div>
        <label className={labelClass}>
          CV (PDF o Word, máx. 5 MB) <span className="text-gold-500">*</span>
        </label>
        {file ? (
          <div className="flex items-center gap-3 border border-gold-400 bg-gold-400/5 px-4 py-3">
            <FileText className="w-5 h-5 text-gold-500 flex-shrink-0" />
            <span className="text-sm font-sans text-charcoal-800 truncate flex-1">{file.name}</span>
            <button
              type="button"
              onClick={() => { setFile(null); setFileError('') }}
              className="text-warm-gray hover:text-red-500 transition-colors"
              aria-label="Quitar archivo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onClick={() => inputFileRef.current?.click()}
            className={`border-2 border-dashed cursor-pointer flex flex-col items-center justify-center gap-3 py-10 transition-colors duration-200 ${
              isDragging
                ? 'border-gold-400 bg-gold-400/5'
                : fileError
                ? 'border-red-400 bg-red-50'
                : 'border-cream-200 hover:border-gold-400 hover:bg-gold-400/5'
            }`}
          >
            <UploadCloud className={`w-8 h-8 ${isDragging ? 'text-gold-500' : 'text-warm-gray'}`} />
            <div className="text-center">
              <p className="text-sm font-sans text-charcoal-800">
                <span className="font-semibold text-gold-500">Hacé click</span> o arrastrá tu CV acá
              </p>
              <p className="text-xs font-sans text-warm-gray mt-1">PDF, DOC o DOCX — máximo 5 MB</p>
            </div>
            <input
              ref={inputFileRef}
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="sr-only"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
            />
          </div>
        )}
        {fileError && <p className={errorMsgClass}>{fileError}</p>}
      </div>

      {/* Privacidad */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <div className="relative mt-0.5 flex-shrink-0">
            <input type="checkbox" className="sr-only peer" {...register('privacidad')} />
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
            y el uso de mis datos para procesos de selección.{' '}
            <span className="text-gold-500">*</span>
          </span>
        </label>
        {errors.privacidad && <p className={`${errorMsgClass} mt-2`}>{errors.privacidad.message}</p>}
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
          'Enviar mi CV'
        )}
      </button>
    </form>
  )
}
