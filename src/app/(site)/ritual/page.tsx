import type { Metadata } from 'next'
import Link from 'next/link'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'The Ritual',
  description:
    'Learn how to brew Two Peaks Chai — step-by-step guides for each blend, sourcing stories, and ideas for morning, evening, and self-care rituals.',
}

export default function RitualPage() {
  const blends = products.filter(p => p.category === 'spice-blend' && p.steepInstructions)

  return (
    <div style={{ backgroundColor: '#F7F4EE', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        className="py-32 px-6 text-center"
        style={{ backgroundColor: '#1A1005' }}
      >
        <p className="ui text-[11px] uppercase tracking-[0.3em] mb-6" style={{ color: '#C4622D' }}>
          A Guide to Intentional Brewing
        </p>
        <h1
          className="text-5xl sm:text-7xl leading-[1.05] tracking-[-0.03em] max-w-3xl mx-auto mb-8"
          style={{ color: '#F7F4EE' }}
        >
          The Ritual.
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: '#8B6F52' }}>
          Ritual is not ceremony. It is the daily commitment to arriving fully in a single moment.
          Chai is how we practice that.
        </p>

        {/* Jump links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          {[
            { href: '#brewing', label: 'Brewing Guide' },
            { href: '#sourcing', label: 'Sourcing' },
            { href: '#ritual', label: 'Ritual Ideas' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className="ui text-[11px] uppercase tracking-widest px-6 py-3 transition-all duration-150 hover:opacity-80"
              style={{ border: '1px solid #5C3D1E', color: '#EFE8D8' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* Brewing Guide */}
      <section id="brewing" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="ui text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: '#C4622D' }}>
              Step-by-step
            </p>
            <h2 className="text-4xl sm:text-5xl" style={{ color: '#1A1005' }}>
              Brewing Guide
            </h2>
            <p className="mt-4 text-base max-w-xl" style={{ color: '#8B6F52' }}>
              Each blend brews differently. Below is the method for each. The general principle is
              always the same: low heat, patience, presence.
            </p>
          </div>

          {/* Universal steps */}
          <div
            className="p-8 mb-16"
            style={{ backgroundColor: '#EFE8D8', border: '1px solid #E2D5BC' }}
          >
            <h3 className="text-2xl mb-6" style={{ color: '#2C1B07' }}>
              The Universal Method
            </h3>
            <ol className="space-y-5">
              {[
                { n: '01', text: 'Choose your blend. Each one has a different moment.' },
                { n: '02', text: 'Measure your milk (and water if using black tea). Whole milk, oat milk, or coconut milk all work — choose by your body\'s needs that day.' },
                { n: '03', text: 'Add your blend — typically 1 tsp for a single cup, 1 tbsp for a double-strength batch. Start with less and adjust.' },
                { n: '04', text: 'Low heat. Simmer, never boil. Boiling destroys the volatile aromatics — the soul of the blend.' },
                { n: '05', text: 'Stir occasionally. Watch the color deepen.' },
                { n: '06', text: 'Strain into your cup. Sweeten with raw honey (added after straining to preserve the enzymes). Sit down. Drink slowly.' },
              ].map(step => (
                <li key={step.n} className="flex gap-5 items-start">
                  <span
                    className="ui text-[12px] font-semibold shrink-0 mt-1"
                    style={{ color: '#C4622D' }}
                  >
                    {step.n}
                  </span>
                  <p className="text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Per-blend instructions */}
          <div className="space-y-10">
            {blends.map(blend => (
              <div
                key={blend.id}
                className="p-8"
                style={{ backgroundColor: '#F7F4EE', border: '1px solid #E2D5BC' }}
              >
                <div className="flex items-start justify-between gap-6 flex-wrap mb-5">
                  <div>
                    <p
                      className="ui text-[10px] uppercase tracking-widest mb-1"
                      style={{ color: '#C4622D' }}
                    >
                      {blend.category.replace('-', ' ')}
                    </p>
                    <h3 className="text-2xl" style={{ color: '#2C1B07' }}>
                      {blend.name}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: '#8B6F52' }}>
                      {blend.tagline}
                    </p>
                  </div>
                  <Link
                    href={`/shop/${blend.slug}`}
                    className="ui text-[11px] uppercase tracking-widest px-4 py-2 shrink-0 transition-colors hover:opacity-80"
                    style={{ border: '1px solid #C4622D', color: '#C4622D' }}
                  >
                    Shop →
                  </Link>
                </div>
                <div
                  className="p-4"
                  style={{ backgroundColor: '#EFE8D8', borderLeft: '3px solid #C4622D' }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: '#2C1B07' }}>
                    {blend.steepInstructions}
                  </p>
                </div>
                {blend.ritualPairing && (
                  <p className="text-sm italic mt-4" style={{ color: '#8B6F52' }}>
                    ✦ {blend.ritualPairing}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section id="sourcing" className="py-24 px-6 scroll-mt-20" style={{ backgroundColor: '#EFE8D8' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="ui text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: '#C4622D' }}>
              Where it comes from
            </p>
            <h2 className="text-4xl sm:text-5xl" style={{ color: '#1A1005' }}>
              Sourcing
            </h2>
            <p className="mt-4 text-base max-w-xl" style={{ color: '#8B6F52' }}>
              We trace every ingredient to its source. Here is where our spices come from,
              and why it matters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                origin: 'Guatemala',
                ingredient: 'Green Cardamom',
                notes: 'Alta Verapaz highlands. The finest cardamom in the world — intensely aromatic, citrus-forward. We work directly with a cooperative of 12 farming families who have been growing cardamom for three generations.',
                emoji: '🌿',
              },
              {
                origin: 'Sri Lanka',
                ingredient: 'Ceylon Cinnamon',
                notes: 'True cinnamon — not cassia. Lighter, sweeter, and more complex than the "cinnamon" most people know. Lower coumarin levels mean you can drink it daily without concern. We source from a single estate near Kandy.',
                emoji: '🌿',
              },
              {
                origin: 'India',
                ingredient: 'Assam Black Tea & Turmeric',
                notes: 'Assam tea from the Brahmaputra Valley — bold and malty, designed to stand up to milk. Turmeric from Meghalaya — wild-harvested at altitude, higher in curcumin than commercial varieties.',
                emoji: '🍵',
              },
              {
                origin: 'Morocco',
                ingredient: 'Damask Rose Petals',
                notes: 'Dried at peak bloom in the Dades Valley. The rose petals must be harvested at dawn, before the heat, or the volatile aromatics dissipate. We get ours from a family farm that has been harvesting for 40 years.',
                emoji: '🌹',
              },
              {
                origin: 'Peru',
                ingredient: 'Ginger Root',
                notes: 'Fresh-dried ginger from the Junín region — warm, peppery, and clean. The high-altitude drying process concentrates the gingerols without oxidation. More bioavailable and more flavorful than conventionally dried ginger.',
                emoji: '🌱',
              },
              {
                origin: 'Zanzibar',
                ingredient: 'Whole Cloves',
                notes: 'Cloves from the Spice Island — intensely aromatic, almost numbing in their purity. We use them whole in the blend for a slow, controlled extraction. Stone Town spice market, direct from a grower co-op.',
                emoji: '✨',
              },
            ].map(item => (
              <div
                key={item.origin}
                className="p-6"
                style={{ backgroundColor: '#F7F4EE', border: '1px solid #E2D5BC' }}
              >
                <div className="text-3xl mb-4">{item.emoji}</div>
                <p
                  className="ui text-[10px] uppercase tracking-widest mb-1"
                  style={{ color: '#C4622D' }}
                >
                  {item.origin}
                </p>
                <h3 className="text-xl mb-3" style={{ color: '#2C1B07' }}>
                  {item.ingredient}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8B6F52' }}>
                  {item.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ritual Ideas */}
      <section id="ritual" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="ui text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: '#C4622D' }}>
              Build your practice
            </p>
            <h2 className="text-4xl sm:text-5xl" style={{ color: '#1A1005' }}>
              Ritual Ideas
            </h2>
            <p className="mt-4 text-base max-w-xl" style={{ color: '#8B6F52' }}>
              Chai is most powerful when it is part of a larger practice. Here are three
              rituals we return to.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                time: 'Morning',
                emoji: '🌅',
                blend: 'Signature Masala',
                heading: 'The grounding morning',
                steps: [
                  'Wake before the light changes. No phone.',
                  'Brew your Signature Masala on the stove — 8–10 minutes, low heat.',
                  'While it simmers, sit. Five slow breaths. Name one intention for the day.',
                  'Strain. Add honey. Sit at a window.',
                  'Drink the whole cup before anything else enters the day.',
                ],
              },
              {
                time: 'Evening',
                emoji: '🌙',
                blend: 'Golden Glow',
                heading: 'The recovery evening',
                steps: [
                  'After the day\'s work or exercise, before dinner.',
                  'Brew your Golden Glow in oat milk — 5 minutes, no boiling.',
                  'Add a small knob of ghee before straining for full curcumin absorption.',
                  'Drink slowly. No screens during the cup.',
                  'Use this time to transition from doing to being.',
                ],
              },
              {
                time: 'Self-Care',
                emoji: '🛁',
                blend: 'Rose Radiance',
                heading: 'The softness ritual',
                steps: [
                  'Choose a Sunday, or any morning that asks for gentleness.',
                  'Brew Rose Radiance slowly — lower heat than usual, longer steep.',
                  'Light a candle. Put on music or sit in quiet.',
                  'Hold the cup with both hands before drinking. Feel the warmth.',
                  'Ask: what does my body need today? Let the answer come.',
                ],
              },
            ].map(ritual => (
              <div
                key={ritual.time}
                className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start"
              >
                <div className="md:col-span-2">
                  <div className="text-5xl mb-4">{ritual.emoji}</div>
                  <p
                    className="ui text-[10px] uppercase tracking-[0.3em] mb-2"
                    style={{ color: '#C4622D' }}
                  >
                    {ritual.time}
                  </p>
                  <h3 className="text-3xl mb-2" style={{ color: '#2C1B07' }}>
                    {ritual.heading}
                  </h3>
                  <p className="text-sm italic" style={{ color: '#8B6F52' }}>
                    Brew: {ritual.blend}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <ol className="space-y-4">
                    {ritual.steps.map((step, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <span
                          className="ui text-[11px] font-semibold shrink-0 w-6 text-right mt-0.5"
                          style={{ color: '#C4622D' }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-base leading-relaxed" style={{ color: '#5C3D1E' }}>
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: '#C4622D' }}>
        <h2 className="text-4xl mb-5" style={{ color: '#F7F4EE' }}>
          Ready to begin?
        </h2>
        <p className="text-base mb-10" style={{ color: '#F0D4C0' }}>
          Pick a blend. Start tomorrow morning.
        </p>
        <Link
          href="/shop"
          className="ui inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: '#1A1005', color: '#F7F4EE' }}
        >
          Shop the Blends
        </Link>
      </section>
    </div>
  )
}
