import AnalyticsHeader from '@/components/analytics/AnalyticsHeader'
import StatsCard from '@/components/analytics/StatsCard'
import VisitorTrendsChart from '@/components/analytics/VisitorTrendsChart'
import TrafficSourcesChart from '@/components/analytics/TrafficSourcesChart'
import TopPostsList from '@/components/analytics/TopPostsList'
import DeviceTypesChart from '@/components/analytics/DeviceTypesChart'
import MonthlyGoals from '@/components/analytics/MonthlyGoals'
import RecentActivity from '@/components/analytics/RecentActivity'

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AnalyticsHeader />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Views"
            value="124,563"
            change="+12.5% from last period"
            changeType="positive"
            description="Page views this period"
            icon={
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
          />
          <StatsCard
            title="Unique Visitors"
            value="45,231"
            change="+8.3% from last period"
            changeType="positive"
            description="Individual users"
            icon={
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            }
          />
          <StatsCard
            title="Bounce Rate"
            value="32.4%"
            change="-5.1% from last period"
            changeType="negative"
            description="Single-page sessions"
            icon={
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
          <StatsCard
            title="Avg. Session"
            value="4m 32s"
            change="+15.3% from last period"
            changeType="positive"
            description="Time spent on site"
            icon={
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <VisitorTrendsChart />
            <TrafficSourcesChart />
            <TopPostsList />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <DeviceTypesChart />
            <MonthlyGoals />
            <RecentActivity />
          </div>
        </div>
      </main>

    </div>
  )
}
