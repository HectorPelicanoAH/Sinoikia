import { Link } from 'react-router-dom'
import { ConceptImage } from '../../components/ConceptImage'
import { processSteps } from '../../content/es/refactor'

export function MunicipalityPage() {
  return (
    <main id="contenido" className="municipality-page">
      <section className="page-shell municipality-hero">
        <div>
          <p className="eyebrow">Para ayuntamientos y agrupaciones</p>
          <h1>Activar mi municipio</h1>
          <p className="page-intro">Convierte necesidades dispersas en un plan común. Sinoikía ayuda a ordenar la realidad del territorio, explorar alternativas y publicar condiciones claras tras una revisión humana.</p>
          <a className="button button--primary" href="mailto:hola@sinoikia.es?subject=Activar%20mi%20municipio">Hablar con el proyecto</a>
        </div>
        <ConceptImage id="municipios" caption="Escena conceptual: un servicio compartido conecta pueblos cercanos." />
      </section>
      <section className="narrative-section narrative-section--soft">
        <div className="page-shell">
          <p className="eyebrow">El recorrido municipal</p>
          <h2>De los recursos reales a un plan verificable</h2>
          <ol className="narrative-steps narrative-steps--light">
            {processSteps.map((step) => <li key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}
          </ol>
          <p>La primera publicación requiere revisión del equipo de Sinoikía. Ningún interés se presenta como compromiso ni ninguna vivienda como disponible sin confirmación.</p>
          <Link className="text-link" to="/">Volver al inicio</Link>
        </div>
      </section>
    </main>
  )
}
