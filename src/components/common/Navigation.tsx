import Link from 'next/link'

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
  { href: '/analytics', label: 'Analytics' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact', isSpecial: true },
]

export default function Navigation({
  className = 'hidden md:flex items-center space-x-8',
  items = defaultNavItems
}: NavigationProps) {
  return (
    <nav className={className}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={
            item.isSpecial
              ? 'px-3 py-2 rounded-lg bg-pink-50 text-pink-primary font-medium text-sm transition-colors hover:bg-pink-100'
              : 'px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors'
          }
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
