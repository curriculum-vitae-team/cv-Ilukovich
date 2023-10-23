import { gql } from '@apollo/client'

export const getProfile = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      profile {
        full_name
      }
    }
  }
`
