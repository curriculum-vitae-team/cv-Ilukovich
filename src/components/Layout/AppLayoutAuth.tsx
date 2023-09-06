import React from 'react'
import { Outlet } from 'react-router-dom'

import { AuthenticatedHeader } from '../Header/AuthenticatedHeader'

export const AppLayoutAuth: React.FC = () => {
  return (
    <>
      <AuthenticatedHeader />
      <Outlet />
    </>
  )
}
