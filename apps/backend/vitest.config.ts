import { defineProject } from 'vitest/config'

export default defineProject({
  resolve: {
    alias: {
      '@': './src',
    },
  },
  test: {
    include: ['**\/*.{test,spec,e2e-test,e2e-spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
