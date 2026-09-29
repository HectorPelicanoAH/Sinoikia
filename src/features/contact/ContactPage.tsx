import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

const recipient = String.fromCharCode(
  102, 48, 97, 99, 101, 54, 49, 50, 49, 57, 56, 101, 101, 53, 55, 48,
  50, 50, 102, 50, 52, 49, 52, 102, 55, 56, 51, 99, 48, 48, 49, 97,
)

const profiles = [
  { value: 'persona', label: 'Persona u hogar' },
  { value: 'municipio', label: 'Municipio' },
  { value: 'propietario', label: 'Propietario/a' },
  { value: 'entidad', label: 'Entidad o colaborador/a' },
  { value: 'otro', label: 'Otro' },
]

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const defaultProfile = searchParams.get('perfil') === 'municipio' ? 'municipio' : 'persona'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    setStatus('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          role: formData.get('role'),
          municipality: formData.get('municipality'),
          message: formData.get('message'),
          _honey: formData.get('_honey'),
          _subject: 'Nuevo contacto desde SINOIKÍA',
          _captcha: 'false',
          _template: 'table',
        }),
      })

      if (!response.ok) throw new Error('Request failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main id="contenido" className="contact-page">
      <section className="page-shell contact-page__intro" aria-labelledby="contact-title">
        <p className="eyebrow">Contacto</p>
        <h1 id="contact-title">Abramos la conversación</h1>
        <p className="page-intro">Si estás pensando en vivir en un pueblo, activar tu municipio o aportar un recurso, cuéntanos desde dónde escribes y qué te gustaría explorar.</p>
      </section>
      <section className="page-shell contact-page__form-section" aria-label="Formulario de contacto">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <label>Nombre<input name="name" type="text" autoComplete="name" required /></label>
            <label>Correo electrónico<input name="email" type="email" autoComplete="email" required /></label>
          </div>

          <label className="contact-form__honeypot" aria-hidden="true">Website<input name="_honey" type="text" tabIndex={-1} autoComplete="off" /></label>

          <div className="contact-form__row">
            <label>Soy:
              <select name="role" defaultValue={defaultProfile} required>
                {profiles.map((profile) => <option key={profile.value} value={profile.value}>{profile.label}</option>)}
              </select>
            </label>
            <label>Municipio/Provincia (opcional)<input name="municipality" type="text" autoComplete="address-level2" /></label>
          </div>

          <label>Mensaje<textarea name="message" rows={6} required /></label>
          <p className="contact-form__note">Cuéntanos qué necesitas, qué puedes aportar o qué pueblo tienes en mente. Contactar no implica ningún compromiso.</p>
          <p className="contact-form__status" data-status={status} role="status" aria-live="polite">
            {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Gracias. Tu mensaje se ha enviado correctamente.' : status === 'error' ? 'No hemos podido enviar tu mensaje. Inténtalo de nuevo en unos minutos.' : ''}
          </p>
          <button className="button button--primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando...' : 'Enviar consulta'}</button>
        </form>
      </section>
    </main>
  )
}
