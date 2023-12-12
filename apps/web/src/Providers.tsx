import { ThemeProvider } from 'next-themes'
import { RouterProvider } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { router } from './router'

const queryClient = new QueryClient()

export function Providers() {
  return (
    <ThemeProvider storageKey="krawl-ui-theme" attribute="class">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
