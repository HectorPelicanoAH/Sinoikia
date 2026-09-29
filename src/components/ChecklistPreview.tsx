const items = [
  { label: 'Viviendas habitables', value: '2 de 3', state: 'reviewed', width: '68%' },
  { label: 'Relevo del comercio', value: 'Confirmado', state: 'confirmed', width: '100%' },
  { label: 'Profesional de cuidados', value: '3 intereses', state: 'interested', width: '40%' },
  { label: 'Transporte escolar', value: 'Confirmado', state: 'confirmed', width: '100%' },
]

export function ChecklistPreview() {
  return (
    <div className="checklist-preview">
      <div className="checklist-preview__heading">
        <div>
          <p className="eyebrow">Plan en preparación</p>
          <h3>Una vida posible, pieza a pieza</h3>
        </div>
        <div className="score-dial" aria-label="72% de cobertura orientativa">
          <strong>72%</strong>
          <span>cubierto</span>
        </div>
      </div>
      <div className="checklist-preview__notice">
        <span aria-hidden="true">!</span>
        <p>
          <strong>Aún no está listo.</strong> Falta confirmar una vivienda imprescindible.
        </p>
      </div>
      <ul className="checklist-preview__items">
        {items.map((item) => (
          <li key={item.label}>
            <span className={`state-dot state-dot--${item.state}`} aria-hidden="true" />
            <div>
              <span>{item.label}</span>
              <div className="mini-progress">
                <span className={`mini-progress__fill mini-progress__fill--${item.state}`} style={{ width: item.width }} />
              </div>
            </div>
            <strong>{item.value}</strong>
          </li>
        ))}
      </ul>
      <div className="evidence-key" aria-label="Leyenda de estados">
        <span><i className="state-dot state-dot--interested" />Interés</span>
        <span><i className="state-dot state-dot--reviewed" />Encaje revisado</span>
        <span><i className="state-dot state-dot--confirmed" />Confirmado</span>
      </div>
    </div>
  )
}
