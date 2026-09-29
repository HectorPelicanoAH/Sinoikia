import { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export function AppShell() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView())
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const links = <>
    <Link to="/#como-funciona" onClick={() => setOpen(false)}>Cómo funciona</Link>
    <Link to="/pueblos" onClick={() => setOpen(false)}>Explorar</Link>
    <Link to="/municipios" onClick={() => setOpen(false)}>Para municipios</Link>
    <Link to="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
  </>

  return <>
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="Sinoikía, ir al inicio"><span className="brand__mark">S</span><span><strong>Sinoikía</strong><small>Habitar juntos</small></span></Link>
        <nav className="desktop-nav" aria-label="Navegación principal">{links}</nav>
        <div className="header-actions"><Link className="header-actions__person" to="/descubrir">Encontrar mi lugar</Link><Link className="header-actions__municipality" to="/municipios">Activar mi municipio</Link></div>
        <div className="mobile-nav"><button ref={toggleRef} type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>{open ? 'Cerrar' : 'Menú'}<span aria-hidden="true">{open ? '×' : '☰'}</span></button>{open && <nav id="mobile-menu" aria-label="Navegación móvil">{links}<Link to="/descubrir" onClick={() => setOpen(false)}>Encontrar mi lugar</Link><Link to="/municipios" onClick={() => setOpen(false)}>Activar mi municipio</Link></nav>}</div>
      </div>
    </header>
    <Outlet />
    <footer className="site-footer"><div className="site-footer__inner"><div><Link className="site-footer__brand" to="/">Sinoikía</Link><p>Construir una vida posible, juntos.</p></div><nav className="site-footer__links" aria-label="Enlaces del pie"><Link to="/privacidad">Privacidad</Link><Link to="/terminos">Términos</Link><Link to="/contacto">Contacto</Link></nav><p className="site-footer__note">Las escenas y planes de ejemplo son conceptuales. Una oportunidad solo se considera disponible cuando se comprueban sus condiciones.</p></div></footer>
  </>
}
