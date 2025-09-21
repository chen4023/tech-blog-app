import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 성능 최적화 설정
  experimental: {
    // optimizeCss: true, // CSS 최적화 비활성화 (critters 오류 해결)
    optimizePackageImports: ["@/components/icons"], // 아이콘 패키지 최적화
  },

  // Turbopack 설정 (deprecated 경고 해결)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // 컴파일러 최적화
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // 프로덕션에서 console 제거
  },

  // 이미지 최적화
  images: {
    formats: ["image/webp", "image/avif"], // 최신 이미지 포맷 사용
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30일 캐시
  },

  // Webpack 설정 (빌드 모드)
  webpack(config, { dev, isServer }) {
    // SVG를 React 컴포넌트로 변환
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // 프로덕션에서 번들 분석 및 최적화
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            enforce: true,
          },
        },
      };
    }

    return config;
  },
};

export default nextConfig;
