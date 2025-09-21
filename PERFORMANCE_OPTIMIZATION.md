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
- **해결**:
  - 모든 외부 API 호출 제거 (플레이스홀더 이미지, 아바타 이미지)
  - 이미지 없이 레이아웃 유지
  - 404 오류 완전 제거

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

### 7. Next.js 설정 최적화 ✅

- **viewport 분리**: metadata에서 viewport를 별도 export로 분리
- **404 오류 제거**: 모든 외부 이미지 리소스 제거
- **경고 해결**: Next.js 15 호환성 개선

### 8. 인터렉티브 UI/UX 개선 ✅

- **인터렉티브 배경**: 마우스 추적 그라디언트 오브, 떠다니는 파티클 효과
- **애니메이션 효과**: 페이드인, 스케일, 바운스 등 다양한 애니메이션
- **시각적 임팩트**: 첫 방문 시 "와 임팩트있다!" 느낌의 인터렉티브 배경
- **성능 최적화**: React.memo, 적절한 애니메이션 지연으로 부드러운 UX

### 9. Next.js 호환성 개선 ✅

- **Client Component 설정**: `"use client"` 지시어 추가로 React Hook 오류 해결
- **styled-jsx 최적화**: `global` → 로컬 스코프로 변경하여 성능 개선
- **CSS 최적화 조정**: critters 모듈 오류 해결을 위해 CSS 최적화 일시 비활성화
- **빌드 오류 해결**: 모든 컴포넌트가 정상적으로 컴파일되도록 수정

### 10. React Key Prop 경고 해결 ✅

- **Key Prop 분리**: mapping 함수에서 `key` prop을 제거하고 컴포넌트에서 직접 전달
- **타입 안전성**: `Omit<Props, 'key'>` 타입으로 key prop 제외
- **React 경고 해결**: "A props object containing a 'key' prop is being spread" 경고 완전 제거
- **Deprecated 경고 해결**: `experimental.turbo` → `turbopack` 설정으로 마이그레이션

### 11. 애니메이션 코드 구조화 ✅

- **애니메이션 라이브러리**: `/lib/animations.ts`로 애니메이션 설정과 유틸리티 중앙화
- **가독성 개선**: 컴포넌트 내부의 복잡한 CSS 키프레임 제거
- **재사용성**: 컴포넌트별 애니메이션 설정을 구조화된 객체로 관리
- **유지보수성**: 애니메이션 수정 시 한 곳에서만 관리 가능
- **타입 안전성**: TypeScript로 애니메이션 설정 타입 체크
- **styled-jsx 호환성**: 함수 호출 대신 템플릿 리터럴 사용으로 빌드 오류 해결

### 12. 리렌더링 최적화 ✅

- **컴포넌트 분리**: HeroSection의 각 요소를 개별 컴포넌트로 분리
- **React.memo**: 모든 하위 컴포넌트에 memo 적용으로 불필요한 리렌더링 방지
- **useMemo**: 애니메이션 스타일을 메모이제이션하여 재계산 방지
- **useCallback**: 마우스 이벤트 핸들러를 메모이제이션하여 참조 안정성 확보
- **성능 개선**: 애니메이션 실행 시 전체 컴포넌트 리렌더링 방지

### 13. Tailwind CSS v4 @theme 방식 도입 ✅

- **현대적 애니메이션 시스템**: Tailwind CSS v4의 @theme 디렉티브 사용
- **중앙화된 키프레임 관리**: globals.css에서 모든 애니메이션 키프레임 정의
- **타입 안전성**: TypeScript로 애니메이션 클래스 타입 체크
- **성능 최적화**: styled-jsx 제거로 런타임 오버헤드 감소
- **유지보수성**: CSS-in-JS 대신 순수 CSS로 더 나은 성능과 캐싱
- **확장성**: 새로운 애니메이션 추가가 용이한 구조

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
