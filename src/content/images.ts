export type ImageId = 'hero' | 'problema' | 'propuesta' | 'vivienda' | 'comercio' | 'personas' | 'municipios' | 'cierre'

type ImageAsset = {
  alt: string
  width: number
  height: number
  position?: string
}

export const images: Record<ImageId, ImageAsset> = {
  hero: { alt: 'Dos personas observan un pueblo habitado y la carretera que lo conecta con otro núcleo.', width: 1536, height: 1024, position: 'center' },
  problema: { alt: 'Una vivienda cerrada, un comercio con la persiana bajada y una parada de autobús en una calle de pueblo.', width: 1200, height: 800 },
  propuesta: { alt: 'Vecinos y representantes locales estudian un mapa de varios pueblos alrededor de una mesa.', width: 1200, height: 800 },
  vivienda: { alt: 'Una propietaria abre una vivienda mientras otra persona revisa su estado y toma notas.', width: 1200, height: 800 },
  comercio: { alt: 'Una comerciante prepara cajas de productos cotidianos para repartir entre pueblos cercanos.', width: 1200, height: 800 },
  personas: { alt: 'Dos personas conversan con un comerciante local en una plaza de pueblo.', width: 1200, height: 800 },
  municipios: { alt: 'Representantes y vecinos de varios pueblos trabajan juntos sobre un mapa de rutas.', width: 1200, height: 800 },
  cierre: { alt: 'Comercio abierto, vecinos y un profesional junto a una furgoneta en una calle habitada.', width: 1200, height: 800 },
}

export function imageUrl(id: ImageId, format: 'avif' | 'webp' | 'jpg' = 'webp') {
  return `${import.meta.env.BASE_URL}images/${id}.${format}`
}
