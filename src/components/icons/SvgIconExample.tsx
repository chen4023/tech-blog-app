import React from "react";

interface ChevronRightIconProps {
  className?: string;
}

/**
 * ChevronRight 아이콘 컴포넌트
 * SVG를 React 컴포넌트로 직접 작성한 버전
 */
export function ChevronRightIcon({ className = "w-5 h-5" }: ChevronRightIconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5L15 12L9 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface SvgIconExampleProps {
  className?: string;
}

/**
 * SVGR 예시 컴포넌트
 * 실제로는 ChevronRightIcon 컴포넌트를 사용합니다.
 */
export function SvgIconExample({ className = "w-5 h-5" }: SvgIconExampleProps) {
  return (
    <div className="flex items-center gap-2">
      <span>SVGR 예시:</span>
      <ChevronRightIcon className={className} />
    </div>
  );
}
