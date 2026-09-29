export async function deliveryConfirmed(response: Response): Promise<boolean> {
  if (!response.ok) return false

  try {
    const body: unknown = await response.json()
    return typeof body === 'object' && body !== null && 'success' in body && body.success === true
  } catch {
    return false
  }
}
