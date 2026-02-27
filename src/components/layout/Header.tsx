'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cart'

const navLinks = [
  { href: '/shop',   label: 'Shop' },
  { href: '/ritual', label: 'The Ritual' },
  { href: '/about',  label: 'Our Story' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { items, toggleCart } = useCartStore()
  const cartCount = items.reduce((s, i) => s + i.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-[#F7F4EE]/95 backdrop-blur-sm border-b border-[#E2D5BC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-[#C4622D] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs leading-none">⛰</span>
            </div>
            <div className="leading-tight">
              <div className="text-[15px] text-[#2C1B07] tracking-tight leading-none">Two Peaks</div>
              <div className="text-[10px] ui text-[#8B6F52] tracking-widest uppercase leading-none mt-0.5">Chai Co.</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}
                className="text-sm ui text-[#5C3D1E] hover:text-[#C4622D] transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link href="/quiz"
              className="hidden sm:inline-flex text-xs ui uppercase tracking-widest text-[#C4622D] border border-[#C4622D] px-3 py-1.5 hover:bg-[#C4622D] hover:text-white transition-colors">
              Find Your Blend
            </Link>
            <button onClick={toggleCart}
              className="relative p-2 text-[#2C1B07] hover:text-[#C4622D] transition-colors"
              aria-label={`Cart, ${cartCount} items`}>
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-[#C4622D] text-white text-[10px] ui font-bold rounded-full flex items-center justify-center min-w-[18px] min-h-[18px]">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-[#2C1B07]"
              onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-[#E2D5BC] py-4 space-y-1">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}
                className="block py-2 ui text-[#5C3D1E] hover:text-[#C4622D] transition-colors"
                onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/quiz"
              className="block py-2 ui text-[#C4622D] font-medium"
              onClick={() => setMobileOpen(false)}>
              Find Your Blend →
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
