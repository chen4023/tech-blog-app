import React, { ReactNode } from 'react'
import Link from 'next/link'
// Badge 컴포넌트
interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info'
  className?: string
}

export function Badge({
  children,
  variant = 'primary',
  className = ''
}: BadgeProps) {
  const variantClasses = {
    primary: 'bg-pink-50 border border-pink-200 text-pink-500',
    secondary: 'bg-slate-50 border border-slate-200 text-slate-600',
    success: 'bg-green-50 border border-green-200 text-green-600',
    warning: 'bg-yellow-50 border border-yellow-200 text-yellow-600',
    info: 'bg-blue-50 border border-blue-200 text-blue-600'
  }

  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  )
}

// Heading 컴포넌트
interface HeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  className?: string
  highlight?: string
}

export function Heading({
  children,
  level = 1,
  size,
  className = '',
  highlight
}: HeadingProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  }

  const defaultSizes = {
    1: 'text-5xl md:text-6xl',
    2: 'text-4xl md:text-5xl',
    3: 'text-3xl md:text-4xl',
    4: 'text-2xl md:text-3xl',
    5: 'text-xl md:text-2xl',
    6: 'text-lg md:text-xl'
  }

  const finalSize = size ? sizeClasses[size] : defaultSizes[level]
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements

  return (
    <Tag className={`font-bold text-slate-900 leading-tight ${finalSize} ${className}`}>
      {highlight ? (
        <>
          {children}
          <span className="block text-pink-500">{highlight}</span>
        </>
      ) : (
        children
      )}
    </Tag>
  )
}

// Description 컴포넌트
interface DescriptionProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Description({
  children,
  size = 'xl',
  className = ''
}: DescriptionProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  return (
    <p className={`text-slate-600 leading-relaxed ${sizeClasses[size]} ${className}`}>
      {children}
    </p>
  )
}

// CTA Button 컴포넌트
interface CTAButtonProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  className?: string
}

export function CTAButton({
  children,
  href,
  variant = 'primary',
  icon,
  className = ''
}: CTAButtonProps) {
  const variantClasses = {
    primary: 'bg-pink-500 text-white hover:bg-pink-600',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center px-8 py-4 rounded-lg font-medium text-lg transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
      {icon && <span className="ml-3">{icon}</span>}
    </Link>
  )
}

// Button Group 컴포넌트
interface ButtonGroupProps {
  children: ReactNode
  className?: string
}

export function ButtonGroup({
  children,
  className = ''
}: ButtonGroupProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
      {children}
    </div>
  )
}
