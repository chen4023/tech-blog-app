// src/lib/fonts.ts
import localFont from "next/font/local";

export const gmarketSans = localFont({
  src: [
    {
      path: "../../public/fonts/GmarketSansLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/GmarketSansMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GmarketSansBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gmarket-sans",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "sans-serif",
  ],
});
