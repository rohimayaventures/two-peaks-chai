import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story behind Two Peaks Chai Co. — handcrafted chai rooted in Ayurvedic tradition and Colorado mountain culture.',
}

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#F7F4EE', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        className="py-32 px-6 text-center"
        style={{ backgroundColor: '#1A1005' }}
      >
        <p className="ui text-[11px] uppercase tracking-[0.3em] mb-6" style={{ color: '#C4622D' }}>
          Our Story
        </p>
        <h1
          className="text-5xl sm:text-7xl leading-[1.05] tracking-[-0.03em] max-w-3xl mx-auto mb-8"
          style={{ color: '#F7F4EE' }}
        >
          Chai from the mountains.
          <br />
          Rooted in ritual.
        </h1>
        <div className="text-6xl mt-8">🏔️🌿</div>
      </section>

      {/* Our Origin */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="ui text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: '#C4622D' }}>
                Our Origin
              </p>
              <h2 className="text-4xl mb-6" style={{ color: '#1A1005' }}>
                Born at 9,000 feet.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#5C3D1E' }}>
                Two Peaks Chai started in a small kitchen in Salida, Colorado — a town nestled between
                two 14,000-foot peaks in the Collegiate Range. The founders had just returned from
                six months in Rajasthan, where they had spent mornings at roadside chai stalls,
                watching spice vendors blend by instinct and memory.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
                They came home with notebooks full of ratios, a suitcase of sourced spices, and one
                clear intention: to recreate that feeling — the warmth, the ritual, the grounding — and
                share it with people in the mountains of Colorado.
              </p>
            </div>
            <div
              className="aspect-square flex items-center justify-center text-[120px]"
              style={{ backgroundColor: '#EFE8D8' }}
            >
              <span className="select-none">🌄</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 px-6" style={{ backgroundColor: '#EFE8D8' }}>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div
              className="aspect-square flex items-center justify-center text-[120px] order-2 md:order-1"
              style={{ backgroundColor: '#F0D4C0' }}
            >
              <span className="select-none">🫖</span>
            </div>
            <div className="order-1 md:order-2">
              <p className="ui text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: '#C4622D' }}>
                Our Philosophy
              </p>
              <h2 className="text-4xl mb-6" style={{ color: '#1A1005' }}>
                Ayurvedic roots,
                <br />Colorado soil.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#5C3D1E' }}>
                Ayurveda — the ancient Indian system of wellness — has always used spice as medicine.
                Ginger for digestion. Turmeric for inflammation. Cardamom for the nervous system.
                Two Peaks chai is not a wellness trend. It is a tradition, adapted for daily life.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
                Every blend is formulated with both flavor and function in mind. We work with
                Ayurvedic practitioners and herbalists to ensure our blends are not just delicious,
                but genuinely supportive of the body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The People */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="ui text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: '#C4622D' }}>
              The People
            </p>
            <h2 className="text-4xl" style={{ color: '#1A1005' }}>
              A small team with a big practice.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              { emoji: '👩‍🍳', name: 'Maya', role: 'Founder & Blender', bio: 'Spent 10 years in Ayurvedic practice before starting Two Peaks. She develops every blend.' },
              { emoji: '🧗', name: 'Eli', role: 'Co-founder & Sourcer', bio: 'Former outdoor guide who now sources directly from farms in 7 countries.' },
              { emoji: '🎨', name: 'Priya', role: 'Brand & Craft', bio: 'Hand-stamps every tin. Manages our farmer relationships in India and Sri Lanka.' },
            ].map(person => (
              <div key={person.name} className="text-center">
                <div
                  className="w-24 h-24 mx-auto mb-4 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: '#EFE8D8' }}
                >
                  {person.emoji}
                </div>
                <h3 className="text-xl mb-1" style={{ color: '#2C1B07' }}>
                  {person.name}
                </h3>
                <p className="ui text-[11px] uppercase tracking-wider mb-3" style={{ color: '#C4622D' }}>
                  {person.role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#8B6F52' }}>
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ backgroundColor: '#1A1005' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-14" style={{ color: '#F7F4EE' }}>
            What we stand for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { icon: '🌱', label: 'Small-batch', desc: 'Never more than 50 pounds blended at a time. Freshness is non-negotiable.' },
              { icon: '🗺️', label: 'Single-origin', desc: 'Every ingredient traced to its farm. We know the people who grow our spices.' },
              { icon: '🕯️', label: 'Ritual-focused', desc: 'Chai is a practice, not a product. We design every blend for the ritual, not the shelf.' },
            ].map(val => (
              <div key={val.label}>
                <div className="text-4xl mb-4">{val.icon}</div>
                <h3 className="text-lg mb-2" style={{ color: '#EFE8D8' }}>
                  {val.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8B6F52' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: '#EFE8D8' }}>
        <p className="text-2xl mb-8" style={{ color: '#2C1B07' }}>
          Ready to start your ritual?
        </p>
        <Link
          href="/shop"
          className="ui inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: '#C4622D', color: '#F7F4EE' }}
        >
          Shop the Blends
        </Link>
      </section>
    </div>
  )
}
