import { defineConfig } from 'vite'
import ReactSWC from '@vitejs/plugin-react-swc'
import Inspect from 'vite-plugin-inspect'
import UnoCSS from 'unocss/vite'

const PORT = process.env.PORT ? Number.parseInt(process.env.PORT) : 5173
const PLATFORM = process.env.TAURI_PLATFORM?.toLowerCase()
const IS_DEBUG = !!process.env.TAURI_DEBUG

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), ReactSWC(), Inspect()],
  clearScreen: false,
  server: { port: PORT, strictPort: true },
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    target: PLATFORM ? (PLATFORM === 'windows' ? 'chrome105' : 'safari13') : 'modules',
    minify: !IS_DEBUG,
    sourcemap: IS_DEBUG,
  },
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  define: {
    __PLATFORM__: JSON.stringify(PLATFORM || 'browser'),
  },
})
