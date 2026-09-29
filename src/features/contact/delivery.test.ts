import { describe, expect, it } from 'vitest'
import { deliveryConfirmed } from './delivery'

describe('contact delivery response', () => {
  it('requires an explicit success from the provider', async () => {
    expect(await deliveryConfirmed(new Response(JSON.stringify({ success: true }), { status: 200 }))).toBe(true)
    expect(await deliveryConfirmed(new Response(JSON.stringify({ success: false, message: 'Invalid access key' }), { status: 200 }))).toBe(false)
  })

  it('rejects HTTP and non-JSON failures', async () => {
    expect(await deliveryConfirmed(new Response('Unavailable', { status: 503 }))).toBe(false)
    expect(await deliveryConfirmed(new Response('<html>Error</html>', { status: 200 }))).toBe(false)
  })
})
