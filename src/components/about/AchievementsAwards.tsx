interface AchievementCardProps {
  title: string
  year: string
  description: string[]
  icon: React.ReactNode
}

function AchievementCard({ title, year, description, icon }: AchievementCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-8 text-center">
      {/* Icon */}
      <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>

      {/* Year */}
      <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
        {year}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 mb-4">
        {title}
      </h3>

      {/* Description */}
      <div className="space-y-2">
        {description.map((line, index) => (
          <p key={index} className="text-slate-600 text-sm">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function AchievementsAwards() {
  const achievements = [
    {
      title: "Open Source Contributor",
      year: "2023",
      description: [
        "Active contributor to React",
        "ecosystem with 500+ GitHub",
        "stars across repositories"
      ],
      icon: (
        <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Hackathon Winner",
      year: "2023",
      description: [
        "First place at Seoul Tech",
        "Hackathon 2023 for innovative",
        "web application"
      ],
      icon: (
        <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Tech Blog Author",
      year: "2022-2023",
      description: [
        "Published 25+ technical articles",
        "with 50K+ total views on",
        "development topics"
      ],
      icon: (
        <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      title: "Community Speaker",
      year: "2022",
      description: [
        "Presented at 3 local developer",
        "meetups on React and modern",
        "web development"
      ],
      icon: (
        <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Achievements & Awards
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Recognition and milestones throughout my development career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  )
}
