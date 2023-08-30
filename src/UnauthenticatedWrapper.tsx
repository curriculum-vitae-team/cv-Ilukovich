import React from 'react'
import { Outlet } from 'react-router-dom'

import { UnauthenticatedHeader } from './components/Header/UnauthenticatedHeader'

interface UnAuthenticatedWrapper {
  activeTab: Number
  setActiveTab: Function
  setIsAuthenticatedUser: Function
}

export const UnauthenticatedWrapper: React.FC<UnAuthenticatedWrapper> = props => {
  const { activeTab, setActiveTab } = props

  return (
    <>
      <UnauthenticatedHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <Outlet />
    </>
  )
}
