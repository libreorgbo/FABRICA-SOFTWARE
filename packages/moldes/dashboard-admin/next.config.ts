import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@shared/contracts'],
  experimental: { typedRoutes: true },
};

export default nextConfig;
