import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material'

import { AuthenticatedWrapper } from './AuthenticatedWrapper'
import { UnauthenticatedWrapper } from './UnauthenticatedWrapper'

export const App = () => {
  const token = Boolean(localStorage.getItem('token')) || ''

  const [isAuthenticatedUser] = useState(token)

  return (
    <StyledEngineProvider injectFirst>
      <Routes>
        {isAuthenticatedUser ? (
          <Route path="*" element={<AuthenticatedWrapper />} />
        ) : (
          <Route path="*" element={<UnauthenticatedWrapper />} />
        )}
      </Routes>
    </StyledEngineProvider>
  )
}
