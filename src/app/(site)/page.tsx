import Link from 'next/link'
import ProductCard from '@/components/shop/ProductCard'
import { getFeaturedProducts } from '@/data/products'

export default function HomePage() {
  const featured = getFeaturedProducts()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden"
        style={{ backgroundColor: '#1A1005' }}
      >
        {/* Decorative pattern */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]">
          <span className="text-[40vw] leading-none">🌿</span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="ui text-[11px] uppercase tracking-[0.3em] mb-8" style={{ color: '#C4622D' }}>
            Two Peaks Chai Co. · Colorado
          </p>

          <h1
            className="text-6xl sm:text-7xl md:text-8xl leading-[1.05] tracking-[-0.03em] mb-8"
            style={{ color: '#F7F4EE' }}
          >
            Chai rooted
            <br />
            in ritual.
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-12" style={{ color: '#8B6F52' }}>
            Handcrafted blends drawing on 5,000 years of Ayurvedic tradition,
            blended small-batch in the Colorado Rockies. Each cup, an act of intention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="ui inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundColor: '#C4622D', color: '#F7F4EE' }}
            >
              Shop the Blends
            </Link>
            <Link
              href="/ritual"
              className="ui inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200 hover:bg-white/10"
              style={{ border: '1px solid #5C3D1E', color: '#EFE8D8' }}
            >
              Find Your Ritual
            </Link>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: '#2C1B07' }}
        />
      </section>

      {/* ── Featured Products ─────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F7F4EE' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="ui text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: '#C4622D' }}>
              Small-batch · Single-origin
            </p>
            <h2 className="text-4xl sm:text-5xl" style={{ color: '#1A1005' }}>
              The Blends
            </h2>
            <p className="mt-4 text-base max-w-md mx-auto" style={{ color: '#8B6F52' }}>
              Three distinct expressions. Each one designed for a specific mood, moment, and intention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/shop"
              className="ui inline-flex items-center gap-2 text-sm font-medium tracking-wide underline underline-offset-4 transition-colors hover:opacity-70"
              style={{ color: '#5C3D1E' }}
            >
              View all blends →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Brand story strip ─────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: '#EFE8D8' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-3xl sm:text-4xl leading-relaxed tracking-[-0.01em] mb-8"
            style={{ color: '#2C1B07' }}
          >
            &ldquo;We started making chai because we missed a feeling — the feeling of sitting
            beside a fire at altitude, holding something warm, and having nowhere else to be.&rdquo;
          </p>
          <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: '#C4622D' }} />
          <Link
            href="/about"
            className="ui text-sm font-medium tracking-[0.15em] uppercase transition-colors hover:opacity-70"
            style={{ color: '#C4622D' }}
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* ── The Ritual – 3 columns ────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F7F4EE' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="ui text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: '#8B6F52' }}>
              Philosophy
            </p>
            <h2 className="text-4xl sm:text-5xl" style={{ color: '#1A1005' }}>
              The Ritual
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                emoji: '🌱',
                label: 'Source',
                heading: 'Single-origin ingredients',
                body: 'Every spice traced to its farm. Cardamom from Guatemala. Turmeric from Meghalaya. Rose petals from Morocco. We visit. We taste. We only work with farmers who care.',
              },
              {
                emoji: '🫖',
                label: 'Brew',
                heading: 'Slow and intentional',
                body: 'Chai is not a tea bag. It is a practice. Each blend is designed to be simmered — milk, water, spice, time. The kitchen becomes the ritual space.',
              },
              {
                emoji: '🕯️',
                label: 'Ritual',
                heading: 'A daily anchor',
                body: 'We believe the first cup of the day is an act of self-respect. The last cup is permission to rest. Two Peaks chai is a container for both.',
              },
            ].map(item => (
              <div key={item.label}>
                <div className="text-4xl mb-5">{item.emoji}</div>
                <p
                  className="ui text-[10px] uppercase tracking-[0.25em] mb-2"
                  style={{ color: '#C4622D' }}
                >
                  {item.label}
                </p>
                <h3 className="text-xl mb-3" style={{ color: '#2C1B07' }}>
                  {item.heading}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8B6F52' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/ritual"
              className="ui inline-flex items-center gap-2 text-sm font-medium tracking-wide underline underline-offset-4 transition-colors hover:opacity-70"
              style={{ color: '#5C3D1E' }}
            >
              Read the Ritual Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#C4622D' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl sm:text-5xl leading-tight mb-5"
            style={{ color: '#F7F4EE' }}
          >
            Build your daily ritual.
          </h2>
          <p className="text-base mb-3" style={{ color: '#F0D4C0' }}>
            Free shipping on orders over $45.
          </p>
          <p className="text-sm mb-10" style={{ color: '#F0D4C0', opacity: 0.8 }}>
            Small-batch. Freshly blended. Ships within 2 business days.
          </p>
          <Link
            href="/shop"
            className="ui inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: '#1A1005', color: '#F7F4EE' }}
          >
            Shop Now
          </Link>
        </div>
      </section>
    </>
  )
}
