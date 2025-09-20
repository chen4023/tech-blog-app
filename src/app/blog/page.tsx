'use client'

import { useState } from 'react'
import Header from '@/components/common/Header'
import BlogHeader from '@/components/blog/BlogHeader'
import BlogSidebar from '@/components/blog/BlogSidebar'
import BlogArticleCard from '@/components/blog/BlogArticleCard'
import Pagination from '@/components/common/Pagination'
import Footer from '@/components/common/Footer'

// Sample blog data
const blogArticles = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    description: "Learn how to structure large React applications using TypeScript, best practices for component architecture, and advanced patterns for maintainable code.",
    category: "React",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    author: { name: "Sarah Chen", avatar: "/avatars/sarah.jpg" },
    stats: { views: 2847, likes: 23, comments: 156 },
    tags: ["React", "TypeScript", "+1"],
    image: "/api/placeholder/400/200"
  },
  {
    id: 2,
    title: "Mastering CSS Grid: From Basics to Advanced Layouts",
    description: "Deep dive into CSS Grid with practical examples, responsive design patterns, and real-world layout solutions that will elevate your frontend skills.",
    category: "CSS",
    readTime: "12 min read",
    date: "Dec 12, 2024",
    author: { name: "Marcus Rodriguez", avatar: "/avatars/marcus.jpg" },
    stats: { views: 1923, likes: 18, comments: 89 },
    tags: ["CSS", "Grid", "+1"],
    image: "/api/placeholder/400/200"
  },
  {
    id: 3,
    title: "API Design Best Practices for Modern Web Applications",
    description: "Comprehensive guide to designing RESTful APIs, handling authentication, error management, and documentation strategies for better developer experience.",
    category: "Node.js",
    readTime: "15 min read",
    date: "Dec 10, 2024",
    author: { name: "David Kim", avatar: "/avatars/david.jpg" },
    stats: { views: 3156, likes: 31, comments: 198 },
    tags: ["API", "Backend", "+1"],
    image: "/api/placeholder/400/200"
  },
  {
    id: 4,
    title: "Advanced JavaScript Patterns and Performance Optimization",
    description: "Explore advanced JavaScript patterns, memory management, and performance optimization techniques that will make your applications faster and more efficient.",
    category: "JavaScript",
    readTime: "10 min read",
    date: "Dec 8, 2024",
    author: { name: "Emily Watson", avatar: "/avatars/emily.jpg" },
    stats: { views: 2634, likes: 27, comments: 143 },
    tags: ["JavaScript", "Performance", "+1"],
    image: "/api/placeholder/400/200"
  },
  {
    id: 5,
    title: "Database Design Patterns for Scalable Applications",
    description: "Learn essential database design patterns, normalization techniques, and scaling strategies for building robust data-driven applications.",
    category: "Database",
    readTime: "14 min read",
    date: "Dec 5, 2024",
    author: { name: "Alex Thompson", avatar: "/avatars/alex.jpg" },
    stats: { views: 1876, likes: 19, comments: 92 },
    tags: ["Database", "Architecture", "+1"],
    image: "/api/placeholder/400/200"
  },
  {
    id: 6,
    title: "Modern DevOps Practices with Docker and Kubernetes",
    description: "Master containerization and orchestration with Docker and Kubernetes. Learn deployment strategies, monitoring, and scaling for production applications.",
    category: "DevOps",
    readTime: "18 min read",
    date: "Dec 3, 2024",
    author: { name: "Michael Brown", avatar: "/avatars/michael.jpg" },
    stats: { views: 2198, likes: 22, comments: 117 },
    tags: ["DevOps", "Docker", "+1"],
    image: "/api/placeholder/400/200"
  },
  {
    id: 7,
    title: "React Hooks Deep Dive: Custom Hooks and Advanced Patterns",
    description: "Explore advanced React Hooks patterns, create custom hooks for complex state management, and optimize component performance with modern techniques.",
    category: "React",
    readTime: "13 min read",
    date: "Dec 1, 2024",
    author: { name: "Jennifer Liu", avatar: "/avatars/jennifer.jpg" },
    stats: { views: 2943, likes: 34, comments: 187 },
    tags: ["React", "Hooks", "+1"],
    image: "/api/placeholder/400/200"
  },
  {
    id: 8,
    title: "Mobile-First CSS: Responsive Design Strategies",
    description: "Master mobile-first approach to CSS design, learn responsive techniques, and create seamless experiences across all device sizes.",
    category: "CSS",
    readTime: "11 min read",
    date: "Nov 28, 2024",
    author: { name: "Robert Garcia", avatar: "/avatars/robert.jpg" },
    stats: { views: 1754, likes: 16, comments: 78 },
    tags: ["CSS", "Responsive Design", "+1"],
    image: "/api/placeholder/400/200"
  },
  {
    id: 9,
    title: "TypeScript Advanced Types and Utility Functions",
    description: "Dive into TypeScript advanced type system, utility types, conditional types, and how to leverage them for better code safety and developer experience.",
    category: "TypeScript",
    readTime: "16 min read",
    date: "Nov 25, 2024",
    author: { name: "Anna Kowalski", avatar: "/avatars/anna.jpg" },
    stats: { views: 2287, likes: 25, comments: 134 },
    tags: ["TypeScript", "Advanced", "+1"],
    image: "/api/placeholder/400/200"
  }
]

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('Latest')
  const [viewMode, setViewMode] = useState('grid')

  const totalResults = 12
  const totalPages = Math.ceil(totalResults / 9)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <BlogHeader />

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

              <div className="flex items-center space-x-4">
                {/* View Mode Toggle */}
                <div className="flex bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-slate-200'
                      }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-slate-200'
                      }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </button>
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="Latest">Latest</option>
                  <option value="Popular">Popular</option>
                  <option value="Oldest">Oldest</option>
                  <option value="Most Liked">Most Liked</option>
                </select>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {blogArticles.map((article) => (
                <BlogArticleCard key={article.id} article={article} />
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
