import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import AboutHero from '@/components/about/AboutHero'
import WorkExperience from '@/components/about/WorkExperience'
import FeaturedProjects from '@/components/about/FeaturedProjects'
import EducationCertifications from '@/components/about/EducationCertifications'
import AchievementsAwards from '@/components/about/AchievementsAwards'
import AboutCTA from '@/components/about/AboutCTA'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <WorkExperience />
      <FeaturedProjects />
      <EducationCertifications />
      <AchievementsAwards />
      <AboutCTA />
      <Footer />
    </div>
  )
}
