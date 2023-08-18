import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material'

import { LoginForm } from './components/Forms/LoginForm'
import { SignUpForm } from './components/Forms/SignUpForm'
import { Header } from './components/Header/Header'

export const App = () => {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  return (
    <StyledEngineProvider injectFirst>
      <Routes>
        <Route
          path="/"
          element={
            <Header
              isAuthenticatedUser={isAuthenticatedUser}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          }
        >
          <Route
            path="login"
            element={
              <LoginForm
                setIsAuthenticatedUser={setIsAuthenticatedUser}
                isAuthenticatedUser={isAuthenticatedUser}
              />
            }
          />
          <Route path="signup" element={<SignUpForm isAuthenticatedUser={isAuthenticatedUser} />} />
        </Route>
      </Routes>
    </StyledEngineProvider>
  )
}
