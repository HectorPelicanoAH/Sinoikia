import { describe, expect, it } from 'vitest'
import { readDeliveryResult } from './formSubmit'

describe('FormSubmit delivery response', () => {
  it('accepts an explicit success and rejects a failed payload with HTTP 200', async () => {
    const success = new Response(JSON.stringify({ success: 'true' }), { status: 200 })
    const failed = new Response(JSON.stringify({ success: 'false', message: 'Unable to submit form' }), { status: 200 })

    expect(await readDeliveryResult(success)).toBe('success')
    expect(await readDeliveryResult(failed)).toBe('error')
  })

  it('identifies activation and non-JSON errors without reporting success', async () => {
    const activation = new Response(JSON.stringify({ success: 'false', message: 'This form needs Activation.' }), { status: 200 })
    const serverError = new Response('<html>Server Error</html>', { status: 500 })

    expect(await readDeliveryResult(activation)).toBe('activation')
    expect(await readDeliveryResult(serverError)).toBe('error')
  })
})
