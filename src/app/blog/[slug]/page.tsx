'use client'

import { useState } from 'react'
import ArticleHeader from '@/components/blog/ArticleHeader'
import ArticleContent from '@/components/blog/ArticleContent'
import SidebarTOC from '@/components/blog/SidebarTOC'
import AuthorCard from '@/components/blog/AuthorCard'
import RelatedArticles from '@/components/blog/RelatedArticles'
import CommentsSection from '@/components/blog/CommentsSection'

// Sample article data
const articleData = {
  id: 1,
  title: "Building Scalable React Applications with TypeScript: A Complete Guide",
  description: "Learn advanced patterns, best practices, and architecture decisions for large-scale React applications",
  category: "React",
  readTime: "12 min read",
  date: "December 15, 2024",
  author: {
    name: "Sarah Chen",
    avatar: "/avatars/sarah.jpg",
    bio: "Senior Frontend Engineer at TechCorp with 8+ years experience in React and TypeScript. Passionate about clean code and developer experience.",
    social: {
      twitter: "https://twitter.com/sarahchen",
      github: "https://github.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen"
    }
  },
  stats: {
    views: 2847,
    likes: 23,
    comments: 156
  },
  tags: ["#React", "#TypeScript", "#Architecture", "#Scalability", "#Best Practices"],
  image: "/api/placeholder/752/423",
  content: `
    <h2>Introduction</h2>
    <p>Building scalable React applications with TypeScript requires careful planning, thoughtful architecture, and adherence to best practices. In this comprehensive guide, we'll explore proven patterns and strategies that will help you create maintainable, performant, and developer-friendly applications.</p>
    
    <p>Whether you're starting a new project or refactoring an existing one, the principles and techniques covered in this article will provide you with a solid foundation for building applications that can grow with your team and requirements.</p>

    <h2>Project Structure</h2>
    <p>A well-organized project structure is the foundation of any scalable application. It should be intuitive, consistent, and make it easy for developers to find what they're looking for.</p>

    <h3>Folder Organization</h3>
    <p>Here's a recommended folder structure for large React applications:</p>

    <div class="code-block">
      <div class="code-header">
        <span>Project Structure</span>
        <button class="copy-btn">Copy</button>
      </div>
      <pre><code>src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components
│   └── feature/      # Feature-specific components
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
├── services/         # API services
├── store/            # State management
├── pages/            # Page components
└── constants/        # Application constants</code></pre>
    </div>

    <p>This structure separates concerns clearly and makes it easy to locate specific functionality. The <code>components</code> folder is further divided into subcategories based on their purpose.</p>

    <h3>File Naming Conventions</h3>
    <p>Consistent naming conventions are crucial for maintainability:</p>
    <ul>
      <li><strong>Components:</strong> Use PascalCase (e.g., <code>UserProfile.tsx</code>)</li>
      <li><strong>Hooks:</strong> Start with "use" (e.g., <code>useAuth.ts</code>)</li>
      <li><strong>Utils:</strong> Use camelCase (e.g., <code>formatDate.ts</code>)</li>
      <li><strong>Types:</strong> Use PascalCase with descriptive names (e.g., <code>UserTypes.ts</code>)</li>
    </ul>

    <h2>TypeScript Configuration</h2>
    <p>Proper TypeScript configuration is essential for catching errors early and improving developer experience.</p>

    <h3>Enabling Strict Mode</h3>
    <p>Always enable strict mode in your <code>tsconfig.json</code>:</p>

    <div class="code-block">
      <div class="code-header">
        <span>tsconfig.json</span>
        <button class="copy-btn">Copy</button>
      </div>
      <pre><code>{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}</code></pre>
    </div>

    <h3>Path Mapping</h3>
    <p>Configure path mapping to avoid deep relative imports:</p>

    <div class="code-block">
      <div class="code-header">
        <span>Path Mapping Configuration</span>
        <button class="copy-btn">Copy</button>
      </div>
      <pre><code>{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@components/*": ["components/*"],
      "@hooks/*": ["hooks/*"],
      "@utils/*": ["utils/*"],
      "@types/*": ["types/*"]
    }
  }
}</code></pre>
    </div>

    <blockquote>
      <div class="quote-icon">💡</div>
      <div class="quote-content">
        <p><strong>Pro Tip</strong></p>
        <p>Use absolute imports with path mapping to make your imports cleaner and easier to refactor. Instead of <code>../../../components/Button</code>, you can use <code>@components/Button</code>.</p>
      </div>
    </blockquote>

    <h2>Component Patterns</h2>
    <p>Understanding and implementing proper component patterns is crucial for building reusable and maintainable components.</p>

    <h3>Compound Components</h3>
    <p>The compound component pattern allows you to create components that work together while maintaining a clean API:</p>

    <div class="step-guide">
      <h4>Step-by-step Implementation:</h4>
      
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h5>Create the Context</h5>
          <p>Set up a React context to share state between compound components.</p>
        </div>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h5>Build Sub-components</h5>
          <p>Create individual components that consume the shared context.</p>
        </div>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h5>Compose the API</h5>
          <p>Attach sub-components to the main component for a clean API.</p>
        </div>
      </div>
    </div>

    <h3>Render Props Pattern</h3>
    <p>The render props pattern provides a way to share code between components using a prop whose value is a function.</p>

    <h2>State Management</h2>
    <p>Choosing the right state management solution depends on your application's complexity and requirements.</p>

    <figure>
      <img src="/api/placeholder/752/423" alt="State management architecture showing data flow in a React application" />
      <figcaption>State management architecture showing data flow in a React application</figcaption>
    </figure>

    <h2>Testing Strategies</h2>
    <p>A comprehensive testing strategy ensures your application remains reliable as it grows.</p>

    <h2>Conclusion</h2>
    <p>Building scalable React applications with TypeScript requires thoughtful planning and adherence to best practices. By following the patterns and strategies outlined in this guide, you'll be well-equipped to create applications that can grow with your team and requirements.</p>

    <p>Remember that scalability isn't just about handling more users or data—it's also about maintaining code quality, developer productivity, and the ability to adapt to changing requirements over time.</p>
  `,
  relatedArticles: [
    {
      id: 2,
      title: "Advanced TypeScript Patterns for React Developers",
      readTime: "8 min read",
      image: "/api/placeholder/302/170"
    },
    {
      id: 3,
      title: "React Performance Optimization Techniques",
      readTime: "10 min read",
      image: "/api/placeholder/302/170"
    },
    {
      id: 4,
      title: "Modern React State Management Solutions",
      readTime: "15 min read",
      image: "/api/placeholder/302/170"
    }
  ],
  comments: [
    {
      id: 1,
      author: {
        name: "Mike Johnson",
        avatar: "/avatars/mike.jpg"
      },
      content: "Excellent article! The compound components pattern has really helped me organize my React code better. The step-by-step approach makes it easy to follow along.",
      date: "2 hours ago",
      likes: 12
    },
    {
      id: 2,
      author: {
        name: "Jessica Lee",
        avatar: "/avatars/jessica.jpg"
      },
      content: "Thanks for sharing this! I've been struggling with organizing larger React projects. The folder structure you proposed looks very clean and scalable.",
      date: "4 hours ago",
      likes: 8
    }
  ]
}

export default function BlogDetailPage() {
  const [activeSection, setActiveSection] = useState('introduction')

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-slate-600 hover:text-slate-900">Home</a>
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <a href="/blog" className="text-slate-600 hover:text-slate-900">Blog</a>
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-pink-500 font-medium">React</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ArticleHeader article={articleData} />
            <ArticleContent content={articleData.content} />
            <CommentsSection comments={articleData.comments} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <SidebarTOC
                sections={[
                  { id: 'introduction', title: 'Introduction' },
                  { id: 'project-structure', title: 'Project Structure' },
                  { id: 'folder-organization', title: 'Folder Organization' },
                  { id: 'file-naming', title: 'File Naming Conventions' },
                  { id: 'typescript-setup', title: 'TypeScript Configuration' },
                  { id: 'strict-mode', title: 'Enabling Strict Mode' },
                  { id: 'path-mapping', title: 'Path Mapping' },
                  { id: 'component-patterns', title: 'Component Patterns' },
                  { id: 'compound-components', title: 'Compound Components' },
                  { id: 'render-props', title: 'Render Props Pattern' },
                  { id: 'state-management', title: 'State Management' },
                  { id: 'testing-strategies', title: 'Testing Strategies' },
                  { id: 'conclusion', title: 'Conclusion' }
                ]}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
              <AuthorCard author={articleData.author} />
              <RelatedArticles articles={articleData.relatedArticles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
