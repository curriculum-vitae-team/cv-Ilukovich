import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material'

import { LoginForm } from './components/Forms/LoginForm'
import { SignUpForm } from './components/Forms/SignUpForm'
import { AuthenticatedWrapper } from './AuthenticatedWrapper'
import { AppRoutes } from './path'
import { UnauthenticatedWrapper } from './UnauthenticatedWrapper'

export const App = () => {
  const token = localStorage.getItem('token') || ''

  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(token)
  const [activeTab, setActiveTab] = useState(0)

  return (
    <StyledEngineProvider injectFirst>
      <Routes>
        {isAuthenticatedUser ? (
          <Route path="/" element={<AuthenticatedWrapper />} />
        ) : (
          <Route
            path="/"
            element={
              <UnauthenticatedWrapper
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                setIsAuthenticatedUser={setIsAuthenticatedUser}
              />
            }
          >
            <Route path="/" element={<Navigate to={AppRoutes.login} replace={true} />} />
            <Route
              path={AppRoutes.login}
              element={<LoginForm setIsAuthenticatedUser={setIsAuthenticatedUser} />}
            />
            <Route path={AppRoutes.signup} element={<SignUpForm />} />
          </Route>
        )}
      </Routes>
    </StyledEngineProvider>
  )
}
