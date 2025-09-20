'use client'

import Link from 'next/link'

interface BlogArticleCardProps {
  article: {
    id: number
    title: string
    description: string
    category: string
    readTime: string
    date: string
    author: {
      name: string
      avatar: string
    }
    stats: {
      views: number
      likes: number
      comments: number
    }
    tags: string[]
    image: string
  }
}

export default function BlogArticleCard({ article }: BlogArticleCardProps) {
  return (
    <article className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Article Image */}
      <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">📝</div>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-6">
        {/* Category and Read Time */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-pink-50 text-pink-500 text-xs font-medium rounded-lg">
            {article.category}
          </span>
          <div className="flex items-center text-slate-500 text-xs">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {article.readTime}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {article.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author and Stats */}
        <div className="border-t border-slate-200 pt-4">
          <div className="flex items-center justify-between">
            {/* Author */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-medium">
                {article.author.name.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-slate-900">{article.author.name}</p>
                <p className="text-xs text-slate-500">{article.date}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-4 text-xs text-slate-500">
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {article.stats.views.toLocaleString()}
              </div>
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {article.stats.likes}
              </div>
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {article.stats.comments}
              </div>
            </div>
          </div>
        </div>

        {/* Read Article Button */}
        <div className="mt-4">
          <Link
            href={`/blog/${article.id}`}
            className="w-full flex items-center justify-center px-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium rounded-lg transition-colors group"
          >
            Read Article
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
