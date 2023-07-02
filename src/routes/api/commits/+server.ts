import type { RequestEvent } from './$types'

export async function POST({ request }: RequestEvent) {
  const payload = await request.json()
  console.log(payload)
  return new Response(null, { status: 201 })
}
