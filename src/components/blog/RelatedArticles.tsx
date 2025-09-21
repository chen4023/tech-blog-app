'use client'

import Link from 'next/link'
import Image from "next/image"

interface RelatedArticlesProps {
  articles: Array<{
    id: number
    title: string
    readTime: string
    image: string
  }>
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <h3 className="font-semibold text-slate-900 mb-4">Related Articles</h3>

      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/article-${article.id}`}
            className="block group"
          >
            <div className="rounded-lg overflow-hidden mb-3">
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                width={302}
                height={170}
              />
            </div>
            <h4 className="font-medium text-slate-900 group-hover:text-pink-600 transition-colors mb-1">
              {article.title}
            </h4>
            <p className="text-xs text-slate-500">{article.readTime}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
