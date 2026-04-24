import { z } from 'zod'

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo'),
  email: z
    .string()
    .min(1, 'El email es requerido')
    .email('Ingresá un email válido'),
  telefono: z
    .string()
    .max(20, 'El teléfono es demasiado largo')
    .optional()
    .or(z.literal('')),
  empresa: z
    .string()
    .max(100, 'El nombre de empresa es demasiado largo')
    .optional()
    .or(z.literal('')),
  motivo: z
    .string()
    .min(1, 'Seleccioná un motivo de consulta'),
  mensaje: z
    .string()
    .min(20, 'El mensaje debe tener al menos 20 caracteres')
    .max(2000, 'El mensaje es demasiado largo'),
  privacidad: z
    .boolean()
    .refine((v) => v === true, 'Debés aceptar la política de privacidad'),
})

export type ContactSchema = z.infer<typeof contactSchema>

export const MOTIVOS = [
  { value: 'busqueda', label: 'Búsqueda de personal' },
  { value: 'headhunting', label: 'Headhunting ejecutivo' },
  { value: 'asesoramiento', label: 'Asesoramiento en RRHH' },
  { value: 'evaluacion', label: 'Evaluación de potencial' },
  { value: 'otro', label: 'Otro' },
] as const

export const cvSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z
    .string()
    .min(1, 'El email es requerido')
    .email('Ingresá un email válido'),
  telefono: z
    .string()
    .min(6, 'Ingresá un teléfono válido'),
  linkedin: z
    .string()
    .optional()
    .or(z.literal('')),
  areas: z
    .array(z.string())
    .min(1, 'Seleccioná al menos un área de experiencia'),
  experiencia: z
    .string()
    .min(1, 'Seleccioná los años de experiencia'),
  pretension: z.string().max(100).optional().or(z.literal('')),
  presentacion: z.string().max(2000).optional().or(z.literal('')),
  privacidad: z
    .boolean()
    .refine((v) => v === true, 'Debés aceptar la política de privacidad'),
})

export type CVSchema = z.infer<typeof cvSchema>

export const AREAS = [
  'Comercial',
  'Finanzas',
  'Marketing',
  'RRHH',
  'Tecnología',
  'Operaciones',
  'Legal',
  'Otro',
] as const

export const EXPERIENCIA = [
  { value: '0-2', label: '0 a 2 años' },
  { value: '3-5', label: '3 a 5 años' },
  { value: '6-10', label: '6 a 10 años' },
  { value: '+10', label: 'Más de 10 años' },
] as const
