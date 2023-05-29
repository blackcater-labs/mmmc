import { defineConfig } from 'vite'
import ReactSWC from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5173
const PLATFORM = process.env.TAURI_PLATFORM
const IS_DEBUG = !!process.env.TAURI_DEBUG

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ReactSWC(), UnoCSS()],
  clearScreen: false,
  server: { port: PORT, strictPort: true },
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    target: PLATFORM ? (PLATFORM === 'windows' ? 'chrome105' : 'safari13') : 'modules',
    minify: !IS_DEBUG,
    sourcemap: IS_DEBUG,
  },
})
