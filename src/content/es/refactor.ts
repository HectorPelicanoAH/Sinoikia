export const processSteps = [
  { number: '01', title: 'Entender el pueblo', description: 'Recoger necesidades, recursos, viviendas, actividades, servicios y límites. Cada dato conserva su origen y fecha de revisión.' },
  { number: '02', title: 'Explorar posibilidades', description: 'Comparar alternativas: relevo, actividad combinada, servicio itinerante, cooperación entre pueblos o apoyo público.' },
  { number: '03', title: 'Construir el plan', description: 'Convertir la opción elegida en condiciones concretas, responsables y dependencias visibles.' },
  { number: '04', title: 'Reunir a las personas', description: 'Abrir el plan a aportaciones e intereses y revisar el encaje antes de presentar compromisos.' },
]

export type ExampleState = 'interested' | 'pending' | 'reviewing' | 'confirmed'

export const exampleConditions: {
  condition: string
  state: ExampleState
  label: string
  meaning: string
  critical?: boolean
}[] = [
  { condition: 'Persona u hogar que asuma la actividad', state: 'interested', label: 'Interés', meaning: 'Existe una candidatura, pero aún no ha revisado todas las condiciones.' },
  { condition: 'Vivienda habitable y asequible', state: 'pending', label: 'Pendiente', meaning: 'Hay una casa vacía, pero el propietario no ha confirmado su disponibilidad.', critical: true },
  { condition: 'Local y condiciones de relevo', state: 'confirmed', label: 'Confirmado', meaning: 'El espacio, el precio y el calendario están acordados.' },
  { condition: 'Demanda mínima compartida', state: 'reviewing', label: 'En revisión', meaning: 'Los tres pueblos están contrastando compras y servicios necesarios.' },
  { condition: 'Ruta de reparto', state: 'confirmed', label: 'Confirmado', meaning: 'Existen vehículo, horario y responsables definidos.' },
]

export const proposalPieces = [
  'Viviendas realmente disponibles y con condiciones conocidas.',
  'Trabajos, negocios, relevos y oportunidades profesionales.',
  'Servicios cotidianos y formas realistas de acceder a ellos.',
  'Movilidad y colaboración entre municipios.',
  'Personas, familias, profesionales y propietarios interesados.',
  'Límites y prioridades acordados por la comunidad.',
]
