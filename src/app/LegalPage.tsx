export function LegalPage({ type }: { type: 'privacy' | 'terms' }) {
  const isPrivacy = type === 'privacy'

  return (
    <main id="contenido" className="legal-page page-shell">
      <p className="eyebrow">Documento en preparación</p>
      <h1>{isPrivacy ? 'Privacidad' : 'Términos de uso'}</h1>
      <p className="page-intro">
        {isPrivacy
          ? 'Antes del piloto publicaremos aquí la finalidad, la retención y los derechos asociados a cada categoría de datos.'
          : 'Antes de abrir candidaturas publicaremos las condiciones de participación y el alcance de la información ofrecida.'}
      </p>
    </main>
  )
}
