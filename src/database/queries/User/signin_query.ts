import { gql } from '@apollo/client'

export const signinQuery = gql`
  query Login($email: String!, $password: String!) {
    login(auth: { email: $email, password: $password }) {
      user {
        id
        email
        profile {
          full_name
        }
      }
      access_token
    }
  }
`
