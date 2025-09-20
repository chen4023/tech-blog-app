'use client'

import Link from 'next/link'

const articles = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    description: "Learn how to structure large React applications using TypeScript, best practices for component architecture, and advanced patterns for maintainable code.",
    category: "React",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image: "/api/placeholder/400/200"
  },
  {
    id: 2,
    title: "Mastering CSS Grid: From Basics to Advanced Layouts",
    description: "Deep dive into CSS Grid with practical examples, responsive design patterns, and real-world layout solutions that will elevate your frontend skills.",
    category: "CSS",
    readTime: "12 min read",
    date: "Dec 12, 2024",
    image: "/api/placeholder/400/200"
  },
  {
    id: 3,
    title: "API Design Best Practices for Modern Web Applications",
    description: "Comprehensive guide to designing RESTful APIs, handling authentication, error management, and documentation strategies for better developer experience.",
    category: "Backend",
    readTime: "15 min read",
    date: "Dec 10, 2024",
    image: "/api/placeholder/400/200"
  }
]

export default function FeaturedArticlesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Featured Articles
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Dive into our most popular and recent articles covering the latest in web
            development, programming best practices, and technology trends.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <article key={article.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Article Image */}
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                <div className="text-slate-500 text-sm">Article Image</div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Category and Read Time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-pink-50 text-pink-500 rounded-lg text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="text-slate-500 text-xs">
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {article.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-xs">
                    {article.date}
                  </span>
                  <Link 
                    href={`/articles/${article.id}`}
                    className="inline-flex items-center text-pink-500 text-sm font-medium hover:text-pink-600 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/articles"
            className="inline-flex items-center px-8 py-4 bg-slate-100 text-slate-700 rounded-lg font-medium text-lg hover:bg-slate-200 transition-colors border border-slate-200"
          >
            View All Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
