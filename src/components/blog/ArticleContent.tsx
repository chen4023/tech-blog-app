'use client'

interface ArticleContentProps {
  content: string
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}
