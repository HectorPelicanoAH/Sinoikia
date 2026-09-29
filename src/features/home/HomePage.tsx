import { Link } from 'react-router-dom'
import { ChecklistPreview } from '../../components/ChecklistPreview'
import { PlanCard } from '../../components/PlanCard'
import { examplePlans } from '../../content/es/home'

const systemPieces = [
  { number: '01', title: 'Un lugar', copy: 'Pueblos con necesidades reales, límites claros y una comunidad que participa.' },
  { number: '02', title: 'Una forma de vivir', copy: 'Vivienda, ingresos, servicios y movilidad pensados como un sistema completo.' },
  { number: '03', title: 'Condiciones verificables', copy: 'Cada avance diferencia el interés, el encaje revisado y lo que ya está confirmado.' },
]

export function HomePage() {
  return (
    <main id="contenido">
      <section className="hero">
        <div className="hero__inner page-shell">
          <div className="hero__copy">
            <p className="eyebrow">Condiciones para vivir en comunidad</p>
            <h1>Un pueblo no se habita con una casa. Se habita con una vida posible.</h1>
            <p className="hero__lead">
              Sinoikía reúne vivienda, ingresos, servicios y comunidad para que personas y pueblos
              puedan decidir con información honesta y planes verificables.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary" to="/pueblos">
                Lo tengo claro
              </Link>
              <Link className="button button--ghost" to="/descubrir">
                Quiero descubrir
              </Link>
            </div>
            <p className="hero__note">Explorar es libre. Guardar o presentar interés requiere una cuenta.</p>
          </div>

          <div className="hero__visual" aria-label="Ilustración de un territorio conectado">
            <div className="landscape">
              <div className="landscape__sun" />
              <div className="landscape__mountain landscape__mountain--one" />
              <div className="landscape__mountain landscape__mountain--two" />
              <div className="landscape__field landscape__field--one" />
              <div className="landscape__field landscape__field--two" />
              <div className="landscape__road" />
              <div className="village village--one"><i /><i /><i /></div>
              <div className="village village--two"><i /><i /></div>
              <span className="landscape__label landscape__label--home">Vivienda</span>
              <span className="landscape__label landscape__label--work">Ingresos</span>
              <span className="landscape__label landscape__label--services">Servicios</span>
              <span className="landscape__label landscape__label--community">Comunidad</span>
            </div>
            <div className="hero__signal">
              <span>3 pueblos</span>
              <strong>1 plan compartido</strong>
              <span>12 condiciones visibles</span>
            </div>
          </div>
        </div>
      </section>

      <section className="system-section page-shell" aria-labelledby="system-title">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">La vida no viene por partes</p>
            <h2 id="system-title">Todo lo necesario, en el mismo plan</h2>
          </div>
          <p>
            Una vacante no resuelve la vivienda. Una casa no resuelve los ingresos. Sinoikía hace
            visibles las dependencias antes de que alguien tome una decisión.
          </p>
        </div>
        <ol className="system-grid">
          {systemPieces.map((piece) => (
            <li key={piece.number}>
              <span>{piece.number}</span>
              <h3>{piece.title}</h3>
              <p>{piece.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="honesty-section">
        <div className="honesty-section__inner page-shell">
          <div className="honesty-section__copy">
            <p className="eyebrow">La checklist es el plan</p>
            <h2>Saber qué falta también es avanzar</h2>
            <p>
              Los colores ayudan a leer el progreso, pero cada cifra tiene detrás una condición,
              una fuente, una persona responsable y una fecha de revisión.
            </p>
            <ul className="principle-list">
              <li><span>✓</span> Lo declarado no se presenta como confirmado.</li>
              <li><span>✓</span> Una condición crítica bloquea el mensaje de “listo”.</li>
              <li><span>✓</span> El progreso puede retroceder si cambia la realidad.</li>
            </ul>
          </div>
          <ChecklistPreview />
        </div>
      </section>

      <section className="plans-section page-shell" aria-labelledby="plans-title">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Oportunidades completas</p>
            <h2 id="plans-title">Planes que conectan las piezas</h2>
          </div>
          <div>
            <p>Estos ejemplos muestran cómo se leerán los planes públicos durante el piloto.</p>
            <Link className="text-link" to="/pueblos">Ver todos los pueblos <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="plans-grid">
          {examplePlans.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
        </div>
      </section>

      <section className="paths-section">
        <div className="paths-section__inner page-shell">
          <div className="path-card path-card--clear">
            <p className="eyebrow">Ya sé lo que busco</p>
            <h2>Lo tengo claro</h2>
            <p>Explora por zona, vivienda, actividad, servicios, presupuesto y horizonte de traslado.</p>
            <Link className="button button--light" to="/pueblos">Explorar oportunidades</Link>
          </div>
          <div className="path-card path-card--discover">
            <p className="eyebrow">Necesito ordenar mis opciones</p>
            <h2>Quiero descubrir</h2>
            <p>Cuéntanos qué necesitas y te mostraremos coincidencias, ausencias y condiciones pendientes.</p>
            <Link className="button button--primary" to="/descubrir">Empezar el recorrido</Link>
          </div>
        </div>
      </section>

      <section className="municipal-section page-shell">
        <div className="municipal-section__mark" aria-hidden="true">Ay</div>
        <div>
          <p className="eyebrow">Para ayuntamientos y agrupaciones</p>
          <h2>Del diagnóstico a un plan publicable</h2>
        </div>
        <p>
          Ordena necesidades, compara escenarios y prepara una checklist que el equipo de Sinoikía
          revisará antes de publicar. La primera publicación siempre requiere decisión humana.
        </p>
        <a className="text-link" href="mailto:hola@sinoikia.es?subject=Quiero%20incorporar%20mi%20municipio">
          Incorporar mi municipio <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  )
}
