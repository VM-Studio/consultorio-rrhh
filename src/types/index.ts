export interface ContactFormData {
  nombre: string
  email: string
  telefono?: string
  empresa?: string
  motivo: string
  mensaje: string
  privacidad: boolean
}

export interface CVFormData {
  nombre: string
  email: string
  telefono: string
  linkedin?: string
  areas: string[]
  experiencia: string
  pretension?: string
  presentacion?: string
  privacidad: boolean
}
