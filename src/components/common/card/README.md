# Card Components

카드 컴포넌트들은 블로그 포스트를 표시하는 재사용 가능한 컴포넌트들입니다.

## 컴포넌트 목록

### BaseCard

모든 카드의 기본 구조를 제공하는 베이스 컴포넌트입니다.

### SimplePostCard

간단한 포스트 카드로, 기본적인 정보(제목, 설명, 카테고리, 날짜)만 표시합니다.

### DetailPostCard

상세한 포스트 카드로, 태그, 작성자 정보, 통계 등을 포함합니다.

### ArticleCard

Mock 데이터를 직접 받아서 DetailPostCard로 렌더링하는 래퍼 컴포넌트입니다. 더 간단한 사용법을 제공합니다.

### FeaturedArticleCard

Featured Article 데이터를 직접 받아서 SimplePostCard로 렌더링하는 래퍼 컴포넌트입니다. 홈페이지의 Featured Articles 섹션에서 사용됩니다.

## 사용 예시

### SimplePostCard

```tsx
import { SimplePostCard } from "../common/card";

<SimplePostCard
  key="1"
  href="/blog/1"
  image="/api/placeholder/400/200"
  category="React"
  readTime="8분 읽기"
  title="TypeScript로 확장 가능한 React 애플리케이션 구축하기"
  description="TypeScript를 사용하여 대규모 React 애플리케이션을 구조화하는 방법을 배워보세요."
  date="2024년 12월 15일"
  ctaLabel="Read More"
/>;
```

### DetailPostCard

```tsx
import { DetailPostCard } from "../common/card";

<DetailPostCard
  key="1"
  href="/blog/1"
  image="/api/placeholder/400/200"
  category="React"
  readTime="8분 읽기"
  title="TypeScript로 확장 가능한 React 애플리케이션 구축하기"
  description="TypeScript를 사용하여 대규모 React 애플리케이션을 구조화하는 방법을 배워보세요."
  tags={["TypeScript", "React", "Frontend"]}
  author={{
    name: "김개발",
    avatarUrl: "/avatar.jpg",
    sub: "2024년 12월 15일",
  }}
  stats={{
    views: 1250,
    likes: 45,
    comments: 12,
  }}
  ctaLabel="Read Article"
/>;
```

### ArticleCard

```tsx
import { ArticleCard } from "../common/card";

// Mock 데이터를 직접 전달
<ArticleCard article={mockArticle} />;
```

### FeaturedArticleCard

```tsx
import { FeaturedArticleCard } from "../common/card";

// Featured Article 데이터를 직접 전달
<FeaturedArticleCard article={featuredArticle} />;
```

## 타입 정의

### Author

```tsx
type Author = {
  name: string;
  avatarUrl?: string;
  sub?: string; // ex) 날짜
};
```

### Stats

```tsx
type Stats = {
  views?: number;
  likes?: number;
  comments?: number;
};
```
