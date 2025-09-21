'use client'

import Image from "next/image"

interface ArticleHeaderProps {
  article: {
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

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="mb-8">
      {/* Category Badge */}
      <div className="mb-6">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-50 text-pink-500">
          {article.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
        {article.title}
      </h1>

      {/* Description */}
      <p className="text-xl text-slate-600 mb-8 leading-relaxed">
        {article.description}
      </p>

      {/* Author and Share Info */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        {/* Author Info */}
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <Image
            src={article.author.avatar}
            alt={article.author.name}
            className="w-12 h-12 rounded-full object-cover"
            width={48}
            height={48}
          />
          <div>
            <h3 className="font-semibold text-slate-900">{article.author.name}</h3>
            <p className="text-sm text-slate-600">{article.date} • {article.readTime}</p>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-slate-600 mr-2">Share:</span>
          <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
            </svg>
          </button>
          <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </button>
          <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </button>
          <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {article.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Featured Image */}
      <div className="mb-8">
        <Image
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover rounded-lg"
          width={1000}
          height={400}
        />
      </div>
    </header>
  )
}
