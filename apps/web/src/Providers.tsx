import { ThemeProvider } from 'next-themes'
import { RouterProvider } from '@tanstack/react-router'

import { router } from './router'

export function Providers() {
  return (
    <ThemeProvider storageKey="krawl-ui-theme" attribute="class">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
