import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartSidebar from '@/components/shop/CartSidebar'

export const metadata: Metadata = {
  title: {
    default: 'Two Peaks Chai Co. — Premium Handcrafted Chai & Wellness Tea',
    template: '%s | Two Peaks Chai Co.',
  },
  description:
    'Handcrafted chai blends rooted in Indian Ayurvedic tradition and Colorado culture. Signature Masala, Rose Radiance, and Golden Glow — small-batch, single-origin, ritual-focused.',
  keywords: [
    'chai', 'masala chai', 'turmeric chai', 'rose chai', 'ashwagandha chai',
    'wellness tea', 'Ayurvedic tea', 'Colorado chai', 'handcrafted chai',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Two Peaks Chai Co.',
    title: 'Two Peaks Chai Co. — Premium Handcrafted Chai & Wellness Tea',
    description: 'Handcrafted chai blends rooted in Indian Ayurvedic tradition and Colorado culture.',
    url: 'https://twopeakschai.com',
  },
  twitter: { card: 'summary_large_image', title: 'Two Peaks Chai Co.' },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://twopeakschai.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <CartSidebar />
        <Footer />
      </body>
    </html>
  )
}
