import { ExternalLinkIcon, CodeIcon } from '@/components/icons';
import Image from 'next/image';
interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
  featured?: boolean
  liveDemo?: string
  sourceCode?: string
}

function ProjectCard({ title, description, technologies, image, featured = false, liveDemo, sourceCode }: ProjectCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Project Image */}
      <div className="relative h-48 bg-slate-100">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          width={560}
          height={240}
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          {title}
        </h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-pink-100 text-pink-500 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {liveDemo && (
            <a
              href={liveDemo}
              className="flex items-center space-x-2 text-pink-500 hover:text-pink-600 font-medium"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          {sourceCode && (
            <a
              href={sourceCode}
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-700 font-medium"
            >
              <CodeIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function FeaturedProjects() {
  const projects = [
    {
      title: "블로그 서비스 제작",
      description: "Next.js 15 기반의 개인 블로그 플랫폼을 개발하였으며, 마크다운 에디터, 유효성 검사, 이메일 전송 등 사용자 중심 기능을 직접 구현하여 실전 개발 경험을 강화",
      technologies: ["Next.js", "tailwindcss", "TypeScript", "vercel"],
      image: "/api/placeholder/560/240",
      featured: true,
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      title: "📱 Instagram Clone 코딩",
      description: "Next.js 15 기반으로 Instagram 스타일의 SNS 기능을 구현한 개인 프로젝트입니다. 인증부터 백엔드 구현까지 풀스택 구조를 직접 구성하여 개발.",
      technologies: ["Next.js", "tailwindcss", "TypeScript", "SWR", "next-auth", "sanity", "vercel"],
      image: "/api/placeholder/560/240",
      featured: true,
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      title: "🐋 엑티온 (Acti-On)",
      description: "제주도에서 특별한 경험을 만들고 싶으신 분들에게 다양한 레저 예약 서비스를 제공해 드리는 웹 서비스.",
      technologies: ["React", "Typescript", "Tailwindcss", "Recoil", "HTML", "AWS(S3)"],
      image: "/api/placeholder/560/240",
      featured: true,
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      title: "🩻 닥터링 (drLink)",
      description: "지역 의료 격차 해소 플랫폼 '닥터링(Dr.Link)'.openvidu 라이브러리를 WebRTC 기반 실시간 협진 STT를 활용한 진료기록 자동화유캔사인 API를 활용한 전자서명 구현msw를 활용한 목업서버 구현",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      image: "/api/placeholder/560/240",
      featured: true,
      liveDemo: "#",
      sourceCode: "#"
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            제가 직접 만든 최근 프로젝트와 개인 작업들을, 실제 동작 데모와 코드로 확인하실 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
