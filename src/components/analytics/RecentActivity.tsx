interface Activity {
  id: number
  type: 'comment' | 'like' | 'subscriber' | 'share'
  message: string
  time: string
}

export default function RecentActivity() {
  const activities: Activity[] = [
    {
      id: 1,
      type: 'comment',
      message: "New comment on 'React Patterns'",
      time: '2 minutes ago'
    },
    {
      id: 2,
      type: 'like',
      message: 'Post liked 16 times',
      time: '5 minutes ago'
    },
    {
      id: 3,
      type: 'subscriber',
      message: 'New subscriber from newsletter',
      time: '12 minutes ago'
    },
    {
      id: 4,
      type: 'share',
      message: 'Post shared on Twitter',
      time: '18 minutes ago'
    },
    {
      id: 5,
      type: 'comment',
      message: "New comment on 'TypeScript Guide'",
      time: '25 minutes ago'
    }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'comment':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )
      case 'like':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        )
      case 'subscriber':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        )
      case 'share':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Recent Activity
        </h3>
        <p className="text-sm text-slate-600">
          Latest interactions and events
        </p>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-pink-50 rounded-lg flex items-center justify-center text-pink-600">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-900 mb-1">
                {activity.message}
              </p>
              <p className="text-xs text-slate-500">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
