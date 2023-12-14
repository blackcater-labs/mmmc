import { ThemeProvider } from 'next-themes'
import { RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider as StoreProvider } from 'jotai'

import { queryClient, router } from './router'

export function Providers() {
  return (
    <StoreProvider>
      <ThemeProvider storageKey="krawl-ui-theme" attribute="class">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </StoreProvider>
  )
}
