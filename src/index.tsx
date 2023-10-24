import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'

import { App } from './App'

import './assets/css/styles.css'

const token = `Bearer ${localStorage.getItem('token')}`

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://cv-project-js.inno.ws/api/graphql',
    headers: {
      Authorization: token
    }
  }),
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)
