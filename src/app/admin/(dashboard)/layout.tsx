import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')?.value
  const secret = process.env.ADMIN_SECRET ?? 'admin'

  if (session !== secret) {
    redirect('/admin/login')
  }

  return (
    <div className="flex h-screen bg-[#F7F4EE] antialiased">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 bg-[#1A1005] text-white flex flex-col">
        <div className="px-6 py-6 border-b border-white/10">
          <span className="text-[#C4622D] font-bold text-lg leading-tight">Two Peaks</span>
          <span className="block text-white/50 text-xs mt-0.5">Admin Dashboard</span>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {[
            { href: '/admin', label: 'Dashboard' },
            { href: '/admin/orders', label: 'Orders' },
            { href: '/admin/products', label: 'Products' },
            { href: '/admin/settings', label: 'Settings' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="px-6 py-4 border-t border-white/10 text-xs text-white/30">
          © Two Peaks Chai Co.
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-12 bg-white border-b border-[#E2D5BC] px-6 flex items-center text-sm text-[#8B6F52]">
          Admin
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
