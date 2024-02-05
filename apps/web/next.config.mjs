import createBundleAnalyzer from '@next/bundle-analyzer'
import process from 'node:process'

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},

  reactStrictMode: true,
}

export default withBundleAnalyzer(nextConfig)
