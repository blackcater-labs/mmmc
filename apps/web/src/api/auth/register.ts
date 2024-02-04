import type { RegisterMutation, RegisterMutationVariables } from '@mmmc/lens'

import { graphql } from '@mmmc/lens'

import { client } from '~/lib/urql'

export async function register(input: RegisterMutationVariables) {
  return await client.mutation<RegisterMutation>(
    graphql('mutation Register($name: String!, $email: String!, $password: String!) {\n  register(name: $name, email: $email, password: $password) {\n    ...UserBasic\n  }\n}'),
    input,
  ).toPromise()
}
