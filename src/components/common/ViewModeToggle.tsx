import { GridIcon, ListIcon } from "../icons";

type ViewMode = "grid" | "list";

interface ViewModeToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  className?: string;
}

export default function ViewModeToggle({
  viewMode,
  onViewModeChange,
  className = "",
}: ViewModeToggleProps) {
  return (
    <div className={`flex bg-slate-100 rounded-lg p-1 ${className}`}>
      <button
        onClick={() => onViewModeChange("grid")}
        className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-slate-200"
          }`}
        aria-label="그리드 뷰로 전환"
      >
        <GridIcon />
      </button>
      <button
        onClick={() => onViewModeChange("list")}
        className={`p-2 rounded-md transition-colors ${viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-slate-200"
          }`}
        aria-label="리스트 뷰로 전환"
      >
        <ListIcon />
      </button>
    </div>
  );
}

export type { ViewMode };
