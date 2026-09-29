import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { readDeliveryResult } from './formSubmit'

type SubmitStatus = 'idle' | 'sending' | 'success' | 'activation' | 'error'

const recipient = String.fromCharCode(
  112, 101, 108, 105, 46, 116, 108, 99, 64, 103, 109, 97, 105, 108, 46, 99,
  111, 109,
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
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 12000)
    setStatus('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        signal: controller.signal,
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
          _url: window.location.href,
        }),
      })

      const delivery = await readDeliveryResult(response)
      if (delivery === 'success') form.reset()
      setStatus(delivery)
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
            {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Gracias. Tu mensaje se ha enviado correctamente.' : status === 'activation' ? 'El destino del formulario aún requiere activación. Tu mensaje no se ha entregado; inténtalo más tarde.' : status === 'error' ? 'No hemos podido confirmar el envío. Inténtalo de nuevo en unos minutos.' : ''}
          </p>
          <button className="button button--primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando...' : 'Enviar consulta'}</button>
        </form>
      </section>
    </main>
  )
}
