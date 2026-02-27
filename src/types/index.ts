export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  price: number
  compareAtPrice?: number
  category: 'spice-blend' | 'chai-tin' | 'bundle' | 'accessory'
  images: ProductImage[]
  variants?: ProductVariant[]
  ingredients?: string[]
  steepInstructions?: string
  origin?: string
  weight?: string
  tags: string[]
  featured: boolean
  bestseller: boolean
  inStock: boolean
  inventory: number
  ritualPairing?: string
  seoTitle?: string
  seoDescription?: string
}

export interface ProductImage {
  url: string
  alt: string
  width: number
  height: number
}

export interface ProductVariant {
  id: string
  name: string
  price: number
  inventory: number
  sku: string
}

export interface CartItem {
  productId: string
  variantId?: string
  quantity: number
  product: Product
  variant?: ProductVariant
}

export interface Order {
  id: string
  orderNumber: string
  status: OrderStatus
  customer: Customer
  items: OrderItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  shippingAddress: Address
  billingAddress: Address
  stripePaymentIntentId?: string
  stripeSessionId?: string
  shippoShipmentId?: string
  shippoLabelUrl?: string
  trackingNumber?: string
  trackingUrl?: string
  carrier?: string
  notes?: string
  createdAt: string
  updatedAt: string
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export interface OrderItem {
  id: string
  productId: string
  productName: string
  variantName?: string
  quantity: number
  unitPrice: number
  totalPrice: number
}

export interface Customer {
  id?: string
  email: string
  firstName: string
  lastName: string
  phone?: string
}

export interface Address {
  name: string
  street1: string
  street2?: string
  city: string
  state: string
  zip: string
  country: string
  phone?: string
}

export interface ShippingRate {
  id: string
  carrier: string
  service: string
  price: number
  estimatedDays: number
}
