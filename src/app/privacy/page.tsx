import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Two Peaks Chai Co. — how we collect, use, and protect your data.',
}

const LAST_UPDATED = 'January 1, 2025'

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#F7F4EE', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="ui text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: '#C4622D' }}>
          Legal
        </p>
        <h1 className="text-5xl mb-4" style={{ color: '#1A1005' }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-16" style={{ color: '#8B6F52' }}>
          Last updated: {LAST_UPDATED}
        </p>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              1. Data We Collect
            </h2>
            <div className="space-y-3 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                When you place an order or create an account with Two Peaks Chai Co., we collect
                the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Shipping and billing address</li>
                <li>Payment information (processed securely by Stripe — we never store card numbers)</li>
                <li>Order history and purchase preferences</li>
                <li>Device information and browsing behavior on our site (via cookies)</li>
              </ul>
              <p>
                We do not collect sensitive personal information such as Social Security numbers,
                health records, or financial account numbers beyond payment processing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              2. How We Use Your Data
            </h2>
            <div className="space-y-3 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmation and shipping updates</li>
                <li>Respond to customer service inquiries</li>
                <li>Send marketing emails (only with your consent — you may unsubscribe at any time)</li>
                <li>Improve our website and product offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>
                We will never sell your personal information to third parties. We do not share your
                data for advertising purposes outside our own marketing communications.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              3. Third-Party Services
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                We work with trusted third-party services to operate our business. These services
                may process your data under their own privacy policies:
              </p>
              <div className="space-y-4">
                <div className="pl-6">
                  <p className="font-medium" style={{ color: '#2C1B07' }}>Stripe (Payment Processing)</p>
                  <p>
                    All payment information is processed by Stripe, Inc. Two Peaks Chai Co. never
                    sees or stores your full card number. Stripe's privacy policy is available at
                    stripe.com/privacy.
                  </p>
                </div>
                <div className="pl-6">
                  <p className="font-medium" style={{ color: '#2C1B07' }}>Shippo (Shipping & Fulfillment)</p>
                  <p>
                    We use Shippo to generate shipping labels and tracking. Your name and shipping
                    address are shared with Shippo and the relevant carrier (USPS, UPS, FedEx) to
                    fulfill your order.
                  </p>
                </div>
                <div className="pl-6">
                  <p className="font-medium" style={{ color: '#2C1B07' }}>Resend (Email Communications)</p>
                  <p>
                    We use Resend to send transactional and marketing emails. Your email address is
                    stored with Resend for this purpose.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              4. Your Rights
            </h2>
            <div className="space-y-3 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal retention requirements)</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p>
                California residents have additional rights under the CCPA, including the right to
                know what data we collect and the right to non-discrimination for exercising
                privacy rights.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              5. Contact Us
            </h2>
            <div className="text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                For any privacy-related questions or requests, please contact us at:
              </p>
              <p className="mt-4">
                <strong style={{ color: '#2C1B07' }}>Two Peaks Chai Co.</strong>
                <br />
                privacy@twopeakschai.com
                <br />
                Salida, Colorado 81201
              </p>
              <p className="mt-4">
                We will respond to all requests within 30 days.
              </p>
            </div>
          </section>
        </div>

        {/* Footer nav */}
        <div
          className="mt-20 pt-8 flex flex-wrap gap-6"
          style={{ borderTop: '1px solid #E2D5BC' }}
        >
          <Link href="/terms" className="ui text-sm underline underline-offset-4 hover:opacity-70" style={{ color: '#5C3D1E' }}>
            Terms of Service
          </Link>
          <Link href="/shipping" className="ui text-sm underline underline-offset-4 hover:opacity-70" style={{ color: '#5C3D1E' }}>
            Shipping Policy
          </Link>
          <Link href="/shop" className="ui text-sm underline underline-offset-4 hover:opacity-70" style={{ color: '#C4622D' }}>
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  )
}
