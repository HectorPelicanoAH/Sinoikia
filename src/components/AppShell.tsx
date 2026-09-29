import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/pueblos', label: 'Explorar pueblos' },
  { to: '/descubrir', label: 'Quiero descubrir' },
]

export function AppShell() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink className="brand" to="/" aria-label="Sinoikía, inicio">
            <span className="brand__mark" aria-hidden="true">
              S
            </span>
            <span>
              <strong>Sinoikía</strong>
              <small>Vivir en comunidad</small>
            </span>
          </NavLink>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
            <a href="mailto:hola@sinoikia.es">Hablar con el proyecto</a>
          </nav>

          <details className="mobile-nav">
            <summary aria-label="Abrir navegación">Menú</summary>
            <nav aria-label="Navegación móvil">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to}>
                  {item.label}
                </NavLink>
              ))}
              <a href="mailto:hola@sinoikia.es">Hablar con el proyecto</a>
            </nav>
          </details>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <p className="site-footer__brand">Sinoikía</p>
            <p>Condiciones para vivir en comunidad.</p>
          </div>
          <div className="site-footer__links">
            <NavLink to="/privacidad">Privacidad</NavLink>
            <NavLink to="/terminos">Términos</NavLink>
            <a href="mailto:hola@sinoikia.es">Contacto</a>
          </div>
          <p className="site-footer__note">
            Las oportunidades mostradas en esta versión son ejemplos de diseño y no ofertas reales.
          </p>
        </div>
      </footer>
    </div>
  )
}
