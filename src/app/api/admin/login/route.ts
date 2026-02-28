import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  const secret = process.env.ADMIN_SECRET ?? 'admin'

  if (password === secret) {
    const res = NextResponse.json({ success: true })
    res.cookies.set('admin_session', secret, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    })
    return res
  }

  return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
}
