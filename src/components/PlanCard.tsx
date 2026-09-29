import { Link } from 'react-router-dom'
import { hasCriticalBlocker, planCoverage } from '../domain/coverage'
import type { ExamplePlan } from '../content/es/home'

export function PlanCard({ plan, compact = false }: { plan: ExamplePlan; compact?: boolean }) {
  const coverage = Math.round(planCoverage(plan.conditions) * 100)
  const blocked = hasCriticalBlocker(plan.conditions)

  return (
    <article className={`plan-card plan-card--${plan.accent}`}>
      <div className="plan-card__art" aria-hidden="true">
        <span className="plan-card__sun" />
        <span className="plan-card__hill plan-card__hill--back" />
        <span className="plan-card__hill plan-card__hill--front" />
        <span className="plan-card__house" />
      </div>
      <div className="plan-card__body">
        <p className="concept-tag">Ejemplo conceptual · no es una oferta real</p>
        <p className="plan-card__place">
          {plan.place} <span>{plan.province}</span>
        </p>
        <h3>{plan.title}</h3>
        <p>{plan.summary}</p>
        {!compact && (
          <ul className="tag-list" aria-label="Ámbitos del plan">
            {plan.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <div className="plan-card__facts">
          <span>{plan.housing}</span>
          <span>{plan.timeline}</span>
        </div>
        <div className="coverage-line">
          <div>
            <span>Cobertura confirmada</span>
            <strong>{coverage}%</strong>
          </div>
          <div className="coverage-line__track" aria-label={`${coverage}% de cobertura confirmada`}>
            <span style={{ width: `${coverage}%` }} />
          </div>
          {blocked && <p>Queda una condición imprescindible por cubrir</p>}
        </div>
        <Link className="text-link" to="/descubrir">
          Explorar mi orientación <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}
