'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  href: string
  label: string
  isSpecial?: boolean
}

interface NavigationProps {
  className?: string
  items?: NavItem[]
}

const defaultNavItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation({
  className = 'hidden md:flex items-center space-x-8',
  items = defaultNavItems
}: NavigationProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const getLinkClassName = (item: NavItem) => {
    const isCurrentActive = isActive(item.href)

    if (item.isSpecial) {
      return `px-3 py-2 rounded-lg font-medium text-sm transition-colors ${isCurrentActive
        ? 'bg-pink-500 text-white hover:bg-pink-600'
        : 'bg-pink-50 text-pink-500 hover:bg-pink-100'
        }`
    }

    return `px-3 py-2 rounded-lg font-medium text-sm transition-colors ${isCurrentActive
      ? 'text-pink-500 bg-pink-50 hover:bg-pink-100'
      : 'text-slate-600 hover:text-slate-900'
      }`
  }

  return (
    <nav className={className}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={getLinkClassName(item)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
