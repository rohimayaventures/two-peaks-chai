// Shippo SDK uses named exports — import the class directly
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Shippo } = require('shippo') as { Shippo: new (opts: { apiKeyHeader: string }) => InstanceType<typeof import('shippo')['Shippo']> }

export function getShippo() {
  const key = process.env.SHIPPO_API_KEY
  if (!key) throw new Error('Missing SHIPPO_API_KEY')
  return new Shippo({ apiKeyHeader: key })
}
