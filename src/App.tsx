import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material'

import { LoginForm } from './components/Forms/LoginForm'
import { SignUpForm } from './components/Forms/SignUpForm'
// import { UnauthenticatedHeader } from './components/Header/UnauthenticatedHeader'
import { AuthenticatedWrapper } from './AuthenticatedWrapper'
import { AppRoutes } from './path'
import { UnauthenticatedWrapper } from './UnauthenticatedWrapper'

export const App = () => {
  const token = localStorage.getItem('token') !== null ? localStorage.getItem('token') : ''

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
            <Route
              path="/"
              element={<span className="welcome_card"> Welcome to my CV project</span>}
            />
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

// <Route
//   path="/"
//   element={
//     <UnauthenticatedHeader activeTab={activeTab} setActiveTab={setActiveTab} />
//     // <Header
//     //   isAuthenticatedUser={isAuthenticatedUser}
//     //   activeTab={activeTab}
//     //   setActiveTab={setActiveTab}
//     // />
//   }
// >
//   <Route
//     path={AppRoutes.login}
//     element={<LoginForm setIsAuthenticatedUser={setIsAuthenticatedUser} />}
//   />
//   <Route path={AppRoutes.signup} element={<SignUpForm />} />
// </Route>
