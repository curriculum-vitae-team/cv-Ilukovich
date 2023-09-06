import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AppLayoutAuth } from './components/Layout/AppLayoutAuth'

export const AuthenticatedWrapper = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayoutAuth />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <AuthenticatedHeader />
      <Outlet /> */}
    </>
  )
}
