import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { deliveryConfirmed } from './delivery'

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

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
    if (!accessKey) return
    const form = event.currentTarget
    const formData = new FormData(form)
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 12000)
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.get('name'),
          email: formData.get('email'),
          role: formData.get('role'),
          municipality: formData.get('municipality'),
          message: formData.get('message'),
          botcheck: formData.get('botcheck'),
          subject: 'Nuevo contacto desde SINOIKÍA',
          from_name: 'Sinoikía',
        }),
      })

      if (await deliveryConfirmed(response)) {
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      window.clearTimeout(timeout)
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

          <label className="contact-form__honeypot" aria-hidden="true">Website<input name="botcheck" type="text" tabIndex={-1} autoComplete="off" /></label>

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
          <p className="contact-form__status" data-status={accessKey ? status : 'unavailable'} role="status" aria-live="polite">
            {!accessKey ? 'El formulario de contacto no está disponible temporalmente. Vuelve a intentarlo más tarde.' : status === 'sending' ? 'Enviando...' : status === 'success' ? 'Gracias. Tu mensaje se ha enviado correctamente.' : status === 'error' ? 'No hemos podido confirmar el envío. Inténtalo de nuevo en unos minutos.' : ''}
          </p>
          <button className="button button--primary" type="submit" disabled={!accessKey || status === 'sending'}>{status === 'sending' ? 'Enviando...' : 'Enviar consulta'}</button>
        </form>
      </section>
    </main>
  )
}
