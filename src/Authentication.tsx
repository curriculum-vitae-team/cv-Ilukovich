import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { Header } from './components/Header'

export const Authentication = () => {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false)
  const changeUserStatus = () => {
    setIsAuthenticatedUser(prevState => !prevState)
    console.log(isAuthenticatedUser)
  }

  return (
    <React.Fragment>
      <Header isAuthenticatedUser={isAuthenticatedUser} />
      <Button variant="contained" onClick={changeUserStatus}>
        Change User Status{' '}
      </Button>
    </React.Fragment>
  )
}
