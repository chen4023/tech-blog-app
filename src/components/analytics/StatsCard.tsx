interface StatsCardProps {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative'
  description: string
  icon: React.ReactNode
}

export default function StatsCard({
  title,
  value,
  change,
  changeType,
  description,
  icon
}: StatsCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-slate-100 rounded-lg">
            {icon}
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-600 mb-1">
              {title}
            </h3>
            <p className="text-2xl font-bold text-slate-900">
              {value}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center space-x-2 mb-1">
          <span
            className={`text-sm font-medium ${
              changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {change}
          </span>
        </div>
        <p className="text-xs text-slate-500">
          {description}
        </p>
      </div>
    </div>
  )
}
