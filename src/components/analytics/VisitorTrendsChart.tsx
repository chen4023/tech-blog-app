'use client'

export default function VisitorTrendsChart() {
  // Sample data for the chart
  const chartData = [
    { day: 1, views: 120 },
    { day: 2, views: 180 },
    { day: 3, views: 220 },
    { day: 4, views: 190 },
    { day: 5, views: 280 },
    { day: 6, views: 250 },
    { day: 7, views: 320 }
  ]

  const maxViews = Math.max(...chartData.map(d => d.views))
  const minViews = Math.min(...chartData.map(d => d.views))

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Visitor Trends
          </h3>
          <p className="text-sm text-slate-600">
            Daily visitors and page views over time
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
        <div className="flex items-end justify-between h-80">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between h-full text-xs text-slate-500 mr-4">
            <span>3.5K</span>
            <span>2.5K</span>
            <span>1.5K</span>
            <span>0.5K</span>
          </div>

          {/* Chart bars */}
          <div className="flex items-end space-x-2 flex-1">
            {chartData.map((data, index) => {
              const height = ((data.views - minViews) / (maxViews - minViews)) * 100
              return (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-8 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-slate-500 mt-2">{data.day}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-4 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-slate-600">Page Views</span>
          </div>
        </div>
      </div>
    </div>
  )
}
