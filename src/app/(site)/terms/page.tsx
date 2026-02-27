import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Two Peaks Chai Co.',
}

const LAST_UPDATED = 'January 1, 2025'

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#F7F4EE', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="ui text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: '#C4622D' }}>
          Legal
        </p>
        <h1 className="text-5xl mb-4" style={{ color: '#1A1005' }}>
          Terms of Service
        </h1>
        <p className="text-sm mb-16" style={{ color: '#8B6F52' }}>
          Last updated: {LAST_UPDATED}
        </p>

        <p className="text-base leading-relaxed mb-16" style={{ color: '#5C3D1E' }}>
          By accessing or using the Two Peaks Chai Co. website and purchasing our products, you
          agree to these Terms of Service. Please read them carefully. If you do not agree, you
          may not use our services.
        </p>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              1. Products
            </h2>
            <div className="space-y-3 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                All products sold by Two Peaks Chai Co. are food products intended for human
                consumption. Our blends are crafted from food-grade, organic ingredients.
              </p>
              <p>
                Product descriptions, images, and ingredient lists are provided in good faith and
                are as accurate as possible. Due to the handcrafted, small-batch nature of our
                products, minor variations in color, texture, and flavor are expected and do not
                constitute a defect.
              </p>
              <p>
                We reserve the right to discontinue any product at any time. Product availability
                is not guaranteed until your order is confirmed.
              </p>
              <p>
                Our products are not intended to diagnose, treat, cure, or prevent any disease.
                Statements about ingredient benefits are based on traditional Ayurvedic use and
                have not been evaluated by the FDA. If you have a medical condition or are taking
                medications, consult your healthcare provider before use.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              2. Orders
            </h2>
            <div className="space-y-3 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                By placing an order, you represent that you are at least 18 years of age and that
                the information you provide is accurate and complete.
              </p>
              <p>
                All orders are subject to availability and acceptance. We reserve the right to
                refuse or cancel any order at our discretion, including in cases of pricing errors,
                suspected fraud, or inventory issues.
              </p>
              <p>
                Order confirmation does not constitute final acceptance. Your order is accepted when
                it ships and you receive a shipping confirmation email.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              3. Payments
            </h2>
            <div className="space-y-3 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                All prices are listed in US dollars. We accept major credit cards and other payment
                methods as displayed at checkout. Payment is processed securely by Stripe, Inc.
              </p>
              <p>
                You authorize us to charge the payment method provided for all amounts due,
                including applicable taxes and shipping fees. All sales are final at the time of
                shipment unless otherwise covered by our return policy below.
              </p>
              <p>
                We are not responsible for any fees charged by your bank or payment provider in
                connection with your purchase.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              4. Returns &amp; Refunds
            </h2>
            <div className="space-y-3 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                Because our products are consumable food items, we cannot accept returns for
                opened packages or products returned more than 14 days after delivery.
              </p>
              <p>
                If your order arrives damaged, defective, or incorrect, please contact us within
                7 days of delivery at orders@twopeakschai.com with your order number and a photo
                of the issue. We will replace or refund affected items at our discretion.
              </p>
              <p>
                Unopened products in original packaging may be returned within 14 days for a
                full refund, minus return shipping costs. To initiate a return, contact us before
                shipping anything back.
              </p>
              <p>
                Refunds are issued to the original payment method and typically process within
                5–10 business days.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              5. Intellectual Property
            </h2>
            <div className="space-y-3 text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                All content on the Two Peaks Chai Co. website — including text, images, logos,
                product names, blend recipes, and the &quot;Two Peaks Chai Co.&quot; brand identity — is
                the exclusive property of Two Peaks Chai Co. and is protected by applicable
                copyright, trademark, and trade dress laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or use any of our content for
                commercial purposes without our prior written consent. Personal, non-commercial
                use (such as sharing a product page link) is permitted.
              </p>
              <p>
                Our blend names, formulations, and brewing guides are proprietary. Any
                unauthorized use or reproduction is a violation of these terms and may result
                in legal action.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-5" style={{ color: '#2C1B07' }}>
              6. Contact
            </h2>
            <div className="text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
              <p>
                Questions about these terms? Contact us at:
              </p>
              <p className="mt-4">
                <strong style={{ color: '#2C1B07' }}>Two Peaks Chai Co.</strong>
                <br />
                legal@twopeakschai.com
                <br />
                Salida, Colorado 81201
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
