import { Client, cacheExchange, fetchExchange, ssrExchange } from '@urql/core'

export const client = new Client({
  url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
  exchanges: [
    cacheExchange,
    fetchExchange,
  ],
})
