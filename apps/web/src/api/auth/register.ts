import { gql } from '@urql/core'

import type { RegisterMutation, RegisterMutationVariables } from '~/types/gql'

import { client } from '~/lib/urql'

import { UserBasic } from '../user/fragement'

export const registerMutation = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      ...UserBasic
    }
  }

  ${UserBasic}
`

export async function register(input: RegisterMutationVariables) {
  return await client.mutation<RegisterMutation>(registerMutation, input).toPromise()
}
