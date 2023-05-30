import { defineProject } from 'vitest/config'
import swc from 'unplugin-swc'

export default defineProject({
  plugins: [swc.vite()],
  esbuild: false,
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  test: {
    include: ['**\/*.{test,spec,e2e-test,e2e-spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
