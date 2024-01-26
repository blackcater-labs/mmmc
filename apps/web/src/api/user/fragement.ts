import { gql } from '@urql/core'

export const UserBasic = gql`
  fragment UserBasic on User {
    id
    name
    email
    role
    avatar
  }
`
