import React from "react";

export type SortOption = {
  value: string;
  label: string;
};

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options?: SortOption[];
  className?: string;
  placeholder?: string;
}

const defaultOptions: SortOption[] = [
  { value: "Latest", label: "최신순" },
  { value: "Popular", label: "인기순" },
  { value: "Oldest", label: "오래된순" },
  { value: "Most Liked", label: "좋아요순" },
];

export default function SortDropdown({
  value,
  onChange,
  options = defaultOptions,
  className = "",
  placeholder = "정렬 기준을 선택하세요",
}: SortDropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${className}`}
      aria-label="정렬 기준 선택"
    >
      {!value && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
