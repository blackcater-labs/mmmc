import path from 'node:path'
import React from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [React(), Inspect()],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
