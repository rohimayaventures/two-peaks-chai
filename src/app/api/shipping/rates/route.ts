import { NextRequest, NextResponse } from 'next/server'
import { getShippo } from '@/lib/shippo'
import type { ShippingRate } from '@/types'

export const dynamic = 'force-dynamic'

const MOCK_RATES: ShippingRate[] = [
  { id: 'standard', carrier: 'USPS', service: 'Priority Mail', price: 695, estimatedDays: 3 },
  { id: 'express', carrier: 'USPS', service: 'Priority Mail Express', price: 1495, estimatedDays: 1 },
]

interface ShippingItem {
  quantity: number
  /** Weight in oz per unit; defaults to 3 oz */
  weight?: number
}

interface RatesBody {
  address: {
    name: string
    street1: string
    city: string
    state: string
    zip: string
    country: string
  }
  items: ShippingItem[]
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = (await request.json()) as RatesBody

    const totalWeightOz = body.items.reduce((sum, item) => {
      return sum + (item.weight ?? 3) * item.quantity
    }, 0)

    // Convert oz to lbs for Shippo (mass unit)
    const weightLbs = (totalWeightOz / 16).toFixed(4)

    const shippo = getShippo()

    const shipment = await shippo.shipments.create({
      addressFrom: {
        name: 'Two Peaks Chai Co.',
        street1: '123 Mountain Ave',
        city: 'Denver',
        state: 'CO',
        zip: '80203',
        country: 'US',
      },
      addressTo: {
        name: body.address.name,
        street1: body.address.street1,
        city: body.address.city,
        state: body.address.state,
        zip: body.address.zip,
        country: body.address.country,
      },
      parcels: [
        {
          massUnit: 'lb',
          weight: weightLbs,
          distanceUnit: 'in',
          length: '12',
          width: '9',
          height: '4',
        },
      ],
      async: false,
    })

    const rates: ShippingRate[] = (shipment.rates ?? []).map(rate => ({
      id: rate.objectId,
      carrier: rate.provider,
      service: rate.servicelevel.name ?? rate.servicelevel.token ?? '',
      price: Math.round(parseFloat(rate.amount) * 100),
      estimatedDays: rate.estimatedDays ?? 0,
    }))

    return NextResponse.json(rates.length > 0 ? rates : MOCK_RATES)
  } catch {
    return NextResponse.json(MOCK_RATES)
  }
}
