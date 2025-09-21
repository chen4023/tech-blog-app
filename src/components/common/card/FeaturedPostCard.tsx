import React from "react";
import { SimplePostCard } from "./SimplePostCard";
import { mapFeaturedPostToCardProps } from "@/utils/featuredHelpers";

// Featured Article 데이터 타입 정의
type FeaturedPost = {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
};

interface FeaturedPostCardProps {
  post: FeaturedPost;
  className?: string;
}

/**
 * Featured Article 데이터를 직접 받아서 SimplePostCard로 렌더링하는 래퍼 컴포넌트
 * 더 간단한 사용법을 제공합니다.
 */
export function FeaturedPostCard({ post, className }: FeaturedPostCardProps) {
  const cardProps = mapFeaturedPostToCardProps(post);

  return (
    <SimplePostCard
      key={post.id.toString()}
      {...cardProps}
      className={className}
    />
  );
}
