'use client'

import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import Button from '@/components/ui/Button'

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity } = useCartStore()
  const subtotal = items.reduce((s, i) => s + (i.variant?.price ?? i.product.price) * i.quantity, 0)
  const count = items.reduce((s, i) => s + i.quantity, 0)

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={closeCart} aria-hidden />
      <aside className="fixed right-0 top-0 h-full w-full max-w-md z-50 bg-[#F7F4EE] shadow-2xl flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2D5BC]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-[#C4622D]" />
            <h2 className="text-base text-[#2C1B07]">Your Cart ({count})</h2>
          </div>
          <button onClick={closeCart} className="p-2 text-[#8B6F52] hover:text-[#C4622D] transition-colors" aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={40} className="text-[#E2D5BC] mb-4" />
              <p className="text-[#8B6F52] mb-6 text-sm">Your cart is empty</p>
              <Button variant="outline" size="sm" onClick={closeCart}>Continue Shopping</Button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => {
                const price = item.variant?.price ?? item.product.price
                const emoji = item.product.category === 'bundle' ? '📦'
                  : item.product.category === 'chai-tin' ? '🫙' : '🌿'
                return (
                  <li key={`${item.productId}-${item.variantId ?? ''}`} className="flex gap-4">
                    <div className="w-16 h-16 bg-[#EFE8D8] flex-shrink-0 flex items-center justify-center text-2xl">
                      {emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#2C1B07] leading-tight">{item.product.name}</p>
                      <p className="text-sm ui font-semibold text-[#C4622D] mt-0.5">{formatPrice(price)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => updateQuantity(item.productId, item.quantity - 1, item.variantId)}
                          className="w-6 h-6 border border-[#E2D5BC] text-[#5C3D1E] hover:bg-[#E2D5BC] flex items-center justify-center transition-colors"
                          aria-label="Decrease">
                          <Minus size={11} />
                        </button>
                        <span className="w-5 text-center text-sm ui">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.productId, item.quantity + 1, item.variantId)}
                          className="w-6 h-6 border border-[#E2D5BC] text-[#5C3D1E] hover:bg-[#E2D5BC] flex items-center justify-center transition-colors"
                          aria-label="Increase">
                          <Plus size={11} />
                        </button>
                        <button onClick={() => removeItem(item.productId, item.variantId)}
                          className="ml-auto text-xs ui text-[#8B6F52] hover:text-[#C4622D] transition-colors">
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#E2D5BC] px-6 py-5 space-y-3">
            <div className="flex justify-between text-sm ui">
              <span className="text-[#5C3D1E]">Subtotal</span>
              <span className="font-semibold text-[#2C1B07]">{formatPrice(subtotal)}</span>
            </div>
            {subtotal >= 4500 && (
              <p className="text-xs ui text-[#3A5A2C] font-medium">🎉 Free shipping on this order!</p>
            )}
            <p className="text-xs ui text-[#8B6F52]">
              {subtotal < 4500 ? `Add ${formatPrice(4500 - subtotal)} for free shipping.` : ''}
              &nbsp;Tax calculated at checkout.
            </p>
            <Link href="/checkout" onClick={closeCart}>
              <Button className="w-full" size="lg">
                Checkout — {formatPrice(subtotal)}
              </Button>
            </Link>
            <button onClick={closeCart}
              className="w-full text-center text-sm ui text-[#8B6F52] hover:text-[#C4622D] transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
