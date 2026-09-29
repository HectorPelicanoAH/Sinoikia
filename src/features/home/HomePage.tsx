import { Link } from 'react-router-dom'
import { ConceptImage } from '../../components/ConceptImage'
import { ExampleChecklist } from '../../components/ExampleChecklist'
import { processSteps, proposalPieces } from '../../content/es/refactor'

export function HomePage() {
  return (
    <main id="contenido" className="narrative-home">
      <section className="narrative-hero page-shell" aria-labelledby="hero-title">
        <div className="narrative-hero__copy">
          <p className="eyebrow">Sinoikía · Habitar juntos</p>
          <h1 id="hero-title">Construir una vida posible</h1>
          <p className="narrative-hero__lead">Sinoikía nace de una idea sencilla: un pueblo cobra vida cuando vivienda, trabajo, servicios y personas consiguen encajar.</p>
          <p>Ayudamos a pueblos y personas a reunir esas piezas y convertir necesidades dispersas en planes de vida posibles.</p>
          <div className="narrative-actions">
            <Link className="button button--primary" to="/descubrir">Quiero encontrar mi lugar</Link>
            <Link className="button button--ghost" to="/municipios">Quiero activar mi municipio</Link>
          </div>
        </div>
        <ConceptImage id="hero" priority caption="Escena conceptual: un territorio habitado y conectado." />
      </section>

      <section id="problema" className="narrative-section narrative-section--soft" aria-labelledby="problem-title">
        <div className="page-shell narrative-split">
          <div className="narrative-copy">
            <p className="eyebrow">El problema</p>
            <h2 id="problem-title">Hay personas que quieren vivir en un pueblo. Y pueblos que necesitan personas.</h2>
            <p>El problema es que rara vez se encuentran todas las condiciones a la vez. Una vivienda puede estar vacía pero no disponible. Un negocio puede necesitar relevo, pero no ofrecer una casa. Un servicio puede no sostenerse en un solo municipio, aunque sí entre varios pueblos cercanos.</p>
            <p>Las piezas existen, pero aparecen dispersas. Quien quiere mudarse tiene que averiguarlo todo por su cuenta y quien quiere impulsar su pueblo no dispone de una forma clara de organizarlo.</p>
          </div>
          <ConceptImage id="problema" caption="Escena conceptual: vivienda, comercio y transporte aún desconectados." />
        </div>
      </section>

      <section id="propuesta" className="narrative-section" aria-labelledby="proposal-title">
        <div className="page-shell narrative-split narrative-split--reverse">
          <ConceptImage id="propuesta" caption="Escena conceptual: un plan se construye con información y acuerdos locales." />
          <div className="narrative-copy">
            <p className="eyebrow">La propuesta</p>
            <h2 id="proposal-title">Reunir las piezas antes de pedir a alguien que dé el paso</h2>
            <p>Sinoikía ayuda a un pueblo o a varios municipios cercanos a comprender qué necesitan, qué pueden ofrecer y qué condiciones deben reunirse para que una iniciativa o un proyecto de vida pueda funcionar de verdad.</p>
            <ul className="proposal-pieces">{proposalPieces.map((piece) => <li key={piece}>{piece}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="narrative-section narrative-section--dark" aria-labelledby="process-title">
        <div className="page-shell">
          <p className="eyebrow">Cómo funciona</p>
          <h2 id="process-title">Del conocimiento del lugar a un plan compartido</h2>
          <ol className="narrative-steps">
            {processSteps.map((step) => <li key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}
          </ol>
          <div className="process-photo">
            <ConceptImage id="vivienda" caption="Escena conceptual: comprobar una casa antes de llamarla disponible." />
            <p>Entender el territorio también significa comprobar sobre el terreno qué recursos están realmente disponibles.</p>
          </div>
        </div>
      </section>

      <section id="ejemplo" className="narrative-section example-section" aria-labelledby="example-title">
        <div className="page-shell">
          <div className="example-intro">
            <div>
              <p className="eyebrow">Ejemplo conceptual · no es una oferta real</p>
              <h2 id="example-title">Tres pueblos quieren recuperar un comercio cotidiano</h2>
              <p>Por separado, ninguno sostiene una tienda completa. Juntos podrían mantener un pequeño comercio con reparto, punto de recogida y atención programada. Para convertir la idea en una oportunidad real, el plan necesita reunir varias condiciones.</p>
            </div>
            <ConceptImage id="comercio" caption="Escena conceptual: el reparto conecta la actividad de varios pueblos." />
          </div>
          <ExampleChecklist />
          <p className="example-outro">El plan no se presentará como listo mientras falte la vivienda, aunque otras condiciones estén cubiertas. La checklist hace visible el bloqueo y permite saber qué conversación debe ocurrir a continuación.</p>
        </div>
      </section>

      <section className="narrative-section narrative-section--soft" aria-labelledby="honesty-title">
        <div className="page-shell honesty-layout">
          <div className="narrative-copy">
            <p className="eyebrow">Honestidad y progreso</p>
            <h2 id="honesty-title">Saber qué falta también es avanzar</h2>
            <p>Una persona interesada no es todavía un compromiso. Una vivienda vacía no es necesariamente una vivienda disponible. Una ayuda solicitada no es financiación concedida. Sinoikía diferencia lo que se ha propuesto, lo que está siendo revisado y lo que ya se ha confirmado.</p>
          </div>
          <ul className="honesty-points">
            <li>Una condición imprescindible puede impedir que un plan esté listo.</li>
            <li>Los datos muestran fuente y fecha de revisión.</li>
            <li>Los estados pueden retroceder si cambia la realidad.</li>
            <li>Cualquier porcentaje se presenta con desglose, sin prometer éxito.</li>
          </ul>
        </div>
      </section>

      <section className="narrative-section pathways-section" aria-labelledby="pathways-title">
        <div className="page-shell">
          <p className="eyebrow">Dos formas de empezar</p>
          <h2 id="pathways-title">Una puerta para cada pregunta</h2>
          <div className="pathways-grid">
            <article>
              <ConceptImage id="personas" caption="Escena conceptual: conocer la vida cotidiana del lugar." />
              <div><p className="eyebrow">Para personas y hogares</p><h3>Busca una vida que pueda sostenerse</h3><p>Cuéntanos qué necesitas, qué sabes hacer, quién forma parte de tu hogar y en qué condiciones te plantearías un cambio. Te mostraremos lugares donde podrías encajar, condiciones todavía pendientes y necesidades a las que podrías contribuir.</p><Link className="button button--primary" to="/descubrir">Encontrar mi lugar</Link></div>
            </article>
            <article>
              <ConceptImage id="municipios" caption="Escena conceptual: una ruta compartida conecta pueblos cercanos." />
              <div><p className="eyebrow">Para municipios</p><h3>Convierte necesidades dispersas en un plan común</h3><p>Ordena la realidad del territorio, compara opciones y prepara un plan con condiciones, responsables y límites claros. El equipo de Sinoikía revisará la primera publicación para asegurar que la información sea comprensible, prudente y verificable.</p><Link className="button button--ghost" to="/municipios">Activar mi municipio</Link></div>
            </article>
          </div>
        </div>
      </section>

      <section className="narrative-section territory-vision" aria-labelledby="territory-title">
        <div className="page-shell narrative-split">
          <div className="narrative-copy"><p className="eyebrow">Un territorio compartido</p><h2 id="territory-title">Una comunidad completa puede abarcar varios pueblos</h2><p>No hace falta que cada pueblo tenga todos los servicios dentro de su término municipal. Hace falta que las personas puedan acceder a lo necesario para sostener su vida cotidiana. Sinoikía ayuda a organizar ese territorio compartido como una comunidad y no como una suma de municipios aislados.</p></div>
          <ConceptImage id="territorio" caption="Escena conceptual: la vida cotidiana cruza límites municipales." />
        </div>
      </section>

      <section className="closing-section" aria-labelledby="closing-title">
        <ConceptImage id="cierre" caption="Escena conceptual: una comunidad se reconoce en su vida cotidiana." />
        <div className="page-shell closing-section__copy"><p className="eyebrow">Habitar juntos</p><h2 id="closing-title">Los pueblos ya tienen muchas de las piezas</h2><p>Sinoikía ayuda a encontrarlas, conectarlas y descubrir cuáles siguen faltando. Porque atraer habitantes es solo el principio. El objetivo es hacer posible que puedan quedarse.</p><Link className="button button--light" to="/descubrir">Encontrar mi lugar</Link></div>
      </section>
    </main>
  )
}
