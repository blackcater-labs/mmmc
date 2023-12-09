import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  safelist: [
    'i-simple-icons:synology',
    'i-mdi:docker',
    'i-mdi:server',
    'i-mdi:table-cog',
  ],
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
