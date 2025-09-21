'use client'

import { useEffect, useState, memo } from 'react'
import { GradientBackground } from '@/components/common'
import { Badge, Heading, Description, CTAButton, ButtonGroup } from '@/components/common/Text'
import { ArrowRightIcon, UserIcon } from '@/components/icons'
import { componentAnimations } from '@/lib/animations'

// 최적화된 개별 컴포넌트들 (Tailwind 애니메이션 클래스 사용)
const HeroBadge = memo(function HeroBadge({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`transition-all duration-700 ${isVisible ? `opacity-100 ${componentAnimations.heroSection.badge.animationClass}` : 'opacity-0'}`}
    >
      <Badge className="mb-6">
        Welcome to TechBlog
      </Badge>
    </div>
  )
})

const HeroHeading = memo(function HeroHeading({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`transition-all duration-700 ${isVisible ? `opacity-100 ${componentAnimations.heroSection.heading.animationClass} ${componentAnimations.heroSection.heading.delay}` : 'opacity-0'}`}
    >
      <Heading level={2} className="mb-6" highlight="Share Knowledge">
        공부를 기록하는 공간입니다.
      </Heading>
    </div>
  )
})

const HeroDescription = memo(function HeroDescription({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`transition-all duration-700 ${isVisible ? `opacity-100 ${componentAnimations.heroSection.description.animationClass} ${componentAnimations.heroSection.description.delay}` : 'opacity-0'}`}
    >
      <Description className="mb-12 max-w-3xl mx-auto">
        작은 배움이라도 꼼꼼히 기록해 나가는<br />
        개발자의 성장을 돕는 기술 가이드를 작성합니다.
      </Description>
    </div>
  )
})

const HeroButtons = memo(function HeroButtons({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`transition-all duration-700 ${isVisible ? `opacity-100 ${componentAnimations.heroSection.buttons.animationClass} ${componentAnimations.heroSection.buttons.delay}` : 'opacity-0'}`}
    >
      <ButtonGroup>
        <CTAButton
          href="/blog"
          variant="primary"
          icon={<ArrowRightIcon className="w-5 h-5" />}
          className="transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        >
          블로그 보러가기
        </CTAButton>
        <CTAButton
          href="/about"
          variant="secondary"
          icon={<UserIcon className="w-5 h-5" />}
          className="transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        >
          제가 궁금하신가요?
        </CTAButton>
      </ButtonGroup>
    </div>
  )
})

const HeroContent = memo(function HeroContent({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <HeroBadge isVisible={isVisible} />
      <HeroHeading isVisible={isVisible} />
      <HeroDescription isVisible={isVisible} />
      <HeroButtons isVisible={isVisible} />
    </div>
  )
})

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])


  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-24 overflow-hidden">
      {/* 인터렉티브 배경 */}
      <GradientBackground />

      <div className="relative max-w-7xl mx-auto px-6">
        <HeroContent isVisible={isVisible} />
      </div>
    </section>
  )
}