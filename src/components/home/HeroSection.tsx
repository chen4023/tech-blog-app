'use client'

import Link from 'next/link'
import { HeroGradient } from '@/components/common/GradientBackground'
import { Badge, Heading, Description, CTAButton, ButtonGroup } from '@/components/common/Text'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-24">
      {/* Background Image Placeholder */}
      <HeroGradient />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Welcome Badge */}
          <Badge className="mb-6">
            Welcome to TechBlog
          </Badge>
          {/* Main Title */}
          <Heading level={2} className="mb-6" highlight="Share Knowledge">
            공부를 기록하는 공간입니다.
          </Heading>
          <Description className="mb-12 max-w-3xl mx-auto">
            작은 배움이라도 꼼꼼히 기록해 나가는<br />
            개발자의 성장을 돕는 기술 가이드를 작성합니다.
          </Description>
          <ButtonGroup>
            <CTAButton
              href="/articles"
              variant="primary"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              }
            >
              블로그 보러가기
            </CTAButton>
            <CTAButton
              href="/projects"
              variant="secondary"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              }
            >
              제가 궁금하신가요?
            </CTAButton>
          </ButtonGroup>
        </div>
      </div>
    </section>
  )
}