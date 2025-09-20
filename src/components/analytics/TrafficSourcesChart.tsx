interface TrafficSource {
  name: string
  percentage: number
  color: string
}

export default function TrafficSourcesChart() {
  const sources: TrafficSource[] = [
    { name: 'Organic Search', percentage: 45, color: 'bg-blue-500' },
    { name: 'Direct', percentage: 25, color: 'bg-green-500' },
    { name: 'Social Media', percentage: 15, color: 'bg-pink-500' },
    { name: 'Email', percentage: 10, color: 'bg-yellow-500' },
    { name: 'Referral', percentage: 5, color: 'bg-purple-500' }
  ]

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Traffic Sources
          </h3>
          <p className="text-sm text-slate-600">
            Where your visitors are coming from
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {sources.map((source, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
                <span className="text-sm font-medium text-slate-900">
                  {source.name}
                </span>
              </div>
              <span className="text-sm text-slate-600">
                {source.percentage}%
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${source.color}`}
                style={{ width: `${source.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
