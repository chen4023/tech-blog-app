'use client'

import { memo, useEffect, useState, useCallback } from 'react'
import { componentAnimations } from '@/lib/animations'

// 인터렉티브하고 임팩트 있는 Hero 배경
const GradientBackground = memo(function GradientBackground({ className = '' }: { className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    // 컴포넌트 마운트 시 애니메이션 시작
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // 마우스 이동 핸들러를 useCallback으로 메모이제이션
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }, [])

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* 기본 그라디언트 배경 */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-pink-300/40 via-white/50 to-purple-50/30 transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
      />

      {/* 마우스 추적 그라디언트 오브 */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-60 blur-3xl transition-all duration-500 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(168, 85, 247, 0.4) 50%, transparent 70%)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* 애니메이션 오브 1 */}
      <div
        className={`absolute w-80 h-80 rounded-full opacity-40 blur-2xl transition-all duration-1000 ${isLoaded
          ? `animate-pulse ${componentAnimations.gradientBackground.floatOrb1.animationClass} ${componentAnimations.gradientBackground.floatOrb1.delay}`
          : 'opacity-0'
          }`}
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 70%)',
          right: '20%',
          top: '30%'
        }}
      />

      {/* 애니메이션 오브 2 */}
      <div
        className={`absolute w-72 h-72 rounded-full opacity-30 blur-xl transition-all duration-1000 ${isLoaded
          ? `animate-pulse ${componentAnimations.gradientBackground.floatOrb2.animationClass} ${componentAnimations.gradientBackground.floatOrb2.delay}`
          : 'opacity-0'
          }`}
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
          left: '15%',
          bottom: '20%'
        }}
      />

      {/* 떠다니는 파티클 효과 */}
      <div className={`absolute inset-0 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-2000`}>
        {[...Array(8)].map((_, i) => {
          const sparkleAnimation = componentAnimations.gradientBackground.sparkle(i)
          return (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-pink-400/60 rounded-full ${isLoaded ? `${sparkleAnimation.animationClass} ${sparkleAnimation.delay}` : ''
                }`}
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + (i % 3) * 25}%`
              }}
            />
          )
        })}
      </div>

      {/* 웨이브 효과 */}
      <div
        className={`absolute inset-0 ${isLoaded
          ? `opacity-20 ${componentAnimations.gradientBackground.wave.animationClass}`
          : 'opacity-0'
          } transition-opacity duration-1500`}
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)'
        }}
      />
    </div>
  )
})

export default GradientBackground;