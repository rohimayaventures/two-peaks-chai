'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'

interface FormState {
  firstName: string
  lastName: string
  email: string
  street: string
  city: string
  state: string
  zip: string
  country: string
}

const EMPTY_FORM: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  country: 'US',
}

export default function CheckoutPage() {
  const items = useCartStore(s => s.items)
  const clearCart = useCartStore(s => s.clearCart)

  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal >= 4500 ? 0 : 895
  const total = subtotal + shipping

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
          },
          shippingAddress: {
            name: `${form.firstName} ${form.lastName}`,
            street1: form.street,
            city: form.city,
            state: form.state,
            zip: form.zip,
            country: form.country,
          },
          items: items.map(item => ({
            productId: item.productId,
            productName: item.product.name,
            quantity: item.quantity,
            unitPrice: item.product.price,
            totalPrice: item.product.price * item.quantity,
          })),
          subtotal,
          shipping,
          total,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error((data as { error?: string }).error ?? 'Something went wrong. Please try again.')
      }

      clearCart()
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  // Success state
  if (success) {
    return (
      <div
        className="min-h-[80vh] flex items-center justify-center px-6"
        style={{ backgroundColor: '#F7F4EE' }}
      >
        <div className="text-center max-w-md">
          <div className="text-6xl mb-8">🫖</div>
          <h1 className="text-4xl mb-4" style={{ color: '#1A1005' }}>
            Order placed.
          </h1>
          <p className="text-base mb-3" style={{ color: '#5C3D1E' }}>
            Your chai is on its way. You&apos;ll receive a confirmation email shortly.
          </p>
          <p className="text-sm mb-10" style={{ color: '#8B6F52' }}>
            Ships within 2 business days. Free shipping applied when eligible.
          </p>
          <Link
            href="/shop"
            className="ui inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#C4622D', color: '#F7F4EE' }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  // Empty cart
  if (items.length === 0) {
    return (
      <div
        className="min-h-[80vh] flex items-center justify-center px-6"
        style={{ backgroundColor: '#F7F4EE' }}
      >
        <div className="text-center max-w-sm">
          <div className="text-5xl mb-6">🛒</div>
          <h1 className="text-3xl mb-4" style={{ color: '#1A1005' }}>
            Your cart is empty.
          </h1>
          <p className="text-sm mb-8" style={{ color: '#8B6F52' }}>
            Add a blend before checking out.
          </p>
          <Link
            href="/shop"
            className="ui inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#C4622D', color: '#F7F4EE' }}
          >
            Shop the Blends
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#F7F4EE', minHeight: '100vh' }}>
      {/* Header */}
      <div
        className="px-6 py-6 text-center"
        style={{ borderBottom: '1px solid #E2D5BC' }}
      >
        <h1 className="text-3xl" style={{ color: '#1A1005' }}>
          Checkout
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Order Summary */}
          <div>
            <h2 className="text-xl mb-8" style={{ color: '#1A1005' }}>
              Order Summary
            </h2>

            <div className="space-y-5 mb-8">
              {items.map(item => (
                <div
                  key={`${item.productId}-${item.variantId ?? 'default'}`}
                  className="flex gap-4 items-center"
                >
                  <div
                    className="w-16 h-16 shrink-0 flex items-center justify-center text-2xl"
                    style={{ backgroundColor: '#EFE8D8' }}
                  >
                    🌿
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-snug" style={{ color: '#2C1B07' }}>
                      {item.product.name}
                    </p>
                    <p className="ui text-[11px]" style={{ color: '#8B6F52' }}>
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="ui text-sm font-semibold shrink-0" style={{ color: '#2C1B07' }}>
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="space-y-3 pt-6"
              style={{ borderTop: '1px solid #E2D5BC' }}
            >
              <div className="flex justify-between">
                <span className="ui text-sm" style={{ color: '#8B6F52' }}>Subtotal</span>
                <span className="ui text-sm" style={{ color: '#2C1B07' }}>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="ui text-sm" style={{ color: '#8B6F52' }}>Shipping</span>
                <span className="ui text-sm" style={{ color: shipping === 0 ? '#5C3D1E' : '#2C1B07' }}>
                  {shipping === 0 ? 'Free' : formatPrice(shipping)}
                </span>
              </div>
              {shipping > 0 && (
                <p className="ui text-[11px]" style={{ color: '#C4622D' }}>
                  Add {formatPrice(4500 - subtotal)} more for free shipping
                </p>
              )}
              <div
                className="flex justify-between pt-3"
                style={{ borderTop: '1px solid #E2D5BC' }}
              >
                <span className="ui text-base font-semibold" style={{ color: '#1A1005' }}>Total</span>
                <span className="ui text-base font-semibold" style={{ color: '#1A1005' }}>{formatPrice(total)}</span>
              </div>
            </div>
          </div>

          {/* Right: Payment Form */}
          <div>
            <h2 className="text-xl mb-8" style={{ color: '#1A1005' }}>
              Your Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="ui block text-[11px] uppercase tracking-wider mb-2"
                    style={{ color: '#5C3D1E' }}
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white focus:outline-none"
                    style={{ border: '1px solid #E2D5BC', color: '#2C1B07' }}
                    placeholder="Maya"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="ui block text-[11px] uppercase tracking-wider mb-2"
                    style={{ color: '#5C3D1E' }}
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white focus:outline-none"
                    style={{ border: '1px solid #E2D5BC', color: '#2C1B07' }}
                    placeholder="Patel"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="ui block text-[11px] uppercase tracking-wider mb-2"
                  style={{ color: '#5C3D1E' }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm bg-white focus:outline-none"
                  style={{ border: '1px solid #E2D5BC', color: '#2C1B07' }}
                  placeholder="maya@example.com"
                />
              </div>

              {/* Street */}
              <div>
                <label
                  htmlFor="street"
                  className="ui block text-[11px] uppercase tracking-wider mb-2"
                  style={{ color: '#5C3D1E' }}
                >
                  Street Address
                </label>
                <input
                  id="street"
                  name="street"
                  type="text"
                  required
                  value={form.street}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm bg-white focus:outline-none"
                  style={{ border: '1px solid #E2D5BC', color: '#2C1B07' }}
                  placeholder="123 Mountain Ave"
                />
              </div>

              {/* City + State row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="ui block text-[11px] uppercase tracking-wider mb-2"
                    style={{ color: '#5C3D1E' }}
                  >
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={form.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white focus:outline-none"
                    style={{ border: '1px solid #E2D5BC', color: '#2C1B07' }}
                    placeholder="Salida"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="ui block text-[11px] uppercase tracking-wider mb-2"
                    style={{ color: '#5C3D1E' }}
                  >
                    State
                  </label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    required
                    value={form.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white focus:outline-none"
                    style={{ border: '1px solid #E2D5BC', color: '#2C1B07' }}
                    placeholder="CO"
                  />
                </div>
              </div>

              {/* Zip + Country row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="zip"
                    className="ui block text-[11px] uppercase tracking-wider mb-2"
                    style={{ color: '#5C3D1E' }}
                  >
                    ZIP Code
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    required
                    value={form.zip}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white focus:outline-none"
                    style={{ border: '1px solid #E2D5BC', color: '#2C1B07' }}
                    placeholder="81201"
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="ui block text-[11px] uppercase tracking-wider mb-2"
                    style={{ color: '#5C3D1E' }}
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={form.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white focus:outline-none"
                    style={{ border: '1px solid #E2D5BC', color: '#2C1B07' }}
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div
                  className="px-4 py-3 text-sm"
                  style={{ backgroundColor: '#FDE8E8', color: '#9B1414', border: '1px solid #F5BCBC' }}
                >
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="ui w-full py-4 text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#C4622D', color: '#F7F4EE' }}
              >
                {loading ? 'Placing Order…' : `Complete Order — ${formatPrice(total)}`}
              </button>

              <p className="ui text-[11px] text-center" style={{ color: '#8B6F52' }}>
                By placing your order you agree to our{' '}
                <Link href="/terms" className="underline hover:text-[#C4622D]">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="underline hover:text-[#C4622D]">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
