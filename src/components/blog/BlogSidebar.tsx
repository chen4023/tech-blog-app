'use client'

import { useState } from 'react'

// 정적 데이터를 컴포넌트 외부로 호이스팅
const categories = [
  { name: 'All', count: 12 },
  { name: 'React', count: 2 },
  { name: 'TypeScript', count: 1 },
  { name: 'Node.js', count: 2 },
  { name: 'CSS', count: 2 },
  { name: 'JavaScript', count: 1 },
  { name: 'Database', count: 1 },
  { name: 'DevOps', count: 1 },
  { name: 'UI/UX', count: 1 },
  { name: 'Mobile', count: 1 }
]

const tags = [
  'Architecture', 'Performance', 'Best Practices', 'Tutorial', 'Guide',
  'Advanced', 'Beginner', 'Tools', 'Framework', 'API', 'Security', 'Testing'
]

// 검색 아이콘 호이스팅
const SearchIcon = (
  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

export default function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <aside className="w-72 space-y-8">
      {/* Search Section */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 pr-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {SearchIcon}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${selectedCategory === category.name
                ? 'bg-pink-500 text-white'
                : 'hover:bg-slate-50 text-slate-600'
                }`}
            >
              <span className="text-sm font-medium">{category.name}</span>
              <span className={`text-xs ${selectedCategory === category.name ? 'text-white' : 'text-slate-500'
                }`}>
                ({category.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Tags Section */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-2 bg-slate-100 text-slate-600 text-xs font-medium rounded-full hover:bg-slate-200 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
