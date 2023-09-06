import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { UnauthenticatedHeader } from '../Header/UnauthenticatedHeader'

export const AppLayoutUnauth: React.FC = () => {
  const currentPage = window.location.pathname

  const [activeTab, setActiveTab] = useState(() => {
    return currentPage === '/signup' ? 1 : 0
  })

  return (
    <>
      <UnauthenticatedHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <Outlet />
    </>
  )
}
