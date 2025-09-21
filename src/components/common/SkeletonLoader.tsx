interface SkeletonLoaderProps {
  className?: string;
}

/**
 * Featured Articles 섹션용 스켈레톤 로더
 */
export function FeaturedArticlesSkeleton({ className = "" }: SkeletonLoaderProps) {
  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="animate-pulse">
            {/* 헤더 */}
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-16"></div>

            {/* 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 rounded-lg p-6 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-20 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 범용 카드 스켈레톤 로더
 */
export function CardSkeleton({ className = "" }: SkeletonLoaderProps) {
  return (
    <div className={`bg-gray-100 rounded-lg p-6 animate-pulse ${className}`}>
      <div className="h-4 bg-gray-200 rounded w-20 mb-4"></div>
      <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-24"></div>
    </div>
  );
}

/**
 * 텍스트 라인 스켈레톤
 */
export function TextSkeleton({
  lines = 1,
  className = ""
}: SkeletonLoaderProps & { lines?: number }) {
  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-200 rounded animate-pulse ${i < lines - 1 ? "mb-2" : ""
            }`}
        ></div>
      ))}
    </div>
  );
}

/**
 * 버튼 스켈레톤
 */
export function ButtonSkeleton({ className = "" }: SkeletonLoaderProps) {
  return (
    <div className={`h-10 bg-gray-200 rounded-lg animate-pulse ${className}`}></div>
  );
}

/**
 * 카테고리 섹션용 스켈레톤 로더
 */
export function CategoriesSkeleton({ className = "" }: SkeletonLoaderProps) {
  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-80 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
        </div>

        {/* 카테고리 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 text-center animate-pulse">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-4"></div>
              <div className="h-5 bg-gray-200 rounded w-16 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * 뉴스레터 섹션용 스켈레톤 로더
 */
export function NewsletterSkeleton({ className = "" }: SkeletonLoaderProps) {
  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white border border-pink-200 rounded-lg p-12 text-center max-w-4xl mx-auto animate-pulse">
          {/* 아이콘 */}
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6"></div>

          {/* 제목 */}
          <div className="h-8 bg-gray-200 rounded w-80 mx-auto mb-4"></div>

          {/* 설명 */}
          <div className="space-y-2 mb-8">
            <div className="h-5 bg-gray-200 rounded w-full max-w-2xl mx-auto"></div>
            <div className="h-5 bg-gray-200 rounded w-3/4 max-w-2xl mx-auto"></div>
          </div>

          {/* 폼 */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
            <div className="flex-1 h-12 bg-gray-200 rounded-lg"></div>
            <div className="h-12 bg-gray-200 rounded-lg w-24"></div>
          </div>

          {/* 개인정보 보호 정책 */}
          <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticlesSkeleton;
