import path from 'node:path'
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

function r(relative: string) {
  return path.resolve(__dirname, relative || '')
}

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      collections: {
        custom: FileSystemIconLoader(r('./src/assets/icons'), svg => svg.replace('black', 'currentColor')),
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      primary: '#3e70f7',
      secondary: '#fffbf7',
      success: '#b0ffc2',
      info: '#b8daff',
      danger: '#ffb8b9',
      warning: '#feffbb',
    },
  },
  safelist: [],
  variants: [],
  shortcuts: {
    'border-base': 'border-1 border-solid border-b-3',
    'border-base-black': 'border-base border-black',
    'border-base-white': 'border-base border-white',

    'btn-primary': 'bg-primary text-white border-base-black',
  },
  rules: [
    ['font-sans', { 'font-family': '"HarmonyOS Sans SC", -apple-system, system-ui, ui-sans-serif' }],
    ['font-serif', { 'font-family': '"Noto Serif", "HarmonyOS Sans SC", serif' }],
  ],
})
