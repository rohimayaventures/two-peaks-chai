import { products } from '@/data/products'

export const dynamic = 'force-dynamic'

const mockRecentOrders = [
  { id: 'TP-1042', customer: 'Sarah K.', items: 'Signature Masala × 2', total: '$36.00', status: 'shipped' },
  { id: 'TP-1041', customer: 'James R.', items: 'Ceremony Bundle × 1', total: '$54.00', status: 'processing' },
  { id: 'TP-1040', customer: 'Priya M.', items: 'Rose Radiance × 1', total: '$22.00', status: 'confirmed' },
  { id: 'TP-1039', customer: 'Devon L.', items: 'Golden Glow × 2, Signature Masala × 1', total: '$76.00', status: 'delivered' },
  { id: 'TP-1038', customer: 'Alice T.', items: 'Ritual Sampler Pack × 1', total: '$48.00', status: 'pending' },
]

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  processing: 'bg-orange-100 text-orange-800',
  shipped: 'bg-green-100 text-green-800',
  delivered: 'bg-gray-100 text-gray-700',
}

const stats = [
  { label: 'Total Orders', value: '47' },
  { label: 'Revenue (MTD)', value: '$2,847.00' },
  { label: 'Low Stock', value: '3 products' },
  { label: 'Pending Shipments', value: '5' },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-[#2C1B07]">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-[#E2D5BC] shadow-sm p-5">
            <p className="text-xs text-[#8B6F52] uppercase tracking-wide">{s.label}</p>
            <p className="text-2xl font-bold text-[#2C1B07] mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <section>
        <h2 className="text-lg font-semibold text-[#2C1B07] mb-3">Recent Orders</h2>
        <div className="bg-white rounded-xl border border-[#E2D5BC] shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#F7F4EE] text-[#8B6F52] text-xs uppercase tracking-wide">
              <tr>
                {['Order #', 'Customer', 'Items', 'Total', 'Status'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockRecentOrders.map((order, i) => (
                <tr key={order.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F7F4EE]/50'}>
                  <td className="px-4 py-3 font-mono text-[#C4622D]">{order.id}</td>
                  <td className="px-4 py-3 text-[#2C1B07]">{order.customer}</td>
                  <td className="px-4 py-3 text-[#8B6F52]">{order.items}</td>
                  <td className="px-4 py-3 font-medium text-[#2C1B07]">{order.total}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product Inventory */}
      <section>
        <h2 className="text-lg font-semibold text-[#2C1B07] mb-3">Product Inventory</h2>
        <div className="bg-white rounded-xl border border-[#E2D5BC] shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#F7F4EE] text-[#8B6F52] text-xs uppercase tracking-wide">
              <tr>
                {['Name', 'Category', 'Inventory', 'In Stock'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F7F4EE]/50'}>
                  <td className="px-4 py-3 font-medium text-[#2C1B07]">{p.name}</td>
                  <td className="px-4 py-3 text-[#8B6F52] capitalize">{p.category.replace(/-/g, ' ')}</td>
                  <td className="px-4 py-3 text-[#2C1B07]">{p.inventory}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${p.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-700'}`}>
                      {p.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
