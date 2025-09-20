'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-24">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-white/50 to-purple-50/30"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 border border-pink-200 text-pink-500 text-sm font-medium mb-6">
            Welcome to TechBlog
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Code, Create, and
            <span className="block text-pink-500">Share Knowledge</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover in-depth tutorials, project showcases, and technical insights that
            help developers build better software and advance their careers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/articles"
              className="inline-flex items-center px-8 py-4 bg-pink-500 text-white rounded-lg font-medium text-lg hover:bg-pink-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Explore Articles
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-slate-100 text-slate-700 rounded-lg font-medium text-lg hover:bg-slate-200 transition-colors border border-slate-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}