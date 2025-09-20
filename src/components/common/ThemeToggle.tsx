'use client'

import { useState, useEffect } from 'react'
import Button from './Button'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')

  useEffect(() => {
    // 시스템 테마 감지
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      if (theme === 'system') {
        updateTheme(mediaQuery.matches ? 'dark' : 'light')
      }
    }

    // 초기 테마 설정
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'system'
    setTheme(savedTheme)

    if (savedTheme === 'system') {
      updateTheme(mediaQuery.matches ? 'dark' : 'light')
    } else {
      updateTheme(savedTheme)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const updateTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement
    if (newTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    if (newTheme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      updateTheme(isDark ? 'dark' : 'light')
    } else {
      updateTheme(newTheme)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Button
        size="sm"
        variant="none"
        onClick={() => handleThemeChange('light')}
        className={theme === 'light' ? 'text-pink-primary' : 'text-slate-500'}
        title="라이트 모드"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </Button>

      <Button
        size="sm"
        variant="none"
        onClick={() => handleThemeChange('dark')}
        className={theme === 'dark' ? 'text-pink-primary' : 'text-slate-500'}
        title="다크 모드"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </Button>
    </div>
  )
}
