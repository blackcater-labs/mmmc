import { gql } from '@urql/core'

import { UserBasic } from '../user/fragement'
import { client } from '@/lib/urql'
import type { LoginMutation, LoginMutationVariables } from '@/types/gql'

export const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        ...UserBasic
      }
      access_token
    }
  }

  ${UserBasic}
`

export async function login(input: LoginMutationVariables) {
  return await client.mutation<LoginMutation>(loginMutation, input).toPromise()
}
