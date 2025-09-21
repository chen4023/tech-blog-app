import Link from 'next/link'
import { FeaturedPostCard } from '../common/card'
import { featuredPosts } from '@/mock/feature-post'
import { CTAButton, Heading } from '../common/Text'
import { ArrowRightIcon } from '../icons'


export default function FeaturedArticlesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level={3} className=" mb-3">Featured Posts</Heading>
          <Heading level={6} className="font-medium">
            웹 개발, 프로그래밍 모범 사례, 기술 트렌드에 관한 최신 글을 만나보세요.
          </Heading>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {featuredPosts.map((post) => (
            <FeaturedPostCard key={post.id} post={post} />
          ))}
        </div>
        {/* View All Button */}
        <div className="text-center">
          <CTAButton
            href="/blog"
            variant="secondary"
            icon={<ArrowRightIcon />}
          >
            View All Posts
          </CTAButton>
        </div >
      </div >
    </section >
  )
}
