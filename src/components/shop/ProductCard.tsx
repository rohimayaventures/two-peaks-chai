'use client'

import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { Product } from '@/types'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cart'

// Per-product accent colors matching the brand line
const accentMap: Record<string, { bg: string; dot: string }> = {
  'signature-masala':     { bg: '#F0D4C0', dot: '#C4622D' },
  'rose-radiance':        { bg: '#F5E8EA', dot: '#C47E82' },
  'golden-glow':          { bg: '#F5E8C8', dot: '#C9852A' },
  'ritual-sampler-pack':  { bg: '#EFE8D8', dot: '#5C3D1E' },
  'signature-masala-tin': { bg: '#F0D4C0', dot: '#C4622D' },
  'ceremony-bundle':      { bg: '#EBF0E5', dot: '#3A5A2C' },
}

const emojiMap: Record<string, string> = {
  'spice-blend': '🌿',
  'chai-tin':    '🫙',
  'bundle':      '📦',
  'accessory':   '✨',
}

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore(s => s.addItem)
  const accent = accentMap[product.slug] ?? { bg: '#EFE8D8', dot: '#C4622D' }

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <article>
        {/* Image placeholder */}
        <div className="relative aspect-square overflow-hidden mb-4"
          style={{ backgroundColor: accent.bg }}>
          <div className="absolute inset-0 flex items-center justify-center text-7xl
            group-hover:scale-105 transition-transform duration-500 ease-out">
            {emojiMap[product.category] ?? '🌿'}
          </div>

          {/* Badges */}
          {product.bestseller && (
            <div className="absolute top-3 left-3 ui text-[10px] font-semibold uppercase tracking-wider
              bg-[#C4622D] text-white px-2 py-1">
              Bestseller
            </div>
          )}
          {product.compareAtPrice && (
            <div className="absolute top-3 right-3 ui text-[10px] font-semibold uppercase tracking-wider
              bg-[#2C1B07] text-white px-2 py-1">
              Sale
            </div>
          )}

          {/* Quick-add */}
          <button
            onClick={e => { e.preventDefault(); addItem(product) }}
            className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm
              flex items-center justify-center opacity-0 group-hover:opacity-100
              transition-all duration-200 hover:bg-[#C4622D] hover:text-white text-[#2C1B07]"
            aria-label={`Add ${product.name} to cart`}>
            <ShoppingBag size={15} />
          </button>
        </div>

        {/* Info */}
        <div>
          <p className="text-[10px] ui uppercase tracking-widest mb-1"
            style={{ color: accent.dot }}>
            {product.category.replace('-', ' ')}
          </p>
          <h3 className="text-base text-[#2C1B07] group-hover:text-[#C4622D] transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-sm text-[#8B6F52] mt-1 leading-relaxed line-clamp-2">
            {product.tagline}
          </p>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-[15px] ui font-semibold text-[#2C1B07]">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm ui text-[#8B6F52] line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
