import React from 'react'
import { Outlet } from 'react-router-dom'

import { AuthenticatedHeader } from './components/Header/AuthenticatedHeader'

export const AuthenticatedWrapper = () => {
  return (
    <>
      <AuthenticatedHeader />\
      <Outlet />
    </>
  )
}
