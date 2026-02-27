import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'

export const dynamic = 'force-dynamic'

interface CheckoutItem {
  productId: string
  productName: string
  /** Unit price in cents */
  price?: number
  /** Unit price in cents (alias used by checkout page) */
  unitPrice?: number
  quantity: number
  variantName?: string
}

interface CheckoutBody {
  items: CheckoutItem[]
  customerEmail?: string
  successUrl?: string
  cancelUrl?: string
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = (await request.json()) as CheckoutBody

    if (!Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json({ error: 'items must be a non-empty array' }, { status: 400 })
    }

    const subtotalCents = body.items.reduce((sum, item) => {
      const unitPrice = item.price ?? item.unitPrice ?? 0
      return sum + unitPrice * item.quantity
    }, 0)

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
    const successUrl = body.successUrl ?? `${siteUrl}/checkout?success=1`
    const cancelUrl = body.cancelUrl ?? `${siteUrl}/checkout`

    const stripe = getStripe()

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: body.items.map(item => ({
        quantity: item.quantity,
        price_data: {
          currency: 'usd',
          unit_amount: item.price ?? item.unitPrice ?? 0,
          product_data: {
            name: item.variantName
              ? `${item.productName} — ${item.variantName}`
              : item.productName,
          },
        },
      })),
      customer_email: body.customerEmail,
      shipping_address_collection: { allowed_countries: ['US', 'CA'] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: subtotalCents >= 4500 ? 0 : 695,
              currency: 'usd',
            },
            display_name: 'Standard Shipping',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 3 },
              maximum: { unit: 'business_day', value: 7 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 1495, currency: 'usd' },
            display_name: 'Expedited Shipping',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 1 },
              maximum: { unit: 'business_day', value: 3 },
            },
          },
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: { source: 'two-peaks-chai' },
      allow_promotion_codes: true,
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
