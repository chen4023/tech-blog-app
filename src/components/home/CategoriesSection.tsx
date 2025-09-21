'use client'

import Link from 'next/link'
import {
  DocumentIcon,
  CodeIcon,
  ServerIcon,
  CssIcon,
  DatabaseIcon
} from '@/components/icons'

const categories = [
  {
    name: "React",
    count: "24 articles",
    icon: <DocumentIcon className="w-5 h-5" />,
    color: "bg-blue-100"
  },
  {
    name: "TypeScript",
    count: "18 articles",
    icon: <CodeIcon className="w-5 h-5" />,
    color: "bg-blue-100"
  },
  {
    name: "Node.js",
    count: "15 articles",
    icon: <ServerIcon className="w-5 h-5" />,
    color: "bg-green-100"
  },
  {
    name: "CSS",
    count: "12 articles",
    icon: <CssIcon className="w-5 h-5" />,
    color: "bg-purple-100"
  },
  {
    name: "JavaScript",
    count: "21 articles",
    icon: <CodeIcon className="w-5 h-5" />,
    color: "bg-yellow-100"
  },
  {
    name: "Database",
    count: "9 articles",
    icon: <DatabaseIcon className="w-5 h-5" />,
    color: "bg-indigo-100"
  }
]

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-slate-600">
            기술과 주제별로 아티클을 탐색하여 원하는 것을 찾아보세요.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/categories/${category.name.toLowerCase()}`}
              className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-slate-600 mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">
                {category.name}
              </h3>
              <p className="text-slate-500 text-sm">
                {category.count}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
