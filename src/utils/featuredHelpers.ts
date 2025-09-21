import { BasePostCardProps } from "@/components/common/card/types";

// Featured Articles 데이터 타입 정의
type FeaturedPost = {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
};

// SimplePostCard Props 타입 정의
type SimplePostCardProps = BasePostCardProps;

/**
 * Featured Article 데이터를 SimplePostCard props로 변환하는 함수
 */
export function mapFeaturedPostToCardProps(
  post: FeaturedPost
): SimplePostCardProps {
  return {
    key: post.id.toString(),
    title: post.title,
    description: post.description,
    category: post.category,
    readTime: post.readTime,
    date: post.date,
    image: post.image,
    href: `/blog/${post.id}`,
    ctaLabel: "Read More",
  };
}

/**
 * 여러 Featured Article을 한 번에 변환하는 함수
 */
export function mapFeaturedPostsToCardProps(
  posts: FeaturedPost[]
): SimplePostCardProps[] {
  return posts.map(mapFeaturedPostToCardProps);
}
