import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PlanCard } from '../../components/PlanCard'
import { examplePlans } from '../../content/es/home'

type Household = 'solo' | 'pareja' | 'familia' | 'compartido'
type Horizon = 'pronto' | 'year' | 'exploring'

interface DiscoveryAnswers {
  household: Household | ''
  priority: string
  horizon: Horizon | ''
}

const initialAnswers: DiscoveryAnswers = { household: '', priority: '', horizon: '' }

export function DiscoveryPage() {
  const [answers, setAnswers] = useState(initialAnswers)
  const [showResult, setShowResult] = useState(false)

  const recommendedPlan = useMemo(() => {
    if (answers.priority === 'oficios') return examplePlans[1]
    if (answers.priority === 'servicios') return examplePlans[2]
    return examplePlans[0]
  }, [answers.priority])

  const complete = Boolean(answers.household && answers.priority && answers.horizon)

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (complete) setShowResult(true)
  }

  if (showResult) {
    return (
      <main id="contenido" className="discovery-page discovery-result page-shell">
        <div className="discovery-result__copy">
          <p className="eyebrow">Primera orientación</p>
          <h1>Hay una opción que merece una conversación</h1>
          <p className="page-intro">
            Este resultado se basa solo en tus tres respuestas iniciales. Muestra una coincidencia
            posible, no una recomendación automática ni una garantía de viabilidad.
          </p>
          <div className="match-reasons">
            <h2>Por qué aparece</h2>
            <ul>
              <li>El tipo de actividad encaja con una necesidad declarada.</li>
              <li>El horizonte del plan admite una exploración gradual.</li>
              <li>La vivienda aún necesita revisión antes de asumir disponibilidad.</li>
            </ul>
          </div>
          <button className="text-link button-reset" type="button" onClick={() => setShowResult(false)}>
            ← Cambiar mis respuestas
          </button>
        </div>
        <PlanCard plan={recommendedPlan} />
      </main>
    )
  }

  return (
    <main id="contenido" className="discovery-page">
      <section className="page-hero page-shell">
        <p className="eyebrow">Quiero descubrir</p>
        <h1>Empecemos por la vida que quieres sostener</h1>
        <p className="page-intro">
          Esta primera orientación no pide datos personales. Nos ayuda a explicar qué podría encajar
          y qué información faltaría para tomar una decisión.
        </p>
      </section>

      <section className="discovery-form-wrap page-shell">
        <div className="discovery-progress" aria-label="Paso 1 de 1">
          <span>Orientación inicial</span>
          <strong>3 preguntas</strong>
        </div>
        <form className="discovery-form" onSubmit={submit}>
          <fieldset>
            <legend><span>01</span> ¿Cómo imaginas tu hogar?</legend>
            <div className="choice-grid">
              {[
                ['solo', 'Vivo solo/a'], ['pareja', 'En pareja'], ['familia', 'Con familia'], ['compartido', 'Proyecto compartido'],
              ].map(([value, label]) => (
                <label key={value} className={answers.household === value ? 'is-selected' : ''}>
                  <input
                    type="radio"
                    name="household"
                    value={value}
                    checked={answers.household === value}
                    onChange={() => setAnswers((current) => ({ ...current, household: value as Household }))}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend><span>02</span> ¿Qué pieza quieres resolver primero?</legend>
            <div className="choice-grid choice-grid--three">
              {[
                ['comercio', 'Comercio o relevo'], ['oficios', 'Oficio o taller'], ['servicios', 'Servicios itinerantes'],
              ].map(([value, label]) => (
                <label key={value} className={answers.priority === value ? 'is-selected' : ''}>
                  <input
                    type="radio"
                    name="priority"
                    value={value}
                    checked={answers.priority === value}
                    onChange={() => setAnswers((current) => ({ ...current, priority: value }))}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend><span>03</span> ¿Cuál es tu horizonte?</legend>
            <div className="choice-grid choice-grid--three">
              {[
                ['pronto', 'Menos de 6 meses'], ['year', 'Entre 6 y 18 meses'], ['exploring', 'Solo estoy explorando'],
              ].map(([value, label]) => (
                <label key={value} className={answers.horizon === value ? 'is-selected' : ''}>
                  <input
                    type="radio"
                    name="horizon"
                    value={value}
                    checked={answers.horizon === value}
                    onChange={() => setAnswers((current) => ({ ...current, horizon: value as Horizon }))}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="form-actions">
            <button className="button button--primary" type="submit" disabled={!complete}>
              Ver una primera orientación
            </button>
            <Link className="text-link" to="/pueblos">Prefiero explorar directamente</Link>
          </div>
        </form>
      </section>
    </main>
  )
}
