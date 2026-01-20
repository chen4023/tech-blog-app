# TechBlog - Modern Developer Portfolio & Blog Platform

[사용해보기](https://tech-blog-app-six.vercel.app/)

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css)
![pnpm](https://img.shields.io/badge/pnpm-10.17.0-F69220?style=for-the-badge&logo=pnpm)

**A modern, responsive developer portfolio and tech blog built with Next.js 15, featuring analytics, contact forms, and a comprehensive design system.**

[Live Demo](https://your-demo-url.com) • [Documentation](#documentation) • [Design System](#design-system)

</div>

## 🚀 Features

### 📱 **Responsive Design**

- Mobile-first approach with breakpoints for all devices
- Optimized for Mobile (375px), Tablet (768px), and Desktop (1024px+)
- Touch-friendly interface and smooth animations

### 🎨 **Modern UI/UX**

- Clean, minimalist design with professional aesthetics
- Consistent design system with reusable components
- Dark mode support (planned)
- Accessibility compliant (WCAG AA standards)

### 📝 **Blog System**

- **Blog Listing Page**: Filterable articles with sidebar navigation
- **Blog Detail Page**: Rich article content with table of contents
- **Article Management**: Easy content creation and editing
- **Search & Filter**: Category and tag-based filtering
- **Pagination**: Smooth navigation through articles

### 📊 **Analytics Dashboard**

- **Visitor Statistics**: Real-time visitor tracking
- **Traffic Sources**: Detailed traffic source analysis
- **Device Analytics**: Mobile, tablet, desktop breakdown
- **Performance Metrics**: Page views, bounce rate, engagement
- **Monthly Goals**: Progress tracking and goal setting

### 👨‍💻 **Portfolio Pages**

- **About Page**: Professional profile with work experience
- **Featured Projects**: Showcase of key projects
- **Education & Certifications**: Academic and professional credentials
- **Achievements & Awards**: Recognition and accomplishments

### 📞 **Contact & Communication**

- **Contact Form**: Multi-field contact form with validation
- **FAQ Section**: Common questions and answers
- **Newsletter Signup**: Email subscription management
- **Social Links**: Professional social media integration

## 🛠️ Tech Stack

### **Frontend**

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with App Router
- **UI Library**: [React 19.1.0](https://react.dev/)
- **Language**: [TypeScript 5.9.2](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.1.13](https://tailwindcss.com/)
- **Icons**: Heroicons (via Tailwind)

### **Development Tools**

- **Package Manager**: [pnpm 10.17.0](https://pnpm.io/)
- **Linting**: [ESLint 9.36.0](https://eslint.org/)
- **Type Checking**: TypeScript compiler
- **Build Tool**: Next.js with Turbopack

### **Design System**

- **Color Palette**: Primary Yellow (#EAB308) and Pink (#EC4899)
- **Typography**: Inter font family with comprehensive scale
- **Spacing**: 8px grid system for consistent layouts
- **Components**: Reusable, accessible component library

## 📁 Project Structure

```
tech-blog-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── analytics/         # Analytics dashboard
│   │   ├── blog/              # Blog pages
│   │   │   ├── [slug]/       # Dynamic blog post pages
│   │   │   └── page.tsx       # Blog listing page
│   │   ├── contact/           # Contact page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── about/             # About page components
│   │   ├── analytics/         # Analytics components
│   │   ├── blog/              # Blog components
│   │   ├── common/            # Shared components
│   │   ├── contact/           # Contact page components
│   │   └── home/              # Home page components
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
├── .npmrc                     # pnpm configuration
├── pnpm-workspace.yaml        # pnpm workspace config
└── package.json               # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.0.0 or higher
- **pnpm**: 8.0.0 or higher

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/tech-blog-app.git
   cd tech-blog-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm preview      # Build and preview production build

# Code Quality
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript type checking

# Maintenance
pnpm clean        # Clean build artifacts and dependencies
```

## 🎨 Design System

### Color Palette

#### Primary Colors

- **Primary Yellow**: `#EAB308` - CTAs, accents, highlights
- **Primary Pink**: `#EC4899` - Alternative primary option
- **Hover States**: Darker variants for interactive elements

#### Neutral Colors

- **Gray 50**: `#F8FAFC` - Background light
- **Gray 100**: `#F1F5F9` - Background surfaces
- **Gray 200**: `#E2E8F0` - Borders, dividers
- **Gray 500**: `#64748B` - Secondary text, icons
- **Gray 700**: `#334155` - Body text
- **Gray 900**: `#0F172A` - Headings, primary text

### Typography

- **Font Family**: Inter (Primary), System UI (Fallback)
- **Scale**: Display (48px) → Caption (12px)
- **Weights**: Light (300) → Extrabold (800)
- **Line Heights**: Optimized for readability

### Spacing System

- **Grid**: 8px base unit
- **Scale**: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 80px, 96px
- **Layout**: 12-column grid (desktop), 8-column (tablet), 4-column (mobile)

## 📱 Pages Overview

### 🏠 **Home Page**

- Hero section with call-to-action
- Featured articles showcase
- Statistics and achievements
- Newsletter signup
- Testimonials and features

### 📝 **Blog System**

- **Listing Page**: Filterable article grid with sidebar
- **Detail Page**: Rich content with TOC, author info, related articles
- **Categories**: Technology, tutorials, insights, projects
- **Search**: Full-text search functionality

### 📊 **Analytics Dashboard**

- Visitor trends and statistics
- Traffic source analysis
- Device type breakdown
- Monthly goals and progress
- Recent activity feed

### 👨‍💻 **About Page**

- Professional profile and bio
- Work experience timeline
- Featured projects showcase
- Education and certifications
- Achievements and awards

### 📞 **Contact Page**

- Multi-field contact form
- Contact information
- FAQ section
- Newsletter subscription
- Social media links

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (optional)
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com

# Social Links (optional)
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/your-handle
```

### Tailwind Configuration

The project uses Tailwind CSS 4 with custom configuration:

- **Custom Colors**: Extended color palette
- **Typography**: Custom font families and scales
- **Components**: Pre-built component classes
- **Utilities**: Custom utility classes

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`
3. **Deploy** with automatic deployments on push

### Other Platforms

- **Netlify**: Use `pnpm build` and deploy `.next` folder
- **Railway**: Connect repository and configure build command
- **Docker**: Use provided Dockerfile for containerized deployment

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the established code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vercel** for the deployment platform
- **Figma** for the design system creation
- **Open Source Community** for inspiration and tools

## 📞 Support

If you have any questions or need help:

- **Create an issue** on GitHub
- **Contact**: [your-email@example.com](mailto:your-email@example.com)
- **Documentation**: [Project Wiki](https://github.com/your-username/tech-blog-app/wiki)

---

<div align="center">

**Built with ❤️ by [Your Name](https://github.com/your-username)**

[⭐ Star this repo](https://github.com/your-username/tech-blog-app) • [🐛 Report Bug](https://github.com/your-username/tech-blog-app/issues) • [💡 Request Feature](https://github.com/your-username/tech-blog-app/issues)

</div>
