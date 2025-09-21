import { memo } from 'react'

// 간단한 HeroGradient 컴포넌트로 최적화
const GradientBackground = memo(function GradientBackground({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br from-pink-300/40 via-white/50 to-purple-50/30 ${className}`}
    />
  )
})

export default GradientBackground;