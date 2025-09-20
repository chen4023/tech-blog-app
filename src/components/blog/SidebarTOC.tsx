'use client'

interface SidebarTOCProps {
  sections: Array<{
    id: string
    title: string
  }>
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

export default function SidebarTOC({ sections, activeSection, onSectionChange }: SidebarTOCProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <h3 className="font-semibold text-slate-900 mb-4">Table of Contents</h3>
      <nav className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${activeSection === section.id
                ? 'bg-pink-50 text-pink-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
          >
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  )
}
