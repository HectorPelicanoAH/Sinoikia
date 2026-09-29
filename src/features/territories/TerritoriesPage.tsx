import { useMemo, useState } from 'react'
import { PlanCard } from '../../components/PlanCard'
import { examplePlans } from '../../content/es/home'

const activities = ['Todas', 'Comercio', 'Cuidados', 'Oficios', 'Servicios']

export function TerritoriesPage() {
  const [query, setQuery] = useState('')
  const [activity, setActivity] = useState('Todas')

  const filteredPlans = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('es')
    return examplePlans.filter((plan) => {
      const matchesText = !normalizedQuery || [plan.place, plan.province, plan.title, ...plan.tags]
        .join(' ')
        .toLocaleLowerCase('es')
        .includes(normalizedQuery)
      const matchesActivity = activity === 'Todas' || plan.tags.includes(activity)
      return matchesText && matchesActivity
    })
  }, [activity, query])

  return (
    <main id="contenido" className="territories-page">
      <section className="page-hero page-shell">
        <p className="eyebrow">Explorar</p>
        <h1>Pueblos con un plan detrás</h1>
        <p className="page-intro">
          Busca oportunidades que conectan vivienda, ingresos, servicios y comunidad. Verás tanto lo
          confirmado como lo que todavía depende de otras condiciones.
        </p>
      </section>

      <section className="territory-browser page-shell" aria-label="Buscador de planes">
        <div className="filters">
          <label className="search-field">
            <span>¿Dónde o qué buscas?</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Provincia, actividad o plan"
            />
          </label>
          <fieldset>
            <legend>Actividad</legend>
            <div className="filter-pills">
              {activities.map((item) => (
                <button
                  className={activity === item ? 'is-active' : ''}
                  key={item}
                  type="button"
                  onClick={() => setActivity(item)}
                  aria-pressed={activity === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="results-heading" aria-live="polite">
          <p><strong>{filteredPlans.length}</strong> planes de ejemplo</p>
          <span>La información se actualizará con cada revisión municipal.</span>
        </div>

        {filteredPlans.length > 0 ? (
          <div className="plans-grid">
            {filteredPlans.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
          </div>
        ) : (
          <div className="empty-state">
            <p className="eyebrow">Sin coincidencias</p>
            <h2>Prueba con una búsqueda más amplia</h2>
            <p>Aún estamos preparando el piloto y el catálogo crecerá por etapas.</p>
            <button type="button" className="button button--ghost" onClick={() => { setQuery(''); setActivity('Todas') }}>
              Limpiar filtros
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
