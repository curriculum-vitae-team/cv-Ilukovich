import { gql } from '@apollo/client'

export const SIGNIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(auth: { email: $email, password: $password }) {
      user {
        id
      }
      access_token
    }
  }
`

export const SIGNUP_MUTATION = gql`
  mutation SignUp($email: String!, $password: String!) {
    signup(auth: { email: $email, password: $password }) {
      user {
        id
      }
      access_token
    }
  }
`
