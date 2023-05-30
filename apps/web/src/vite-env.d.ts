/// <reference types="vite/client" />

declare const __PLATFORM__: string

interface ImportMetaEnv {
  // readonly PLATFORM: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
