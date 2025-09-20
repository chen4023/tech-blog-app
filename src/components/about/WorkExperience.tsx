interface ExperienceItemProps {
  title: string
  company: string
  period: string
  location: string
  type: string
  achievements: string[]
  technologies: string[]
}

function ExperienceItem({ title, company, period, location, type, achievements, technologies }: ExperienceItemProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-8 relative">
      {/* Timeline indicator */}
      <div className="absolute -left-4 top-8 w-4 h-4 bg-pink-500 rounded-full border-4 border-white"></div>
      
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {title}
            </h3>
            <p className="text-pink-500 font-bold text-lg">
              {company}
            </p>
          </div>
          <div className="flex items-center space-x-4 text-sm text-slate-500 mt-2 md:mt-0">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{period}</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{location}</span>
            </div>
          </div>
        </div>
        <span className="inline-block bg-pink-100 text-pink-500 px-3 py-1 rounded-full text-sm font-medium">
          {type}
        </span>
      </div>

      {/* Key Achievements */}
      <div className="mb-6">
        <h4 className="font-bold text-slate-900 mb-4">Key Achievements:</h4>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
              <span className="text-slate-600">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies Used */}
      <div>
        <h4 className="font-bold text-slate-900 mb-4">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function WorkExperience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Company Name",
      period: "2023.01 - Present",
      location: "Seoul, South Korea",
      type: "Full-time",
      achievements: [
        "Led frontend development for e-commerce platform serving 10K+ users",
        "Improved page load speed by 40% through code optimization",
        "Implemented responsive design increasing mobile conversion by 25%",
        "Collaborated with 5-person cross-functional team using Agile methodology"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
    },
    {
      title: "Junior Frontend Developer",
      company: "Previous Company",
      period: "2021.06 - 2022.12",
      location: "Seoul, South Korea",
      type: "Full-time",
      achievements: [
        "Developed and maintained 15+ responsive web components",
        "Reduced code bundle size by 30% through optimization techniques",
        "Participated in code reviews and maintained 95% code quality standards",
        "Contributed to design system development used across 3 product teams"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Webpack", "Jest"]
    },
    {
      title: "Frontend Developer Intern",
      company: "Startup Inc.",
      period: "2021.01 - 2021.05",
      location: "Seoul, South Korea",
      type: "Internship",
      achievements: [
        "Built responsive landing pages with 98% cross-browser compatibility",
        "Implemented user authentication flow with JWT tokens",
        "Created interactive data visualizations using Chart.js",
        "Learned modern development workflows and best practices"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Chart.js"]
    }
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey and key achievements in software development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-pink-300/30"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="ml-16">
                <ExperienceItem {...experience} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
