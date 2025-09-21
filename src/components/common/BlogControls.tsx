import React from "react";
import ViewModeToggle, { ViewMode } from "./ViewModeToggle";
import SortDropdown, { SortOption } from "./SortDropdown";

interface BlogControlsProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  sortOptions?: SortOption[];
  className?: string;
}

export default function BlogControls({
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
  sortOptions,
  className = "",
}: BlogControlsProps) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* View Mode Toggle */}
      <ViewModeToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />

      {/* Sort Dropdown */}
      <SortDropdown
        value={sortBy}
        onChange={onSortChange}
        options={sortOptions}
      />
    </div>
  );
}
