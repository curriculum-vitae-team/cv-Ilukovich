import React, { useState } from 'react'

import Button from '@mui/material/Button'

import { Header } from './components/Header/Header'

export const Authentication = () => {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(true)
  const changeUserStatus = () => {
    setIsAuthenticatedUser(prevState => !prevState)
  }

  return (
    <>
      <Header isAuthenticatedUser={isAuthenticatedUser} />
      <Button variant="contained" onClick={changeUserStatus}>
        Change User Status
      </Button>
    </>
  )
}
