export const processSteps = [
  { number: '01', title: 'Entender', description: '¿Qué necesita el territorio? ¿Qué recursos existen? ¿Qué viviendas, actividades, servicios y capacidades tenemos?' },
  { number: '02', title: 'Imaginar', description: '¿Qué combinaciones podrían funcionar? Un relevo, un nuevo servicio, una actividad compartida o varios pueblos colaborando.' },
  { number: '03', title: 'Comprobar', description: '¿Qué tendría que cumplirse para hacerlo viable? Sinoikía convierte la idea en condiciones concretas y muestra cuáles están confirmadas y cuáles no.' },
  { number: '04', title: 'Conectar', description: 'Cuando existe una oportunidad comprensible, conectamos personas que puedan encajar en ella con personas del territorio que puedan hacerla posible.' },
]

export type ExampleState = 'interested' | 'pending' | 'reviewing' | 'confirmed'

export const exampleConditions: { condition: string; state: ExampleState; label: string; meaning: string }[] = [
  { condition: 'Local disponible', state: 'confirmed', label: 'Confirmado', meaning: 'Condiciones y precio confirmados.' },
  { condition: 'Ruta de reparto', state: 'confirmed', label: 'Confirmado', meaning: 'Vehículo, horarios y responsables definidos.' },
  { condition: 'Demanda suficiente', state: 'reviewing', label: 'En comprobación', meaning: 'Los tres pueblos están comprobando el consumo potencial.' },
  { condition: 'Persona interesada', state: 'interested', label: 'Interés', meaning: 'Existe interés, pero todavía hay que comprobar el encaje.' },
  { condition: 'Vivienda disponible', state: 'pending', label: 'Pendiente', meaning: 'Hay una casa vacía, pero su propietario todavía no ha aceptado alquilarla.' },
]

export const proposalPieces = ['Vivienda disponible', 'Negocio sin relevo', 'Movilidad', 'Servicio necesario', 'Profesional interesado', 'Pueblos cercanos']
