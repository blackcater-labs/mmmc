import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    target: 'es2019',
    format: ['cjs', 'esm'],
    dts: true,
  },
  {
    entry: ['src/server.ts'],
    target: 'es2019',
    format: ['cjs', 'esm'],
    dts: true,
  },
])
