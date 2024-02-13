import type { NextConfig } from 'next'

import createBundleAnalyzer from '@next/bundle-analyzer'
import process from 'node:process'

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },

  reactStrictMode: true,
}

export default withBundleAnalyzer(nextConfig)
