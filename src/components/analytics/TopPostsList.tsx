interface Post {
  id: number
  title: string
  views: string
}

export default function TopPostsList() {
  const posts: Post[] = [
    { id: 1, title: 'Advanced React Patterns for 2024', views: '15,420 views' },
    { id: 2, title: 'TypeScript Best Practices', views: '12,350 views' },
    { id: 3, title: 'Next.js Performance Optimization', views: '10,890 views' },
    { id: 4, title: 'Node.js Microservices Architecture', views: '7,650 views' },
    { id: 5, title: 'Modern CSS Grid Layouts', views: '6,760 views' }
  ]

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Top Performing Posts
          </h3>
          <p className="text-sm text-slate-600">
            Most viewed articles this period
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold text-slate-600">
                #{index + 1}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-slate-900 mb-1">
                {post.title}
              </h4>
              <p className="text-sm text-slate-500">
                {post.views}
              </p>
            </div>
            <button className="p-2 text-slate-400 hover:text-slate-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
