# SVG 아이콘 관리 (SVGR)

SVGR을 사용하여 SVG 파일을 React 컴포넌트로 변환하여 관리합니다.

## 설정 완료 사항

### 1. 패키지 설치

```bash
pnpm add -D @svgr/webpack
```

### 2. Next.js 설정

`next.config.ts`에서 SVGR webpack 설정이 추가되었습니다:

```typescript
webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  return config;
}
```

### 3. TypeScript 타입 정의

`src/types/svg.d.ts`에서 SVG 파일 import 타입이 정의되었습니다:

```typescript
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
```

## 사용 방법

### 방법 1: React 컴포넌트로 직접 작성 (권장)

```tsx
import { ArrowRightIcon, GridIcon, ListIcon, ChevronRightIcon } from '@/components/icons';

<ArrowRightIcon className="w-5 h-5" />
<GridIcon className="w-4 h-4" />
<ListIcon className="w-4 h-4" />
<ChevronRightIcon className="w-5 h-5" />
```

### 방법 2: 버튼에서 사용

```tsx
import { ArrowRightIcon } from "@/components/icons";

<button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
  <ArrowRightIcon className="w-4 h-4" />
  다음으로
</button>;
```

### 방법 3: 색상 제어

```tsx
// currentColor를 사용하여 부모 요소의 색상을 상속
<ArrowRightIcon className="w-5 h-5 text-blue-500" />
<GridIcon className="w-4 h-4 text-green-500" />
```

### 테스트 페이지

아이콘들이 제대로 작동하는지 확인하려면 `/test-icons` 페이지를 방문하세요.

## 장점

1. **타입 안전성**: TypeScript로 SVG props 타입 체크
2. **재사용성**: 컴포넌트로 만들어서 여러 곳에서 사용 가능
3. **일관성**: 동일한 아이콘을 여러 곳에서 사용할 때 일관된 스타일
4. **최적화**: SVGR이 SVG를 최적화하여 번들 크기 감소
5. **접근성**: className, aria-label 등 React props로 접근성 속성 추가 가능

## 주의사항

- 개발 서버 재시작 후 SVGR 설정이 적용됩니다
- SVG 파일을 수정한 후에는 개발 서버 재시작이 필요할 수 있습니다
- SVG 파일의 `fill="currentColor"` 속성을 사용하면 CSS로 색상 제어 가능합니다

## 예시

### 이전 (인라인 SVG)

```tsx
<button>
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
</button>
```

### 개선 후 (SVGR 컴포넌트)

```tsx
<button>
  <ArrowRightIcon className="w-4 h-4" />
</button>
```
