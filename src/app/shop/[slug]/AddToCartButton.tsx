'use client'

import { useState } from 'react'
import { Product } from '@/types'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore(s => s.addItem)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  if (!product.inStock) {
    return (
      <button
        disabled
        className="ui w-full py-4 text-sm font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: '#E2D5BC', color: '#8B6F52' }}
      >
        Out of Stock
      </button>
    )
  }

  return (
    <button
      onClick={handleAdd}
      className="ui w-full py-4 text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
      style={
        added
          ? { backgroundColor: '#5C3D1E', color: '#F7F4EE' }
          : { backgroundColor: '#C4622D', color: '#F7F4EE' }
      }
    >
      {added ? `✓ Added — ${formatPrice(product.price)}` : `Add to Cart — ${formatPrice(product.price)}`}
    </button>
  )
}
