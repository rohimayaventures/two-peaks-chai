import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shipping Policy',
  description:
    'Two Peaks Chai Co. shipping policy — free shipping over $45, processing times, carriers, delivery estimates, and international orders.',
}

const LAST_UPDATED = 'January 1, 2025'

export default function ShippingPage() {
  return (
    <div style={{ backgroundColor: '#F7F4EE', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="ui text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: '#C4622D' }}>
          Legal
        </p>
        <h1 className="text-5xl mb-4" style={{ color: '#1A1005' }}>
          Shipping Policy
        </h1>
        <p className="text-sm mb-16" style={{ color: '#8B6F52' }}>
          Last updated: {LAST_UPDATED}
        </p>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              1. Free Shipping
            </h2>
            <div className="space-y-3 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <div
                className="p-5"
                style={{ backgroundColor: '#EFE8D8', borderLeft: '3px solid #C4622D' }}
              >
                <p className="font-medium" style={{ color: '#2C1B07' }}>
                  Free standard shipping on all US orders over $45.
                </p>
              </div>
              <p>
                Orders under $45 are charged a flat rate of $8.95 for standard shipping within
                the contiguous United States.
              </p>
              <p>
                Free shipping applies automatically at checkout when your order total meets the
                threshold. No coupon code required.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              2. Processing Times
            </h2>
            <div className="space-y-3 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                Because every blend is made in small batches, we pack and ship all orders within
                <strong style={{ color: '#2C1B07' }}> 1–2 business days</strong> of order placement.
              </p>
              <p>
                Orders placed after 2 PM Mountain Time on Friday will be processed the following
                Monday. We do not ship on weekends or US federal holidays.
              </p>
              <p>
                During high-demand periods (holiday seasons, new product launches), processing
                times may extend to 3–4 business days. We will communicate any delays by email.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              3. Carriers
            </h2>
            <div className="space-y-3 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                We ship via the following carriers, selected based on your location and the most
                reliable delivery method:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong style={{ color: '#2C1B07' }}>USPS</strong> — Standard and Priority Mail
                  for most domestic orders
                </li>
                <li>
                  <strong style={{ color: '#2C1B07' }}>UPS</strong> — Ground and 2-Day for
                  larger orders and bundles
                </li>
                <li>
                  <strong style={{ color: '#2C1B07' }}>FedEx</strong> — Used for expedited
                  shipping options
                </li>
              </ul>
              <p>
                The carrier is selected at our discretion based on your delivery location and
                order size. We use Shippo to optimize carrier selection and generate labels.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              4. Delivery Estimates
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                Estimated delivery times after processing (not including processing time):
              </p>
              <div
                className="overflow-x-auto"
              >
                <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#EFE8D8' }}>
                      <th className="ui text-left px-4 py-3 text-[11px] uppercase tracking-wider" style={{ color: '#5C3D1E', border: '1px solid #E2D5BC' }}>
                        Shipping Method
                      </th>
                      <th className="ui text-left px-4 py-3 text-[11px] uppercase tracking-wider" style={{ color: '#5C3D1E', border: '1px solid #E2D5BC' }}>
                        Estimated Delivery
                      </th>
                      <th className="ui text-left px-4 py-3 text-[11px] uppercase tracking-wider" style={{ color: '#5C3D1E', border: '1px solid #E2D5BC' }}>
                        Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { method: 'Standard (USPS / UPS Ground)', delivery: '3–7 business days', cost: 'Free over $45 · $8.95 under' },
                      { method: 'Priority (USPS Priority Mail)', delivery: '2–3 business days', cost: '$12.95' },
                      { method: 'Expedited (UPS / FedEx 2-Day)', delivery: '1–2 business days', cost: '$24.95' },
                    ].map((row, i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#F7F4EE' : '#FAF8F4' }}>
                        <td className="px-4 py-3" style={{ border: '1px solid #E2D5BC', color: '#2C1B07' }}>
                          {row.method}
                        </td>
                        <td className="px-4 py-3" style={{ border: '1px solid #E2D5BC', color: '#5C3D1E' }}>
                          {row.delivery}
                        </td>
                        <td className="px-4 py-3 ui" style={{ border: '1px solid #E2D5BC', color: '#5C3D1E' }}>
                          {row.cost}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm" style={{ color: '#8B6F52' }}>
                Delivery estimates are provided by the carrier and are not guaranteed. We are not
                responsible for delays caused by weather, carrier issues, or incorrect addresses.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              5. International Shipping
            </h2>
            <div className="space-y-3 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                We currently ship to the following countries:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>United States (all 50 states and DC)</li>
                <li>Canada</li>
                <li>United Kingdom</li>
                <li>Australia</li>
              </ul>
              <p>
                International shipping rates are calculated at checkout based on destination,
                package weight, and carrier rates. International orders typically take
                <strong style={{ color: '#2C1B07' }}> 7–21 business days</strong> depending on
                customs clearance.
              </p>
              <p>
                <strong style={{ color: '#2C1B07' }}>Customs and duties</strong> are the
                responsibility of the recipient. We declare all packages at their full value and
                cannot mark orders as &quot;gifts&quot; to avoid duties.
              </p>
              <p>
                We are not responsible for packages delayed or held by customs. If a package is
                refused or undeliverable internationally, the customer is responsible for return
                shipping costs.
              </p>
              <p>
                For inquiries about shipping to countries not listed above, contact us at
                orders@twopeakschai.com.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              6. Lost or Damaged Shipments
            </h2>
            <div className="space-y-3 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                If your package is marked as delivered but you have not received it, please:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Check with neighbors and building management</li>
                <li>Wait 24 hours (carriers sometimes prematurely mark items as delivered)</li>
                <li>Contact the carrier with your tracking number</li>
                <li>If unresolved, contact us at orders@twopeakschai.com</li>
              </ol>
              <p>
                For damaged shipments, please keep all packaging and contact us within 7 days
                of delivery with photos. We will file a claim with the carrier and ship a
                replacement at no charge.
              </p>
            </div>
          </section>
        </div>

        {/* Footer nav */}
        <div
          className="mt-20 pt-8 flex flex-wrap gap-6"
          style={{ borderTop: '1px solid #E2D5BC' }}
        >
          <Link href="/privacy" className="ui text-sm underline underline-offset-4 hover:opacity-70" style={{ color: '#5C3D1E' }}>
            Privacy Policy
          </Link>
          <Link href="/terms" className="ui text-sm underline underline-offset-4 hover:opacity-70" style={{ color: '#5C3D1E' }}>
            Terms of Service
          </Link>
          <Link href="/shop" className="ui text-sm underline underline-offset-4 hover:opacity-70" style={{ color: '#C4622D' }}>
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  )
}
