'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-slate-200 rounded-lg">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-lg">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-slate-600 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "How long does it take to get a response?",
      answer: "I typically respond to all inquiries within 24 hours. For urgent matters, you can mention it in your message and I'll prioritize your request."
    },
    {
      question: "Do you offer consulting services?",
      answer: "Yes! I provide consulting services for web development, technical architecture, and project planning. I'm happy to discuss your specific needs and how I can help."
    },
    {
      question: "Are you available for freelance work?",
      answer: "I'm currently open for freelance projects. I specialize in full-stack development, particularly with React, Node.js, and modern web technologies. Let's discuss your project requirements."
    },
    {
      question: "Can you help with my project?",
      answer: "I'd love to hear about your project! Whether it's a small website, a complex web application, or technical consulting, I'm here to help. Send me the details and I'll get back to you with how I can assist."
    },
    {
      question: "Do you accept guest posts?",
      answer: "Yes, I welcome guest posts from fellow developers and tech enthusiasts. Please send me your article idea and a brief outline, and I'll review it for potential publication on the blog."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-slate-600 mb-12">
          Quick answers to common questions about working together
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
