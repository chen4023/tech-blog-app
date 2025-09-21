import { GradientBackground } from '@/components/common'
import { Badge, Heading, Description, CTAButton, ButtonGroup } from '@/components/common/Text'
import { ArrowRightIcon, UserIcon } from '@/components/icons'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-24">
      {/* Background Image Placeholder */}
      <GradientBackground />

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
              href="/blog"
              variant="primary"
              icon={<ArrowRightIcon className="w-5 h-5" />}
            >
              블로그 보러가기
            </CTAButton>
            <CTAButton
              href="/about"
              variant="secondary"
              icon={<UserIcon className="w-5 h-5" />}
            >
              제가 궁금하신가요?
            </CTAButton>
          </ButtonGroup>
        </div>
      </div>
    </section>
  )
}