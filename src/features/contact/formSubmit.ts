export type DeliveryResult = 'success' | 'activation' | 'error'

export async function readDeliveryResult(response: Response): Promise<DeliveryResult> {
  let body: unknown

  try {
    body = await response.json()
  } catch {
    return 'error'
  }

  if (typeof body !== 'object' || body === null) return 'error'

  const result = body as { success?: unknown; message?: unknown }
  if (response.ok && (result.success === true || result.success === 'true')) return 'success'

  if (typeof result.message === 'string' && /activat|confirm/i.test(result.message)) {
    return 'activation'
  }

  return 'error'
}
