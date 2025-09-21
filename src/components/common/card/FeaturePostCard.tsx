// FeaturePostCard.tsx
import React from "react";
import { BaseCard } from "./BaseCard";
import EmptyImage from "../EmptyImage";

type Author = { name: string; avatarUrl?: string; sub?: string }; // ex) 날짜
type Stats = { views?: number; likes?: number; comments?: number };

type Size = "simple" | "detail"; // 두 가지만

export type FeaturePostCardProps = {
  key: string;
  size?: Size;
  href?: string;               // 카드 전체 링크 (있으면 <a>)
  image?: string;
  imageAlt?: string;
  category?: string;           // 좌측 뱃지
  readTime?: string;           // 우측 메타
  title: string;
  description?: string;
  tags?: string[];             // detail에서만 노출
  author?: Author;             // detail에서만 강조
  stats?: Stats;               // detail에서만 강조
  date?: string;               // simple/footer용 또는 author.sub 대용
  ctaLabel?: string;           // 버튼/링크 라벨
  onClickCTA?: () => void;     // 버튼형 CTA가 필요할 때만
  className?: string;
};

export function FeaturePostCard({
  key,
  size = "simple",
  href,
  image,
  imageAlt,
  category,
  readTime,
  title,
  description,
  tags,
  author,
  stats,
  date,
  ctaLabel = size === "detail" ? "Read Article" : "Read More",
  onClickCTA,
  className,
}: FeaturePostCardProps) {
  const isDetail = size === "detail";

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
        // <div className="w-full aspect-[16/9] bg-slate-100">
        //   <img src={image} alt={imageAlt ?? title} className="w-full h-full object-cover" />
        // </div>
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
            {readTime && <span className="whitespace-nowrap">{isDetail ? `⏱ ${readTime}` : readTime}</span>}
          </div>
        )}

        {/* Title & Description */}
        <h3 className="text-xl font-semibold text-slate-900 leading-snug">
          {title}
        </h3>
        {description && (
          <p className={`mt-2 text-slate-600 text-sm ${isDetail ? "line-clamp-3" : ""}`}>
            {description}
          </p>
        )}

        {/* Tags (detail 전용) */}
        {isDetail && tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded-md text-xs bg-slate-100 text-slate-700">
                #{t}
              </span>
            ))}
          </div>
        ) : null}

        {/* Divider + Author/Stats (detail 전용) */}
        {isDetail && (author || stats) && (
          <>
            <hr className="my-4 border-slate-200" />
            <div className="pt-1 flex items-center justify-between text-sm text-slate-500">
              {/* author/date */}
              <div className="flex items-center gap-2">
                {author ? (
                  <>
                    {author.avatarUrl ? (
                      <img src={author.avatarUrl} alt={author.name} className="w-7 h-7 rounded-full" />
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
          {isDetail ? (
            <button
              type="button"
              onClick={onClickCTA}
              className={href ? "pointer-events-none w-full rounded-xl border border-slate-200 py-3 font-semibold" :
                "w-full rounded-xl border border-slate-200 py-3 font-semibold"}
            >
              {ctaLabel} <span aria-hidden>›</span>
            </button>
          ) : (
            <div className="flex justify-between items-center mt-auto mb-2">
              {date && <p className="text-slate-500 text-sm">{date}</p>}
              <span className={href ? "text-pink-500 text-sm font-medium inline-flex items-center gap-1" :
                "text-pink-500 text-sm font-medium inline-flex items-center gap-1 cursor-pointer"}
                onClick={!href ? onClickCTA : undefined}>
                {ctaLabel} <span aria-hidden>›</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </BaseCard>
  );
}