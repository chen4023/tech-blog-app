'use client'

import { useState } from 'react'
import { Footer, Pagination, BlogControls, ViewMode } from '@/components/common'
import BlogSidebar from '@/components/blog/BlogSidebar'
import { ArticleCard } from '@/components/common/card'
import { blogArticles } from '@/mock/blog-post'
import { Heading } from '@/components/common/Text'

// Sample blog data
export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('Latest')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  const totalResults = 12
  const totalPages = Math.ceil(totalResults / 9)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Heading level={3} className="text-2xl font-bold text-slate-900">All Articles</Heading>
      </div>
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <BlogSidebar />

          {/* Main Content */}
          <div className="flex-1">
            {/* Header with Sort Controls */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold text-slate-900">All Articles</h2>
                <span className="text-sm text-slate-500">{totalResults} results</span>
              </div>

              <BlogControls
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>

            {/* Articles Grid */}
            <div className={`grid gap-6 mb-12 ${viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
              }`}>
              {blogArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalResults={totalResults}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
