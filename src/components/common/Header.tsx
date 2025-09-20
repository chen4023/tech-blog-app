'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 h-16">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-slate-900">TechBlog</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/analytics"
              className="px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors"
            >
              Analytics
            </Link>
            <Link
              href="/projects"
              className="px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 rounded-lg bg-pink-50 text-pink-500 font-medium text-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle buttons */}
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
            </div>

            {/* Subscribe button */}
            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-pink-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}