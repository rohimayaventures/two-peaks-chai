import type { Metadata } from 'next'
import './globals.css'

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
    'small batch chai', 'ritual tea',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Two Peaks Chai Co.',
    title: 'Two Peaks Chai Co. — Premium Handcrafted Chai & Wellness Tea',
    description:
      'Handcrafted chai blends rooted in Indian Ayurvedic tradition and Colorado culture.',
    url: 'https://twopeakschai.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Two Peaks Chai Co.',
    description: 'Handcrafted chai blends — Signature Masala, Rose Radiance, Golden Glow.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://twopeakschai.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
