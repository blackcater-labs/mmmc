import process from 'node:process'
import createBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},

  reactStrictMode: true,

  rewrites: async () => [
    {
      source: '/api/graphql',
      destination: `${process.env.SERVER_URL}/api/graphql`,
    },
  ],
}

export default withBundleAnalyzer(nextConfig)
