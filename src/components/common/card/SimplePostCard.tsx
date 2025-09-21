import React from "react";
import { BaseCard } from "./BaseCard";
import EmptyImage from "../EmptyImage";
import { BasePostCardProps } from "./types";

type SimplePostCardProps = BasePostCardProps;

export function SimplePostCard({
  key,
  href,
  image,
  imageAlt,
  category,
  readTime,
  title,
  description,
  date,
  ctaLabel = "Read More",
  onClickCTA,
  className,
}: SimplePostCardProps) {
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
            {readTime && <span className="whitespace-nowrap">{readTime}</span>}
          </div>
        )}

        {/* Title & Description */}
        <h3 className="text-xl font-semibold text-slate-900 leading-snug">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-slate-600 text-sm">
            {description}
          </p>
        )}

        {/* Footer CTA */}
        <div className="mt-auto pt-6">
          <div className="flex justify-between items-center mt-auto mb-2">
            {date && <p className="text-slate-500 text-sm">{date}</p>}
            <span className={href ? "text-pink-500 text-sm font-medium inline-flex items-center gap-1" :
              "text-pink-500 text-sm font-medium inline-flex items-center gap-1 cursor-pointer"}
              onClick={!href ? onClickCTA : undefined}>
              {ctaLabel} <span aria-hidden>›</span>
            </span>
          </div>
        </div>
      </div>
    </BaseCard>
  );
}
