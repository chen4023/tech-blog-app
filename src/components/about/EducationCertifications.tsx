interface EducationItemProps {
  degree: string
  institution: string
  period: string
  location: string
  gpa?: string
  coursework?: string[]
}

interface CertificationItemProps {
  title: string
  issuer: string
  issued: string
  validUntil?: string
  credentialId: string
  isLifetime?: boolean
}

function EducationItem({ degree, institution, period, location, gpa, coursework }: EducationItemProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
        <div className="flex-1">
          <h4 className="text-lg font-bold text-slate-900 mb-2">
            {degree}
          </h4>
          <p className="text-pink-500 font-bold text-base mb-2">
            {institution}
          </p>
          <div className="flex items-center space-x-4 text-sm text-slate-500">
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
        {gpa && (
          <span className="bg-pink-100 text-pink-500 px-3 py-1 rounded-lg text-sm font-bold mt-2 md:mt-0">
            {gpa}
          </span>
        )}
      </div>

      {coursework && (
        <div>
          <h5 className="font-bold text-slate-900 mb-4">Relevant Coursework:</h5>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course, index) => (
              <span
                key={index}
                className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-medium"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function CertificationItem({ title, issuer, issued, validUntil, credentialId, isLifetime = false }: CertificationItemProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex-1">
          <h4 className="text-lg font-bold text-slate-900 mb-2">
            {title}
          </h4>
          <p className="text-pink-500 font-bold text-base mb-2">
            {issuer}
          </p>
          <div className="flex items-center space-x-4 text-sm text-slate-500 mb-2">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Issued: {issued}</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm">
            Credential ID: {credentialId}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 ${
          isLifetime 
            ? 'bg-green-100 text-green-700' 
            : 'bg-green-100 text-green-700'
        }`}>
          {isLifetime ? 'Lifetime Valid' : `Valid until ${validUntil}`}
        </span>
      </div>
    </div>
  )
}

export default function EducationCertifications() {
  const education = {
    degree: "Bachelor of Computer Science",
    institution: "Korea University",
    period: "2017.03 - 2021.02",
    location: "Seoul, South Korea",
    gpa: "GPA: 3.8/4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Systems",
      "Software Engineering"
    ]
  }

  const certifications = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      issued: "2023.09",
      validUntil: "2026.09",
      credentialId: "AWS-CDA-12345"
    },
    {
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      issued: "2023.03",
      credentialId: "PSM-98765",
      isLifetime: true
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      issued: "2022.11",
      validUntil: "2025.11",
      credentialId: "META-RD-54321"
    }
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My educational background and professional certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Education</h3>
            <EducationItem {...education} />
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <CertificationItem key={index} {...cert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
