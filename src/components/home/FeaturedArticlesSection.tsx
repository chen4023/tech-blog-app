import Link from 'next/link'
import { FeaturePostCard } from '../common/card/FeaturePostCard'

const articles = [
  {
    id: 1,
    title: "TypeScript로 확장 가능한 React 애플리케이션 구축하기",
    description: "TypeScript를 사용하여 대규모 React 애플리케이션을 구조화하고, 컴포넌트 아키텍처의 모범 사례, 유지 보수가 용이한 코드를 위한 고급 패턴을 배워보세요.",
    category: "React",
    readTime: "8분 읽기",
    date: "2024년 12월 15일",
    image: "/api/placeholder/400/200"
  },
  {
    id: 2,
    title: "CSS Grid 마스터하기: 기초부터 고급 레이아웃까지",
    description: "실용적인 예제, 반응형 디자인 패턴, 실제 세계의 레이아웃 솔루션을 통해 CSS Grid를 깊이 있게 배워보세요.",
    category: "CSS",
    readTime: "12분 읽기",
    date: "2024년 12월 12일",
    image: "/api/placeholder/400/200"
  },
  {
    id: 3,
    title: "현대 웹 애플리케이션을 위한 API 디자인 모범 사례",
    description: "RESTful API 디자인, 인증, 에러 관리, 문서화 전략을 통해 개발자 경험을 향상시키는 종합 가이드를 배워보세요.",
    category: "Backend",
    readTime: "15분 읽기",
    date: "2024년 12월 10일",
    image: "/api/placeholder/400/200"
  }
]

export default function FeaturedArticlesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Featured Posts
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            웹 개발, 프로그래밍 모범 사례, 기술 트렌드에 관한 최신 글을 만나보세요.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {articles.map((article) => (
            <FeaturePostCard
              key={article.id.toString()}
              href='/blog/1'
              image={article.image}
              category={article.category}
              readTime={article.readTime}
              title={article.title}
              description={article.description}
              date={article.date}
              ctaLabel='Read More'
            />
          ))}
        </div>
        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/articles"
            className="inline-flex items-center px-8 py-4 bg-slate-100 text-slate-700 rounded-lg font-medium text-lg hover:bg-slate-200 transition-colors border border-slate-200"
          >
            View All Posts
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div >
    </section >
  )
}
