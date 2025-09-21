import type { Metadata } from 'next'
import './globals.css'
import { gmarketSans } from '@/lib/fonts'
import { Header } from '@/components/common'

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
  // 성능 최적화를 위한 추가 메타데이터
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
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
    </html>
  )
}