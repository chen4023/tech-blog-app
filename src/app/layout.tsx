import type { Metadata } from 'next'
import './globals.css'
import { gmarketSans } from '@/lib/fonts'
import { Footer, Header } from '@/components/common'

export const metadata: Metadata = {
  title: 'TechBlog - Latest in Technology',
  description: 'Discover the latest trends, insights, and innovations in the tech world',
  keywords: ['technology', 'blog', 'AI', 'web3', 'cloud computing', 'development'],
  authors: [{ name: 'TechBlog Team' }],
  openGraph: {
    title: 'TechBlog - Latest in Technology',
    description: 'Discover the latest trends, insights, and innovations in the tech world',
    type: 'website',
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={gmarketSans.variable}>
      <Header />
      <body className={gmarketSans.className}>
        {children}
      </body>
      <Footer />
    </html>
  )
}