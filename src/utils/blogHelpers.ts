import { BasePostCardProps } from "@/components/common/card/types";

// DetailPostCard Props 타입 정의
type DetailPostCardProps = BasePostCardProps & {
  tags?: string[];
  author?: { name: string; avatarUrl?: string; sub?: string };
  stats?: { views?: number; likes?: number; comments?: number };
};

// Mock 데이터 타입 정의
type MockArticle = {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  stats: {
    views: number;
    likes: number;
    comments: number;
  };
  tags: string[];
  image: string;
};

/**
 * Mock 블로그 데이터를 DetailPostCard props로 변환하는 함수
 */
export function mapArticleToCardProps(
  article: MockArticle
): DetailPostCardProps {
  return {
    key: article.id.toString(),
    title: article.title,
    description: article.description,
    category: article.category,
    readTime: article.readTime,
    date: article.date,
    tags: article.tags ?? [],
    image: article.image,
    author: {
      name: article.author.name,
      avatarUrl: article.author.avatar,
    },
    stats: article.stats,
    href: `/blog/${article.id}`,
    ctaLabel: "Read Post",
  };
}

/**
 * 여러 아티클을 한 번에 변환하는 함수
 */
export function mapArticlesToCardProps(
  articles: MockArticle[]
): DetailPostCardProps[] {
  return articles.map(mapArticleToCardProps);
}
