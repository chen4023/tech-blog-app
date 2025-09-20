interface GradientBackgroundProps {
  variant?: 'hero' | 'section' | 'card' | 'custom'
  className?: string
  children?: React.ReactNode
}

const gradientVariants = {
  hero: 'bg-gradient-to-br from-pink-300/40 via-white/50 to-purple-50/30',
  section: 'bg-gradient-to-br from-pink-50/30 via-white/20 to-purple-50/20',
  card: 'bg-gradient-to-br from-pink-50/20 via-white/10 to-purple-50/10',
  custom: ''
}

export default function GradientBackground({
  variant = 'hero',
  className = '',
  children
}: GradientBackgroundProps) {
  const gradientClass = variant === 'custom' ? className : gradientVariants[variant]

  if (children) {
    return (
      <div className={`absolute inset-0 ${gradientClass}`}>
        {children}
      </div>
    )
  }

  return <div className={`absolute inset-0 ${gradientClass}`} />
}

// 프리셋 컴포넌트들
export function HeroGradient({ className = '' }: { className?: string }) {
  return <GradientBackground variant="hero" className={className} />
}

export function SectionGradient({ className = '' }: { className?: string }) {
  return <GradientBackground variant="section" className={className} />
}

export function CardGradient({ className = '' }: { className?: string }) {
  return <GradientBackground variant="card" className={className} />
}
