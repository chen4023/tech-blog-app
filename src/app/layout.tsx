import type { Metadata } from 'next'
import './globals.css'
import { gmarketSans } from '@/lib/fonts'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={gmarketSans.variable}>
      <body className={gmarketSans.className}>
        {children}
      </body>
    </html>
  )
}