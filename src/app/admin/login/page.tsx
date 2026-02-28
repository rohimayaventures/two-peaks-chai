'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (data.success) {
        router.push('/admin')
      } else {
        setError(data.error ?? 'Invalid password')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F4EE] flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md border border-[#E2D5BC] w-full max-w-sm p-8">
        <h1 className="text-xl font-bold text-[#2C1B07] mb-1">Admin Login</h1>
        <p className="text-sm text-[#8B6F52] mb-6">Two Peaks Chai Co. — Internal Dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#2C1B07] mb-1">
              Admin Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-[#E2D5BC] rounded-md px-3 py-2 text-sm text-[#2C1B07] focus:outline-none focus:ring-2 focus:ring-[#C4622D]"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C4622D] hover:bg-[#a8521f] text-white rounded-md py-2 text-sm font-medium transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
