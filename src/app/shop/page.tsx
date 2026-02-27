import type { Metadata } from 'next'
import Link from 'next/link'
import ProductCard from '@/components/shop/ProductCard'
import SortSelect from '@/components/shop/SortSelect'
import { products } from '@/data/products'
import type { Product } from '@/types'

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Browse all Two Peaks Chai blends — Signature Masala, Rose Radiance, Golden Glow, and more. Free shipping over $45.',
}

type Category = Product['category'] | 'all'

const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'spice-blend', label: 'Spice Blends' },
  { value: 'chai-tin', label: 'Chai Tins' },
  { value: 'bundle', label: 'Bundles' },
]

function sortProducts(list: Product[], sort: string): Product[] {
  const copy = [...list]
  if (sort === 'price-asc') return copy.sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') return copy.sort((a, b) => b.price - a.price)
  if (sort === 'name') return copy.sort((a, b) => a.name.localeCompare(b.name))
  // featured (default): featured first, then bestseller
  return copy.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    if (a.bestseller && !b.bestseller) return -1
    return 0
  })
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; sort?: string }>
}) {
  const { category, sort = 'featured' } = await searchParams

  const activeCategory: Category =
    category && CATEGORIES.some(c => c.value === category)
      ? (category as Category)
      : 'all'

  const filtered =
    activeCategory === 'all'
      ? products.filter(p => p.inStock)
      : products.filter(p => p.inStock && p.category === activeCategory)

  const sorted = sortProducts(filtered, sort)

  return (
    <div style={{ backgroundColor: '#F7F4EE', minHeight: '100vh' }}>
      {/* Page header */}
      <div
        className="pt-16 pb-12 px-6 text-center"
        style={{ borderBottom: '1px solid #E2D5BC' }}
      >
        <p className="ui text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: '#C4622D' }}>
          Small-batch · Colorado
        </p>
        <h1 className="text-5xl" style={{ color: '#1A1005' }}>
          Shop the Blends
        </h1>
        <p className="mt-3 text-base max-w-sm mx-auto" style={{ color: '#8B6F52' }}>
          Handcrafted chai for every ritual. Free shipping on orders over $45.
        </p>
      </div>

      {/* Filter + Sort bar */}
      <div
        className="sticky top-[64px] z-10 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ backgroundColor: '#F7F4EE', borderBottom: '1px solid #E2D5BC' }}
      >
        {/* Category filters */}
        <nav className="flex flex-wrap gap-1">
          {CATEGORIES.map(cat => {
            const isActive = cat.value === activeCategory
            const href =
              cat.value === 'all'
                ? `/shop${sort !== 'featured' ? `?sort=${sort}` : ''}`
                : `/shop?category=${cat.value}${sort !== 'featured' ? `&sort=${sort}` : ''}`
            return (
              <Link
                key={cat.value}
                href={href}
                className="ui text-[11px] uppercase tracking-widest px-4 py-2 transition-all duration-150"
                style={
                  isActive
                    ? { backgroundColor: '#C4622D', color: '#F7F4EE' }
                    : { backgroundColor: 'transparent', color: '#5C3D1E', border: '1px solid #E2D5BC' }
                }
              >
                {cat.label}
              </Link>
            )
          })}
        </nav>

        <SortSelect defaultValue={sort} activeCategory={activeCategory} />
      </div>

      {/* Product grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {sorted.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-lg" style={{ color: '#8B6F52' }}>
              No products found in this category.
            </p>
            <Link
              href="/shop"
              className="ui inline-block mt-6 text-sm underline underline-offset-4"
              style={{ color: '#C4622D' }}
            >
              View all blends
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {sorted.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
