// 공통 타입 정의
export type Author = {
  name: string;
  avatarUrl?: string;
  sub?: string; // ex) 날짜
};

export type Stats = {
  views?: number;
  likes?: number;
  comments?: number;
};

// 공통 props 타입
export type BasePostCardProps = {
  key: string;
  href?: string; // 카드 전체 링크 (있으면 <a>)
  image?: string;
  imageAlt?: string;
  category?: string; // 좌측 뱃지
  readTime?: string; // 우측 메타
  title: string;
  description?: string;
  date?: string; // footer용 또는 author.sub 대용
  ctaLabel?: string; // 버튼/링크 라벨
  onClickCTA?: () => void; // 버튼형 CTA가 필요할 때만
  className?: string;
};
