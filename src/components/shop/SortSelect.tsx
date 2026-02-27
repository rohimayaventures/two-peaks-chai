'use client'

export default function SortSelect({ defaultValue, activeCategory }: { defaultValue: string; activeCategory: string }) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams()
    if (activeCategory !== 'all') params.set('category', activeCategory)
    params.set('sort', e.target.value)
    window.location.href = `/shop?${params.toString()}`
  }
  return (
    <div className="flex items-center gap-2">
      <label className="text-[10px] ui uppercase tracking-widest text-[#8B6F52]">Sort</label>
      <select defaultValue={defaultValue} onChange={handleChange}
        className="text-sm ui text-[#5C3D1E] border border-[#E2D5BC] bg-white px-3 py-2
          focus:outline-none focus:border-[#C4622D]">
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name">Alphabetical</option>
      </select>
    </div>
  )
}
