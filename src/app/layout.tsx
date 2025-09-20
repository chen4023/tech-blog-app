import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}