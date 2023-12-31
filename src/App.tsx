import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { makeVar, useReactiveVar } from '@apollo/client'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'

import { defaultTheme } from './themes/defaultTheme'
import { AuthenticatedWrapper } from './AuthenticatedWrapper'
import { LocalStorageItems } from './localStorageItemEnums'
import { UnauthenticatedWrapper } from './UnauthenticatedWrapper'

export const accessToken = makeVar<string>(localStorage.getItem('token') || '')

export const setAccessToken = (token: string) => {
  accessToken(token)
  localStorage.setItem(LocalStorageItems.Token, accessToken())
}

export const App = () => {
  const isAuth = useReactiveVar(accessToken)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          {isAuth ? (
            <Route path="*" element={<AuthenticatedWrapper />} />
          ) : (
            <Route path="*" element={<UnauthenticatedWrapper />} />
          )}
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
