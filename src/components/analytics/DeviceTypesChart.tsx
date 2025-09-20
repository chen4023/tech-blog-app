interface DeviceType {
  name: string
  percentage: number
  color: string
}

export default function DeviceTypesChart() {
  const devices: DeviceType[] = [
    { name: 'Desktop', percentage: 55, color: 'bg-blue-500' },
    { name: 'Mobile', percentage: 40, color: 'bg-pink-500' },
    { name: 'Tablet', percentage: 5, color: 'bg-green-500' }
  ]

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Device Types
        </h3>
        <p className="text-sm text-slate-600">
          Visitor device breakdown
        </p>
      </div>

      <div className="space-y-4">
        {devices.map((device, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${device.color}`}></div>
                <span className="text-sm text-slate-900">
                  {device.name}
                </span>
              </div>
              <span className="text-sm font-medium text-slate-900">
                {device.percentage}%
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${device.color}`}
                style={{ width: `${device.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
