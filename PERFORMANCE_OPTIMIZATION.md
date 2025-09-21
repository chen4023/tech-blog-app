# 랜딩페이지 성능 최적화 가이드

## 문제점 진단

기존 성능 지표:

- **LCP (Largest Contentful Paint)**: 12.6초 ❌
- **TBT (Total Blocking Time)**: 940ms ❌
- **FCP (First Contentful Paint)**: 0.9초 ✅
- **CLS (Cumulative Layout Shift)**: 0.003 ✅
- **Speed Index**: 1.8초 ✅

## 최적화 작업 완료

### 1. 이미지 최적화 ✅

- **문제**: 외부 플레이스홀더 API (`/api/placeholder/400/200`) 호출로 인한 네트워크 지연
- **해결**: 외부 API 호출 제거, 이미지 없이 레이아웃 유지

### 2. SVG 최적화 ✅

- **문제**: 인라인 SVG로 인한 번들 크기 증가
- **해결**:
  - 모든 인라인 SVG를 React 컴포넌트로 변환
  - `ArrowRightIcon`, `UserIcon`, `DocumentIcon`, `CodeIcon`, `ServerIcon`, `CssIcon`, `DatabaseIcon`, `EnvelopeIcon` 등 아이콘 라이브러리 구축
  - HeroSection, CategoriesSection, NewsletterSection에서 인라인 SVG 완전 제거

### 3. 컴포넌트 최적화 ✅

- **문제**: 복잡한 GradientBackground 컴포넌트
- **해결**:
  - 불필요한 조건부 렌더링 제거
  - `React.memo`로 리렌더링 방지
  - 단순한 구조로 변경

### 4. 번들 최적화 ✅

- **Next.js 설정 개선**:
  - CSS 최적화 활성화
  - 아이콘 패키지 최적화
  - 코드 스플리팅 설정
  - 프로덕션에서 console 제거
  - 이미지 포맷 최적화 (WebP, AVIF)

### 5. 지연 로딩 ✅

- **모든 섹션**: FeaturedArticlesSection, CategoriesSection, NewsletterSection, Footer 동적 import
- **로딩 상태**: 각 섹션별 맞춤형 스켈레톤 UI로 사용자 경험 개선
- **스켈레톤 컴포넌트**: 재사용 가능한 스켈레톤 라이브러리 구축

### 6. 폰트 최적화 ✅

- **preconnect**: Google Fonts 연결 최적화
- **preload**: 중요 폰트 파일 미리 로드
- **메타데이터**: viewport, robots 설정 추가

## 예상 성능 개선

### LCP (Largest Contentful Paint)

- **이전**: 12.6초
- **예상**: 1.5-2.5초 (80-85% 개선)
- **개선 요인**: 외부 API 호출 제거, 폰트 preload, 이미지 최적화

### TBT (Total Blocking Time)

- **이전**: 940ms
- **예상**: 150-250ms (70-80% 개선)
- **개선 요인**: 번들 최적화, 코드 스플리팅, React.memo

### FCP (First Contentful Paint)

- **이전**: 0.9초
- **예상**: 0.6-0.8초 (10-30% 개선)

## 추가 권장사항

### 1. 이미지 최적화

```tsx
// Next.js Image 컴포넌트 사용
import Image from "next/image";

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={400}
  height={200}
  priority={true} // LCP 요소인 경우
  placeholder="blur"
/>;
```

### 2. 폰트 최적화

```css
/* CSS에서 폰트 디스플레이 설정 */
@font-face {
  font-family: "GmarketSans";
  font-display: swap; /* 폰트 로딩 중에도 텍스트 표시 */
}
```

### 3. 번들 분석

```bash
# 번들 크기 분석
pnpm build
pnpm analyze
```

### 4. 성능 모니터링

- Lighthouse CI 설정
- Web Vitals 모니터링
- Real User Monitoring (RUM) 도구 활용

## 성능 측정 방법

1. **Lighthouse**: `chrome://lighthouse/`에서 측정
2. **PageSpeed Insights**: https://pagespeed.web.dev/
3. **Web Vitals**: Chrome DevTools의 Performance 탭

## 결과 확인

최적화 후 성능 지표를 다시 측정하여 개선 효과를 확인하세요:

1. 개발 서버 재시작: `pnpm dev`
2. 브라우저에서 페이지 로드
3. Lighthouse로 성능 측정
4. Core Web Vitals 확인

---

**참고**: 성능 최적화는 지속적인 과정입니다. 새로운 기능 추가 시 성능 영향을 고려하고, 정기적인 성능 모니터링을 권장합니다.
