import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginForm } from './components/Forms/LoginForm'
import { SignUpForm } from './components/Forms/SignUpForm'
import { AppLayoutUnauth } from './components/Layout/AppLayoutUnauth'
import { AppRoutes } from './path'

export const UnauthenticatedWrapper: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayoutUnauth />}>
          <Route index element={<Navigate to={AppRoutes.login} replace />} />
          <Route path={AppRoutes.login} element={<LoginForm />} />
          <Route path={AppRoutes.signup} element={<SignUpForm />} />
        </Route>
        <Route path="*" element={<Navigate to={AppRoutes.login} replace />} />
      </Routes>
    </>
  )
}
