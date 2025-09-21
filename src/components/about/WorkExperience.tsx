import { BeforeAfterCard } from './BeforeAfterCard';
import { Badge } from '../common/Text';

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  location: string
  type: string
  achievements: string[]
  technologies: string[]
  showBeforeAfter?: boolean
}

function ExperienceItem({ title, company, period, location, type, achievements, technologies, showBeforeAfter }: ExperienceItemProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-8 relative">
      {/* Timeline indicator */}
      <div className="absolute -left-4 top-8 w-4 h-4 bg-pink-500 rounded-full border-4 border-white"></div>

      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {title}
            </h3>
            <p className="text-pink-500 font-bold text-lg">
              {company}
            </p>
          </div>
          <div className="flex items-center space-x-4 text-sm text-slate-500 mt-2 md:mt-0">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{period}</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{location}</span>
            </div>
          </div>
        </div>
        <span className="inline-block bg-pink-100 text-pink-500 px-3 py-1 rounded-full text-sm font-medium">
          {type}
        </span>
      </div>

      {/* Key Achievements */}
      <div className="mb-6">
        <h4 className="font-bold text-slate-900 mb-4">Key Achievements</h4>

        {showBeforeAfter ? (
          <>
            <ul className="space-y-2 mb-12">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-slate-600">{achievement}</span>
                </li>
              ))}
            </ul>
            <BeforeAfterCard
              title="대규모 프론트엔드 협업 환경 구조 개선"
              description="한 저장소(Repo)에서 20명 이상이 동시에 개발하는 환경에서 발생하는 협업 문제를 팀·프로젝트 상황에 맞게 구조 재설계하여 조직 전체의 생산성과 ROI를 극대화"
              comparisons={[
                {
                  label: "PR 충돌",
                  before: "주 30건 이상",
                  after: "80% 감소",
                  improvement: "충돌 해결"
                },
                {
                  label: "QA 대기 시간",
                  before: "평균 2~3일",
                  after: "0.5일 이하",
                  improvement: "80% 단축"
                },
                {
                  label: "일정 준수",
                  before: "지연률 40%+",
                  after: "준수율 +35%",
                  improvement: "효율성 개선"
                }
              ]}
            />

          </>
        ) : (
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-slate-600">{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Technologies Used */}
      <div>
        <h4 className="font-bold text-slate-900 mb-4">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              className="px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function WorkExperience() {
  const experiences = [
    {
      title: "Frontend Edu Developer",
      company: "(주) NEXT RUNNERS",
      period: "2024.03 - 현재",
      location: "Seoul, South Korea",
      type: "Full-time",
      achievements: [
        "대규모 프론트엔드 협업 환경 구조 개선",
        "한 레포에서 20명이 동시에 개발하는 구조를 팀과 프로젝트 상황에 맞춰 나누어 재설계, 협업 생산성을 극대화한 경험",
        "PR 충돌, QA 병목, 일정 지연 누구나 예상하는 문제 → 단순한 개발 문제가 아닌 조직의 생산성과 ROI를 극대화해야 하는 '설계 과제'로 접근",
        "	도메인 단위 분리 (Domain-based Split) → 한 레포 안에서도 기능(예: 인증, 커뮤니티, 대시보드)을 모듈화",
        "Git 브랜치 전략 고도화→ 단순 feature/* 방식에서, 팀 단위 브랜치 → 개인 브랜치 → 메인 병합 구조로 다단계 관리",
        "CI/CD 자동화 파이프라인 분리→ 각 팀 단위 브랜치에 대해 자동 빌드 & 테스트 적용 → 메인으로 병합 전 품질 보증"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "AWS S3"],
      showBeforeAfter: true
    },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            프론트엔드 개발자로서의 성장 여정과 핵심 성과
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-pink-300/30"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="ml-16">
                <ExperienceItem {...experience} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
