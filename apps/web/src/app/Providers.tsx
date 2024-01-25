'use client'

import { ThemeProvider } from 'next-themes'
import { Client, Provider as UrqlProvider, cacheExchange, fetchExchange } from 'urql'

const client = new Client({
  url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
  exchanges: [cacheExchange, fetchExchange],
  // fetchOptions: () => {
  //   const token = getAccessToken()
  //   return {
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //     },
  //   }
  // }
})

export interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <UrqlProvider value={client}>
        {children}
      </UrqlProvider>
    </ThemeProvider>
  )
}
