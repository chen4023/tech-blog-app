# Common Components

재사용 가능한 공통 컴포넌트들입니다.

## 블로그 컨트롤 컴포넌트들

### ViewModeToggle

그리드/리스트 뷰 모드를 전환하는 토글 버튼 컴포넌트입니다.

```tsx
import { ViewModeToggle, ViewMode } from "@/components/common";

const [viewMode, setViewMode] = useState<ViewMode>("grid");

<ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />;
```

### SortDropdown

정렬 기준을 선택하는 드롭다운 컴포넌트입니다.

```tsx
import { SortDropdown, SortOption } from "@/components/common";

const [sortBy, setSortBy] = useState("Latest");

// 기본 옵션 사용
<SortDropdown value={sortBy} onChange={setSortBy} />;

// 커스텀 옵션 사용
const customOptions: SortOption[] = [
  { value: "recent", label: "최신순" },
  { value: "popular", label: "인기순" },
];

<SortDropdown
  value={sortBy}
  onChange={setSortBy}
  options={customOptions}
  placeholder="정렬 기준을 선택하세요"
/>;
```

### BlogControls

뷰 모드 토글과 정렬 드롭다운을 통합한 컴포넌트입니다.

```tsx
import { BlogControls, ViewMode } from "@/components/common";

const [viewMode, setViewMode] = useState<ViewMode>("grid");
const [sortBy, setSortBy] = useState("Latest");

<BlogControls
  viewMode={viewMode}
  onViewModeChange={setViewMode}
  sortBy={sortBy}
  onSortChange={setSortBy}
/>;
```

## 타입 정의

### ViewMode

```tsx
type ViewMode = "grid" | "list";
```

### SortOption

```tsx
type SortOption = {
  value: string;
  label: string;
};
```

## 특징

- **접근성**: 모든 버튼과 입력 요소에 적절한 `aria-label` 제공
- **타입 안전성**: TypeScript로 모든 props와 상태 타입 정의
- **재사용성**: 다양한 상황에서 사용할 수 있도록 유연한 props 제공
- **일관성**: 동일한 디자인 시스템과 스타일링 적용
