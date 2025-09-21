import { LocationIcon, LinkedInIcon, InstagramIcon, GitHubIcon } from '@/components/icons';
import { CTAButton } from '../common/Text';
import { GradientBackground } from '../common';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50/10 via-white to-purple-50/20 py-20 overflow-hidden">
      <GradientBackground />
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-44 h-44 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Your Name"
                className="w-full h-full object-cover"
                width={176}
                height={176}
                priority={true}
              />
            </div>
            {/* Online Status Indicator */}
            <div className="absolute bottom-1 right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            현채은
          </h1>
          <h2 className="text-2xl font-bold text-pink-500 mb-4">
            Frontend Developer
          </h2>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-slate-600 mb-6">
            <LocationIcon className="w-4 h-4" />
            <span>Seoul, South Korea</span>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              프론트엔드 개발자이지만, PM 감수성을 가지고 팀의 병목을 제거하고, <br />
              상황에 맞는 최선의 결정을 내려 프로젝트를 완주하는 것이 제 역할이라고 생각합니다.
            </p>
          </div>

          {/* Availability Status */}
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-6 py-3 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-medium">Available for new opportunities</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <a
              href="https://linkedin.com/in/hyeonchae-eun"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:bg-pink-50 hover:text-pink-600 transition-colors shadow-sm"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/hyeonchae_eun"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:bg-pink-50 hover:text-pink-600 transition-colors shadow-sm"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/hyeonchae-eun"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:bg-pink-50 hover:text-pink-600 transition-colors shadow-sm"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          </div>
          {/* Download Resume Button */}
          <CTAButton href="#" variant="primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Contact Me</span>
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
