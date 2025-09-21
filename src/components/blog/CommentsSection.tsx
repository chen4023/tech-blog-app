'use client'

import { useState } from 'react'
import Image from "next/image"

interface CommentsSectionProps {
  comments: Array<{
    id: number
    author: {
      name: string
      avatar: string
    }
    content: string
    date: string
    likes: number
  }>
}

export default function CommentsSection({ comments }: CommentsSectionProps) {
  const [newComment, setNewComment] = useState('')

  return (
    <section className="border-t border-slate-200 pt-8 mt-12">
      <h3 className="text-2xl font-semibold text-slate-900 mb-8">Comments</h3>

      {/* Comment Form */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts on this article..."
              className="w-full h-32 p-4 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-slate-600 hover:text-slate-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2M6 6H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-2M6 6h12" />
                  </svg>
                  <span className="text-sm">Bold</span>
                </button>
                <button className="flex items-center space-x-1 text-slate-600 hover:text-slate-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-sm">Italic</span>
                </button>
                <button className="flex items-center space-x-1 text-slate-600 hover:text-slate-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="text-sm">Code</span>
                </button>
              </div>
              <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <Image
              src={comment.author.avatar}
              alt={comment.author.name}
              className="w-12 h-12 rounded-full object-cover"
              width={48}
              height={48}
            />
            <div className="flex-1">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-900">{comment.author.name}</h4>
                  <span className="text-sm text-slate-500">{comment.date}</span>
                </div>
                <p className="text-slate-700">{comment.content}</p>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center space-x-1 text-slate-600 hover:text-slate-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm">{comment.likes}</span>
                </button>
                <button className="text-slate-600 hover:text-slate-900 text-sm">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
