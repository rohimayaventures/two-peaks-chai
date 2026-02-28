import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProductCard from '@/components/shop/ProductCard'
import AddToCartButton from './AddToCartButton'
import { products, getProductBySlug } from '@/data/products'
import { formatPrice } from '@/lib/utils'

const accentMap: Record<string, { bg: string; emoji: string }> = {
  'signature-masala-chai':   { bg: '#F0D4C0', emoji: '🌿' },
  'rose-radiance-chai':      { bg: '#F5E8EA', emoji: '🌸' },
  'golden-glow-chai':        { bg: '#F5E8C8', emoji: '✨' },
  'ritual-sampler-pack':     { bg: '#EFE8D8', emoji: '📦' },
  'signature-masala-tin':    { bg: '#F0D4C0', emoji: '🫙' },
  'ceremony-bundle':         { bg: '#EBF0E5', emoji: '🎁' },
}

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: product.seoTitle ?? product.name,
    description: product.seoDescription ?? product.description,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const accent = accentMap[product.slug] ?? { bg: '#EFE8D8', emoji: '🌿' }

  // Related products: same category, exclude current, max 3
  const related = products
    .filter(p => p.inStock && p.id !== product.id && p.category === product.category)
    .slice(0, 3)

  // If not enough in category, fill with featured
  const relatedFilled =
    related.length >= 2
      ? related
      : [
          ...related,
          ...products
            .filter(p => p.inStock && p.id !== product.id && !related.includes(p))
            .slice(0, 3 - related.length),
        ]

  return (
    <div style={{ backgroundColor: '#F7F4EE', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div
        className="px-6 py-4"
        style={{ borderBottom: '1px solid #E2D5BC' }}
      >
        <nav className="max-w-6xl mx-auto ui text-[11px] uppercase tracking-widest flex gap-2 items-center" style={{ color: '#8B6F52' }}>
          <Link href="/" className="hover:text-[#C4622D] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#C4622D] transition-colors">Shop</Link>
          <span>/</span>
          <span style={{ color: '#2C1B07' }}>{product.name}</span>
        </nav>
      </div>

      {/* Main product layout */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: image area */}
          <div
            className="aspect-square flex items-center justify-center text-[160px] sticky top-24"
            style={{ backgroundColor: accent.bg }}
          >
            <span className="select-none">{accent.emoji}</span>
          </div>

          {/* Right: product info */}
          <div>
            <p
              className="ui text-[10px] uppercase tracking-[0.3em] mb-3"
              style={{ color: '#C4622D' }}
            >
              {product.category.replace('-', ' ')}
            </p>

            <h1 className="text-4xl sm:text-5xl leading-tight mb-3" style={{ color: '#1A1005' }}>
              {product.name}
            </h1>

            <p className="text-lg mb-6" style={{ color: '#8B6F52' }}>
              {product.tagline}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="ui text-2xl font-semibold" style={{ color: '#2C1B07' }}>
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="ui text-lg line-through" style={{ color: '#8B6F52' }}>
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
              {product.compareAtPrice && (
                <span
                  className="ui text-[11px] uppercase tracking-wider px-2 py-1"
                  style={{ backgroundColor: '#C4622D', color: '#F7F4EE' }}
                >
                  Save {formatPrice(product.compareAtPrice - product.price)}
                </span>
              )}
            </div>

            {/* Add to cart */}
            <div className="mb-10">
              <AddToCartButton product={product} />
              <p className="ui text-[11px] text-center mt-3" style={{ color: '#8B6F52' }}>
                Free shipping on orders over $45 · Ships within 2 business days
              </p>
            </div>

            {/* Divider */}
            <div className="h-px mb-8" style={{ backgroundColor: '#E2D5BC' }} />

            {/* Description */}
            <div className="mb-8">
              <p className="leading-relaxed whitespace-pre-line" style={{ color: '#5C3D1E' }}>
                {product.longDescription}
              </p>
            </div>

            {/* Steep instructions */}
            {product.steepInstructions && (
              <div
                className="p-5 mb-6"
                style={{ backgroundColor: '#EFE8D8', borderLeft: '3px solid #C4622D' }}
              >
                <p className="ui text-[10px] uppercase tracking-widest mb-2" style={{ color: '#C4622D' }}>
                  Brew Guide
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#2C1B07' }}>
                  {product.steepInstructions}
                </p>
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mb-6">
                <p className="ui text-[10px] uppercase tracking-widest mb-3" style={{ color: '#8B6F52' }}>
                  Ingredients
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map(ing => (
                    <span
                      key={ing}
                      className="ui text-[11px] px-3 py-1"
                      style={{ backgroundColor: '#EFE8D8', color: '#5C3D1E', border: '1px solid #E2D5BC' }}
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Origin */}
            {product.origin && (
              <div className="mb-6">
                <p className="ui text-[10px] uppercase tracking-widest mb-1" style={{ color: '#8B6F52' }}>
                  Origin
                </p>
                <p className="text-sm" style={{ color: '#5C3D1E' }}>
                  {product.origin}
                </p>
              </div>
            )}

            {/* Ritual pairing */}
            {product.ritualPairing && (
              <div className="mt-8 pt-8" style={{ borderTop: '1px solid #E2D5BC' }}>
                <p className="ui text-[10px] uppercase tracking-widest mb-2" style={{ color: '#C4622D' }}>
                  Ritual Pairing
                </p>
                <p className="text-sm italic leading-relaxed" style={{ color: '#8B6F52' }}>
                  {product.ritualPairing}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        {relatedFilled.length > 0 && (
          <div className="mt-24 pt-16" style={{ borderTop: '1px solid #E2D5BC' }}>
            <h2 className="text-3xl mb-10 text-center" style={{ color: '#1A1005' }}>
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {relatedFilled.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
