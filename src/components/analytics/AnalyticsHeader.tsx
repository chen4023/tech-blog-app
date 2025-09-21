'use client'

import { useState } from 'react'

export default function AnalyticsHeader() {
  const [selectedPeriod, setSelectedPeriod] = useState('1Y')

  const periods = ['7D', '30D', '90D', '1Y']

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-slate-600">
              Monitor your blogs{`'`} performance and engagement
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {/* Online Status */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-slate-600">48 online now</span>
            </div>

            {/* Period Filter */}
            <div className="flex items-center space-x-1">
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-3 py-1 text-sm font-medium transition-colors ${selectedPeriod === period
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  {period}
                </button>
              ))}
            </div>

            {/* Export Button */}
            <button className="flex items-center space-x-2 px-4 py-2 bg-slate-100 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-200 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
