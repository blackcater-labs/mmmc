import process from 'node:process'
import createBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},

  reactStrictMode: true,

  output: 'export',

  // rewrites: async () => [
  //   {
  //     source: '/api/:path*',
  //     destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
  //   },
  // ],
}

export default withBundleAnalyzer(nextConfig)
