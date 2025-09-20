import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export default function Logo({
  size = 'md',
  showText = true,
  className = ''
}: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }

  const iconSizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  }

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} bg-pink-500 rounded-lg flex items-center justify-center`}>
        <div className={`${iconSizeClasses[size]} bg-white rounded-sm`}></div>
      </div>
      {showText && (
        <span className={`font-bold text-slate-900 ${textSizeClasses[size]}`}>
          TechBlog
        </span>
      )}
    </Link>
  )
}
