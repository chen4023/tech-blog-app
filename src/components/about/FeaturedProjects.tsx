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
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Live Demo</span>
            </a>
          )}
          {sourceCode && (
            <a
              href={sourceCode}
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-700 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
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
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with React frontend and Node.js backend, featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      image: "/api/placeholder/560/240",
      featured: true,
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      image: "/api/placeholder/560/240",
      featured: true,
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, beautiful data visualizations, and responsive design for all devices.",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      image: "/api/placeholder/560/240",
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with modern animations, dark mode support, and optimized performance.",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      image: "/api/placeholder/560/240",
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
            A showcase of my recent work and personal projects with live demos and source code.
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
