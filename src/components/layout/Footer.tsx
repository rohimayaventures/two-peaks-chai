import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1A1005] text-[#EFE8D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#C4622D] flex items-center justify-center">
                <span className="text-white text-xs">⛰</span>
              </div>
              <div>
                <div className="text-[15px] text-[#EFE8D8]">Two Peaks</div>
                <div className="text-[10px] ui text-[#8B6F52] tracking-widest uppercase">Chai Co.</div>
              </div>
            </div>
            <p className="text-sm text-[#8B6F52] leading-relaxed max-w-xs mt-4">
              Handcrafted chai blends rooted in Indian Ayurvedic tradition
              and the spirit of Colorado. Small-batch. Single-origin. Ritual-focused.
            </p>
            <p className="text-xs ui text-[#5C3D1E] mt-4">Crafted in Colorado ⛰</p>
            <div className="flex gap-4 mt-5">
              <a href="https://instagram.com/twopeakschai" target="_blank" rel="noopener noreferrer"
                className="text-xs ui text-[#8B6F52] hover:text-[#C4622D] transition-colors">Instagram</a>
              <a href="https://pinterest.com/twopeakschai" target="_blank" rel="noopener noreferrer"
                className="text-xs ui text-[#8B6F52] hover:text-[#C4622D] transition-colors">Pinterest</a>
            </div>
          </div>

          {/* Shop */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] ui font-semibold uppercase tracking-widest text-[#8B6F52] mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/shop', label: 'All Products' },
                { href: '/shop?category=spice-blend', label: 'Spice Blends' },
                { href: '/shop?category=chai-tin', label: 'Chai Tins' },
                { href: '/shop?category=bundle', label: 'Bundles & Gifts' },
                { href: '/quiz', label: 'Find Your Blend' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#8B6F52] hover:text-[#EFE8D8] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] ui font-semibold uppercase tracking-widest text-[#8B6F52] mb-4">Learn</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/ritual', label: 'The Ritual' },
                { href: '/ritual#brewing', label: 'Brewing Guide' },
                { href: '/ritual#sourcing', label: 'Sourcing' },
                { href: '/about', label: 'Our Story' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#8B6F52] hover:text-[#EFE8D8] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2C1B07] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs ui text-[#5C3D1E]">
            © {new Date().getFullYear()} Two Peaks Chai Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { href: '/privacy', label: 'Privacy' },
              { href: '/terms', label: 'Terms' },
              { href: '/shipping', label: 'Shipping' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="text-xs ui text-[#5C3D1E] hover:text-[#EFE8D8] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
