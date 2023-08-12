import { gql } from '@apollo/client'

export interface User {
  email: string
  password: string
}

export const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(auth: { email: $email, password: $password }) {
      user {
        id
      }
    }
  }
`
