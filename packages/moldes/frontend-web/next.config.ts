import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@shared/contracts'],
  experimental: { typedRoutes: true },
  // PWA configured via next-pwa in a real project
};

export default nextConfig;
