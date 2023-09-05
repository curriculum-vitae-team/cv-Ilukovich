import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginForm } from './components/Forms/LoginForm'
import { SignUpForm } from './components/Forms/SignUpForm'
import { AppLayoutUnauth } from './components/Layout/AppLayoutUnauth'
import { AppRoutes } from './path'

interface UnAuthenticatedWrapper {
  setIsAuthenticatedUser: Function
}

export const UnauthenticatedWrapper: React.FC<UnAuthenticatedWrapper> = props => {
  const { setIsAuthenticatedUser } = props

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<AppLayoutUnauth setIsAuthenticatedUser={setIsAuthenticatedUser} />}
        >
          <Route index element={<Navigate to={AppRoutes.login} replace />} />
          <Route
            path={AppRoutes.login}
            element={<LoginForm setIsAuthenticatedUser={setIsAuthenticatedUser} />}
          />
          <Route path={AppRoutes.signup} element={<SignUpForm />} />
        </Route>
        <Route path="*" element={<Navigate to={AppRoutes.login} replace />} />
      </Routes>
    </>
  )
}
