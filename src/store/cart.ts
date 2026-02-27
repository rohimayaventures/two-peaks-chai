'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, Product, ProductVariant } from '@/types'

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product, variant?: ProductVariant, quantity?: number) => void
  removeItem: (productId: string, variantId?: string) => void
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, variant, quantity = 1) => {
        set(state => {
          const idx = state.items.findIndex(
            i => i.productId === product.id && i.variantId === variant?.id
          )
          if (idx >= 0) {
            const next = [...state.items]
            next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity }
            return { items: next, isOpen: true }
          }
          return {
            items: [...state.items, { productId: product.id, variantId: variant?.id, quantity, product, variant }],
            isOpen: true,
          }
        })
      },

      removeItem: (productId, variantId) =>
        set(state => ({
          items: state.items.filter(i => !(i.productId === productId && i.variantId === variantId)),
        })),

      updateQuantity: (productId, quantity, variantId) => {
        if (quantity <= 0) { get().removeItem(productId, variantId); return }
        set(state => ({
          items: state.items.map(i =>
            i.productId === productId && i.variantId === variantId ? { ...i, quantity } : i
          ),
        }))
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set(state => ({ isOpen: !state.isOpen })),
    }),
    { name: 'two-peaks-chai-cart' }
  )
)
