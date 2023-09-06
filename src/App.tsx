import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { makeVar, useReactiveVar } from '@apollo/client'
import { StyledEngineProvider } from '@mui/material'

import { AuthenticatedWrapper } from './AuthenticatedWrapper'
import { UnauthenticatedWrapper } from './UnauthenticatedWrapper'

const accessToken = makeVar<string>(localStorage.getItem('token') || '')

export const setAccessToken = (token: string) => {
  accessToken(token)
  localStorage.setItem('token', accessToken())
}

export const App = () => {
  const isAuth = useReactiveVar(accessToken)

  return (
    <StyledEngineProvider injectFirst>
      <Routes>
        {isAuth ? (
          <Route path="*" element={<AuthenticatedWrapper />} />
        ) : (
          <Route path="*" element={<UnauthenticatedWrapper />} />
        )}
      </Routes>
    </StyledEngineProvider>
  )
}
