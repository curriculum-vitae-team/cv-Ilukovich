import { gql } from '@apollo/client'

export const signupMutation = gql`
  mutation SignUp($email: String!, $password: String!) {
    signup(auth: { email: $email, password: $password }) {
      user {
        id
      }
      access_token
    }
  }
`
