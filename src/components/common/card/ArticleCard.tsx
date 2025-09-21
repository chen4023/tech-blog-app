import React from "react";
import { DetailPostCard } from "./DetailPostCard";
import { mapArticleToCardProps } from "@/utils/blogHelpers";

// Mock 데이터 타입 정의 (blogHelpers와 동일)
type MockArticle = {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
  };
  stats: {
    views: number;
    likes: number;
    comments: number;
  };
  tags: string[];
};

interface ArticleCardProps {
  article: MockArticle;
  className?: string;
}

/**
 * Mock 데이터를 직접 받아서 DetailPostCard로 렌더링하는 래퍼 컴포넌트
 * 더 간단한 사용법을 제공합니다.
 */
export function ArticleCard({ article, className }: ArticleCardProps) {
  const cardProps = mapArticleToCardProps(article);

  return <DetailPostCard {...cardProps} className={className} />;
}
