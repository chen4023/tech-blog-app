'use client'

import BlogPostCard from './BlogPostCard'

const blogPosts = [
  {
    id: 1,
    title: "AI Revolution in 2024",
    description: "Exploring the latest advancements in artificial intelligence and machine learning technologies that are reshaping our world.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    imageColor: "bg-gray-300",
    href: "/articles/ai-revolution-2024"
  },
  {
    id: 2,
    title: "Web3 Development Guide",
    description: "A comprehensive guide to building decentralized applications and understanding blockchain technology.",
    date: "Dec 12, 2024",
    readTime: "8 min read",
    imageColor: "bg-blue-100",
    href: "/articles/web3-development-guide"
  },
  {
    id: 3,
    title: "Cloud Computing Trends",
    description: "How cloud infrastructure is evolving and what it means for developers and businesses worldwide.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    imageColor: "bg-orange-100",
    href: "/articles/cloud-computing-trends"
  }
]

export default function BlogPostsSection() {
  return (
    <section className="py-20 px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-20 text-center">
          Featured Articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
