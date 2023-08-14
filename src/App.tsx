import React from 'react'

import { StyledEngineProvider } from '@mui/material'

import { Authentication } from './Authentication'

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Authentication />
    </StyledEngineProvider>
  )
}
