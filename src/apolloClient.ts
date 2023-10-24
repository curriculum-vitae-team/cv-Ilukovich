import { ApolloClient, InMemoryCache, useReactiveVar } from '@apollo/client'

import { accessToken } from './App'

export const useClient = () => {
  const token = useReactiveVar(accessToken)

  return new ApolloClient({
    uri: 'https://cv-project-js.inno.ws/api/graphql',
    headers: {
      Authorization: `Bearer ${token}`
    },
    cache: new InMemoryCache()
  })
}
