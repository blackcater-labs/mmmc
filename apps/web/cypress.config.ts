import { defineConfig } from 'cypress'
import viteConfig from './vite.config'

const PORT = process.env.PORT || 5173

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },

  e2e: {
    baseUrl: `http://localhost:${PORT}`,
  },
})
