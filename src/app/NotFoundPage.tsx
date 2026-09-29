import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main id="contenido" className="not-found page-shell">
      <p className="eyebrow">Error 404</p>
      <h1>Este camino no llega a ningún pueblo</h1>
      <p>La página que buscas no existe o todavía no se ha publicado.</p>
      <Link className="button button--primary" to="/">
        Volver al inicio
      </Link>
    </main>
  )
}
