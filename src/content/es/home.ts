import type { ChecklistCondition } from '../../domain/coverage'

export interface ExamplePlan {
  id: string
  place: string
  province: string
  title: string
  summary: string
  tags: string[]
  housing: string
  timeline: string
  accent: 'forest' | 'clay' | 'ochre'
  conditions: ChecklistCondition[]
}

export const examplePlans: ExamplePlan[] = [
  {
    id: 'cuenca-serrania',
    place: 'Serranía de Cuenca',
    province: 'Cuenca',
    title: 'Relevo para comercio y cuidados',
    summary:
      'Una agrupación de tres pueblos prepara vivienda, ingresos y apoyos para incorporar dos hogares durante el próximo año.',
    tags: ['Comercio', 'Cuidados', 'Familias'],
    housing: '3 viviendas en conversación',
    timeline: 'Horizonte 6–12 meses',
    accent: 'forest',
    conditions: [
      { id: 'home', label: 'Viviendas habitables', targetQuantity: 3, confirmedQuantity: 2, critical: true, state: 'reviewed_fit' },
      { id: 'shop', label: 'Relevo del comercio', targetQuantity: 1, confirmedQuantity: 1, critical: true, state: 'confirmed' },
      { id: 'care', label: 'Profesional de cuidados', targetQuantity: 1, confirmedQuantity: 0, critical: false, state: 'interested' },
      { id: 'school', label: 'Transporte escolar', targetQuantity: 1, confirmedQuantity: 1, critical: true, state: 'confirmed' },
    ],
  },
  {
    id: 'terra-alta',
    place: 'Terra Alta',
    province: 'Tarragona',
    title: 'Taller compartido y vivienda',
    summary:
      'Un municipio explora un taller de oficios y reparación que pueda sostener actividad local durante todo el año.',
    tags: ['Oficios', 'Emprendimiento', 'Vivienda'],
    housing: '2 alquileres condicionados',
    timeline: 'Horizonte 3–9 meses',
    accent: 'clay',
    conditions: [
      { id: 'space', label: 'Local de trabajo', targetQuantity: 1, confirmedQuantity: 1, critical: true, state: 'confirmed' },
      { id: 'homes', label: 'Viviendas asequibles', targetQuantity: 2, confirmedQuantity: 1, critical: true, state: 'reviewed_fit' },
      { id: 'people', label: 'Profesionales compatibles', targetQuantity: 3, confirmedQuantity: 1, critical: false, state: 'interested' },
      { id: 'demand', label: 'Demanda revisada', targetQuantity: 1, confirmedQuantity: 1, critical: true, state: 'confirmed' },
    ],
  },
  {
    id: 'montana-palentina',
    place: 'Montaña Palentina',
    province: 'Palencia',
    title: 'Servicios itinerantes entre pueblos',
    summary:
      'Cinco núcleos cercanos estudian compartir servicios profesionales con rutas, horarios e ingresos mínimos definidos.',
    tags: ['Servicios', 'Movilidad', 'Cooperación'],
    housing: 'Inventario en revisión',
    timeline: 'Horizonte 9–18 meses',
    accent: 'ochre',
    conditions: [
      { id: 'route', label: 'Ruta semanal viable', targetQuantity: 1, confirmedQuantity: 1, critical: true, state: 'confirmed' },
      { id: 'homes', label: 'Vivienda disponible', targetQuantity: 2, confirmedQuantity: 0, critical: true, state: 'uncovered' },
      { id: 'demand', label: 'Demanda mínima', targetQuantity: 5, confirmedQuantity: 3, critical: false, state: 'reviewed_fit' },
      { id: 'mobility', label: 'Vehículo compartido', targetQuantity: 1, confirmedQuantity: 0, critical: false, state: 'interested' },
    ],
  },
]
