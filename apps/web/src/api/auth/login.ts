import type { LoginMutation, LoginMutationVariables } from '@mmmc/lens'

import { graphql } from '@mmmc/lens'

import { client } from '~/lib/urql'

export async function login(input: LoginMutationVariables) {
  return await client.mutation<LoginMutation>(
    graphql('mutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    user {\n      ...UserBasic\n    }\n    access_token\n  }\n}'),
    input,
  ).toPromise()
}
