import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler for performance optimization
  reactCompiler: true,

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Enable AVIF format for better compression
    formats: ['image/avif', 'image/webp'],
    // Responsive image sizes for optimal loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security and SEO headers
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         // Canonical headers for SEO
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'SAMEORIGIN',
  //         },
  //         {
  //           key: 'X-XSS-Protection',
  //           value: '1; mode=block',
  //         },
  //         // Content Security Policy
  //         {
  //           key: 'Content-Security-Policy',
  //           value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
  //         },
  //         // Referrer Policy for privacy
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'strict-origin-when-cross-origin',
  //         },
  //         // Enable compression for better performance (SEO factor)
  //         {
  //           key: 'Content-Encoding',
  //           value: 'gzip',
  //         },
  //       ],
  //     },
  //   ];
  // },

  // Rewrite rules for clean URLs


  // Optimize bundle size for faster page loads (SEO factor)
  // swcMinify: true,
  // compress: true,


};

export default nextConfig;
