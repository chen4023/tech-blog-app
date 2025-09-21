'use client'

import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white border border-pink-200 rounded-lg p-12 text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            연락을 주고 싶으신가요?
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            최신 아티클, 튜토리얼, 기술 인사이트를 이메일로 받아보세요.
            <br />
            5,000명 이상의 개발자가 매주 구독하는 뉴스레터를 구독하세요.
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors">
              연락하기
            </button>
          </div>

          {/* Privacy Notice */}
          <p className="text-sm text-slate-500">
            스팸 메일 없음, 언제든 구독 취소 가능. 개인정보 보호정책이 적용됩니다.
          </p>
        </div>
      </div>
    </section>
  )
}
