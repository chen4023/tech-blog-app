import dynamic from 'next/dynamic'
import HeroSection from '@/components/home/HeroSection'
import {
  FeaturedArticlesSkeleton,
  CategoriesSkeleton,
  NewsletterSkeleton
} from '@/components/common'

// 동적 import로 지연 로딩
const FeaturedArticlesSection = dynamic(
  () => import('@/components/home/FeaturedArticlesSection'),
  {
    loading: () => <FeaturedArticlesSkeleton />
  }
)

const CategoriesSection = dynamic(
  () => import('@/components/home/CategoriesSection'),
  {
    loading: () => <CategoriesSkeleton />
  }
)

const NewsletterSection = dynamic(
  () => import('@/components/home/NewsletterSection'),
  {
    loading: () => <NewsletterSkeleton />
  }
)

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeaturedArticlesSection />
      <CategoriesSection />
      <NewsletterSection />
    </main>
  )
}