'use client'

import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  description: string
  date: string
  readTime: string
  imageColor: string
  href: string
}

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={post.href} className="group">
      <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image placeholder */}
        <div className={`h-45 ${post.imageColor} flex items-center justify-center`}>
          <div className="text-gray-500 text-sm">Image Placeholder</div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 mb-3 leading-relaxed">
            {post.description}
          </p>
          <p className="text-xs text-gray-400">
            {post.date} • {post.readTime}
          </p>
        </div>
      </article>
    </Link>
  )
}
