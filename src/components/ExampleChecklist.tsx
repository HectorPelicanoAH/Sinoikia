import { exampleConditions } from '../content/es/refactor'

const icons = { interested: '◌', pending: '!', reviewing: '↗', confirmed: '✓' }

export function ExampleChecklist() {
  return (
    <div className="example-checklist">
      <div className="example-checklist__header">
        <p className="eyebrow">Caso conceptual · no es una oferta real</p>
        <h3>Lo que existe y lo que falta</h3>
      </div>
      <ul>
        {exampleConditions.map((item) => (
          <li key={item.condition}>
            <span className={`example-state example-state--${item.state}`} aria-hidden="true">{icons[item.state]}</span>
            <div>
              <strong>{item.condition}</strong>
              <span className="example-checklist__meaning">{item.meaning}</span>
            </div>
            <span className={`example-checklist__label example-checklist__label--${item.state}`}>{item.label}</span>
          </li>
        ))}
      </ul>
      <p className="example-checklist__blocker"><strong>Condición imprescindible pendiente:</strong> la vivienda todavía no está disponible. El plan no se presenta como listo.</p>
    </div>
  )
}
