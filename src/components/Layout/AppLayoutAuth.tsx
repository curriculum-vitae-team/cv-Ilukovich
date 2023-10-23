import React from 'react'
import { Outlet } from 'react-router-dom'

import { AuthenticatedHeader } from '../Header/AuthenticatedHeader'
import { AuthBreadcrumbs } from '../Menu/AuthBreadcrumbs'

export const AppLayoutAuth: React.FC = () => {
  return (
    <>
      <AuthenticatedHeader />
      <AuthBreadcrumbs />
      <Outlet />
    </>
  )
}
