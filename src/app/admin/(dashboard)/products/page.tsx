import { products } from '@/data/products'

export const dynamic = 'force-dynamic'

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#2C1B07]">Products</h1>
        <button className="bg-[#C4622D] hover:bg-[#a8521f] text-white text-sm font-medium px-4 py-2 rounded-md transition-colors">
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl border border-[#E2D5BC] shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#F7F4EE] text-[#8B6F52] text-xs uppercase tracking-wide">
            <tr>
              {['Name', 'Category', 'Price', 'Inventory', 'In Stock', 'Actions'].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F7F4EE]/50'}>
                <td className="px-4 py-3 font-medium text-[#2C1B07]">{p.name}</td>
                <td className="px-4 py-3 text-[#8B6F52] capitalize">{p.category.replace(/-/g, ' ')}</td>
                <td className="px-4 py-3 text-[#2C1B07]">${(p.price / 100).toFixed(2)}</td>
                <td className="px-4 py-3 text-[#2C1B07]">{p.inventory}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${p.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-700'}`}>
                    {p.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <a href={`/admin/products/${p.id}/edit`} className="text-[#C4622D] hover:underline text-xs font-medium">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
