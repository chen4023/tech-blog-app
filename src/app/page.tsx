import Header from '@/components/common/Header'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import FeaturedArticlesSection from '@/components/home/FeaturedArticlesSection'
import CategoriesSection from '@/components/home/CategoriesSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import Footer from '@/components/common/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturedArticlesSection />
      <CategoriesSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}