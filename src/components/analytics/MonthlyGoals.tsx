interface Goal {
  name: string
  current: number
  target: number
  percentage: number
}

export default function MonthlyGoals() {
  const goals: Goal[] = [
    { name: 'Page Views', current: 124563, target: 150000, percentage: 83 },
    { name: 'New Subscribers', current: 800, target: 1000, percentage: 80 },
    { name: 'Engagement Rate', current: 67, target: 70, percentage: 96 }
  ]

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Monthly Goals
        </h3>
        <p className="text-sm text-slate-600">
          Progress towards targets
        </p>
      </div>

      <div className="space-y-6">
        {goals.map((goal, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-900">
                {goal.name}
              </span>
              <span className="text-sm text-slate-600">
                {goal.name === 'Engagement Rate' 
                  ? `${goal.current}/${goal.target}`
                  : `${formatNumber(goal.current)}/${formatNumber(goal.target)}`
                }
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-400"
                style={{ width: `${goal.percentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-slate-500">
              {goal.percentage}% complete
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
