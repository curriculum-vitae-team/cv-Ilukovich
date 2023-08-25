import React from 'react'
import { Button } from '@mui/material'

interface SigninButtonProps {
  textOfButton: string
}

export const SigninButton: React.FC<SigninButtonProps> = props => {
  const { textOfButton } = props

  return (
    <Button className="sing_in_button caps_title" type="submit" variant="contained">
      {textOfButton}
    </Button>
  )
}
