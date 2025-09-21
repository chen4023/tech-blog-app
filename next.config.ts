import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack 설정 (개발 모드)
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  // Webpack 설정 (빌드 모드)
  webpack(config) {
    // SVG를 React 컴포넌트로 변환
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
