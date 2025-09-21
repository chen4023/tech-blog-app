/**
 * Tailwind CSS v4 @theme 방식으로 정의된 애니메이션 유틸리티
 * 컴포넌트별 애니메이션 설정과 헬퍼 함수들을 관리
 */

/**
 * Tailwind 애니메이션 클래스 매핑
 */
export const tailwindAnimations = {
  // 기본 애니메이션 클래스들
  fadeIn: "animate-fade-in",
  fadeOut: "animate-fade-out",
  slideIn: "animate-slide-in",
  slideOut: "animate-slide-out",
  slideInLeft: "animate-slide-in-left",
  slideOutLeft: "animate-slide-out-left",
  slideInRight: "animate-slide-in-right",
  slideOutRight: "animate-slide-out-right",
  fadeInUp: "animate-fade-in-up",
  fadeInScale: "animate-fade-in-scale",
  bounceIn: "animate-bounce-in",

  // 인터렉티브 애니메이션들
  float: "animate-float",
  sparkle: "animate-sparkle",
  wave: "animate-wave",
} as const;

/**
 * 애니메이션 유틸리티 함수들
 */
export const animationUtils = {
  // 애니메이션 지연 시간 생성
  getDelay: (index: number, baseDelay: number = 0.1) => `${index * baseDelay}s`,

  // 애니메이션 지속 시간 생성
  getDuration: (baseDuration: number, variation: number = 0.3) =>
    `${baseDuration + Math.random() * variation}s`,

  // 랜덤 애니메이션 지연
  getRandomDelay: (maxDelay: number = 2) => `${Math.random() * maxDelay}s`,

  // Tailwind 애니메이션 클래스와 지연 조합
  getAnimationWithDelay: (animationClass: string, delay: string = "0s") =>
    `${animationClass} delay-${delay.replace("s", "")}`,
} as const;

/**
 * 컴포넌트별 애니메이션 설정 (Tailwind 클래스 기반)
 */
export const componentAnimations = {
  // GradientBackground 관련 애니메이션
  gradientBackground: {
    floatOrb1: {
      animationClass: tailwindAnimations.float,
      delay: "delay-1000", // 1s
    },
    floatOrb2: {
      animationClass: tailwindAnimations.float,
      delay: "delay-2000", // 2s
      reverse: true,
    },
    sparkle: (index: number) => ({
      animationClass: tailwindAnimations.sparkle,
      delay: `delay-${(index * 400).toString()}`, // 0.4s * index
    }),
    wave: {
      animationClass: tailwindAnimations.wave,
    },
  },

  // HeroSection 관련 애니메이션
  heroSection: {
    badge: {
      animationClass: tailwindAnimations.fadeInUp,
      delay: "delay-0",
    },
    heading: {
      animationClass: tailwindAnimations.fadeInScale,
      delay: "delay-300",
    },
    description: {
      animationClass: tailwindAnimations.fadeInUp,
      delay: "delay-500",
    },
    buttons: {
      animationClass: tailwindAnimations.bounceIn,
      delay: "delay-700",
    },
  },
} as const;

/**
 * 애니메이션 타입 정의
 */
export type AnimationClass = keyof typeof tailwindAnimations;
export type ComponentAnimation = typeof componentAnimations;
