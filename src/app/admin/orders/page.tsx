export const dynamic = 'force-dynamic'

const mockOrders = [
  { id: 'TP-1042', date: '2024-01-15', customer: 'Sarah K.', items: 'Signature Masala × 2', total: '$36.00', status: 'shipped' },
  { id: 'TP-1041', date: '2024-01-15', customer: 'James R.', items: 'Ceremony Bundle × 1', total: '$54.00', status: 'processing' },
  { id: 'TP-1040', date: '2024-01-14', customer: 'Priya M.', items: 'Rose Radiance × 1', total: '$22.00', status: 'confirmed' },
  { id: 'TP-1039', date: '2024-01-14', customer: 'Devon L.', items: 'Golden Glow × 2, Signature Masala × 1', total: '$76.00', status: 'delivered' },
  { id: 'TP-1038', date: '2024-01-13', customer: 'Alice T.', items: 'Ritual Sampler Pack × 1', total: '$48.00', status: 'pending' },
  { id: 'TP-1037', date: '2024-01-13', customer: 'Marcus B.', items: 'Signature Masala Tin × 1', total: '$34.00', status: 'shipped' },
  { id: 'TP-1036', date: '2024-01-12', customer: 'Lena W.', items: 'Rose Radiance × 2', total: '$44.00', status: 'delivered' },
  { id: 'TP-1035', date: '2024-01-12', customer: 'Omar S.', items: 'Ceremony Bundle × 1, Rose Radiance × 1', total: '$76.00', status: 'confirmed' },
  { id: 'TP-1034', date: '2024-01-11', customer: 'Nina P.', items: 'Golden Glow × 1', total: '$24.00', status: 'shipped' },
  { id: 'TP-1033', date: '2024-01-11', customer: 'Chris H.', items: 'Ritual Sampler Pack × 2', total: '$96.00', status: 'processing' },
]

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  processing: 'bg-orange-100 text-orange-800',
  shipped: 'bg-green-100 text-green-800',
  delivered: 'bg-gray-100 text-gray-700',
}

export default function AdminOrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#2C1B07]">Orders</h1>
        <span className="text-sm text-[#8B6F52]">{mockOrders.length} orders</span>
      </div>

      <div className="bg-white rounded-xl border border-[#E2D5BC] shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#F7F4EE] text-[#8B6F52] text-xs uppercase tracking-wide">
            <tr>
              {['Order #', 'Date', 'Customer', 'Items', 'Total', 'Status', 'Actions'].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order, i) => (
              <tr key={order.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F7F4EE]/50'}>
                <td className="px-4 py-3 font-mono text-[#C4622D]">{order.id}</td>
                <td className="px-4 py-3 text-[#8B6F52]">{order.date}</td>
                <td className="px-4 py-3 text-[#2C1B07]">{order.customer}</td>
                <td className="px-4 py-3 text-[#8B6F52] max-w-xs truncate">{order.items}</td>
                <td className="px-4 py-3 font-medium text-[#2C1B07]">{order.total}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <a href={`/admin/orders/${order.id}`} className="text-[#C4622D] hover:underline text-xs font-medium">
                    View
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
