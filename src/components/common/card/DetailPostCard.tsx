import React from "react";
import { BaseCard } from "./BaseCard";
import EmptyImage from "../EmptyImage";
import { BasePostCardProps, Author, Stats } from "./types";
import Image from "next/image";

type DetailPostCardProps = BasePostCardProps & {
  tags?: string[];             // detail에서만 노출
  author?: Author;             // detail에서만 강조
  stats?: Stats;               // detail에서만 강조
};

export function DetailPostCard({
  href,
  image,
  category,
  readTime,
  title,
  description,
  tags,
  author,
  stats,
  date,
  ctaLabel = "Read Article",
  onClickCTA,
  className,
}: DetailPostCardProps) {
  return (
    <BaseCard
      as={href ? "a" : "div"}
      href={href}
      clickable
      padded={false} // 상단 이미지와 본문 패딩을 나누기 위해 false
      className={className}
    >
      {/* Media */}
      {image && (
        <EmptyImage />
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta Row */}
        {(category || readTime) && (
          <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-2">
              {category && (
                <span className="px-2 py-0.5 rounded-full text-xs bg-pink-50 text-pink-600">
                  {category}
                </span>
              )}
            </div>
            {readTime && <span className="whitespace-nowrap">⏱ {readTime}</span>}
          </div>
        )}

        {/* Title & Description */}
        <h3 className="text-lg font-semibold text-slate-900 leading-snug">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-slate-600 text-sm line-clamp-3">
            {description}
          </p>
        )}

        {/* Tags */}
        {tags?.length && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-md text-xs bg-slate-100 text-slate-700">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Divider + Author/Stats */}
        {(author || stats) && (
          <>
            <hr className="my-4 border-slate-200" />
            <div className="pt-1 flex flex-col items-start gap-3 text-sm text-slate-500">
              {/* author/date */}
              <div className="flex items-center gap-2">
                {author ? (
                  <>
                    {author.avatarUrl ? (
                      <Image src={author.avatarUrl} alt={author.name} className="w-7 h-7 rounded-full" width={28} height={28} />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-fuchsia-200 flex items-center justify-center text-slate-700 text-sm">
                        {author.name.at(0)}
                      </div>
                    )}
                    <div className="leading-tight">
                      <div className="font-medium text-slate-800">{author.name}</div>
                      <div className="text-xs text-slate-500">{author.sub ?? date}</div>
                    </div>
                  </>
                ) : (
                  date && <span>{date}</span>
                )}
              </div>
              {/* stats */}
              <div className="flex items-center gap-4">
                {stats?.views != null && <span>👁 {stats.views.toLocaleString()}</span>}
                {stats?.likes != null && <span>♡ {stats.likes.toLocaleString()}</span>}
                {stats?.comments != null && <span>💬 {stats.comments.toLocaleString()}</span>}
              </div>
            </div>
          </>
        )}

        {/* Footer CTA */}
        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={onClickCTA}
            className={href ? "pointer-events-none w-full rounded-xl border border-slate-200 py-3 font-medium" :
              "w-full rounded-xl border border-slate-200 py-3 font-medium"}
          >
            {ctaLabel} <span aria-hidden>›</span>
          </button>
        </div>
      </div>
    </BaseCard>
  );
}
