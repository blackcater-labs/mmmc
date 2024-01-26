import { gql } from '@urql/core'

import { UserBasic } from '../user/fragement'
import { client } from '@/lib/urql'
import type { RegisterMutation, RegisterMutationVariables } from '@/types/gql'

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
